/**
 * SenangStart CSS - Tokenizer
 * Parses attribute values into structured tokens
 * 
 * Syntax: [breakpoint]:[property]:[value]
 * Examples:
 *   - p:medium         → { property: 'p', value: 'medium' }
 *   - tab:p:big        → { breakpoint: 'tab', property: 'p', value: 'big' }
 *   - w:[350px]        → { property: 'w', value: '350px', isArbitrary: true }
 *   - hover:bg:primary → { state: 'hover', property: 'bg', value: 'primary' }
 */

// Breakpoint prefixes
const BREAKPOINTS = ['mob', 'tab', 'lap', 'desk'];

// State prefixes
const STATES = ['hover', 'focus', 'active', 'disabled', 'dark'];

// Layout keywords (no colon syntax)
const LAYOUT_KEYWORDS = [
  'flex', 'grid', 'block', 'inline', 'hidden',
  'row', 'col', 'row-reverse', 'col-reverse',
  'center', 'start', 'end', 'between', 'around', 'evenly',
  'wrap', 'nowrap',
  'absolute', 'relative', 'fixed', 'sticky'
];

/**
 * Tokenize a single attribute value string
 * @param {string} raw - Raw token string (e.g., "tab:p:big")
 * @param {string} attrType - Attribute type: 'layout', 'space', or 'visual'
 * @returns {Object} - Parsed token object
 */
export function tokenize(raw, attrType) {
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
      token.value = arbitraryMatch[1].replace(/_/g, ' ');
      token.isArbitrary = true;
    } else {
      token.value = value;
    }
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

export default { tokenize, tokenizeAll };
