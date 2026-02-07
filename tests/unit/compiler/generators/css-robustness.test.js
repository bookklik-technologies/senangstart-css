/**
 * SenangStart CSS - CSS Generator Robustness Tests
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
  generateCSS, 
  generateCSSWithErrors
} from '../../../../src/compiler/generators/css.js';
import { createTestConfig } from '../../../helpers/test-utils.js';

describe('CSS Generator - Robustness', () => {

  describe('generateCSSWithErrors', () => {
    
    it('returns empty CSS and error for invalid config', () => {
      const result = generateCSSWithErrors([], null);
      assert.strictEqual(result.css, '');
      assert.ok(result.errors.length > 0);
      assert.strictEqual(result.errors[0].type, 'config');
    });

    it('returns empty CSS and error for invalid tokens', () => {
      const config = createTestConfig();
      const result = generateCSSWithErrors(null, config);
      assert.strictEqual(result.css, '');
      assert.ok(result.errors.length > 0);
      assert.strictEqual(result.errors[0].type, 'tokens');
    });

    it('reports error for malformed token object', () => {
      const config = createTestConfig();
      const tokens = ['not-an-object'];
      const result = generateCSSWithErrors(tokens, config);
      
      assert.ok(result.errors.length > 0);
      assert.strictEqual(result.errors[0].type, 'token_format');
    });

    it('continues processing valid tokens after a malformed one', () => {
      const config = createTestConfig();
      const tokens = [
        'invalid',
        { property: 'p', value: 'medium', attrType: 'space', raw: 'p:medium' }
      ];
      const result = generateCSSWithErrors(tokens, config);
      
      assert.ok(result.css.includes('padding: var(--s-medium)'));
      assert.ok(result.errors.length > 0);
      assert.strictEqual(result.errors[0].type, 'token_format');
    });

    it('reports error when generateRule fails to return a rule', () => {
      const config = createTestConfig();
      const tokens = [
        { property: 'nonexistent', value: 'value', attrType: 'unknown', raw: 'unknown:value' }
      ];
      const result = generateCSSWithErrors(tokens, config);
      
      assert.ok(result.errors.length > 0);
      assert.strictEqual(result.errors[0].type, 'rule_generation');
    });

    it('handles exceptions in rule generation gracefully', () => {
      const config = createTestConfig();
      // Token that might cause issues if not handled
      const tokens = [
        { property: null, value: null, attrType: 'layout', raw: 'bad' }
      ];
      
      const result = generateCSSWithErrors(tokens, config);
      assert.ok(result.errors.length > 0);
    });

  });

  describe('generateCSS (Backward Compatibility)', () => {
    
    it('returns string even when errors occur', () => {
      const config = createTestConfig();
      const tokens = ['invalid'];
      const css = generateCSS(tokens, config);
      
      assert.strictEqual(typeof css, 'string');
      // Should still contain variables if config is valid
      assert.ok(css.includes(':root'));
    });

    it('generates valid CSS for valid tokens', () => {
      const config = createTestConfig();
      const tokens = [
        { property: 'flex', value: 'flex', attrType: 'layout', raw: 'flex' }
      ];
      const css = generateCSS(tokens, config);
      
      assert.ok(css.includes('display: flex'));
    });

  });

});
