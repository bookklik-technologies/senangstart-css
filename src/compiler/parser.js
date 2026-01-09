/**
 * SenangStart CSS - HTML/JSX Parser
 * Extracts layout, space, and visual attributes from source files
 */

// Regex patterns for attribute extraction
const ATTRIBUTE_PATTERNS = {
  layout: /layout\s*=\s*["']([^"']+)["']/g,
  space:  /space\s*=\s*["']([^"']+)["']/g,
  visual: /visual\s*=\s*["']([^"']+)["']/g
};

/**
 * Parse a source file and extract all SenangStart attributes
 * @param {string} content - File content to parse
 * @returns {Object} - Extracted attributes by type
 */
export function parseSource(content) {
  const results = {
    layout: new Set(),
    space: new Set(),
    visual: new Set()
  };

  for (const [attr, pattern] of Object.entries(ATTRIBUTE_PATTERNS)) {
    // Reset regex lastIndex for each new content
    pattern.lastIndex = 0;
    
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const value = match[1].trim();
      // Split by whitespace to get individual tokens
      value.split(/\s+/).forEach(token => {
        if (token) {
          results[attr].add(token);
        }
      });
    }
  }

  return results;
}

/**
 * Parse multiple source files
 * @param {Array<{path: string, content: string}>} files - Array of file objects
 * @returns {Object} - Combined extracted attributes
 */
export function parseMultipleSources(files) {
  const combined = {
    layout: new Set(),
    space: new Set(),
    visual: new Set()
  };

  for (const file of files) {
    const parsed = parseSource(file.content);
    
    parsed.layout.forEach(token => combined.layout.add(token));
    parsed.space.forEach(token => combined.space.add(token));
    parsed.visual.forEach(token => combined.visual.add(token));
  }

  return combined;
}

export default { parseSource, parseMultipleSources };
