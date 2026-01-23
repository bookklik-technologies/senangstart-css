import fs from 'node:fs';
import path from 'node:path';

import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



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

function getGuideContent() {
    return `
# Framework Overview

SenangStart CSS is a utility-first framework that uses **Natural Adjectives** instead of abstract numbers.

## Core Philosophy
- **Natural Scale**: Sizes map to physical mental models (e.g., \`tiny\` = pebble/4px, \`medium\` = smartphone/16px, \`giant\` = door/64px).
- **Intent-First**: Describe *what* you want ("give it air" -> scale up), not pixels.
- **Tri-Attribute Syntax**: Separation of concerns into three attributes:
    1. \`layout\`: Structure & position (flex, grid, block, sticky).
    2. \`space\`: Sizing, padding, margin, gap.
    3. \`visual\`: Colors, typography, borders, shadows, effects.

## Syntax Reference

### 1. Layout Attribute
Controls internal flow and external positioning.
- **Flex**: \`layout="flex col center"\` (Flexbox, column direction, centered).
- **Grid**: \`layout="grid"\`
- **Position**: \`layout="absolute z:top"\`

### 2. Space Attribute
Controls dimensions and spacing using the Natural Scale.
- **Syntax**: \`[breakpoint]:[property]:[scale]\`
- **Properties**: \`p\` (padding), \`m\` (margin), \`g\` (gap), \`w\` (width), \`h\` (height).
- **Values**: 
    - \`none\` (0px)
    - \`thin\` (1px), \`regular\` (2px), \`thick\` (3px)
    - \`tiny\` (4px), \`tiny-2x\` (6px)
    - \`small\` (8px), \`small-2x\` (10px), \`small-3x\` (12px), \`small-4x\` (14px)
    - \`medium\` (16px), \`medium-2x\` (20px), \`medium-3x\` (24px), \`medium-4x\` (28px)
    - \`large\` (32px), \`large-2x\` (36px), \`large-3x\` (40px), \`large-4x\` (44px)
    - \`big\` (48px), \`big-2x\` (56px), \`big-3x\` (64px), \`big-4x\` (80px)
    - \`giant\` (96px), \`giant-2x\` (112px), \`giant-3x\` (128px), \`giant-4x\` (144px)
    - \`vast\` (160px), \`vast-2x\` (176px), \`vast-3x\` (192px), \`vast-4x\` (208px)
    - \`vast-5x\` (224px), \`vast-6x\` (240px), \`vast-7x\` (256px), \`vast-8x\` (288px)
    - \`vast-9x\` (320px), \`vast-10x\` (384px)
- **Arbitrary**: \`space="w:[350px]"\`

### 3. Visual Attribute
Controls appearance.
- **Colors**: \`bg:primary\`, \`text:white\`, \`border:grey\`.
- **Typography**: \`font:bold\`, \`text-size:big\`.
- **Effects**: \`rounded:medium\`, \`shadow:big\`, \`opacity:[0.5]\`.

## Modifiers

### Responsive Prefixes
Mobile-first breakpoints:
- (default): 0px+
- \`mob:\`: 480px+ ("Large Mobile")
- \`tab:\`: 768px+ ("Tablet")
- \`lap:\`: 1024px+ ("Laptop")
- \`desk:\`: 1280px+ ("Desktop")

Example: \`space="p:small tab:p:medium lap:p:big"\`

### State Prefixes
- \`hover:\`: \`visual="bg:primary hover:bg:primary-dark"\`
- \`focus:\`: \`visual="border:grey focus:border:brand"\`
- \`active:\`, \`disabled:\`, \`group-hover:\`
- \`dark:\`: \`visual="bg:white dark:bg:slate-900"\`

## Configuration
Use \`senangstart.config.js\` to override defaults.
\`\`\`js
export default {
  theme: {
    colors: { brand: '#8B5CF6' },
    spacing: { huge: '256px' }
  }
}
\`\`\`
`.trim();
}

async function generate() {
    console.log('Generating docs/public/llms.txt with references...\n');

    const name = defaults.name;
    const description = defaults.description;
    const domain = defaults.homepage || 'https://bookklik-technologies.github.io/senangstart-css';
    const docsUrls = `${domain}/guide`;
    const apiEndpoints = '';
    const repo = 'https://github.com/bookklik-technologies/senangstart-css';
    const email = '';
    const license = defaults.license;

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
    console.log('Adding curated guide content...');
    const guidesContent = getGuideContent();
    if (guidesContent) {
        content += `\n# Documentation Guides\n\n${guidesContent}\n`;
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


}

generate();
