import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PACKAGE_JSON_PATH = path.resolve(__dirname, '../package.json');
const DEFINITIONS_DIR = path.resolve(__dirname, '../src/definitions');
const OUTPUT_PATH = path.resolve(__dirname, '../docs/public/llms.txt');

// Load defaults from package.json
let defaults = {
    name: 'SenangStart CSS',
    description: '',
    license: 'MIT',
    homepage: ''
};

try {
    if (fs.existsSync(PACKAGE_JSON_PATH)) {
        const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
        if (pkg.name) defaults.name = pkg.name;
        if (pkg.description) defaults.description = pkg.description;
        if (pkg.license) defaults.license = pkg.license;
        if (pkg.homepage) defaults.homepage = pkg.homepage;
    }
} catch (e) {
    console.warn('Warning: Could not read package.json for defaults.');
}

function ask(question, defaultValue) {
    return new Promise((resolve) => {
        const prompt = defaultValue ? `${question} (${defaultValue}): ` : `${question}: `;
        rl.question(prompt, (answer) => {
            resolve(answer.trim() || defaultValue || '');
        });
    });
}

function formatDefinition(key, def) {
    let output = `## ${def.title || def.name || key}\n`;
    if (def.description) {
        output += `> ${def.description}\n`;
    }
    
    // Add Syntax/Usage if available
    if (def.syntax) {
        output += `\n**Syntax:** \`${def.syntax}\`\n`;
    }

    if (def.values && Array.isArray(def.values)) {
        output += `\n`;
        def.values.forEach(val => {
            let valDesc = val.description || '';
            // If CSS is present, maybe show it, or keep it high level? 
            // Tailwind example had: `bg-none`: Removes background image (`background-image: none;`).
            // Our values are like { value: 'none', css: '...', description: '...' }
            // The utility class is constructed via syntax, usually properties like `text:left` or `bg:primary`.
            // The 'value' field is just the suffix/argument.
            
            // Let's try to infer the full utility format if possible, or just list the value.
            // If syntax is visual="text:[alignment]", and value is 'left', then utility is text:left.
            
            let displayValue = val.value;
            // Attempt to contextualize the value based on syntax
            // e.g. syntax="visual="text:[alignment]"", value="left" -> text:left
            // This might be complex to regex universally, but let's try a simple approach if possible.
            // For now, just listing the value is safe.
             
            let line = `* \`${displayValue}\``;
            if (valDesc) line += `: ${valDesc}`;
            if (val.css && val.css.length < 50) line += ` (\`${val.css}\`)`; // only show if short
            
            output += `${line}\n`;
        });
    }
    output += `\n`;
    return output;
}

async function loadDefinitions() {
    const definitions = new Map();
    if (!fs.existsSync(DEFINITIONS_DIR)) return [];

    const files = fs.readdirSync(DEFINITIONS_DIR).filter(f => f.endsWith('.js'));
    
    for (const file of files) {
        try {
            const filePath = path.join(DEFINITIONS_DIR, file);
            const fileUrl = pathToFileURL(filePath).href;
            const module = await import(fileUrl);
            
            // Iterate over exports, skipping default if it's just a collection of others
            for (const [key, value] of Object.entries(module)) {
                if (key === 'default') continue;
                // Check if it looks like a definition (has name/property/values)
                if (value && value.name && value.property && Array.isArray(value.values)) {
                    // Use definition name as key to prevent duplicates from re-exports
                    // e.g. layout.js re-exports definition from layout-flex.js
                    const defName = value.name;
                    if (!definitions.has(defName)) {
                         definitions.set(defName, { key, ...value });
                    }
                }
            }
        } catch (e) {
            console.error(`Error loading definition ${file}:`, e);
        }
    }
    return Array.from(definitions.values());
}

const GUIDES_DIR = path.resolve(__dirname, '../docs/guide');

function loadGuides() {
    if (!fs.existsSync(GUIDES_DIR)) return '';
    
    // Priority order for guides
    const priorityFiles = [
        'index.md',
        'philosophy.md',
        'getting-started.md',
        'natural-scale.md',
        'tri-attribute.md'
    ];

    let output = '';
    const files = fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith('.md'));
    
    // Process priority files first
    priorityFiles.forEach(file => {
        if (files.includes(file)) {
            const content = fs.readFileSync(path.join(GUIDES_DIR, file), 'utf-8');
            output += `\n${content}\n`;
            // Remove from list so we don't process again
            const index = files.indexOf(file);
            if (index > -1) {
                files.splice(index, 1);
            }
        }
    });

    // Process remaining files (alphabetical order)
    files.sort().forEach(file => {
         const content = fs.readFileSync(path.join(GUIDES_DIR, file), 'utf-8');
         output += `\n${content}\n`;
    });

    return output;
}

async function generate() {
    console.log('Generating docs/public/llms.txt with references...\n');

    const skipPrompts = process.argv.includes('-y') || process.argv.includes('--yes');

    async function getVal(question, defaultVal) {
        if (skipPrompts) return defaultVal;
        return await ask(question, defaultVal);
    }

    const name = await getVal('Application Name', defaults.name);
    const description = await getVal('Description', defaults.description);
    const domain = await getVal('Primary Domain', defaults.homepage || 'https://senangstart.com'); 
    const docsUrls = await getVal('Documentation URLs (comma separated)', `${domain}/docs`);
    const apiEndpoints = await getVal('API Endpoints (comma separated)', '');
    const repo = await getVal('Source Code Repository', 'https://github.com/bookklik-technologies/senangstart-css'); 
    const email = await getVal('Contact Email', '');
    const license = await getVal('License', defaults.license);

    let content = `# ${name}\n`;
    content += `> ${description}\n\n`;

    if (docsUrls) {
        content += `## Docs\n`;
        docsUrls.split(',').map(url => url.trim()).forEach(url => {
            if (url) content += `- [Documentation](${url})\n`;
        });
        content += `\n`;
    }

    if (apiEndpoints) {
        content += `## API\n`;
        apiEndpoints.split(',').map(url => url.trim()).forEach(url => {
            if (url) content += `- [API Endpoint](${url})\n`;
        });
        content += `\n`;
    }

    if (repo) {
        content += `## Source\n`;
        content += `- [Repository](${repo})\n\n`;
    }

    if (email) {
        content += `## Contact\n`;
        content += `- [Email](mailto:${email})\n`;
    }

    // Append Guide Content
    console.log('Loading guides...');
    const guidesContent = loadGuides();
    if (guidesContent) {
        content += `\n# Documentation Guides\n${guidesContent}\n`;
    }

    // Load and Append Definitions
    const definitions = await loadDefinitions();
    if (definitions.length > 0) {
        content += `\n# Utility Definitions\n\n`;
        // Sort by name or category?
        definitions.sort((a, b) => (a.name || a.key).localeCompare(b.name || b.key));
        
        for (const def of definitions) {
            content += formatDefinition(def.key, def);
        }
    }

    // Ensure directory exists
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_PATH, content, 'utf-8');
    console.log(`\nSuccessfully generated ${OUTPUT_PATH}`);
    console.log(`Included guide content and ${definitions.length} utility definitions.`);
    // console.log('-----------------------------------');
    // console.log(content.substring(0, 500) + '...');
    // console.log('-----------------------------------');

    rl.close();
}

generate();
