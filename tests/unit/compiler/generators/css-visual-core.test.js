/**
 * SenangStart CSS - Visual Core Unit Tests (Colors, Shadows, Borders, Typography)
 * Split from css.test.js for focused test maintenance
 */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateCSS } from '../../../../src/compiler/generators/css.js';
import { createTestConfig } from '../../../helpers/test-utils.js';

describe('CSS Generator - Visual Core', () => {
  describe('Background', () => {
    it('generates background-color', () => {
      const token = { property: 'bg', value: 'primary', attrType: 'visual', raw: 'bg:primary' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('background-color: var(--c-primary)'));
    });
    it('generates arbitrary background-color', () => {
      const token = { property: 'bg', value: '#FF5733', isArbitrary: true, attrType: 'visual', raw: 'bg:[#FF5733]' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('background-color: #FF5733'));
    });
  });

  describe('CSS Color Keywords', () => {
    it('generates bg:transparent without var() wrapping', () => {
      const token = { property: 'bg', value: 'transparent', attrType: 'visual', raw: 'bg:transparent' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('background-color: transparent'));
      assert.ok(!css.includes('var(--c-transparent)'));
    });
    it('generates text:currentColor without var() wrapping', () => {
      const token = { property: 'text', value: 'currentColor', attrType: 'visual', raw: 'text:currentColor' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('color: currentColor'));
    });
    it('generates border:transparent without var() wrapping', () => {
      const token = { property: 'border', value: 'transparent', attrType: 'visual', raw: 'border:transparent' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('border-color: transparent'));
    });
    it('generates divide:transparent without var() wrapping', () => {
      const token = { property: 'divide', value: 'transparent', attrType: 'visual', raw: 'divide:transparent' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('border-color: transparent'));
    });
  });

  describe('Text', () => {
    it('generates text color', () => {
      const css = generateCSS([{ property: 'text', value: 'white', attrType: 'visual', raw: 'text:white' }], createTestConfig());
      assert.ok(css.includes('color: var(--c-white)'));
    });
    it('generates text-align', () => {
      const css = generateCSS([{ property: 'text', value: 'center', attrType: 'visual', raw: 'text:center' }], createTestConfig());
      assert.ok(css.includes('text-align: center'));
    });
  });

  describe('Border Radius', () => {
    it('generates border-radius', () => {
      const css = generateCSS([{ property: 'rounded', value: 'medium', attrType: 'visual', raw: 'rounded:medium' }], createTestConfig());
      assert.ok(css.includes('border-radius: var(--r-medium)'));
    });
    it('generates rounded-full', () => {
      const css = generateCSS([{ property: 'rounded', value: 'full', attrType: 'visual', raw: 'rounded:full' }], createTestConfig());
      assert.ok(css.includes('border-radius: var(--r-full)'));
    });
    it('generates rounded-t', () => {
      const css = generateCSS([{ property: 'rounded-t', value: 'medium', attrType: 'visual', raw: 'rounded-t:medium' }], createTestConfig());
      assert.ok(css.includes('border-top-left-radius: var(--r-medium)'));
      assert.ok(css.includes('border-top-right-radius: var(--r-medium)'));
    });
    it('generates rounded-b', () => {
      const css = generateCSS([{ property: 'rounded-b', value: 'big', attrType: 'visual', raw: 'rounded-b:big' }], createTestConfig());
      assert.ok(css.includes('border-bottom-left-radius: var(--r-big)'));
      assert.ok(css.includes('border-bottom-right-radius: var(--r-big)'));
    });
  });

  describe('Shadow', () => {
    it('generates box-shadow', () => {
      const css = generateCSS([{ property: 'shadow', value: 'medium', attrType: 'visual', raw: 'shadow:medium' }], createTestConfig());
      assert.ok(css.includes('box-shadow: var(--shadow-medium)'));
    });
  });

  describe('Typography Keywords', () => {
    it('generates italic', () => {
      const css = generateCSS([{ property: 'italic', value: 'italic', attrType: 'visual', raw: 'italic' }], createTestConfig());
      assert.ok(css.includes('font-style: italic'));
    });
    it('generates uppercase', () => {
      const css = generateCSS([{ property: 'uppercase', value: 'uppercase', attrType: 'visual', raw: 'uppercase' }], createTestConfig());
      assert.ok(css.includes('text-transform: uppercase'));
    });
    it('generates underline', () => {
      const css = generateCSS([{ property: 'underline', value: 'underline', attrType: 'visual', raw: 'underline' }], createTestConfig());
      assert.ok(css.includes('text-decoration-line: underline'));
    });
    it('generates truncate', () => {
      const css = generateCSS([{ property: 'truncate', value: 'truncate', attrType: 'visual', raw: 'truncate' }], createTestConfig());
      assert.ok(css.includes('overflow: hidden'));
      assert.ok(css.includes('text-overflow: ellipsis'));
      assert.ok(css.includes('white-space: nowrap'));
    });
  });

  describe('Opacity', () => {
    it('generates opacity', () => {
      const css = generateCSS([{ property: 'opacity', value: '50', attrType: 'visual', raw: 'opacity:50' }], createTestConfig());
      assert.ok(css.includes('opacity: 0.5'));
    });
  });
});
