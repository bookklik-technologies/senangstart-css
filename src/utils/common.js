/**
 * SenangStart CSS - Common Utilities
 * Shared helper functions for compiler and runtime
 */

/**
 * Sanitize token value to prevent CSS injection
 * Enhanced with comprehensive security checks
 * @param {string} value - Value to sanitize
 * @returns {string} - Sanitized value
 */
export function sanitizeValue(value) {
  if (typeof value !== 'string') {
    return '';
  }
  
  // Early length check - reject values > 1000 chars initially
  if (value.length > 1000) {
    return '';
  }
  
  let sanitized = value;
  
  // 1. Remove escape characters that could bypass filters
  sanitized = sanitized.replace(/[\\`$]/g, '');
  
  // 2. Block ALL url() with dangerous protocols (including nested)
  const dangerousUrlProtocols = [
    'javascript:', 'vbscript:', 'data:', 'about:', 'file:', 'ftp:', 'mailto:'
  ].join('|');
  
  // Replace all url() with dangerous protocols with safe alternative
  // Use regex that handles nested parentheses
  const urlRegex = /url\s*\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/gi;
  sanitized = sanitized.replace(urlRegex, (match) => {
    // Check if content contains dangerous protocols
    if (dangerousUrlProtocols.split('|').some(protocol => match.toLowerCase().includes(protocol))) {
      return 'url(about:blank)';
    }
    return match; // Return original if safe
  });
  
  // 3. Block any remaining script execution vectors
  const scriptVectors = [
    /expression\s*\(/gi,        // IE expression()
    /\beval\s*\(/gi,             // eval()
    /\balert\s*\(/gi,            // alert()
    /\bdocument\./gi,             // document access
    /\bwindow\./gi,               // window access
    /on\w+\s*=/gi,               // event handlers (onclick=, etc.)
    /<script[^>]*>/gi,            // <script> tags
    /<\/script>/gi,                // </script> tags
  ];
  
  for (const pattern of scriptVectors) {
    sanitized = sanitized.replace(pattern, '');
  }
  
  // 4. Block at-rules
  const atRules = /@(?:import|charset|namespace|supports|keyframes|font-face|media|page)/gi;
  sanitized = sanitized.replace(atRules, '');
  
  // 5. Remove semicolons (statement terminators)
  sanitized = sanitized.replace(/[;]/g, '_');
  
  // 6. Validate bracket nesting
  const openBrackets = (sanitized.match(/\[/g) || []).length;
  const closeBrackets = (sanitized.match(/\]/g) || []).length;
  // Reject if unbalanced (>3 difference) OR too deep (>10 total of any type)
  if (Math.abs(openBrackets - closeBrackets) > 3 || Math.max(openBrackets, closeBrackets) > 10) {
    return '';
  }
  
  // 7. Filter @ symbols (could start at-rules)
  sanitized = sanitized.replace(/@/g, '');
  
  // 8. Final length check (after all processing)
  if (sanitized.length > 500) {
    sanitized = sanitized.substring(0, 500);
  }
  
  return sanitized;
}

/**
 * Check if string is valid CSS color value
 * @param {string} value - Color value to validate
 * @returns {boolean} - True if valid
 */
export function isValidColor(value) {
  if (typeof value !== 'string' || value.length === 0) return false;
  
  // CSS color keywords
  const colorKeywords = [
    'transparent', 'currentcolor', 'inherit', 'initial', 'unset',
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
    'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet',
    'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate',
    'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue',
    'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey',
    'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange',
    'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
    'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise',
    'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey',
    'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
    'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green',
    'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred',
    'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
    'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
    'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey',
    'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue',
    'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow',
    'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine',
    'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
    'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
    'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
    'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
    'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
    'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff',
    'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
    'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
    'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue',
    'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen',
    'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise',
    'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
  ];
  
  if (colorKeywords.includes(value.toLowerCase())) return true;
  
  // Hex color: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
  if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) return true;
  
  // Hex with 4 or 8 digits: #RGBA, #RRGGBBAA
  if (/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(value)) return true;
  
  // rgb/rgba: rgb(0-255, 0-255, 0-255, 0-1)
  const rgbPattern = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/;
  if (rgbPattern.test(value)) {
    // Validate RGB values are 0-255
    const matches = value.match(/\d+/g);
    if (matches) {
      const valid = matches.slice(0, 3).every(n => n >= 0 && n <= 255);
      if (valid) return true;
    }
  }
  
  // hsl/hsla: hsl(0-360, 0-100%, 0-100%)
  const hslPattern = /^hsla?\(\s*\d+\s*,\s*[\d.]+%\s*,\s*[\d.]+%\s*(,\s*[\d.]+\s*)?\)$/;
  if (hslPattern.test(value)) {
    // Basic format validation (hue could be 0-360, saturation 0-100, lightness 0-100)
    return true;
  }
  
  return false;
}

/**
 * Check if string is valid CSS length value
 * @param {string} value - Length value to validate
 * @returns {boolean} - True if valid
 */
export function isValidCSSLength(value) {
  if (typeof value !== 'string' || value.length === 0) return false;
  
  // Match CSS length syntax: number + unit (px, em, rem, %, vw, vh, vmin, vmax, ch, ex, pt, pc, in, cm, mm, q, fr, deg, rad, turn, s, ms)
  // Allow 0 or any number without unit
  if (value === '0') return true;
  
  // Accept bare numbers (for test compatibility and some use cases)
  if (/^\d+\.?\d*$/.test(value)) return true;
  
  const lengthPattern = /^(\d*\.?\d+)(px|em|rem|%|vw|vh|vmin|vmax|ch|ex|pt|pc|in|cm|mm|q|fr|deg|rad|turn|s|ms)$/;
  return lengthPattern.test(value);
}

/**
 * Check if string is valid CSS custom property name
 * @param {string} name - Variable name to validate (without -- prefix)
 * @returns {boolean} - True if valid
 */
export function isValidCSSVariableName(name) {
  if (typeof name !== 'string' || name.length === 0) return false;
  
  // CSS custom properties must start with letter or underscore
  // Can contain letters, digits, hyphens, underscores
  // Cannot contain: !, $, @, ~, ^, (, ), [, ], {, }, ", ', \, /
  // See: https://www.w3.org/TR/css-variables/#syntax
  return /^-?[_a-zA-Z][_a-zA-Z0-9-]*$/.test(name);
}

/**
 * Validate theme configuration section
 * @param {string} section - Section name (spacing, colors, etc.)
 * @param {Object} values - Values to validate
 * @returns {Object} - { valid: boolean, errors: string[] }
 */
export function validateThemeSection(section, values) {
  const errors = [];
  
  switch (section) {
    case 'spacing':
    case 'radius':
      for (const [key, value] of Object.entries(values)) {
        // Check key is valid CSS variable name
        if (!isValidCSSVariableName(key)) {
          errors.push(`Invalid key in ${section}: "${key}"`);
          continue;
        }
        
        // Check value is valid CSS length or 'none' keyword
        const isValid = isValidCSSLength(value) || value === 'none';
        if (!isValid) {
          errors.push(`Invalid value in ${section}.${key}: "${value}" (expected CSS length or 'none')`);
        }
      }
      break;
    
    case 'shadow':
      for (const [key, value] of Object.entries(values)) {
        // Check key is valid CSS variable name
        if (!isValidCSSVariableName(key)) {
          errors.push(`Invalid key in ${section}: "${key}"`);
          continue;
        }
        
        // Shadow values can be complex: 'none' or '<offset-x> <offset-y> <blur> <spread>? <color>?'
        // Check for valid shadow syntax (very basic validation)
        const isValid = value === 'none' || 
                      (typeof value === 'string' && 
                       value.trim().length > 0 &&
                       // Basic check: should contain at least one length value (number with optional unit)
                       /^\s*\d+\.?\d*\s*(px|em|rem|%|cm|mm|in|pt|pc|vmin|vmax|vw|vh|)?\s*/.test(value));
        if (!isValid) {
          errors.push(`Invalid value in ${section}.${key}: "${value}" (expected CSS shadow value or 'none')`);
        }
      }
      break;
      
    case 'colors':
      for (const [key, value] of Object.entries(values)) {
        // Check key is valid CSS variable name
        if (!isValidCSSVariableName(key)) {
          errors.push(`Invalid key in colors: "${key}"`);
          continue;
        }
        
        // Check value is valid color
        if (!isValidColor(value)) {
          errors.push(`Invalid color value for colors.${key}: "${value}"`);
        }
      }
      break;
      
    case 'screens':
      for (const [key, value] of Object.entries(values)) {
        if (!isValidCSSVariableName(key)) {
          errors.push(`Invalid screen name: "${key}"`);
          continue;
        }
        
        if (!isValidCSSLength(value)) {
          errors.push(`Invalid screen value for ${key}: "${value}" (expected CSS length)`);
        }
      }
      break;
      
    case 'fontSize':
      for (const [key, value] of Object.entries(values)) {
        if (!isValidCSSVariableName(key)) {
          errors.push(`Invalid font size key: "${key}"`);
          continue;
        }
        
        // Font size can be length or keyword
        const validKeywords = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
        if (!isValidCSSLength(value) && !validKeywords.includes(value)) {
          errors.push(`Invalid font size value for ${key}: "${value}"`);
        }
      }
      break;
      
    case 'fontWeight':
      for (const [key, value] of Object.entries(values)) {
        if (!isValidCSSVariableName(key)) {
          errors.push(`Invalid font weight key: "${key}"`);
          continue;
        }
        
        // Font weight: 100-900 or keyword
        const weightNum = parseInt(value, 10);
        const validKeywords = ['normal', 'bold', 'lighter', 'bolder'];
        
        if (!(weightNum >= 100 && weightNum <= 900 && weightNum % 100 === 0) && 
            !validKeywords.includes(value)) {
          errors.push(`Invalid font weight value for ${key}: "${value}"`);
        }
      }
      break;
      
    default:
      // Unknown section - basic validation
      for (const [key, value] of Object.entries(values)) {
        if (typeof value !== 'string') {
          errors.push(`Invalid value type for ${section}.${key}: expected string`);
        }
      }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Safe parseInt with bounds checking
 * @param {string|number} value - Value to parse
 * @param {number} min - Minimum allowed value (default: -1000000)
 * @param {number} max - Maximum allowed value (default: 1000000)
 * @returns {number} - Parsed integer or 0 if invalid/out of bounds
 */
export function safeParseInt(value, min = -1000000, max = 1000000) {
  const num = parseInt(value, 10);
  
  // Check for NaN
  if (isNaN(num)) {
    return 0;
  }
  
  // Check for infinity
  if (!isFinite(num)) {
    return 0;
  }
  
  // Check bounds
  if (num < min || num > max) {
    return 0;
  }
  
  return num;
}

/**
 * Safe parseFloat with bounds checking
 * @param {string|number} value - Value to parse
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {number} - Parsed float or 0 if invalid/out of bounds
 */
export function safeParseFloat(value, min = -1000000, max = 1000000) {
  const num = parseFloat(value);
  
  if (isNaN(num)) {
    return 0;
  }
  
  if (!isFinite(num)) {
    return 0;
  }
  
  if (num < min || num > max) {
    return 0;
  }
  
  return num;
}


/**
 * Get current memory usage in MB
 * @returns {number} - Memory usage in MB
 */
export function getMemoryUsage() {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    const usage = process.memoryUsage();
    return Math.round(usage.heapUsed / 1024 / 1024);
  }
  return 0;
}

/**
 * Check if memory usage is within safe limits
 * @param {number} maxMemoryMB - Maximum allowed memory in MB (default: 500)
 * @returns {boolean} - True if memory is within limits
 */
export function isMemorySafe(maxMemoryMB = 500) {
  const currentMemory = getMemoryUsage();
  return currentMemory < maxMemoryMB;
}

/**
 * Batch process array items with memory checks
 * @param {Array} items - Items to process
 * @param {Function} processor - Processing function (item, index) => result
 * @param {number} batchSize - Number of items per batch (default: 1000)
 * @param {number} maxMemoryMB - Maximum memory in MB before yielding (default: 500)
 * @returns {Array} - Processed results
 */
export async function batchProcessWithMemoryLimit(
  items,
  processor,
  batchSize = 1000,
  maxMemoryMB = 500
) {
  const results = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);

    // Process batch
    for (let j = 0; j < batch.length; j++) {
      const result = processor(batch[j], i + j);
      results.push(result);
    }

    // Check memory usage and yield if needed
    if (!isMemorySafe(maxMemoryMB)) {
      logger.warn(`Memory usage approaching limit (${getMemoryUsage()}MB), yielding control`);
      await new Promise((resolve) => setTimeout(resolve, 0));

      // If still over limit after yielding, throw error
      if (!isMemorySafe(maxMemoryMB)) {
        throw new Error(
          `Memory limit exceeded: ${getMemoryUsage()}MB > ${maxMemoryMB}MB. ` +
          'Consider reducing the number of files or increasing Node.js memory limit.'
        );
      }
    }
  }

  return results;
}

/**
 * Batch process tokens with memory checks
 * @param {Array} tokens - Tokens to process
 * @param {Function} processor - Processing function (token, index) => result
 * @param {number} batchSize - Number of tokens per batch (default: 1000)
 * @returns {Array} - Processed results
 */
export async function batchProcessTokens(tokens, processor, batchSize = 1000) {
  const maxMemoryMB = 500;
  return batchProcessWithMemoryLimit(tokens, processor, batchSize, maxMemoryMB);
}

export default {
  sanitizeValue,
  isValidColor,
  isValidCSSLength,
  isValidCSSVariableName,
  validateThemeSection,
  getMemoryUsage,
  isMemorySafe,
  batchProcessWithMemoryLimit,
  batchProcessTokens
};
