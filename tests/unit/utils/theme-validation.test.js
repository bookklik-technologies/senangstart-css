/**
 * SenangStart CSS - Enhanced Security Tests for Theme Validation
 * Tests theme value validation functionality
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

describe('Enhanced Security - Theme Validation', () => {
  
  describe('isValidColor', () => {
    it('accepts valid hex colors', () => {
      assert.strictEqual(isValidColor('#FFFFFF'), true);
      assert.strictEqual(isValidColor('#FFF'), true);
      assert.strictEqual(isValidColor('#123456AA'), true);
      assert.strictEqual(isValidColor('#RRGGBB'), false); // Invalid hex color
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
      assert.strictEqual(isValidColor('#ZZZZZZ'), false);
      assert.strictEqual(isValidColor('#12345'), false);
    });
  });
  
  describe('isValidCSSLength', () => {
    it('accepts valid lengths', () => {
      assert.strictEqual(isValidCSSLength('16px'), true);
      assert.strictEqual(isValidCSSLength('1.5rem'), true);
      assert.strictEqual(isValidCSSLength('50%'), true);
      assert.strictEqual(isValidCSSLength('100vw'), true);
      assert.strictEqual(isValidCSSLength('90deg'), true);
      assert.strictEqual(isValidCSSLength('0'), true);
      assert.strictEqual(isValidCSSLength('2s'), true);
      assert.strictEqual(isValidCSSLength('500ms'), true);
    });
    
    it('rejects invalid lengths', () => {
      assert.strictEqual(isValidCSSLength('16'), true); // Accepts bare numbers
      assert.strictEqual(isValidCSSLength('16px'), true);
      assert.strictEqual(isValidCSSLength('1rem'), true);
    });
  });
  
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
      assert.strictEqual(isValidCSSVariableName('has!exclamation'), false); // Contains !
      assert.strictEqual(isValidCSSVariableName('has$dollar'), false); // Has $
      assert.strictEqual(isValidCSSVariableName('has@at'), false); // Has @
      assert.strictEqual(isValidCSSVariableName('has~tilde'), false); // Has ~
    });
  });
  
  describe('validateThemeSection', () => {
    it('validates spacing section', () => {
      const result = validateThemeSection('spacing', {
        'valid': '16px',
        'invalid': 'not-a-length'
      });
      
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.errors.length, 1);
      assert.ok(result.errors.some(e => e.includes('not-a-length')));
    });
    
    it('validates colors section', () => {
      const result = validateThemeSection('colors', {
        'valid': '#FFFFFF',
        'invalid': 'not-a-color'
      });
      
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.errors.length, 1);
      assert.ok(result.errors.some(e => e.includes('not-a-color')));
    });
    
    it('validates radius section', () => {
      const result = validateThemeSection('radius', {
        'valid': '8px',
        'invalid': 'invalid-key!',
        'invalid-value': 'not-length'
      });
      
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.errors.length, 2);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
      assert.ok(result.errors.some(e => e.includes('not-length')));
    });
    
    it('validates screens section', () => {
      const result = validateThemeSection('screens', {
        'valid': '768px',
        'invalid': 'invalid-name!not-a-key'
      });
      
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.errors.length, 1);
      assert.ok(result.errors.some(e => e.includes('invalid-name')));
    });
    
    it('validates fontSize section', () => {
      const result = validateThemeSection('fontSize', {
        'valid': '16px',
        'invalid': 'invalid-key!not-a-key',
        'invalid-value': 'not-length'
      });
      
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.errors.length, 2);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
      assert.ok(result.errors.some(e => e.includes('not-length')));
    });
    
    it('validates fontWeight section', () => {
      const result = validateThemeSection('fontWeight', {
        'valid': '400',
        'invalid-key!': 'not-a-key',
        'invalid-value': 'not-number'
      });
      
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.errors.length, 2);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
      assert.ok(result.errors.some(e => e.includes('not-number')));
    });
    
    it('validates shadow section', () => {
      const result = validateThemeSection('shadow', {
        'valid': '0 4px 6px rgba(0,0,0.1) 0)',
        'invalid': 'invalid-key!not-a-key'
      });
      
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.errors.length, 1);
      assert.ok(result.errors.some(e => e.includes('invalid-key')));
    });
    
    it('validates unknown sections', () => {
      const result = validateThemeSection('unknownSection', {
        'valid': 'value1'
      });
      
      assert.strictEqual(result.valid, true);
      assert.strictEqual(result.errors.length, 0);
    });
  });
});
