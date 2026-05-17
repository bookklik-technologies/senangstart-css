/**
 * SenangStart CSS - Layout & Space Unit Tests
 * Split from css.test.js for focused test maintenance
 */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateCSS } from '../../../../src/compiler/generators/css.js';
import { createTestConfig } from '../../../helpers/test-utils.js';

describe('CSS Generator - Layout', () => {
  describe('Display', () => {
    it('generates flex display', () => {
      const token = { property: 'flex', value: 'flex', attrType: 'layout', raw: 'flex' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('display: flex'));
    });
    it('generates grid display', () => {
      const token = { property: 'grid', value: 'grid', attrType: 'layout', raw: 'grid' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('display: grid'));
    });
    it('generates hidden display', () => {
      const token = { property: 'hidden', value: 'hidden', attrType: 'layout', raw: 'hidden' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('display: none'));
    });
    it('generates block display', () => {
      const token = { property: 'block', value: 'block', attrType: 'layout', raw: 'block' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('display: block'));
    });
    it('generates inline display', () => {
      const token = { property: 'inline', value: 'inline', attrType: 'layout', raw: 'inline' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('display: inline'));
    });
    it('generates inline-block display', () => {
      const token = { property: 'inline-block', value: 'inline-block', attrType: 'layout', raw: 'inline-block' };
      const css = generateCSS([token], createTestConfig());
      assert.ok(css.includes('display: inline-block'));
    });
  });

  describe('Flex Direction', () => {
    it('generates row direction', () => {
      const css = generateCSS([{ property: 'row', value: 'row', attrType: 'layout', raw: 'row' }], createTestConfig());
      assert.ok(css.includes('flex-direction: row'));
    });
    it('generates column direction', () => {
      const css = generateCSS([{ property: 'col', value: 'col', attrType: 'layout', raw: 'col' }], createTestConfig());
      assert.ok(css.includes('flex-direction: column'));
    });
    it('generates row-reverse direction', () => {
      const css = generateCSS([{ property: 'row-reverse', value: 'row-reverse', attrType: 'layout', raw: 'row-reverse' }], createTestConfig());
      assert.ok(css.includes('flex-direction: row-reverse'));
    });
  });

  describe('Flex Wrap', () => {
    it('generates wrap', () => {
      const css = generateCSS([{ property: 'wrap', value: 'wrap', attrType: 'layout', raw: 'wrap' }], createTestConfig());
      assert.ok(css.includes('flex-wrap: wrap'));
    });
    it('generates nowrap', () => {
      const css = generateCSS([{ property: 'nowrap', value: 'nowrap', attrType: 'layout', raw: 'nowrap' }], createTestConfig());
      assert.ok(css.includes('flex-wrap: nowrap'));
    });
  });

  describe('Alignment', () => {
    it('generates center alignment (justify-content + align-items)', () => {
      const css = generateCSS([{ property: 'center', value: 'center', attrType: 'layout', raw: 'center' }], createTestConfig());
      assert.ok(css.includes('justify-content: center'));
      assert.ok(css.includes('align-items: center'));
    });
    it('generates justify:start', () => {
      const css = generateCSS([{ property: 'justify', value: 'start', attrType: 'layout', raw: 'justify:start' }], createTestConfig());
      assert.ok(css.includes('justify-content: flex-start'));
    });
    it('generates justify:between', () => {
      const css = generateCSS([{ property: 'justify', value: 'between', attrType: 'layout', raw: 'justify:between' }], createTestConfig());
      assert.ok(css.includes('justify-content: space-between'));
    });
    it('generates items:center', () => {
      const css = generateCSS([{ property: 'items', value: 'center', attrType: 'layout', raw: 'items:center' }], createTestConfig());
      assert.ok(css.includes('align-items: center'));
    });
    it('generates self:start', () => {
      const css = generateCSS([{ property: 'self', value: 'start', attrType: 'layout', raw: 'self:start' }], createTestConfig());
      assert.ok(css.includes('align-self: flex-start'));
    });
  });

  describe('Position', () => {
    it('generates absolute position', () => {
      const css = generateCSS([{ property: 'absolute', value: 'absolute', attrType: 'layout', raw: 'absolute' }], createTestConfig());
      assert.ok(css.includes('position: absolute'));
    });
    it('generates relative position', () => {
      const css = generateCSS([{ property: 'relative', value: 'relative', attrType: 'layout', raw: 'relative' }], createTestConfig());
      assert.ok(css.includes('position: relative'));
    });
    it('generates fixed position', () => {
      const css = generateCSS([{ property: 'fixed', value: 'fixed', attrType: 'layout', raw: 'fixed' }], createTestConfig());
      assert.ok(css.includes('position: fixed'));
    });
    it('generates sticky position', () => {
      const css = generateCSS([{ property: 'sticky', value: 'sticky', attrType: 'layout', raw: 'sticky' }], createTestConfig());
      assert.ok(css.includes('position: sticky'));
    });
  });

  describe('Grid', () => {
    it('generates grid-cols:3', () => {
      const css = generateCSS([{ property: 'grid-cols', value: '3', attrType: 'layout', raw: 'grid-cols:3' }], createTestConfig());
      assert.ok(css.includes('grid-template-columns: repeat(3, minmax(0, 1fr))'));
    });
    it('generates grid-rows:2', () => {
      const css = generateCSS([{ property: 'grid-rows', value: '2', attrType: 'layout', raw: 'grid-rows:2' }], createTestConfig());
      assert.ok(css.includes('grid-template-rows: repeat(2, minmax(0, 1fr))'));
    });
    it('generates col-span:2', () => {
      const css = generateCSS([{ property: 'col-span', value: '2', attrType: 'layout', raw: 'col-span:2' }], createTestConfig());
      assert.ok(css.includes('grid-column: span 2 / span 2'));
    });
  });

  describe('Z-Index', () => {
    it('generates z:top', () => {
      const css = generateCSS([{ property: 'z', value: 'top', attrType: 'layout', raw: 'z:top' }], createTestConfig());
      assert.ok(css.includes('z-index: var(--z-top)'));
    });
  });
});

