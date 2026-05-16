
import { test } from 'node:test';
import assert from 'node:assert';
import { generatePreflight } from '../../../../src/compiler/generators/preflight.js';

test('generatePreflight', async (t) => {
  await t.test('should generate preflight css', () => {
    const css = generatePreflight({});
    
    assert.ok(css.includes('SenangStart Preflight'), 'Should include header');
    assert.ok(css.includes('box-sizing: border-box'), 'Should include box-sizing reset');
    assert.ok(css.includes('html'), 'Should include html selector');
    assert.ok(css.includes('body'), 'Should include body selector');
  });

  await t.test('should include opinionated defaults', () => {
    const css = generatePreflight({});
    
    assert.ok(css.includes('line-height: 1.5'), 'Should set default line-height');
    assert.ok(css.includes('tab-size: 4'), 'Should set tab-size');
    assert.ok(css.includes('font-family: ui-sans-serif'), 'Should set default font stack');
  });
  
  await t.test('should handle modern-normalize styles', () => {
    const css = generatePreflight({});
    assert.ok(css.includes('abbr:where([title])'), 'Should include abbr styles');
    assert.ok(css.includes('::-webkit-search-decoration'), 'Should include search decoration reset');
  });

  await t.test('should include safe-area-inset support', () => {
    const css = generatePreflight({});
    assert.ok(css.includes('env(safe-area-inset-top)'), 'Should include safe-area-inset-top');
    assert.ok(css.includes('env(safe-area-inset-bottom)'), 'Should include safe-area-inset-bottom');
  });

  await t.test('should include placeholder styling', () => {
    const css = generatePreflight({});
    assert.ok(css.includes('input::placeholder'), 'Should include input placeholder');
    assert.ok(css.includes('--placeholder-color'), 'Should use CSS variable for color');
  });

  await t.test('should include button cursor pointer', () => {
    const css = generatePreflight({});
    assert.ok(css.includes('[role="button"]'), 'Should include role button');
    assert.ok(css.includes('cursor: pointer'), 'Should set pointer cursor');
  });

  await t.test('should include dialog reset', () => {
    const css = generatePreflight({});
    assert.ok(css.includes('dialog'), 'Should include dialog selector');
  });

  await t.test('should include img/video responsive constraints', () => {
    const css = generatePreflight({});
    assert.ok(css.includes('max-width: 100%'), 'Should constrain max-width');
    assert.ok(css.includes('height: auto'), 'Should set auto height');
  });

  await t.test('should include [hidden] rule', () => {
    const css = generatePreflight({});
    assert.ok(css.includes('[hidden]'), 'Should include hidden attribute rule');
    assert.ok(css.includes('display: none'), 'Should set display none');
  });

  await t.test('should not deduplicate box-sizing (appears once)', () => {
    const css = generatePreflight({});
    const matches = css.match(/box-sizing: border-box/g);
    // After Phase 3 fix, box-sizing should appear exactly once in the preflight output
    assert.ok(matches !== null && matches.length === 1, 'box-sizing should appear exactly once');
  });

  await t.test('should not be empty with any config object', () => {
    const css1 = generatePreflight({});
    const css2 = generatePreflight({ theme: { colors: { brand: 'red' } } });
    assert.ok(css1.length > 100);
    assert.ok(css2.length > 100);
  });
});
