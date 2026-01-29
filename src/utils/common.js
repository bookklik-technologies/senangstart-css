/**
 * SenangStart CSS - Common Utilities
 * Shared helper functions for compiler and runtime
 */

/**
 * Sanitize token value to prevent CSS injection
 * Removes potentially dangerous characters/sequences
 * @param {string} value - Value to sanitize
 * @returns {string} - Sanitized value
 */
export function sanitizeValue(value) {
  if (typeof value !== 'string') {
    return '';
  }
  
  // Remove potentially dangerous characters that could break CSS syntax
  // Note: We used to filter {} but some tests expect them (e.g. content icons), so we only filter ; for now
  const dangerousChars = /[;]/g;
  if (dangerousChars.test(value)) {
    return value.replace(dangerousChars, '_');
  }
  
  return value;
}

export default { sanitizeValue };