describe('CSS Generator - Space', () => {
  describe('Padding', () => {
    it('generates padding (p:medium)', () => {
      const css = generateCSS([{ property: 'p', value: 'medium', attrType: 'space', raw: 'p:medium' }], createTestConfig());
      assert.ok(css.includes('padding: var(--s-medium)'));
    });
    it('generates padding-top (p-t:small)', () => {
      const css = generateCSS([{ property: 'p-t', value: 'small', attrType: 'space', raw: 'p-t:small' }], createTestConfig());
      assert.ok(css.includes('padding-top: var(--s-small)'));
    });
    it('generates padding-x (p-x:big)', () => {
      const css = generateCSS([{ property: 'p-x', value: 'big', attrType: 'space', raw: 'p-x:big' }], createTestConfig());
      assert.ok(css.includes('padding-left: var(--s-big)'));
      assert.ok(css.includes('padding-right: var(--s-big)'));
    });
  });

  describe('Margin', () => {
    it('generates margin (m:medium)', () => {
      const css = generateCSS([{ property: 'm', value: 'medium', attrType: 'space', raw: 'm:medium' }], createTestConfig());
      assert.ok(css.includes('margin: var(--s-medium)'));
    });
    it('generates margin-x (m-x:auto)', () => {
      const css = generateCSS([{ property: 'm-x', value: 'auto', attrType: 'space', raw: 'm-x:auto' }], createTestConfig());
      assert.ok(css.includes('margin-left: auto'));
      assert.ok(css.includes('margin-right: auto'));
    });
  });

  describe('Gap', () => {
    it('generates gap (g:medium)', () => {
      const css = generateCSS([{ property: 'g', value: 'medium', attrType: 'space', raw: 'g:medium' }], createTestConfig());
      assert.ok(css.includes('gap: var(--s-medium)'));
    });
    it('generates column-gap (g-x:small)', () => {
      const css = generateCSS([{ property: 'g-x', value: 'small', attrType: 'space', raw: 'g-x:small' }], createTestConfig());
      assert.ok(css.includes('column-gap: var(--s-small)'));
    });
  });

  describe('Sizing', () => {
    it('generates width (w:[100%])', () => {
      const css = generateCSS([{ property: 'w', value: '100%', isArbitrary: true, attrType: 'space', raw: 'w:[100%]' }], createTestConfig());
      assert.ok(css.includes('width: 100%'));
    });
    it('generates height (h:[50vh])', () => {
      const css = generateCSS([{ property: 'h', value: '50vh', isArbitrary: true, attrType: 'space', raw: 'h:[50vh]' }], createTestConfig());
      assert.ok(css.includes('height: 50vh'));
    });
    it('generates size shorthand with scale value', () => {
      const css = generateCSS([{ property: 'size', value: 'medium', attrType: 'space', raw: 'size:medium' }], createTestConfig());
      assert.ok(css.includes('width: var(--s-medium)'));
      assert.ok(css.includes('height: var(--s-medium)'));
    });
  });
});
