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

      it('generates rotate-z (same as rotate)', () => {
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

});
