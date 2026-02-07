/**
 * SenangStart CSS - Core Tokenizer
 * Pure tokenizer functions shared by JIT runtime and build-time compiler
 */

import { BREAKPOINTS, STATES, LAYOUT_KEYWORDS } from './constants.js';
import { sanitizeValue, batchProcessTokens } from '../utils/common.js';

/**
 * Sanitize token value to prevent CSS injection
 * @param {string} value - Value to sanitize
 * @returns {string} - Sanitized value
 */
export { sanitizeValue };

/**
 * Validate token structure
 * @param {Object} token - Token to validate
 * @returns {boolean} - True if valid
 */
export function isValidToken(token) {
  if (!token.property || typeof token.property !== 'string') {
    return false;
  }
  if (token.property.length > 100) {
    return false;
  }
  if (token.value !== null && typeof token.value !== 'string') {
    return false;
  }
  if (token.value && token.value.length > 500) {
    return false;
  }
  if (token.breakpoint && !BREAKPOINTS.includes(token.breakpoint)) {
    return false;
  }
  if (token.state && !STATES.includes(token.state)) {
    return false;
  }
  return true;
}



/**
 * Tokenize a single attribute value string
 * @param {string} raw - Raw token string (e.g., "tab:p:big")
 * @param {string} attrType - Attribute type: 'layout', 'space', or 'visual'
 * @returns {Object} - Parsed token object
 */
export function tokenize(raw, attrType) {
  // Validate input
  if (typeof raw !== 'string' || raw.length === 0 || raw.length > 200) {
    return {
      raw,
      breakpoint: null,
      state: null,
      property: null,
      value: null,
      isArbitrary: false,
      attrType,
      error: 'Invalid token format'
    };
  }

  const token = {
    raw,
    breakpoint: null,
    state: null,
    property: null,
    value: null,
    isArbitrary: false,
    attrType
  };

  // Handle layout keywords (simple words like 'flex', 'center')
  if (attrType === 'layout') {
    // Check for z-index syntax (z:top, z:base)
    if (raw.startsWith('z:')) {
      token.property = 'z';
      token.value = raw.substring(2);
      return token;
    }
    
    // Check for overflow syntax
    if (raw.startsWith('overflow:')) {
      token.property = 'overflow';
      token.value = raw.substring(9);
      return token;
    }
    
    // Simple layout keyword
    if (LAYOUT_KEYWORDS.includes(raw)) {
      token.property = raw;
      token.value = raw;
      return token;
    }
    
    // Check for responsive layout (e.g., tab:row)
    const parts = raw.split(':');
    if (parts.length === 2 && BREAKPOINTS.includes(parts[0])) {
      token.breakpoint = parts[0];
      token.property = parts[1];
      token.value = parts[1];
      return token;
    }
  }

  // Handle space and visual attributes with colon syntax
  const parts = raw.split(':');
  
  if (parts.length === 1) {
    // Single value (shouldn't happen for space/visual, but handle it)
    token.property = raw;
    token.value = raw;
    return token;
  }
  
  let idx = 0;
  
  // Check for breakpoint prefix
  if (BREAKPOINTS.includes(parts[0])) {
    token.breakpoint = parts[0];
    idx++;
  }
  
  // Check for state prefix
  if (STATES.includes(parts[idx])) {
    token.state = parts[idx];
    idx++;
  }
  
  // Property
  if (idx < parts.length) {
    token.property = parts[idx];
    idx++;
  }
  
  // Value
  if (idx < parts.length) {
    let value = parts.slice(idx).join(':');

    // Check for arbitrary value in brackets
    const arbitraryMatch = value.match(/^\[(.+)\]$/);
    if (arbitraryMatch) {
      token.value = sanitizeValue(arbitraryMatch[1].replace(/_/g, ' '));
      token.isArbitrary = true;
    } else {
      token.value = sanitizeValue(value);
    }
  }

  // Validate the token structure
  if (!isValidToken(token)) {
    token.error = 'Invalid token structure';
  }

  return token;
}

/**
 * Tokenize all values from parsed attributes
 * @param {Object} parsed - Output from parser { layout: Set, space: Set, visual: Set }
 * @returns {Array} - Array of token objects
 */
export function tokenizeAll(parsed) {
  const tokens = [];

  for (const [attrType, values] of Object.entries(parsed)) {
    for (const raw of values) {
      tokens.push(tokenize(raw, attrType));
    }
  }

  return tokens;
}

/**
 * Tokenize all values with memory-protected batch processing
 * @param {Object} parsed - Parsed tokens from parser { layout: Set, space: Set, visual: Set }
 * @param {number} batchSize - Number of tokens per batch (default: 1000)
 * @returns {Promise<Array>} - Array of token objects
 */
export async function tokenizeAllWithBatching(parsed, batchSize = 1000) {
  const rawTokens = [];

  // Collect all raw tokens first
  for (const [attrType, values] of Object.entries(parsed)) {
    for (const raw of values) {
      rawTokens.push({ raw, attrType });
    }
  }

  // Process tokens in batches with memory protection
  const tokens = await batchProcessTokens(
    rawTokens,
    ({ raw, attrType }) => tokenize(raw, attrType),
    batchSize
  );

  return tokens;
}

export default { tokenize, tokenizeAll, tokenizeAllWithBatching, sanitizeValue, isValidToken };

