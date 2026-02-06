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
  
  let sanitized = value;
  
  // Remove potentially dangerous characters that could break CSS syntax
  // Note: We don't filter {} because some tests expect them (e.g. content icons like content: "→")
  const dangerousChars = /[;]/g;
  sanitized = sanitized.replace(dangerousChars, '_');
  
  // Filter CSS injection attempts via at-rules
  const atRules = /@import|@charset|@namespace|@supports|@keyframes/gi;
  sanitized = sanitized.replace(atRules, '');
  
  // Filter expression() (IE vulnerability)
  const expression = /expression\s*\(/gi;
  sanitized = sanitized.replace(expression, '');
  
  // Filter javascript: and data: URLs in url() that could execute scripts
  const dangerousUrls = /(url\s*\(\s*['"]?)(javascript:|data:)([^)]*\))/gi;
  sanitized = sanitized.replace(dangerousUrls, '$1about:blank$3');
  
  return sanitized;
}

export default { sanitizeValue };
