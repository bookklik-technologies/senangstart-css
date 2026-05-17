/**
 * SenangStart CSS - CSS Variables Unit Tests
 * Split from css.test.js for focused test maintenance
 */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateCSSVariables } from '../../../../src/compiler/generators/css.js';
import { createTestConfig } from '../../../helpers/test-utils.js';

describe('CSS Generator - Variables', () => {

  it('generates spacing CSS variables without invalid fallbacks', () => {
    const config = createTestConfig();
    const css = generateCSSVariables(config);
    assert.ok(css.includes(':root {'));
    assert.ok(css.includes('  --s-tiny: 4px;\n'));
    assert.ok(css.includes('  --s-medium: 16px;\n'));
    assert.ok(css.includes('  --s-big: 32px;\n'));
  });

  it('generates color CSS variables', () => {
    const config = createTestConfig();
    const css = generateCSSVariables(config);
    assert.ok(css.includes('--c-primary: #2563EB'));
    assert.ok(css.includes('--c-white: #FFFFFF'));
    assert.ok(css.includes('--c-black: #000000'));
  });

  it('generates radius CSS variables', () => {
    const config = createTestConfig();
    const css = generateCSSVariables(config);
    assert.ok(css.includes('--r-small: 4px'));
    assert.ok(css.includes('--r-medium: 8px'));
    assert.ok(css.includes('--r-full: 9999px'));
  });

  it('generates font-size CSS variables', () => {
    const config = createTestConfig();
    const css = generateCSSVariables(config);
    assert.ok(css.includes('--font-small: 14px'));
    assert.ok(css.includes('--font-medium: 16px'));
  });

  it('generates z-index CSS variables', () => {
    const config = createTestConfig();
    const css = generateCSSVariables(config);
    assert.ok(css.includes('--z-base: 0'));
    assert.ok(css.includes('--z-top: 9999'));
  });
});
