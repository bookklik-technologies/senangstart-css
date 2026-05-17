/**
 * SenangStart CSS - HTML/JSX Parser
 * Extracts layout, space, and visual attributes from source files
 */

import { LIMITS } from '../core/constants.js';

/**
 * Create fresh regex patterns for each parse operation
 * Prevents regex state accumulation and potential memory leaks
 * Supports double-quoted, single-quoted, and unquoted attribute values
 */
function createAttributePatterns() {
  return {
    layout:  /layout\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/g,
    space:   /space\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/g,
    visual:  /visual\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/g,
    interact:/interact\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/g,
    listens: /listens\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/g
  };
}

/**
 * Parse a source file and extract all SenangStart attributes
 * @param {string} content - File content to parse
 * @returns {Object} - Extracted attributes by type
 */
export function parseSource(content) {
  const results = {
    layout: new Set(),
    space: new Set(),
    visual: new Set(),
    interact: new Set(),
    listens: new Set()
  };

  const patterns = createAttributePatterns();

  for (const [attr, pattern] of Object.entries(patterns)) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      let value = match[1].trim();
      // Strip surrounding quotes (double or single) if present
      if (value.length >= 2) {
        const firstChar = value[0];
        const lastChar = value[value.length - 1];
        if ((firstChar === '"' && lastChar === '"') || (firstChar === "'" && lastChar === "'")) {
          value = value.slice(1, -1);
        }
      }
      if (value.length > LIMITS.MAX_ATTRIBUTE_VALUE_LENGTH) {
        continue;
      }
      value.split(/\s+/).forEach(token => {
        if (token && token.length <= LIMITS.MAX_VALUE_LENGTH) {
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
    visual: new Set(),
    interact: new Set(),
    listens: new Set()
  };

  for (const file of files) {
    const parsed = parseSource(file.content);

    parsed.layout.forEach(token => combined.layout.add(token));
    parsed.space.forEach(token => combined.space.add(token));
    parsed.visual.forEach(token => combined.visual.add(token));
    parsed.interact.forEach(token => combined.interact.add(token));
    parsed.listens.forEach(token => combined.listens.add(token));
  }

  return combined;
}

export default { parseSource, parseMultipleSources };
