/**
 * SenangStart CSS - CSS Generator Unit Tests
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
  generateCSS, 
  generateCSSVariables, 
  generateRule,
  minifyCSS 
} from '../../../../src/compiler/generators/css.js';
import { createTestConfig, normalizeCSS, findCSSRule } from '../../../helpers/test-utils.js';

describe('CSS Generator', () => {

  describe('generateCSSVariables', () => {
    
    it('generates spacing CSS variables', () => {
      const config = createTestConfig();
      const css = generateCSSVariables(config);
      
      assert.ok(css.includes(':root {'));
      assert.ok(css.includes('--s-tiny: 4px'));
      assert.ok(css.includes('--s-medium: 16px'));
      assert.ok(css.includes('--s-big: 32px'));
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

  describe('Layout Rules', () => {

    describe('Display', () => {
      
      it('generates flex display', () => {
        const token = { property: 'flex', value: 'flex', attrType: 'layout', raw: 'flex' };
        const config = createTestConfig();
        const tokens = [token];
        const css = generateCSS(tokens, config);
        
        assert.ok(css.includes('display: flex'));
      });

      it('generates grid display', () => {
        const token = { property: 'grid', value: 'grid', attrType: 'layout', raw: 'grid' };
        const config = createTestConfig();
        const tokens = [token];
        const css = generateCSS(tokens, config);
        
        assert.ok(css.includes('display: grid'));
      });

      it('generates hidden display', () => {
        const token = { property: 'hidden', value: 'hidden', attrType: 'layout', raw: 'hidden' };
        const config = createTestConfig();
        const tokens = [token];
        const css = generateCSS(tokens, config);
        
        assert.ok(css.includes('display: none'));
      });

      it('generates block display', () => {
        const token = { property: 'block', value: 'block', attrType: 'layout', raw: 'block' };
        const config = createTestConfig();
        const tokens = [token];
        const css = generateCSS(tokens, config);
        
        assert.ok(css.includes('display: block'));
      });

      it('generates inline display', () => {
        const token = { property: 'inline', value: 'inline', attrType: 'layout', raw: 'inline' };
        const config = createTestConfig();
        const tokens = [token];
        const css = generateCSS(tokens, config);
        
        assert.ok(css.includes('display: inline-block'));
      });

    });

    describe('Flex Direction', () => {

      it('generates row direction', () => {
        const token = { property: 'row', value: 'row', attrType: 'layout', raw: 'row' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('flex-direction: row'));
      });

      it('generates column direction', () => {
        const token = { property: 'col', value: 'col', attrType: 'layout', raw: 'col' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('flex-direction: column'));
      });

      it('generates row-reverse direction', () => {
        const token = { property: 'row-reverse', value: 'row-reverse', attrType: 'layout', raw: 'row-reverse' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('flex-direction: row-reverse'));
      });

    });

    describe('Flex Wrap', () => {

      it('generates wrap', () => {
        const token = { property: 'wrap', value: 'wrap', attrType: 'layout', raw: 'wrap' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('flex-wrap: wrap'));
      });

      it('generates nowrap', () => {
        const token = { property: 'nowrap', value: 'nowrap', attrType: 'layout', raw: 'nowrap' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('flex-wrap: nowrap'));
      });

    });

    describe('Alignment', () => {

      it('generates center alignment', () => {
        const token = { property: 'center', value: 'center', attrType: 'layout', raw: 'center' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('justify-content: center'));
        assert.ok(css.includes('align-items: center'));
      });

      it('generates justify:start', () => {
        const token = { property: 'justify', value: 'start', attrType: 'layout', raw: 'justify:start' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('justify-content: flex-start'));
      });

      it('generates justify:between', () => {
        const token = { property: 'justify', value: 'between', attrType: 'layout', raw: 'justify:between' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('justify-content: space-between'));
      });

      it('generates items:center', () => {
        const token = { property: 'items', value: 'center', attrType: 'layout', raw: 'items:center' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('align-items: center'));
      });

      it('generates self:start', () => {
        const token = { property: 'self', value: 'start', attrType: 'layout', raw: 'self:start' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('align-self: flex-start'));
      });

    });

    describe('Position', () => {

      it('generates absolute position', () => {
        const token = { property: 'absolute', value: 'absolute', attrType: 'layout', raw: 'absolute' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('position: absolute'));
      });

      it('generates relative position', () => {
        const token = { property: 'relative', value: 'relative', attrType: 'layout', raw: 'relative' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('position: relative'));
      });

      it('generates fixed position', () => {
        const token = { property: 'fixed', value: 'fixed', attrType: 'layout', raw: 'fixed' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('position: fixed'));
      });

      it('generates sticky position', () => {
        const token = { property: 'sticky', value: 'sticky', attrType: 'layout', raw: 'sticky' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('position: sticky'));
      });

    });

    describe('Grid', () => {

      it('generates grid-cols:3', () => {
        const token = { property: 'grid-cols', value: '3', attrType: 'layout', raw: 'grid-cols:3' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('grid-template-columns: repeat(3, minmax(0, 1fr))'));
      });

      it('generates grid-rows:2', () => {
        const token = { property: 'grid-rows', value: '2', attrType: 'layout', raw: 'grid-rows:2' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('grid-template-rows: repeat(2, minmax(0, 1fr))'));
      });

      it('generates col-span:2', () => {
        const token = { property: 'col-span', value: '2', attrType: 'layout', raw: 'col-span:2' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('grid-column: span 2 / span 2'));
      });

    });

    describe('Z-Index', () => {

      it('generates z:top', () => {
        const token = { property: 'z', value: 'top', attrType: 'layout', raw: 'z:top' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('z-index: var(--z-top)'));
      });

    });

  });

  describe('Space Rules', () => {

    describe('Padding', () => {

      it('generates padding (p:medium)', () => {
        const token = { property: 'p', value: 'medium', attrType: 'space', raw: 'p:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('padding: var(--s-medium)'));
      });

      it('generates padding-top (p-t:small)', () => {
        const token = { property: 'p-t', value: 'small', attrType: 'space', raw: 'p-t:small' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('padding-top: var(--s-small)'));
      });

      it('generates padding-x (p-x:big)', () => {
        const token = { property: 'p-x', value: 'big', attrType: 'space', raw: 'p-x:big' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('padding-left: var(--s-big)'));
        assert.ok(css.includes('padding-right: var(--s-big)'));
      });

      it('generates padding-y (p-y:tiny)', () => {
        const token = { property: 'p-y', value: 'tiny', attrType: 'space', raw: 'p-y:tiny' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('padding-top: var(--s-tiny)'));
        assert.ok(css.includes('padding-bottom: var(--s-tiny)'));
      });

    });

    describe('Margin', () => {

      it('generates margin (m:medium)', () => {
        const token = { property: 'm', value: 'medium', attrType: 'space', raw: 'm:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('margin: var(--s-medium)'));
      });

      it('generates margin-x (m-x:auto)', () => {
        const token = { property: 'm-x', value: 'auto', attrType: 'space', raw: 'm-x:auto' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('margin-left: auto'));
        assert.ok(css.includes('margin-right: auto'));
      });

    });

    describe('Gap', () => {

      it('generates gap (g:medium)', () => {
        const token = { property: 'g', value: 'medium', attrType: 'space', raw: 'g:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('gap: var(--s-medium)'));
      });

      it('generates column-gap (g-x:small)', () => {
        const token = { property: 'g-x', value: 'small', attrType: 'space', raw: 'g-x:small' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('column-gap: var(--s-small)'));
      });

      it('generates row-gap (g-y:big)', () => {
        const token = { property: 'g-y', value: 'big', attrType: 'space', raw: 'g-y:big' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('row-gap: var(--s-big)'));
      });

    });

    describe('Sizing', () => {

      it('generates width (w:[100%])', () => {
        const token = { property: 'w', value: '100%', isArbitrary: true, attrType: 'space', raw: 'w:[100%]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('width: 100%'));
      });

      it('generates height (h:[50vh])', () => {
        const token = { property: 'h', value: '50vh', isArbitrary: true, attrType: 'space', raw: 'h:[50vh]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('height: 50vh'));
      });

      it('generates min-width', () => {
        const token = { property: 'min-w', value: '300px', isArbitrary: true, attrType: 'space', raw: 'min-w:[300px]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('min-width: 300px'));
      });

      it('generates max-width', () => {
        const token = { property: 'max-w', value: '1200px', isArbitrary: true, attrType: 'space', raw: 'max-w:[1200px]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('max-width: 1200px'));
      });

    });

  });

  describe('Visual Rules', () => {

    describe('Background', () => {

      it('generates background-color', () => {
        const token = { property: 'bg', value: 'primary', attrType: 'visual', raw: 'bg:primary' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('background-color: var(--c-primary)'));
      });

      it('generates arbitrary background-color', () => {
        const token = { property: 'bg', value: '#FF5733', isArbitrary: true, attrType: 'visual', raw: 'bg:[#FF5733]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('background-color: #FF5733'));
      });

    });

    describe('CSS Color Keywords', () => {

      it('generates bg:transparent without var() wrapping', () => {
        const token = { property: 'bg', value: 'transparent', attrType: 'visual', raw: 'bg:transparent' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('background-color: transparent'));
        assert.ok(!css.includes('var(--c-transparent)'));
      });

      it('generates text:currentColor without var() wrapping', () => {
        const token = { property: 'text', value: 'currentColor', attrType: 'visual', raw: 'text:currentColor' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('color: currentColor'));
        assert.ok(!css.includes('var(--c-currentColor)'));
      });

      it('generates border:transparent without var() wrapping', () => {
        const token = { property: 'border', value: 'transparent', attrType: 'visual', raw: 'border:transparent' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('border-color: transparent'));
        assert.ok(!css.includes('var(--c-transparent)'));
      });

      it('generates border:inherit without var() wrapping', () => {
        const token = { property: 'border', value: 'inherit', attrType: 'visual', raw: 'border:inherit' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('border-color: inherit'));
        assert.ok(!css.includes('var(--c-inherit)'));
      });

      it('generates outline:currentColor without var() wrapping', () => {
        const token = { property: 'outline', value: 'currentColor', attrType: 'visual', raw: 'outline:currentColor' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('outline-color: currentColor'));
        assert.ok(!css.includes('var(--c-currentColor)'));
      });

      it('generates divide:transparent without var() wrapping', () => {
        const token = { property: 'divide', value: 'transparent', attrType: 'visual', raw: 'divide:transparent' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('border-color: transparent'));
        assert.ok(!css.includes('var(--c-transparent)'));
      });

      it('generates from:transparent for gradients without var() wrapping', () => {
        const token = { property: 'from', value: 'transparent', attrType: 'visual', raw: 'from:transparent' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('--ss-gradient-from: transparent'));
        assert.ok(!css.includes('var(--c-transparent)'));
      });

      it('generates ring-color:currentColor without var() wrapping', () => {
        const token = { property: 'ring-color', value: 'currentColor', attrType: 'visual', raw: 'ring-color:currentColor' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('--ss-ring-color: currentColor'));
        assert.ok(!css.includes('var(--c-currentColor)'));
      });

    });

    describe('Text', () => {

      it('generates text color', () => {
        const token = { property: 'text', value: 'white', attrType: 'visual', raw: 'text:white' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('color: var(--c-white)'));
      });

      it('generates text-align', () => {
        const token = { property: 'text', value: 'center', attrType: 'visual', raw: 'text:center' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('text-align: center'));
      });

    });

    describe('Border Radius', () => {

      it('generates border-radius', () => {
        const token = { property: 'rounded', value: 'medium', attrType: 'visual', raw: 'rounded:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('border-radius: var(--r-medium)'));
      });

      it('generates rounded-full', () => {
        const token = { property: 'rounded', value: 'full', attrType: 'visual', raw: 'rounded:full' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('border-radius: var(--r-full)'));
      });

    });

    describe('Shadow', () => {
      
      it('generates box-shadow', () => {
        const token = { property: 'shadow', value: 'medium', attrType: 'visual', raw: 'shadow:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('box-shadow: var(--shadow-medium)'));
      });
      
    });
    
    describe('Divide', () => {
      
      it('generates divide color', () => {
        const token = { property: 'divide', value: 'primary', attrType: 'visual', raw: 'divide:primary' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('> :not([hidden]) ~ :not([hidden])'));
        assert.ok(css.includes('border-color: var(--c-primary)'));
        assert.ok(css.includes('border-style: solid'));
      });
      
      it('generates divide-x', () => {
        const token = { property: 'divide-x', value: 'gray-300', attrType: 'visual', raw: 'divide-x:gray-300' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('> :not([hidden]) ~ :not([hidden])'));
        assert.ok(css.includes('border-left-color: var(--c-gray-300)'));
        assert.ok(css.includes('border-right-color: var(--c-gray-300)'));
      });
      
      it('generates divide-y', () => {
        const token = { property: 'divide-y', value: 'danger', attrType: 'visual', raw: 'divide-y:danger' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('> :not([hidden]) ~ :not([hidden])'));
        assert.ok(css.includes('border-top-color: var(--c-danger)'));
        assert.ok(css.includes('border-bottom-color: var(--c-danger)'));
      });
      
      it('generates divide width', () => {
        const token = { property: 'divide-w', value: 'thin', attrType: 'visual', raw: 'divide-w:thin' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('> :not([hidden]) ~ :not([hidden])'));
        assert.ok(css.includes('border-width: var(--s-thin)'));
      });
      
      it('generates divide-x-w', () => {
        const token = { property: 'divide-x-w', value: 'regular', attrType: 'visual', raw: 'divide-x-w:regular' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('> :not([hidden]) ~ :not([hidden])'));
        assert.ok(css.includes('border-left-width: var(--s-regular)'));
        assert.ok(css.includes('border-right-width: var(--s-regular)'));
      });
      
      it('generates divide-y-w', () => {
        const token = { property: 'divide-y-w', value: 'thick', attrType: 'visual', raw: 'divide-y-w:thick' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('> :not([hidden]) ~ :not([hidden])'));
        assert.ok(css.includes('border-top-width: var(--s-thick)'));
        assert.ok(css.includes('border-bottom-width: var(--s-thick)'));
      });
      
      it('generates divide style', () => {
        const token = { property: 'divide-style', value: 'dashed', attrType: 'visual', raw: 'divide-style:dashed' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('> :not([hidden]) ~ :not([hidden])'));
        assert.ok(css.includes('border-style: dashed'));
      });
      
    });
    
    describe('Typography Keywords', () => {

      it('generates italic', () => {
        const token = { property: 'italic', value: 'italic', attrType: 'visual', raw: 'italic' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('font-style: italic'));
      });

      it('generates uppercase', () => {
        const token = { property: 'uppercase', value: 'uppercase', attrType: 'visual', raw: 'uppercase' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('text-transform: uppercase'));
      });

      it('generates underline', () => {
        const token = { property: 'underline', value: 'underline', attrType: 'visual', raw: 'underline' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('text-decoration-line: underline'));
      });

      it('generates truncate', () => {
        const token = { property: 'truncate', value: 'truncate', attrType: 'visual', raw: 'truncate' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('overflow: hidden'));
        assert.ok(css.includes('text-overflow: ellipsis'));
        assert.ok(css.includes('white-space: nowrap'));
      });

    });

    describe('Opacity', () => {

      it('generates opacity', () => {
        const token = { property: 'opacity', value: '50', attrType: 'visual', raw: 'opacity:50' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        
        assert.ok(css.includes('opacity: 0.5'));
      });

    });

  });

  describe('Responsive Breakpoints', () => {

    it('wraps mob: in media query', () => {
      const token = { 
        breakpoint: 'mob', 
        property: 'p', 
        value: 'big', 
        attrType: 'space', 
        raw: 'mob:p:big' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes('@media (min-width: 480px)'));
      assert.ok(css.includes('padding: var(--s-big)'));
    });

    it('wraps tab: in media query', () => {
      const token = { 
        breakpoint: 'tab', 
        property: 'grid-cols', 
        value: '2', 
        attrType: 'layout', 
        raw: 'tab:grid-cols:2' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes('@media (min-width: 768px)'));
    });

    it('wraps lap: in media query', () => {
      const token = { 
        breakpoint: 'lap', 
        property: 'w', 
        value: '50%', 
        isArbitrary: true,
        attrType: 'space', 
        raw: 'lap:w:[50%]' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes('@media (min-width: 1024px)'));
    });

    it('wraps desk: in media query', () => {
      const token = { 
        breakpoint: 'desk', 
        property: 'row', 
        value: 'row', 
        attrType: 'layout', 
        raw: 'desk:row' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes('@media (min-width: 1280px)'));
    });

  });

  describe('State Pseudo-classes', () => {

    it('generates :hover pseudo-class', () => {
      const token = { 
        state: 'hover', 
        property: 'bg', 
        value: 'secondary', 
        attrType: 'visual', 
        raw: 'hover:bg:secondary' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes(':hover'));
      assert.ok(css.includes('background-color: var(--c-secondary)'));
    });

    it('generates :focus pseudo-class', () => {
      const token = { 
        state: 'focus', 
        property: 'shadow', 
        value: 'big', 
        attrType: 'visual', 
        raw: 'focus:shadow:big' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes(':focus'));
    });

    it('generates :active pseudo-class', () => {
      const token = { 
        state: 'active', 
        property: 'bg', 
        value: 'primary', 
        attrType: 'visual', 
        raw: 'active:bg:primary' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes(':active'));
    });

    it('generates :disabled pseudo-class', () => {
      const token = { 
        state: 'disabled', 
        property: 'opacity', 
        value: '50', 
        attrType: 'visual', 
        raw: 'disabled:opacity:50' 
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      
      assert.ok(css.includes(':disabled'));
    });

  });

  describe('Dark Mode', () => {

    it('generates media-based dark mode', () => {
      const token = { 
        state: 'dark', 
        property: 'bg', 
        value: 'black', 
        attrType: 'visual', 
        raw: 'dark:bg:black' 
      };
      const config = createTestConfig({ darkMode: 'media' });
      const css = generateCSS([token], config);
      
      assert.ok(css.includes('@media (prefers-color-scheme: dark)'));
    });

    it('generates selector-based dark mode', () => {
      const token = { 
        state: 'dark', 
        property: 'bg', 
        value: 'black', 
        attrType: 'visual', 
        raw: 'dark:bg:black' 
      };
      const config = createTestConfig({ darkMode: 'selector' });
      const css = generateCSS([token], config);
      
      assert.ok(css.includes('.dark'));
    });

  });

  describe('minifyCSS', () => {

    it('removes whitespace and comments', () => {
      const css = `
        /* Comment */
        .test {
          color: red;
        }
      `;
      const minified = minifyCSS(css);
      
      assert.ok(!minified.includes('/* Comment */'));
      assert.ok(!minified.includes('\n'));
    });

    it('preserves functional CSS', () => {
      const css = '[layout~="flex"] { display: flex; }';
      const minified = minifyCSS(css);
      
      assert.ok(minified.includes('display:flex') || minified.includes('display: flex'));
    });

  });

  describe('3D Transforms', () => {

    describe('Perspective', () => {

      it('generates perspective: none', () => {
        const token = { property: 'perspective', value: 'none', attrType: 'visual', raw: 'perspective:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective: none'));
      });

      it('generates perspective: small', () => {
        const token = { property: 'perspective', value: 'small', attrType: 'visual', raw: 'perspective:small' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective: 250px'));
      });

      it('generates perspective: medium', () => {
        const token = { property: 'perspective', value: 'medium', attrType: 'visual', raw: 'perspective:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective: 500px'));
      });

      it('generates perspective: big', () => {
        const token = { property: 'perspective', value: 'big', attrType: 'visual', raw: 'perspective:big' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective: 750px'));
      });

      it('generates perspective: giant', () => {
        const token = { property: 'perspective', value: 'giant', attrType: 'visual', raw: 'perspective:giant' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective: 1000px'));
      });

      it('generates perspective: vast', () => {
        const token = { property: 'perspective', value: 'vast', attrType: 'visual', raw: 'perspective:vast' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective: 1500px'));
      });

      it('generates perspective with arbitrary value', () => {
        const token = { property: 'perspective', value: '600px', isArbitrary: true, attrType: 'visual', raw: 'perspective:[600px]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective: 600px'));
      });
    });

    describe('Perspective Origin', () => {

      it('generates perspective-origin: center', () => {
        const token = { property: 'perspective-origin', value: 'center', attrType: 'visual', raw: 'perspective-origin:center' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective-origin: center'));
      });

      it('generates perspective-origin: top', () => {
        const token = { property: 'perspective-origin', value: 'top', attrType: 'visual', raw: 'perspective-origin:top' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective-origin: top'));
      });

      it('generates perspective-origin: bottom', () => {
        const token = { property: 'perspective-origin', value: 'bottom', attrType: 'visual', raw: 'perspective-origin:bottom' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective-origin: bottom'));
      });

      it('generates perspective-origin: top-left', () => {
        const token = { property: 'perspective-origin', value: 'top-left', attrType: 'visual', raw: 'perspective-origin:top-left' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective-origin: top left'));
      });

      it('generates perspective-origin with arbitrary value', () => {
        const token = { property: 'perspective-origin', value: '30% 70%', isArbitrary: true, attrType: 'visual', raw: 'perspective-origin:[30%_70%]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('perspective-origin: 30% 70%'));
      });
    });

    describe('3D Rotation (Rotate X/Y/Z)', () => {

      it('generates rotate-x', () => {
        const token = { property: 'rotate-x', value: '45', attrType: 'visual', raw: 'rotate-x:45' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: rotateX(45deg)'));
      });

      it('generates rotate-y', () => {
        const token = { property: 'rotate-y', value: '90', attrType: 'visual', raw: 'rotate-y:90' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: rotateY(90deg)'));
      });

      it('generates rotate-z', () => {
        const token = { property: 'rotate-z', value: '45', attrType: 'visual', raw: 'rotate-z:45' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: rotateZ(45deg)'));
      });

      it('generates rotate (same as rotate-z)', () => {
        const token = { property: 'rotate', value: '180', attrType: 'visual', raw: 'rotate:180' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: rotate(180deg)'));
      });

      it('generates rotate-x with arbitrary degrees', () => {
        const token = { property: 'rotate-x', value: '30deg', isArbitrary: true, attrType: 'visual', raw: 'rotate-x:[30deg]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: rotateX(30deg)'));
      });
    });

    describe('Skew Transforms', () => {

      it('generates skew-x', () => {
        const token = { property: 'skew-x', value: '6', attrType: 'visual', raw: 'skew-x:6' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: skewX(6deg)'));
      });

      it('generates skew-y', () => {
        const token = { property: 'skew-y', value: '12', attrType: 'visual', raw: 'skew-y:12' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: skewY(12deg)'));
      });

      it('generates -skew-x with negative degrees', () => {
        const token = { property: '-skew-x', value: '6', attrType: 'visual', raw: '-skew-x:6' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: skewX(-6deg)'));
      });

      it('generates -skew-y with negative degrees', () => {
        const token = { property: '-skew-y', value: '12', attrType: 'visual', raw: '-skew-y:12' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: skewY(-12deg)'));
      });
    });

    describe('Translate Transforms', () => {

      it('generates translate-x with scale value', () => {
        const token = { property: 'translate-x', value: 'medium', attrType: 'visual', raw: 'translate-x:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateX(var(--s-medium))'));
      });

      it('generates translate-x with preset (1/2)', () => {
        const token = { property: 'translate-x', value: '1/2', attrType: 'visual', raw: 'translate-x:1/2' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateX(50%)'));
      });

      it('generates translate-y with scale value', () => {
        const token = { property: 'translate-y', value: 'big', attrType: 'visual', raw: 'translate-y:big' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateY(var(--s-big))'));
      });

      it('generates translate-y with preset (full)', () => {
        const token = { property: 'translate-y', value: 'full', attrType: 'visual', raw: 'translate-y:full' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateY(100%)'));
      });

      it('generates translate-x with negative half', () => {
        const token = { property: 'translate-x', value: '-half', attrType: 'visual', raw: 'translate-x:-half' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateX(-50%)'));
      });

      it('generates translate-x with negative full', () => {
        const token = { property: 'translate-x', value: '-full', attrType: 'visual', raw: 'translate-x:-full' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateX(-100%)'));
      });

      it('generates translate-y with negative third', () => {
        const token = { property: 'translate-y', value: '-third', attrType: 'visual', raw: 'translate-y:-third' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateY(-33.333333%)'));
      });

      it('generates translate-y with negative quarter-3x', () => {
        const token = { property: 'translate-y', value: '-quarter-3x', attrType: 'visual', raw: 'translate-y:-quarter-3x' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateY(-75%)'));
      });
    });

    describe('Scale Transforms', () => {

      it('generates scale with percentage value', () => {
        const token = { property: 'scale', value: '75', attrType: 'visual', raw: 'scale:75' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: scale(0.75)'));
      });

      it('generates scale-x with percentage value', () => {
        const token = { property: 'scale-x', value: '50', attrType: 'visual', raw: 'scale-x:50' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: scaleX(0.5)'));
      });

      it('generates scale-y with percentage value', () => {
        const token = { property: 'scale-y', value: '125', attrType: 'visual', raw: 'scale-y:125' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: scaleY(1.25)'));
      });
    });

    describe('3D Translation (Translate Z)', () => {

      it('generates translate-z with arbitrary px', () => {
        const token = { property: 'translate-z', value: '100px', isArbitrary: true, attrType: 'visual', raw: 'translate-z:[100px]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform: translateZ(100px)'));
      });
    });

    describe('Transform Style', () => {

      it('generates transform-style: flat', () => {
        const token = { property: 'transform-style', value: 'flat', attrType: 'visual', raw: 'transform-style:flat' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform-style: flat'));
      });

      it('generates transform-style: preserve-3d', () => {
        const token = { property: 'transform-style', value: 'preserve-3d', attrType: 'visual', raw: 'transform-style:preserve-3d' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform-style: preserve-3d'));
      });
    });

    describe('Backface Visibility', () => {

      it('generates backface: visible', () => {
        const token = { property: 'backface', value: 'visible', attrType: 'visual', raw: 'backface:visible' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('backface-visibility: visible'));
      });

      it('generates backface: hidden', () => {
        const token = { property: 'backface', value: 'hidden', attrType: 'visual', raw: 'backface:hidden' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('backface-visibility: hidden'));
      });
    });

    describe('Transform Origin', () => {

      it('generates origin: center', () => {
        const token = { property: 'origin', value: 'center', attrType: 'visual', raw: 'origin:center' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform-origin: center'));
      });

      it('generates origin: top-left', () => {
        const token = { property: 'origin', value: 'top-left', attrType: 'visual', raw: 'origin:top-left' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform-origin: top left'));
      });

      it('generates origin with arbitrary value', () => {
        const token = { property: 'origin', value: '50% 50%', isArbitrary: true, attrType: 'visual', raw: 'origin:[50%_50%]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('transform-origin: 50% 50%'));
      });
    });
  });

  describe('Animation Utilities', () => {

    it('generates animation-delay with scale value', () => {
      const token = { property: 'animation-delay', value: 'slow', attrType: 'visual', raw: 'animation-delay:slow' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation-delay: 300ms'));
    });

    it('generates animation-delay with arbitrary value', () => {
      const token = { property: 'animation-delay', value: '500ms', isArbitrary: true, attrType: 'visual', raw: 'animation-delay:[500ms]' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation-delay: 500ms'));
    });

    it('generates animation-iteration-count', () => {
      const token = { property: 'animation-iteration', value: 'infinite', attrType: 'visual', raw: 'animation-iteration:infinite' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation-iteration-count: infinite'));
    });

    it('generates animation-direction', () => {
      const token = { property: 'animation-direction', value: 'reverse', attrType: 'visual', raw: 'animation-direction:reverse' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation-direction: reverse'));
    });

    it('generates animation-fill-mode', () => {
      const token = { property: 'animation-fill', value: 'forwards', attrType: 'visual', raw: 'animation-fill:forwards' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation-fill-mode: forwards'));
    });

    it('generates animation-play-state', () => {
      const token = { property: 'animation-play', value: 'paused', attrType: 'visual', raw: 'animation-play:paused' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation-play-state: paused'));
    });

    it('generates animate preset (spin)', () => {
      const token = { property: 'animate', value: 'spin', attrType: 'visual', raw: 'animate:spin' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation: spin 1s linear infinite'));
    });

    it('generates animation-duration with scale value', () => {
      const token = { property: 'animation-duration', value: 'slow', attrType: 'visual', raw: 'animation-duration:slow' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('animation-duration: 300ms'));
    });

    it('generates transition-delay with scale value', () => {
      const token = { property: 'delay', value: 'fast', attrType: 'visual', raw: 'delay:fast' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('transition-delay: 150ms'));
    });

    it('generates transition-behavior', () => {
      const token = { property: 'transition-behavior', value: 'allow-discrete', attrType: 'visual', raw: 'transition-behavior:allow-discrete' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('transition-behavior: allow-discrete'));
    });

  });

  describe('Transition Utilities', () => {

    it('generates transition-none', () => {
      const token = { property: 'transition-none', value: '', attrType: 'visual', raw: 'transition-none' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('transition-property: none'));
    });

    it('generates duration with scale value', () => {
      const token = { property: 'duration', value: 'slow', attrType: 'visual', raw: 'duration:slow' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('transition-duration: 300ms'));
    });

    it('generates ease with preset value', () => {
      const token = { property: 'ease', value: 'in', attrType: 'visual', raw: 'ease:in' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('transition-timing-function: cubic-bezier(0.4, 0, 1, 1)'));
    });

    it('generates ease (linear)', () => {
      const token = { property: 'ease', value: 'linear', attrType: 'visual', raw: 'ease:linear' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('transition-timing-function: linear'));
    });

    it('generates transition preset', () => {
      const token = { property: 'transition', value: 'colors', attrType: 'visual', raw: 'transition:colors' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('transition-property:'));
      assert.ok(css.includes('transition-duration: 150ms'));
    });

  });

  describe('Backdrop Filter Utilities', () => {

    it('generates backdrop-saturate', () => {
      const token = { property: 'backdrop-saturate', value: 'vivid', attrType: 'visual', raw: 'backdrop-saturate:vivid' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: saturate(2)'));
    });

    it('generates backdrop-sepia', () => {
      const token = { property: 'backdrop-sepia', value: 'full', attrType: 'visual', raw: 'backdrop-sepia:full' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: sepia(100%)'));
    });

    it('generates backdrop-hue-rotate', () => {
      const token = { property: 'backdrop-hue-rotate', value: '90', attrType: 'visual', raw: 'backdrop-hue-rotate:90' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: hue-rotate(90deg)'));
    });

    it('generates backdrop-invert', () => {
      const token = { property: 'backdrop-invert', value: 'full', attrType: 'visual', raw: 'backdrop-invert:full' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: invert(100%)'));
    });

    it('generates backdrop-opacity', () => {
      const token = { property: 'backdrop-opacity', value: 'half', attrType: 'visual', raw: 'backdrop-opacity:half' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: opacity(0.5)'));
    });

  });

  describe('Filter Utilities', () => {

    it('generates brightness', () => {
      const token = { property: 'brightness', value: 'vivid', attrType: 'visual', raw: 'brightness:vivid' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: brightness(1.5)'));
    });

    it('generates contrast', () => {
      const token = { property: 'contrast', value: 'high', attrType: 'visual', raw: 'contrast:high' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: contrast(1.25)'));
    });

    it('generates drop-shadow', () => {
      const token = { property: 'drop-shadow', value: 'medium', attrType: 'visual', raw: 'drop-shadow:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: drop-shadow('));
    });

    it('generates grayscale', () => {
      const token = { property: 'grayscale', value: 'full', attrType: 'visual', raw: 'grayscale:full' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: grayscale(100%)'));
    });

    it('generates hue-rotate', () => {
      const token = { property: 'hue-rotate', value: '180', attrType: 'visual', raw: 'hue-rotate:180' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: hue-rotate(180deg)'));
    });

    it('generates invert', () => {
      const token = { property: 'invert', value: 'full', attrType: 'visual', raw: 'invert:full' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: invert(100%)'));
    });

    it('generates saturate', () => {
      const token = { property: 'saturate', value: 'vivid', attrType: 'visual', raw: 'saturate:vivid' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: saturate(2)'));
    });

    it('generates sepia', () => {
      const token = { property: 'sepia', value: 'full', attrType: 'visual', raw: 'sepia:full' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: sepia(100%)'));
    });

    it('generates backdrop-blur', () => {
      const token = { property: 'backdrop-blur', value: 'big', attrType: 'visual', raw: 'backdrop-blur:big' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: blur(12px)'));
    });

    it('generates backdrop-brightness', () => {
      const token = { property: 'backdrop-brightness', value: 'bright', attrType: 'visual', raw: 'backdrop-brightness:bright' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: brightness(1.25)'));
    });

    it('generates backdrop-contrast', () => {
      const token = { property: 'backdrop-contrast', value: 'max', attrType: 'visual', raw: 'backdrop-contrast:max' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: contrast(1.5)'));
    });

    it('generates backdrop-grayscale', () => {
      const token = { property: 'backdrop-grayscale', value: 'partial', attrType: 'visual', raw: 'backdrop-grayscale:partial' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('backdrop-filter: grayscale(50%)'));
    });

    it('generates blur filter', () => {
      const token = { property: 'blur', value: 'big', attrType: 'visual', raw: 'blur:big' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('filter: blur(12px)'));
    });

    it('generates mask-size', () => {
      const token = { property: 'mask-size', value: 'cover', attrType: 'visual', raw: 'mask-size:cover' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-size: cover'));
    });

    it('generates mask-type', () => {
      const token = { property: 'mask-type', value: 'luminance', attrType: 'visual', raw: 'mask-type:luminance' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-type: luminance'));
    });

    it('generates content', () => {
      const token = { property: 'content', value: 'hello', attrType: 'visual', raw: 'content:hello' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('content: '));
    });

    it('generates mask-origin', () => {
      const token = { property: 'mask-origin', value: 'border', attrType: 'visual', raw: 'mask-origin:border' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-origin: border-box'));
    });

    it('generates mask-position', () => {
      const token = { property: 'mask-position', value: 'top-right', attrType: 'visual', raw: 'mask-position:top-right' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-position: top right'));
    });

    it('generates mask-repeat', () => {
      const token = { property: 'mask-repeat', value: 'no-repeat', attrType: 'visual', raw: 'mask-repeat:no-repeat' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-repeat: no-repeat'));
    });

    it('generates mask-clip', () => {
      const token = { property: 'mask-clip', value: 'text', attrType: 'visual', raw: 'mask-clip:text' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-clip: text'));
    });

    it('generates mask-composite', () => {
      const token = { property: 'mask-composite', value: 'add', attrType: 'visual', raw: 'mask-composite:add' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-composite: add'));
    });

    it('generates mask-image', () => {
      const token = { property: 'mask-image', value: 'path/to/mask.png', attrType: 'visual', raw: 'mask-image:path/to/mask.png' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-image: url('));
    });

    it('generates mask-mode', () => {
      const token = { property: 'mask-mode', value: 'luminance', attrType: 'visual', raw: 'mask-mode:luminance' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mask-mode: luminance'));
    });

    it('generates outline-style', () => {
      const token = { property: 'outline-style', value: 'dashed', attrType: 'visual', raw: 'outline-style:dashed' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('outline-style: dashed'));
    });

    it('generates outline-offset', () => {
      const token = { property: 'outline-offset', value: 'medium', attrType: 'visual', raw: 'outline-offset:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('outline-offset: var(--s-medium)'));
    });

    it('generates mix-blend', () => {
      const token = { property: 'mix-blend', value: 'overlay', attrType: 'visual', raw: 'mix-blend:overlay' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('mix-blend-mode: overlay'));
    });

    it('generates outline color', () => {
      const token = { property: 'outline', value: 'primary', attrType: 'visual', raw: 'outline:primary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('outline-color: var(--c-primary)'));
    });

    it('generates divide-x color', () => {
      const token = { property: 'divide-x', value: 'secondary', attrType: 'visual', raw: 'divide-x:secondary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-left-color: var(--c-secondary)'));
    });

    it('generates divide-x reverse', () => {
      const token = { property: 'divide-x', value: 'reverse', attrType: 'visual', raw: 'divide-x:reverse' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('--ss-divide-x-reverse: 1'));
    });

    it('generates divide-y color', () => {
      const token = { property: 'divide-y', value: 'primary', attrType: 'visual', raw: 'divide-y:primary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-top-color: var(--c-primary)'));
    });

    it('generates divide-y reverse', () => {
      const token = { property: 'divide-y', value: 'reverse', attrType: 'visual', raw: 'divide-y:reverse' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('--ss-divide-y-reverse: 1'));
    });

    it('generates outline-w', () => {
      const token = { property: 'outline-w', value: 'medium', attrType: 'visual', raw: 'outline-w:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('outline-width: var(--s-medium)'));
    });

  });

  describe('Border Directional Utilities', () => {

    it('generates border color', () => {
      const token = { property: 'border', value: 'primary', attrType: 'visual', raw: 'border:primary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-color: var(--c-primary)'));
    });

    it('generates border-t color', () => {
      const token = { property: 'border-t', value: 'secondary', attrType: 'visual', raw: 'border-t:secondary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-top-color: var(--c-secondary)'));
    });

    it('generates border-b color', () => {
      const token = { property: 'border-b', value: 'accent', attrType: 'visual', raw: 'border-b:accent' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-bottom-color: var(--c-accent)'));
    });

    it('generates border-l color', () => {
      const token = { property: 'border-l', value: 'primary', attrType: 'visual', raw: 'border-l:primary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-left-color: var(--c-primary)'));
    });

    it('generates border-r color', () => {
      const token = { property: 'border-r', value: 'secondary', attrType: 'visual', raw: 'border-r:secondary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-right-color: var(--c-secondary)'));
    });

    it('generates border-x color', () => {
      const token = { property: 'border-x', value: 'primary', attrType: 'visual', raw: 'border-x:primary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-left-color: var(--c-primary)'));
      assert.ok(css.includes('border-right-color: var(--c-primary)'));
    });

    it('generates border-y color', () => {
      const token = { property: 'border-y', value: 'secondary', attrType: 'visual', raw: 'border-y:secondary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-top-color: var(--c-secondary)'));
      assert.ok(css.includes('border-bottom-color: var(--c-secondary)'));
    });

    it('generates border-w', () => {
      const token = { property: 'border-w', value: 'medium', attrType: 'visual', raw: 'border-w:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-width: var(--s-medium)'));
    });

    it('generates border-t-w', () => {
      const token = { property: 'border-t-w', value: 'small', attrType: 'visual', raw: 'border-t-w:small' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-top-width: var(--s-small)'));
    });

    it('generates border-b-w', () => {
      const token = { property: 'border-b-w', value: 'medium', attrType: 'visual', raw: 'border-b-w:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-bottom-width: var(--s-medium)'));
    });

    it('generates border-l-w', () => {
      const token = { property: 'border-l-w', value: 'big', attrType: 'visual', raw: 'border-l-w:big' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-left-width: var(--s-big)'));
    });

    it('generates border-r-w', () => {
      const token = { property: 'border-r-w', value: 'small', attrType: 'visual', raw: 'border-r-w:small' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-right-width: var(--s-small)'));
    });

    it('generates border-x-w', () => {
      const token = { property: 'border-x-w', value: 'medium', attrType: 'visual', raw: 'border-x-w:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-left-width: var(--s-medium)'));
      assert.ok(css.includes('border-right-width: var(--s-medium)'));
    });

    it('generates border-y-w', () => {
      const token = { property: 'border-y-w', value: 'small', attrType: 'visual', raw: 'border-y-w:small' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-top-width: var(--s-small)'));
      assert.ok(css.includes('border-bottom-width: var(--s-small)'));
    });

    it('generates border-style', () => {
      const token = { property: 'border-style', value: 'dashed', attrType: 'visual', raw: 'border-style:dashed' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('border-style: dashed'));
    });

  });

  describe('Text Decoration Utilities', () => {

    it('generates decoration-thickness', () => {
      const token = { property: 'decoration-thickness', value: '2', attrType: 'visual', raw: 'decoration-thickness:2' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('text-decoration-thickness: 2px'));
    });

    it('generates underline-offset', () => {
      const token = { property: 'underline-offset', value: '4', attrType: 'visual', raw: 'underline-offset:4' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('text-underline-offset: 4px'));
    });

    it('generates text-indent', () => {
      const token = { property: 'indent', value: 'medium', attrType: 'visual', raw: 'indent:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('text-indent: var(--s-medium)'));
    });

    it('generates leading (line-height)', () => {
      const token = { property: 'leading', value: 'relaxed', attrType: 'visual', raw: 'leading:relaxed' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('line-height: 1.625'));
    });

    it('generates line-clamp', () => {
      const token = { property: 'line-clamp', value: '3', attrType: 'visual', raw: 'line-clamp:3' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('-webkit-line-clamp: 3'));
    });

    it('generates decoration color', () => {
      const token = { property: 'decoration', value: 'accent', attrType: 'visual', raw: 'decoration:accent' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('text-decoration-color: var(--c-accent)'));
    });

  });

  describe('Typography Utilities', () => {

    it('generates tracking (letter-spacing)', () => {
      const token = { property: 'tracking', value: 'wide', attrType: 'visual', raw: 'tracking:wide' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('letter-spacing: 0.025em'));
    });

    it('generates font with tw- prefix', () => {
      const token = { property: 'font', value: 'tw-bold', attrType: 'visual', raw: 'font:tw-bold' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('font-weight: var(--tw-font-bold)'));
    });

    it('generates font with arbitrary value', () => {
      const token = { property: 'font', value: '600', attrType: 'visual', isArbitrary: true, raw: 'font:[600]' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('font-weight: 600'));
    });

    it('generates text-size with tw- prefix', () => {
      const token = { property: 'text-size', value: 'tw-lg', attrType: 'visual', raw: 'text-size:tw-lg' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('font-size: var(--tw-text-lg)'));
      assert.ok(css.includes('line-height: var(--tw-leading-lg)'));
    });

    it('generates text-size with arbitrary value', () => {
      const token = { property: 'text-size', value: '18px', attrType: 'visual', isArbitrary: true, raw: 'text-size:[18px]' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('font-size: 18px'));
    });

    it('generates font-family sans', () => {
      const token = { property: 'font', value: 'sans', attrType: 'visual', raw: 'font:sans' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('font-family: ui-sans-serif'));
    });

    it('generates font-family mono', () => {
      const token = { property: 'font', value: 'mono', attrType: 'visual', raw: 'font:mono' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('font-family: ui-monospace'));
    });

  });

  describe('Gradient Utilities', () => {

    it('generates via color', () => {
      const token = { property: 'via', value: 'secondary', attrType: 'visual', raw: 'via:secondary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('--ss-gradient-to'));
      assert.ok(css.includes('var(--c-secondary)'));
    });

    it('generates to color', () => {
      const token = { property: 'to', value: 'accent', attrType: 'visual', raw: 'to:accent' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('--ss-gradient-to: var(--c-accent)'));
    });

    it('generates text-shadow', () => {
      const token = { property: 'text-shadow', value: 'medium', attrType: 'visual', raw: 'text-shadow:medium' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('text-shadow:'));
    });

    it('generates gradient from color', () => {
      const token = { property: 'from', value: 'primary', attrType: 'visual', raw: 'from:primary' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('--ss-gradient-from: var(--c-primary)'));
    });

    it('generates bg-size', () => {
      const token = { property: 'bg-size', value: 'cover', attrType: 'visual', raw: 'bg-size:cover' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('background-size: cover'));
    });

    it('generates bg-blend', () => {
      const token = { property: 'bg-blend', value: 'multiply', attrType: 'visual', raw: 'bg-blend:multiply' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('background-blend-mode: multiply'));
    });

    it('generates bg-position', () => {
      const token = { property: 'bg-position', value: 'top-right', attrType: 'visual', raw: 'bg-position:top-right' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('background-position: top right'));
    });

    it('generates bg-repeat', () => {
      const token = { property: 'bg-repeat', value: 'no-repeat', attrType: 'visual', raw: 'bg-repeat:no-repeat' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('background-repeat: no-repeat'));
    });

    it('generates bg-origin', () => {
      const token = { property: 'bg-origin', value: 'content', attrType: 'visual', raw: 'bg-origin:content' };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      assert.ok(css.includes('background-origin: content-box'));
    });

  });

  describe('Interactivity Utilities', () => {

    describe('Cursor', () => {
      it('generates cursor: pointer', () => {
        const token = { property: 'cursor', value: 'pointer', attrType: 'visual', raw: 'cursor:pointer' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('cursor: pointer'));
      });

      it('generates cursor: not-allowed', () => {
        const token = { property: 'cursor', value: 'not-allowed', attrType: 'visual', raw: 'cursor:not-allowed' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('cursor: not-allowed'));
      });
    });

    describe('Accent Color', () => {
      it('generates accent-color with named color', () => {
        const token = { property: 'accent', value: 'primary', attrType: 'visual', raw: 'accent:primary' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('accent-color: var(--c-primary)'));
      });

      it('generates accent-color with arbitrary value', () => {
        const token = { property: 'accent', value: '#FF0000', isArbitrary: true, attrType: 'visual', raw: 'accent:[#FF0000]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('accent-color: #FF0000'));
      });
    });

    describe('Caret Color', () => {
      it('generates caret-color with named color', () => {
        const token = { property: 'caret', value: 'danger', attrType: 'visual', raw: 'caret:danger' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('caret-color: var(--c-danger)'));
      });
    });

    describe('Pointer Events', () => {
      it('generates pointer-events: none', () => {
        const token = { property: 'pointer-events', value: 'none', attrType: 'visual', raw: 'pointer-events:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('pointer-events: none'));
      });

      it('generates pointer-events: auto', () => {
        const token = { property: 'pointer-events', value: 'auto', attrType: 'visual', raw: 'pointer-events:auto' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('pointer-events: auto'));
      });
    });

    describe('Resize', () => {
      it('generates resize: none', () => {
        const token = { property: 'resize', value: 'none', attrType: 'visual', raw: 'resize:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('resize: none'));
      });

      it('generates resize: x (horizontal)', () => {
        const token = { property: 'resize', value: 'x', attrType: 'visual', raw: 'resize:x' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('resize: horizontal'));
      });

      it('generates resize: y (vertical)', () => {
        const token = { property: 'resize', value: 'y', attrType: 'visual', raw: 'resize:y' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('resize: vertical'));
      });

      it('generates resize: both', () => {
        const token = { property: 'resize', value: 'both', attrType: 'visual', raw: 'resize:both' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('resize: both'));
      });
    });

    describe('Scroll Behavior', () => {
      it('generates scroll-behavior: smooth', () => {
        const token = { property: 'scroll', value: 'smooth', attrType: 'visual', raw: 'scroll:smooth' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-behavior: smooth'));
      });

      it('generates scroll-behavior: auto', () => {
        const token = { property: 'scroll', value: 'auto', attrType: 'visual', raw: 'scroll:auto' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-behavior: auto'));
      });
    });

    describe('Scroll Margin', () => {
      it('generates scroll-margin with scale value', () => {
        const token = { property: 'scroll-m', value: 'medium', attrType: 'visual', raw: 'scroll-m:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-margin: var(--s-medium)'));
      });

      it('generates scroll-margin-x', () => {
        const token = { property: 'scroll-m-x', value: 'small', attrType: 'visual', raw: 'scroll-m-x:small' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-margin-left: var(--s-small)'));
        assert.ok(css.includes('scroll-margin-right: var(--s-small)'));
      });

      it('generates scroll-margin-y', () => {
        const token = { property: 'scroll-m-y', value: 'big', attrType: 'visual', raw: 'scroll-m-y:big' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-margin-top: var(--s-big)'));
        assert.ok(css.includes('scroll-margin-bottom: var(--s-big)'));
      });
    });

    describe('Scroll Padding', () => {
      it('generates scroll-padding', () => {
        const token = { property: 'scroll-p', value: 'medium', attrType: 'visual', raw: 'scroll-p:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-padding: var(--s-medium)'));
      });

      it('generates scroll-padding-x', () => {
        const token = { property: 'scroll-p-x', value: 'tiny', attrType: 'visual', raw: 'scroll-p-x:tiny' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-padding-left: var(--s-tiny)'));
        assert.ok(css.includes('scroll-padding-right: var(--s-tiny)'));
      });

      it('generates scroll-padding-y', () => {
        const token = { property: 'scroll-p-y', value: 'giant', attrType: 'visual', raw: 'scroll-p-y:giant' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-padding-top: var(--s-giant)'));
        assert.ok(css.includes('scroll-padding-bottom: var(--s-giant)'));
      });
    });

    describe('Scroll Snap', () => {
      it('generates scroll-snap-type: none', () => {
        const token = { property: 'snap', value: 'none', attrType: 'visual', raw: 'snap:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-type: none'));
      });

      it('generates scroll-snap-type: x mandatory', () => {
        const token = { property: 'snap', value: 'x', attrType: 'visual', raw: 'snap:x' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-type: x mandatory'));
      });

      it('generates scroll-snap-type: y mandatory', () => {
        const token = { property: 'snap', value: 'y', attrType: 'visual', raw: 'snap:y' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-type: y mandatory'));
      });

      it('generates scroll-snap-type: both mandatory', () => {
        const token = { property: 'snap', value: 'both', attrType: 'visual', raw: 'snap:both' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-type: both mandatory'));
      });
    });

    describe('Scroll Snap Align', () => {
      it('generates scroll-snap-align: start', () => {
        const token = { property: 'snap-align', value: 'start', attrType: 'visual', raw: 'snap-align:start' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-align: start'));
      });

      it('generates scroll-snap-align: center', () => {
        const token = { property: 'snap-align', value: 'center', attrType: 'visual', raw: 'snap-align:center' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-align: center'));
      });
    });

    describe('Scroll Snap Stop', () => {
      it('generates scroll-snap-stop: normal', () => {
        const token = { property: 'snap-stop', value: 'normal', attrType: 'visual', raw: 'snap-stop:normal' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-stop: normal'));
      });

      it('generates scroll-snap-stop: always', () => {
        const token = { property: 'snap-stop', value: 'always', attrType: 'visual', raw: 'snap-stop:always' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-snap-stop: always'));
      });
    });

    describe('Touch Action', () => {
      it('generates touch-action: none', () => {
        const token = { property: 'touch', value: 'none', attrType: 'visual', raw: 'touch:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('touch-action: none'));
      });

      it('generates touch-action: manipulation', () => {
        const token = { property: 'touch', value: 'manipulation', attrType: 'visual', raw: 'touch:manipulation' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('touch-action: manipulation'));
      });

      it('generates touch-action: pan-x', () => {
        const token = { property: 'touch', value: 'pan-x', attrType: 'visual', raw: 'touch:pan-x' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('touch-action: pan-x'));
      });

      it('generates touch-action: pan-y', () => {
        const token = { property: 'touch', value: 'pan-y', attrType: 'visual', raw: 'touch:pan-y' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('touch-action: pan-y'));
      });
    });

    describe('User Select', () => {
      it('generates user-select: none', () => {
        const token = { property: 'select', value: 'none', attrType: 'visual', raw: 'select:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('user-select: none'));
      });

      it('generates user-select: text', () => {
        const token = { property: 'select', value: 'text', attrType: 'visual', raw: 'select:text' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('user-select: text'));
      });

      it('generates user-select: all', () => {
        const token = { property: 'select', value: 'all', attrType: 'visual', raw: 'select:all' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('user-select: all'));
      });
    });

    describe('Will Change', () => {
      it('generates will-change: auto', () => {
        const token = { property: 'will-change', value: 'auto', attrType: 'visual', raw: 'will-change:auto' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('will-change: auto'));
      });

      it('generates will-change: scroll (scroll-position)', () => {
        const token = { property: 'will-change', value: 'scroll', attrType: 'visual', raw: 'will-change:scroll' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('will-change: scroll-position'));
      });

      it('generates will-change: transform', () => {
        const token = { property: 'will-change', value: 'transform', attrType: 'visual', raw: 'will-change:transform' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('will-change: transform'));
      });

      it('generates will-change: opacity', () => {
        const token = { property: 'will-change', value: 'opacity', attrType: 'visual', raw: 'will-change:opacity' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('will-change: opacity'));
      });
    });

    describe('Appearance', () => {
      it('generates appearance: none', () => {
        const token = { property: 'appearance', value: 'none', attrType: 'visual', raw: 'appearance:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('appearance: none'));
      });

      it('generates appearance: auto', () => {
        const token = { property: 'appearance', value: 'auto', attrType: 'visual', raw: 'appearance:auto' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('appearance: auto'));
      });
    });

    describe('Field Sizing', () => {
      it('generates field-sizing: content', () => {
        const token = { property: 'field-sizing', value: 'content', attrType: 'visual', raw: 'field-sizing:content' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('field-sizing: content'));
      });
    });

    describe('Color Scheme', () => {
      it('generates color-scheme: light', () => {
        const token = { property: 'color-scheme', value: 'light', attrType: 'visual', raw: 'color-scheme:light' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('color-scheme: light'));
      });

      it('generates color-scheme: dark', () => {
        const token = { property: 'color-scheme', value: 'dark', attrType: 'visual', raw: 'color-scheme:dark' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('color-scheme: dark'));
      });
    });

  });

  describe('SVG Utilities', () => {

    describe('Fill', () => {
      it('generates fill: none', () => {
        const token = { property: 'fill', value: 'none', attrType: 'visual', raw: 'fill:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('fill: none'));
      });

      it('generates fill: currentColor', () => {
        const token = { property: 'fill', value: 'current', attrType: 'visual', raw: 'fill:current' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('fill: currentColor'));
      });

      it('generates fill with named color', () => {
        const token = { property: 'fill', value: 'primary', attrType: 'visual', raw: 'fill:primary' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('fill: var(--c-primary)'));
      });

      it('generates fill with arbitrary value', () => {
        const token = { property: 'fill', value: '#00FF00', isArbitrary: true, attrType: 'visual', raw: 'fill:[#00FF00]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('fill: #00FF00'));
      });
    });

    describe('Stroke', () => {
      it('generates stroke: none', () => {
        const token = { property: 'stroke', value: 'none', attrType: 'visual', raw: 'stroke:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('stroke: none'));
      });

      it('generates stroke: currentColor', () => {
        const token = { property: 'stroke', value: 'current', attrType: 'visual', raw: 'stroke:current' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('stroke: currentColor'));
      });

      it('generates stroke with named color', () => {
        const token = { property: 'stroke', value: 'danger', attrType: 'visual', raw: 'stroke:danger' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('stroke: var(--c-danger)'));
      });

      it('generates stroke with arbitrary value', () => {
        const token = { property: 'stroke', value: 'rgba(0,0,0,0.5)', isArbitrary: true, attrType: 'visual', raw: 'stroke:[rgba(0,0,0,0.5)]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('stroke: rgba(0,0,0,0.5)'));
      });
    });

    describe('Stroke Width', () => {
      it('generates stroke-width with number', () => {
        const token = { property: 'stroke-w', value: '2', attrType: 'visual', raw: 'stroke-w:2' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('stroke-width: 2px'));
      });

      it('generates stroke-width with arbitrary value', () => {
        const token = { property: 'stroke-w', value: '0.5rem', isArbitrary: true, attrType: 'visual', raw: 'stroke-w:[0.5rem]' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('stroke-width: 0.5rem'));
      });
    });

  });

  describe('Accessibility Utilities', () => {

    describe('Forced Colors', () => {
      it('generates forced-color-adjust: auto', () => {
        const token = { property: 'forced-colors', value: 'auto', attrType: 'visual', raw: 'forced-colors:auto' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('forced-color-adjust: auto'));
      });

      it('generates forced-color-adjust: none', () => {
        const token = { property: 'forced-colors', value: 'none', attrType: 'visual', raw: 'forced-colors:none' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('forced-color-adjust: none'));
      });
    });

  });

  describe('Scroll Margin/Padding Individual Sides', () => {

    describe('Scroll Margin Sides', () => {
      it('generates scroll-margin-top', () => {
        const token = { property: 'scroll-m-t', value: 'small', attrType: 'visual', raw: 'scroll-m-t:small' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-margin-top: var(--s-small)'));
      });

      it('generates scroll-margin-right', () => {
        const token = { property: 'scroll-m-r', value: 'medium', attrType: 'visual', raw: 'scroll-m-r:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-margin-right: var(--s-medium)'));
      });

      it('generates scroll-margin-bottom', () => {
        const token = { property: 'scroll-m-b', value: 'big', attrType: 'visual', raw: 'scroll-m-b:big' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-margin-bottom: var(--s-big)'));
      });

      it('generates scroll-margin-left', () => {
        const token = { property: 'scroll-m-l', value: 'tiny', attrType: 'visual', raw: 'scroll-m-l:tiny' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-margin-left: var(--s-tiny)'));
      });
    });

    describe('Scroll Padding Sides', () => {
      it('generates scroll-padding-top', () => {
        const token = { property: 'scroll-p-t', value: 'small', attrType: 'visual', raw: 'scroll-p-t:small' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-padding-top: var(--s-small)'));
      });

      it('generates scroll-padding-right', () => {
        const token = { property: 'scroll-p-r', value: 'medium', attrType: 'visual', raw: 'scroll-p-r:medium' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-padding-right: var(--s-medium)'));
      });

      it('generates scroll-padding-bottom', () => {
        const token = { property: 'scroll-p-b', value: 'big', attrType: 'visual', raw: 'scroll-p-b:big' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-padding-bottom: var(--s-big)'));
      });

      it('generates scroll-padding-left', () => {
        const token = { property: 'scroll-p-l', value: 'tiny', attrType: 'visual', raw: 'scroll-p-l:tiny' };
        const config = createTestConfig();
        const css = generateCSS([token], config);
        assert.ok(css.includes('scroll-padding-left: var(--s-tiny)'));
      });
    });

  });

  describe('Divide with State', () => {

    it('generates divide utility with hover state', () => {
      const token = { 
        property: 'divide', 
        value: 'primary', 
        attrType: 'visual', 
        raw: 'divide:primary',
        state: 'hover'
      };
      const config = createTestConfig();
      const css = generateCSS([token], config);
      // Divide utilities with state add the pseudo-class to the child selector
      assert.ok(css.includes('> :not([hidden]) ~ :not([hidden]):hover'), 'Should include divide child selector with hover');
      assert.ok(css.includes('border-color: var(--c-primary)'));
    });

  });

  describe('Dark Mode Array Config', () => {

    it('generates dark mode with custom array selector', () => {
      const token = { 
        state: 'dark', 
        property: 'bg', 
        value: 'black', 
        attrType: 'visual', 
        raw: 'dark:bg:black' 
      };
      const config = createTestConfig({ darkMode: ['selector', '[data-theme="dark"]'] });
      const css = generateCSS([token], config);
      assert.ok(css.includes('[data-theme="dark"]'));
      assert.ok(css.includes('background-color: var(--c-black)'));
    });

    it('generates dark mode with array but no second element (defaults to .dark)', () => {
      const token = { 
        state: 'dark', 
        property: 'text', 
        value: 'white', 
        attrType: 'visual', 
        raw: 'dark:text:white' 
      };
      const config = createTestConfig({ darkMode: ['selector'] });
      const css = generateCSS([token], config);
      assert.ok(css.includes('.dark'));
      assert.ok(css.includes('color: var(--c-white)'));
    });

  });

});
