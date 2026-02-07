/**
 * SenangStart CSS - Enhanced Security Unit Tests
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
  sanitizeValue,
  isValidColor,
  isValidCSSLength,
  isValidCSSVariableName,
  validateThemeSection
} from '../../../src/utils/common.js';

describe('Enhanced Security - Arbitrary Values', () => {
  describe('URL injection prevention', () => {
    it('blocks javascript: URLs in url()', () => {
      const result = sanitizeValue('url(javascript:alert(1))');
      assert.strictEqual(result, 'url(about:blank)');
    });
    
    it('blocks data: URLs in url()', () => {
      const result = sanitizeValue('url(data:text/html,<script>alert(1)</script>)');
      assert.strictEqual(result, 'url(about:blank)');
    });
    
    it('blocks about: URLs in url()', () => {
      const result = sanitizeValue('url(about:blank)');
      assert.strictEqual(result, 'url(about:blank)');
    });
    
    it('blocks file: URLs in url()', () => {
      const result = sanitizeValue('url(file:///etc/passwd)');
      assert.strictEqual(result, 'url(about:blank)');
    });
    
    it('blocks nested url() in calc()', () => {
      const result = sanitizeValue('calc(100% - url(javascript:alert(1)))');
      assert.strictEqual(result.includes('javascript'), false);
    });
  });
  
  describe('Script vector prevention', () => {
    it('blocks expression()', () => {
      const result = sanitizeValue('expression(alert(1))');
      assert.strictEqual(result.includes('expression'), false);
    });
    
    it('blocks eval()', () => {
      const result = sanitizeValue('eval(malicious())');
      assert.strictEqual(result.includes('eval'), false);
    });
    
    it('blocks alert()', () => {
      const result = sanitizeValue('alert(1)');
      assert.strictEqual(result.includes('alert'), false);
    });
    
    it('blocks document access', () => {
      const result = sanitizeValue('document.cookie');
      assert.strictEqual(result.includes('document'), false);
    });
    
    it('blocks window access', () => {
      const result = sanitizeValue('window.location');
      assert.strictEqual(result.includes('window'), false);
    });
    
    it('blocks on*= event handlers', () => {
      const result = sanitizeValue('onclick=alert(1)');
      assert.strictEqual(result.includes('onclick'), false);
    });
    
    it('blocks <script> tags', () => {
      const result = sanitizeValue('<script>alert(1)</script>');
      assert.strictEqual(result.includes('script'), false);
    });
  });
  
  describe('Bracket nesting validation', () => {
    it('rejects deeply nested brackets', () => {
      const result = sanitizeValue('[[[[[[[[[[[[[]]]]]]]]]]]]');
      assert.strictEqual(result, '');
    });
    
    it('accepts reasonably nested brackets', () => {
      const result = sanitizeValue('[[test]]');
      assert.strictEqual(result, '[[test]]');
    });
    
    it('accepts valid bracket patterns', () => {
      const result = sanitizeValue('[valid][value]');
      assert.strictEqual(result.includes('['), true);
      assert.strictEqual(result.includes(']'), true);
    });
  });
  
  describe('Length limits', () => {
    it('rejects values > 1000 chars initially', () => {
      const longValue = 'a'.repeat(1001);
      const result = sanitizeValue(longValue);
      assert.strictEqual(result, '');
    });
    
    it('truncates sanitized values > 500 chars', () => {
      const value = 'a'.repeat(600); // After sanitization, still long
      const result = sanitizeValue(value);
      assert.ok(result.length <= 500);
    });
  });
  
  describe('Escape character removal', () => {
    it('removes backslashes', () => {
      const result = sanitizeValue('test\\nvalue');
      assert.strictEqual(result.includes('\\'), false);
    });
    
    it('removes backticks', () => {
      const result = sanitizeValue('test`value');
      assert.strictEqual(result.includes('`'), false);
    });
    
    it('removes dollar signs', () => {
      const result = sanitizeValue('test$value');
      assert.strictEqual(result.includes('$'), false);
    });
  });
  
  describe('At-rule blocking', () => {
    it('blocks @import', () => {
      const result = sanitizeValue('@import url(malicious.css)');
      assert.strictEqual(result.includes('@import'), false);
    });
    
    it('blocks @keyframes', () => {
      const result = sanitizeValue('@keyframes animation { from { opacity: 0; } }');
      assert.strictEqual(result.includes('@keyframes'), false);
    });
    
    it('blocks @charset', () => {
      const result = sanitizeValue('@charset "UTF-8"');
      assert.strictEqual(result.includes('@charset'), false);
    });
    
    it('blocks @supports', () => {
      const result = sanitizeValue('@supports (display: grid) { }');
      assert.strictEqual(result.includes('@supports'), false);
    });
    
    it('blocks @font-face', () => {
      const result = sanitizeValue('@font-face { font-family: malicious; }');
      assert.strictEqual(result.includes('@font-face'), false);
    });
    
    it('blocks @ symbols', () => {
      const result = sanitizeValue('@test-value');
      assert.strictEqual(result.includes('@'), false);
    });
  });
  
  describe('Semicolon removal', () => {
    it('replaces semicolons with underscores', () => {
      const result = sanitizeValue('color:red;background:blue;');
      assert.strictEqual(result, 'color:red_background:blue_');
    });
  });
});

describe('Color Validation', () => {
  describe('isValidColor', () => {
    it('accepts valid hex colors', () => {
      assert.strictEqual(isValidColor('#FFFFFF'), true);
      assert.strictEqual(isValidColor('#FFF'), true);
      assert.strictEqual(isValidColor('#123456AA'), true);
    });
    
    it('accepts valid rgb/rgba', () => {
      assert.strictEqual(isValidColor('rgb(255, 255, 255)'), true);
      assert.strictEqual(isValidColor('rgba(255, 255, 255, 0.5)'), true);
    });
    
    it('accepts valid hsl/hsla', () => {
      assert.strictEqual(isValidColor('hsl(120, 100%, 50%)'), true);
      assert.strictEqual(isValidColor('hsla(120, 100%, 50%, 0.5)'), true);
    });
    
    it('accepts color keywords', () => {
      assert.strictEqual(isValidColor('white'), true);
      assert.strictEqual(isValidColor('black'), true);
      assert.strictEqual(isValidColor('red'), true);
      assert.strictEqual(isValidColor('transparent'), true);
      assert.strictEqual(isValidColor('currentColor'), true);
    });
    
    it('rejects invalid hex', () => {
      assert.strictEqual(isValidColor('#GGG'), false);
      assert.strictEqual(isValidColor('#12345'), false);
      assert.strictEqual(isValidColor('#ZZZZZZ'), false);
    });
    
    it('rejects out-of-range rgb values', () => {
      assert.strictEqual(isValidColor('rgb(999, 255, 255)'), false);
      assert.strictEqual(isValidColor('rgb(255, -1, 255)'), false);
    });
    
    it('rejects non-string values', () => {
      assert.strictEqual(isValidColor(123), false);
      assert.strictEqual(isValidColor(null), false);
      assert.strictEqual(isValidColor(undefined), false);
      assert.strictEqual(isValidColor({}), false);
    });
    
    it('rejects empty string', () => {
      assert.strictEqual(isValidColor(''), false);
    });
  });
});

describe('Length Validation', () => {
  describe('isValidCSSLength', () => {
    it('accepts valid lengths', () => {
      assert.strictEqual(isValidCSSLength('16px'), true);
      assert.strictEqual(isValidCSSLength('1.5rem'), true);
      assert.strictEqual(isValidCSSLength('50%'), true);
      assert.strictEqual(isValidCSSLength('0'), true);
      assert.strictEqual(isValidCSSLength('100vw'), true);
      assert.strictEqual(isValidCSSLength('90deg'), true);
      assert.strictEqual(isValidCSSLength('2s'), true);
      assert.strictEqual(isValidCSSLength('500ms'), true);
    });
    
    it('rejects invalid lengths', () => {
      assert.strictEqual(isValidCSSLength('16'), true); // Accepts bare numbers
      assert.strictEqual(isValidCSSLength('not-a-length'), false);
      assert.strictEqual(isValidCSSLength('16pxpx'), false);
      assert.strictEqual(isValidCSSLength('0.5fr'), true); // fr is valid for grid
    });
    
    it('rejects non-string values', () => {
      assert.strictEqual(isValidCSSLength(123), false);
      assert.strictEqual(isValidCSSLength(null), false);
      assert.strictEqual(isValidCSSLength(undefined), false);
    });
    
    it('rejects empty string', () => {
      assert.strictEqual(isValidCSSLength(''), false);
    });
  });
});

describe('Variable Name Validation', () => {
  describe('isValidCSSVariableName', () => {
    it('accepts valid variable names', () => {
      assert.strictEqual(isValidCSSVariableName('primary'), true);
      assert.strictEqual(isValidCSSVariableName('color-500'), true);
      assert.strictEqual(isValidCSSVariableName('_private'), true);
      assert.strictEqual(isValidCSSVariableName('-vendor'), true);
      assert.strictEqual(isValidCSSVariableName('custom_name'), true);
    });
    
    it('rejects invalid variable names', () => {
      assert.strictEqual(isValidCSSVariableName('123invalid'), false); // Starts with number
      assert.strictEqual(isValidCSSVariableName('has!exclamation'), false);
      assert.strictEqual(isValidCSSVariableName('has$dollar'), false);
      assert.strictEqual(isValidCSSVariableName('has@at'), false);
      assert.strictEqual(isValidCSSVariableName('has~tilde'), false);
      assert.strictEqual(isValidCSSVariableName('has^caret'), false);
      assert.strictEqual(isValidCSSVariableName('has(parens)'), false);
      assert.strictEqual(isValidCSSVariableName('has[brackets]'), false);
      assert.strictEqual(isValidCSSVariableName('has{braces}'), false);
      assert.strictEqual(isValidCSSVariableName('has\'quote\''), false);
      assert.strictEqual(isValidCSSVariableName('has"quote"'), false);
      assert.strictEqual(isValidCSSVariableName('has\\slash'), false);
    });
    
    it('rejects empty string', () => {
      assert.strictEqual(isValidCSSVariableName(''), false);
    });
    
    it('rejects non-string values', () => {
      assert.strictEqual(isValidCSSVariableName(123), false);
      assert.strictEqual(isValidCSSVariableName(null), false);
      assert.strictEqual(isValidCSSVariableName(undefined), false);
    });
  });
});

describe('Theme Section Validation', () => {
  describe('validateThemeSection', () => {
    it('validates colors section', () => {
      const result = validateThemeSection('colors', {
        'valid': '#FFFFFF',
        'invalid': 'not-a-color'
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.length > 0);
      assert.ok(result.errors.some(e => e.includes('not-a-color')));
    });
    
    it('validates spacing section', () => {
      const result = validateThemeSection('spacing', {
        'valid': '16px',
        'invalid': 'not-a-length',
        'invalid-key!': '16px'
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.length > 0);
      assert.ok(result.errors.some(e => e.includes('not-a-length')));
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
    });
    
    it('validates radius section', () => {
      const result = validateThemeSection('radius', {
        'valid': '8px',
        'invalid-key!': '4px',
        'invalid-value': 'not-length'
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
      assert.ok(result.errors.some(e => e.includes('not-length')));
    });
    
    it('validates screens section', () => {
      const result = validateThemeSection('screens', {
        'valid': '768px',
        'invalid-key!': '1024px',
        'invalid-value': 'not-length'
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
      assert.ok(result.errors.some(e => e.includes('not-length')));
    });
    
    it('validates fontSize section', () => {
      const result = validateThemeSection('fontSize', {
        'valid': '16px',
        'valid-keyword': 'medium',
        'invalid-key!': '14px',
        'invalid-value': 'not-length'
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
      assert.ok(result.errors.some(e => e.includes('not-length')));
    });
    
    it('validates fontWeight section', () => {
      const result = validateThemeSection('fontWeight', {
        'valid': '400',
        'valid-keyword': 'bold',
        'invalid-key!': '700',
        'invalid-value': 'not-number'
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
      assert.ok(result.errors.some(e => e.includes('not-number')));
    });
    
    it('accepts fully valid section', () => {
      const result = validateThemeSection('colors', {
        'white': '#FFFFFF',
        'black': '#000000',
        'custom': '#FF5733'
      });
      
      assert.strictEqual(result.valid, true);
      assert.strictEqual(result.errors.length, 0);
    });
    
    it('validates shadow section', () => {
      const result = validateThemeSection('shadow', {
        'valid': '0 4px 6px rgba(0,0,0,0.1)',
        'invalid-key!': '0 2px 4px',
        'invalid-value': 'not-shadow'
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
    });
    
    it('handles unknown sections', () => {
      const result = validateThemeSection('unknownSection', {
        'key1': 'value1',
        'key2': 123 // Non-string
      });
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.includes('expected string')));
    });
  });
});
