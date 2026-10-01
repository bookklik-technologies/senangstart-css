/**
 * SenangStart CSS - Source content extractor
 *
 * extractSource(content, { file }) scans a source file for SenangStart
 * attributes and returns the same `{ layout, space, visual, interact, listens }`
 * Sets the parser has always returned, plus three NON-enumerable extras:
 *
 *   result.locations   Map<`${attrType}:${raw}`, Array<{file,line,column}>>
 *   result.skipped     Array<{attrType, raw, reason, file, line, column, source}>
 *                      (capped – see options.maxSkipped; result.skippedTotal has the real count)
 *   result.skippedTotal number
 *
 * They are non-enumerable on purpose: downstream code iterates the result with
 * Object.entries() and must only ever see the five attribute Sets.
 */

import { LIMITS } from '../../core/constants.js';
import { checkTokenShape } from './shape.js';
import { extractFromExpression, extractFromTemplatedString, DEFAULT_CLASS_HELPERS } from './expressions.js';
import { scanMarkup, scanHints, ATTRIBUTE_TYPES } from './scanner.js';
import { attrPrefix } from '../../core/constants.js';

const DEFAULT_MAX_SKIPPED = 500;
const DEFAULT_MAX_LOCATIONS_PER_TOKEN = 20;

/** Decode the handful of entities that show up inside attribute-bound expressions. */
function decodeEntities(value) {
  if (!value.includes('&')) return value;
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/** Lazily-built line index for offset → {line, column}. */
function createLineIndex(content) {
  let starts = null;
  return function locate(offset) {
    if (starts === null) {
      starts = [0];
      let k = -1;
      while ((k = content.indexOf('\n', k + 1)) !== -1) starts.push(k + 1);
    }
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= offset) lo = mid;
      else hi = mid - 1;
    }
    return { line: lo + 1, column: offset - starts[lo] + 1 };
  };
}

export function createEmptyResult() {
  const result = {};
  for (const type of ATTRIBUTE_TYPES) result[type] = new Set();
  return result;
}

function attachExtras(result, extras) {
  for (const [key, value] of Object.entries(extras)) {
    Object.defineProperty(result, key, { value, enumerable: false, writable: true, configurable: true });
  }
  return result;
}

/**
 * Extract SenangStart tokens from a source string.
 * @param {string} content
 * @param {{file?: string, maxSkipped?: number, maxLocationsPerToken?: number, classHelpers?: string[]}} [options]
 *   classHelpers – extra function names whose string arguments should be
 *   treated as token sources (defaults cover clsx/cn/classNames/cva/twMerge…).
 */
export function extractSource(content, options = {}) {
  if (typeof content !== 'string') content = (content === null || content === undefined) ? '' : String(content);

  const file = options.file ?? null;
  const maxSkipped = options.maxSkipped ?? DEFAULT_MAX_SKIPPED;
  const maxLocations = options.maxLocationsPerToken ?? DEFAULT_MAX_LOCATIONS_PER_TOKEN;
  const helpers = Array.isArray(options.classHelpers) && options.classHelpers.length > 0
    ? new Set([...DEFAULT_CLASS_HELPERS, ...options.classHelpers])
    : DEFAULT_CLASS_HELPERS;

  const result = createEmptyResult();
  // Per-type location maps (raw → [{file,line,column,source}]) – merged into the
  // public `${attrType}:${raw}` keyed Map at the end so the hot path avoids
  // string concatenation.
  const locationsByType = {};
  for (const type of ATTRIBUTE_TYPES) locationsByType[type] = new Map();
  const skipped = [];
  let skippedTotal = 0;
  const locate = createLineIndex(content);

  const handleAttribute = (attr) => {
    const { attrType, value, offset } = attr;
    const source = attr.source ?? 'attribute';
    const set = result[attrType];
    const locs = locationsByType[attrType];

    const recordSkip = (raw, reason) => {
      skippedTotal++;
      if (skipped.length < maxSkipped) {
        const pos = locate(offset);
        skipped.push({ attrType, raw, reason, file, line: pos.line, column: pos.column, source });
      }
    };

    const sink = {
      helpers,
      token(raw) {
        const reason = checkTokenShape(raw);
        if (reason) { recordSkip(raw, reason); return; }
        let list = locs.get(raw);
        if (!list) {
          set.add(raw);
          list = [];
          locs.set(raw, list);
        }
        if (list.length < maxLocations) {
          const pos = locate(offset);
          list.push({ file, line: pos.line, column: pos.column, source });
        }
      },
      skip: recordSkip
    };

    if (attr.valueKind === 'unterminated') {
      recordSkip(value.slice(0, 80) + (value.length > 80 ? '…' : ''), 'unterminated');
      return;
    }
    if (value.length > LIMITS.MAX_ATTRIBUTE_VALUE_LENGTH) {
      recordSkip(value.slice(0, 80) + '…', 'value-too-long');
      return;
    }

    if (attr.valueKind === 'expression') {
      extractFromExpression(value, sink);
    } else if (attr.binding === 'dynamic') {
      extractFromExpression(decodeEntities(value), sink);
    } else {
      extractFromTemplatedString(value, sink);
    }
  };

  const prefix = attrPrefix(options.prefix || '');
  scanMarkup(content, handleAttribute, prefix);
  scanHints(content, handleAttribute, prefix);

  const locations = new Map();
  for (const type of ATTRIBUTE_TYPES) {
    for (const [raw, list] of locationsByType[type]) locations.set(`${type}:${raw}`, list);
  }

  return attachExtras(result, { locations, skipped, skippedTotal, file });
}

/**
 * Merge several extraction results into one.
 * @param {Array<object>} results - Results from extractSource
 */
export function mergeResults(results, options = {}) {
  const maxSkipped = options.maxSkipped ?? DEFAULT_MAX_SKIPPED;
  const maxLocations = options.maxLocationsPerToken ?? DEFAULT_MAX_LOCATIONS_PER_TOKEN;

  const combined = createEmptyResult();
  const locations = new Map();
  const skipped = [];
  let skippedTotal = 0;

  for (const parsed of results) {
    for (const type of ATTRIBUTE_TYPES) {
      if (parsed[type]) parsed[type].forEach((token) => combined[type].add(token));
    }
    if (parsed.locations instanceof Map) {
      for (const [key, list] of parsed.locations) {
        let target = locations.get(key);
        if (!target) { target = []; locations.set(key, target); }
        for (const loc of list) {
          if (target.length >= maxLocations) break;
          target.push(loc);
        }
      }
    }
    if (Array.isArray(parsed.skipped)) {
      for (const entry of parsed.skipped) {
        if (skipped.length >= maxSkipped) break;
        skipped.push(entry);
      }
    }
    skippedTotal += parsed.skippedTotal ?? (parsed.skipped ? parsed.skipped.length : 0);
  }

  return attachExtras(combined, { locations, skipped, skippedTotal, file: null });
}

export { checkTokenShape } from './shape.js';
export { scanMarkup, scanHints, resolveAttributeName, ATTRIBUTE_TYPES } from './scanner.js';
export { extractFromExpression, extractFromTemplatedString, findBalanced, DEFAULT_CLASS_HELPERS } from './expressions.js';

export default { extractSource, mergeResults, createEmptyResult };
