
import { test } from 'node:test';
import assert from 'node:assert';
import { generatePreflight } from '../../../../src/compiler/generators/preflight.js';

test('generatePreflight', async (t) => {
  await t.test('should generate preflight css', () => {
    const css = generatePreflight({});
    
    // Basic assertions to ensure content is generated
    assert.ok(css.includes('SenangStart Preflight'), 'Should include header');
    assert.ok(css.includes('box-sizing: border-box'), 'Should include box-sizing reset');
    assert.ok(css.includes('html'), 'Should include html selector');
    assert.ok(css.includes('body'), 'Should include body selector');
  });

  await t.test('should include opinionated defaults', () => {
    const css = generatePreflight({});
    
    // Check for specific opinionated keys
    assert.ok(css.includes('line-height: 1.5'), 'Should set default line-height');
    assert.ok(css.includes('tab-size: 4'), 'Should set tab-size');
    assert.ok(css.includes('font-family: ui-sans-serif'), 'Should set default font stack');
  });
  
  await t.test('should handle modern-normalize styles', () => {
      const css = generatePreflight({});
      assert.ok(css.includes('abbr:where([title])'), 'Should include abbr styles');
      assert.ok(css.includes('::-webkit-search-decoration'), 'Should include search decoration reset');
  });
});
