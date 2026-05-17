/**
 * SenangStart CSS - Responsive & States Unit Tests
 * Split from css.test.js for focused test maintenance
 */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateCSS, minifyCSS } from '../../../../src/compiler/generators/css.js';
import { createTestConfig } from '../../../helpers/test-utils.js';

describe('CSS Generator - Responsive & States', () => {
  describe('Responsive Breakpoints', () => {
    it('wraps mob: in media query', () => {
      const token = { breakpoint: 'mob', property: 'p', value: 'big', attrType: 'space', raw: 'mob:p:big' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('@media (min-width: 480px)'));
      assert.ok(css.includes('padding: var(--s-big)'));
    });
    it('wraps tab: in media query', () => {
      const token = { breakpoint: 'tab', property: 'grid-cols', value: '2', attrType: 'layout', raw: 'tab:grid-cols:2' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('@media (min-width: 768px)'));
    });
    it('wraps lap: in media query', () => {
      const token = { breakpoint: 'lap', property: 'w', value: '50%', isArbitrary: true, attrType: 'space', raw: 'lap:w:[50%]' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('@media (min-width: 1024px)'));
    });
    it('wraps desk: in media query', () => {
      const token = { breakpoint: 'desk', property: 'row', value: 'row', attrType: 'layout', raw: 'desk:row' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('@media (min-width: 1280px)'));
    });
  });

  describe('State Pseudo-classes', () => {
    it('generates :hover pseudo-class', () => {
      const token = { state: 'hover', property: 'bg', value: 'secondary', attrType: 'visual', raw: 'hover:bg:secondary' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes(':hover'));
      assert.ok(css.includes('background-color: var(--c-secondary)'));
    });
    it('generates :focus pseudo-class', () => {
      const token = { state: 'focus', property: 'shadow', value: 'big', attrType: 'visual', raw: 'focus:shadow:big' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes(':focus'));
    });
    it('generates :active pseudo-class', () => {
      const token = { state: 'active', property: 'bg', value: 'primary', attrType: 'visual', raw: 'active:bg:primary' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes(':active'));
    });
    it('generates :disabled pseudo-class', () => {
      const token = { state: 'disabled', property: 'opacity', value: '50', attrType: 'visual', raw: 'disabled:opacity:50' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes(':disabled'));
    });
  });

  describe('Dark Mode', () => {
    it('generates media-based dark mode', () => {
      const token = { state: 'dark', property: 'bg', value: 'black', attrType: 'visual', raw: 'dark:bg:black' };
      const css = generateCSS([token], createTestConfig({ darkMode: 'media' }));
      assert.ok(css.includes('@media (prefers-color-scheme: dark)'));
    });
    it('generates selector-based dark mode', () => {
      const token = { state: 'dark', property: 'bg', value: 'black', attrType: 'visual', raw: 'dark:bg:black' };
      const css = generateCSS([token], createTestConfig({ darkMode: 'selector' }));
      assert.ok(css.includes('.dark'));
    });
  });

  describe('minifyCSS', () => {
    it('removes whitespace and comments', () => {
      const css = '/* Comment */\n.test {\n  color: red;\n}\n';
      const minified = minifyCSS(css);
      assert.ok(!minified.includes('/* Comment */'));
      assert.ok(!minified.includes('\n'));
    });
    it('preserves functional CSS', () => {
      const minified = minifyCSS('[layout~="flex"] { display: flex; }');
      assert.ok(minified.includes('display:flex') || minified.includes('display: flex'));
    });
  });
});
