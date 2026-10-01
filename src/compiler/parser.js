/**
 * SenangStart CSS - Source Parser
 *
 * Extracts layout / space / visual / interact / listens attribute tokens from
 * source files (HTML, JSX/TSX, Vue, Svelte, Astro, Blade, PHP, …).
 *
 * The heavy lifting lives in ./extractor/ – a tag-aware, boundary-aware,
 * linear-time scanner that understands framework bindings (`:layout`,
 * `layout={…}`), template interpolations ({{ }}, <?= ?>, ${}), and
 * `senang:` hint comments. See docs/guide/content-scanning.md.
 *
 * Return shape (unchanged, backward compatible):
 *   { layout: Set, space: Set, visual: Set, interact: Set, listens: Set }
 * plus NON-enumerable extras (safe for Object.entries() consumers):
 *   .locations    Map<"attrType:raw", Array<{file, line, column, source}>>
 *   .skipped      Array<{attrType, raw, reason, file, line, column, source}>
 *   .skippedTotal number
 *   .file         string|null
 */

import { extractSource, mergeResults } from './extractor/index.js';

/**
 * Parse a source file and extract all SenangStart attributes
 * @param {string} content - File content to parse
 * @param {{file?: string}} [options] - Optional metadata (file path is used for locations)
 * @returns {Object} - Extracted attributes by type
 */
export function parseSource(content, options = {}) {
  return extractSource(content, options);
}

/**
 * Parse multiple source files
 * @param {Array<{path: string, content: string}>} files - Array of file objects
 * @param {{classHelpers?: string[]}} [options] - Shared extraction options
 * @returns {Object} - Combined extracted attributes
 */
export function parseMultipleSources(files, options = {}) {
  const results = [];
  for (const file of files || []) {
    if (!file) continue;
    results.push(extractSource(file.content, { ...options, file: file.path ?? null }));
  }
  return mergeResults(results);
}

export default { parseSource, parseMultipleSources };
