
import { test } from 'node:test';
import assert from 'node:assert';
import { 
  generateCSS, 
  generateCSSVariables, 
  minifyCSS
} from '../../../../src/compiler/generators/css.js';
import { createTestConfig } from '../../../helpers/test-utils.js';

test('CSS Generator Coverage', async (t) => {
  const config = createTestConfig();

  await t.test('generateCSSVariables - Tailwind Scales', () => {
    const css = generateCSSVariables(config);
    assert.ok(css.includes('--tw-text-xs: 0.75rem'));
    assert.ok(css.includes('--tw-leading-xs: 1rem'));
    assert.ok(css.includes('--tw-font-bold: 700'));
  });

  await t.test('generateCSSVariables - Custom Line Heights', () => {
    const customConfig = createTestConfig({
      theme: {
        fontSizeLineHeight: {
          'base': '1.5',
          'large': '1.2'
        }
      }
    });
    const css = generateCSSVariables(customConfig);
    assert.ok(css.includes('--font-lh-base: 1.5'));
    assert.ok(css.includes('--font-lh-large: 1.2'));
  });

  await t.test('Layout - Grid Column Span Full', () => {
    const token = { property: 'col-span', value: 'full', attrType: 'layout', raw: 'col-span:full' };
    const css = generateCSS([token], config);
    assert.ok(css.includes('grid-column: 1 / -1'));
  });

  await t.test('Layout - Grid Column Start/End', () => {
    const start = { property: 'col-start', value: '2', attrType: 'layout', raw: 'col-start:2' };
    const end = { property: 'col-end', value: '4', attrType: 'layout', raw: 'col-end:4' };
    const css = generateCSS([start, end], config);
    assert.ok(css.includes('grid-column-start: 2'));
    assert.ok(css.includes('grid-column-end: 4'));
  });

  await t.test('Layout - Grid Row Span Full', () => {
    const token = { property: 'row-span', value: 'full', attrType: 'layout', raw: 'row-span:full' };
    const css = generateCSS([token], config);
    assert.ok(css.includes('grid-row: 1 / -1'));
  });

  await t.test('Layout - Grid Row Start/End', () => {
    const start = { property: 'row-start', value: '1', attrType: 'layout', raw: 'row-start:1' };
    const end = { property: 'row-end', value: '3', attrType: 'layout', raw: 'row-end:3' };
    const css = generateCSS([start, end], config);
    assert.ok(css.includes('grid-row-start: 1'));
    assert.ok(css.includes('grid-row-end: 3'));
  });

  await t.test('Layout - Grid Auto Columns', () => {
    const auto = { property: 'auto-cols', value: 'min', attrType: 'layout', raw: 'auto-cols:min' };
    const arb = { property: 'auto-cols', value: 'minmax(100px, auto)', isArbitrary: true, attrType: 'layout', raw: 'auto-cols:[minmax(100px, auto)]' };
    const css = generateCSS([auto, arb], config);
    assert.ok(css.includes('grid-auto-columns: min-content'));
    assert.ok(css.includes('grid-auto-columns: minmax(100px, auto)'));
  });

  await t.test('Layout - Grid Auto Rows', () => {
    const auto = { property: 'auto-rows', value: 'fr', attrType: 'layout', raw: 'auto-rows:fr' };
    const arb = { property: 'auto-rows', value: '200px', isArbitrary: true, attrType: 'layout', raw: 'auto-rows:[200px]' };
    const css = generateCSS([auto, arb], config);
    assert.ok(css.includes('grid-auto-rows: minmax(0, 1fr)'));
    assert.ok(css.includes('grid-auto-rows: 200px'));
  });

  await t.test('Layout - Border Spacing', () => {
    const base = { property: 'border-spacing', value: 'medium', attrType: 'layout', raw: 'border-spacing:medium' };
    const x = { property: 'border-spacing-x', value: 'small', attrType: 'layout', raw: 'border-spacing-x:small' };
    const y = { property: 'border-spacing-y', value: 'big', attrType: 'layout', raw: 'border-spacing-y:big' };
    const css = generateCSS([base, x, y], config);
    assert.ok(css.includes('border-spacing: var(--s-medium)'));
    assert.ok(css.includes('border-spacing: var(--s-small) 0'));
    assert.ok(css.includes('border-spacing: 0 var(--s-big)'));
  });

  await t.test('Visual - Transforms and 3D', () => {
    const tokens = [
      { property: 'translate-x', value: 'full', attrType: 'visual', raw: 'translate-x:full' },
      { property: 'translate-x', value: '10px', isArbitrary: true, attrType: 'visual', raw: 'translate-x:[10px]' },
      { property: 'rotate-x', value: '45', attrType: 'visual', raw: 'rotate-x:45' },
      { property: 'rotate-x', value: '45deg', isArbitrary: true, attrType: 'visual', raw: 'rotate-x:[45deg]' },
      { property: 'rotate-y', value: '45', attrType: 'visual', raw: 'rotate-y:45' },
      { property: 'rotate-y', value: '45deg', isArbitrary: true, attrType: 'visual', raw: 'rotate-y:[45deg]' },
      { property: 'rotate-z', value: '45', attrType: 'visual', raw: 'rotate-z:45' },
      { property: 'rotate-z', value: '45deg', isArbitrary: true, attrType: 'visual', raw: 'rotate-z:[45deg]' },
      { property: 'skew-x', value: '10', attrType: 'visual', raw: 'skew-x:10' },
      { property: 'skew-x', value: '10deg', isArbitrary: true, attrType: 'visual', raw: 'skew-x:[10deg]' },
      { property: 'skew-y', value: '10', attrType: 'visual', raw: 'skew-y:10' },
      { property: 'skew-y', value: '10deg', isArbitrary: true, attrType: 'visual', raw: 'skew-y:[10deg]' },
      { property: '-skew-x', value: '10', attrType: 'visual', raw: '-skew-x:10' },
      { property: '-skew-x', value: '10deg', isArbitrary: true, attrType: 'visual', raw: '-skew-x:[10deg]' },
      { property: '-skew-y', value: '10', attrType: 'visual', raw: '-skew-y:10' },
      { property: '-skew-y', value: '10deg', isArbitrary: true, attrType: 'visual', raw: '-skew-y:[10deg]' },
      { property: 'translate-z', value: 'near', attrType: 'visual', raw: 'translate-z:near' },
      { property: 'translate-z', value: '10px', isArbitrary: true, attrType: 'visual', raw: 'translate-z:[10px]' },
      { property: 'origin', value: 'top-right', attrType: 'visual', raw: 'origin:top-right' },
      { property: 'origin', value: 'custom', attrType: 'visual', raw: 'origin:custom' },
      { property: 'origin', value: '10%_20%', isArbitrary: true, attrType: 'visual', raw: 'origin:[10%_20%]' },
      { property: 'perspective', value: 'big', attrType: 'visual', raw: 'perspective:big' },
      { property: 'perspective', value: 'unknown', attrType: 'visual', raw: 'perspective:unknown' },
      { property: 'perspective', value: '500px', isArbitrary: true, attrType: 'visual', raw: 'perspective:[500px]' },
      { property: 'perspective-origin', value: 'bottom-left', attrType: 'visual', raw: 'perspective-origin:bottom-left' },
      { property: 'perspective-origin', value: 'custom', attrType: 'visual', raw: 'perspective-origin:custom' },
      { property: 'perspective-origin', value: '10%_20%', isArbitrary: true, attrType: 'visual', raw: 'perspective-origin:[10%_20%]' }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('rotateX(45deg)'));
    assert.ok(css.includes('skewX(-10deg)'));

    // Branch coverage: directional translation & rotation defaults
    const transDefaults = [
      { property: 'translate-y', value: 'unknown', attrType: 'visual', raw: 'translate-y:unknown' },
      { property: 'translate-z', value: 'unknown', attrType: 'visual', raw: 'translate-z:unknown' },
      { property: 'rotate-x', value: '90', attrType: 'visual', raw: 'rotate-x:90' },
      { property: 'rotate-y', value: '90', attrType: 'visual', raw: 'rotate-y:90' },
      { property: 'rotate-z', value: '90', attrType: 'visual', raw: 'rotate-z:90' }
    ];
    const cssTransDefaults = generateCSS(transDefaults, config);
    assert.ok(cssTransDefaults.includes('translateY(var(--s-unknown))'));
    assert.ok(cssTransDefaults.includes('translateZ(var(--s-unknown))'));
    assert.ok(cssTransDefaults.includes('rotateX(90deg)'));
  });

  await t.test('Visual - Transitions and Animations', () => {
    const tokens = [
      { property: 'transition', value: 'colors', attrType: 'visual', raw: 'transition:colors' },
      { property: 'transition', value: 'opacity,transform', isArbitrary: true, attrType: 'visual', raw: 'transition:[opacity,transform]' },
      { property: 'duration', value: '150ms', isArbitrary: true, attrType: 'visual', raw: 'duration:[150ms]' },
      { property: 'duration', value: '0.5s', isArbitrary: true, attrType: 'visual', raw: 'duration:[0.5s]' },
      { property: 'ease', value: 'in-out', attrType: 'visual', raw: 'ease:in-out' },
      { property: 'ease', value: 'cubic-bezier(0,0,0,0)', isArbitrary: true, attrType: 'visual', raw: 'ease:[cubic-bezier(0,0,0,0)]' },
      { property: 'delay', value: '100', attrType: 'visual', raw: 'delay:100' },
      { property: 'delay', value: '0.2s', isArbitrary: true, attrType: 'visual', raw: 'delay:[0.2s]' },
      { property: 'animate', value: 'spin', attrType: 'visual', raw: 'animate:spin' },
      { property: 'animate', value: 'none', attrType: 'visual', raw: 'animate:none' },
      { property: 'animate', value: 'my-anim_2s_linear', isArbitrary: true, attrType: 'visual', raw: 'animate:[my-anim_2s_linear]' },
      { property: 'animation-duration', value: 'fast', attrType: 'visual', raw: 'animation-duration:fast' },
      { property: 'animation-delay', value: 'fast', attrType: 'visual', raw: 'animation-delay:fast' }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('transition:'));
    assert.ok(css.includes('transition-duration: 150ms'));
    assert.ok(css.includes('transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)'));
    assert.ok(css.includes('animation: my-anim 2s linear'));
    assert.ok(css.includes('animation-duration: 150ms'));
    assert.ok(css.includes('animation-delay: 150ms'));

    // Branch coverage: fallback defaults
    const defaults = [
      { property: 'duration', value: 'unknown', attrType: 'visual', raw: 'duration:unknown' },
      { property: 'ease', value: 'unknown', attrType: 'visual', raw: 'ease:unknown' },
      { property: 'delay', value: 'unknown', attrType: 'visual', raw: 'delay:unknown' },
      { property: 'animation-duration', value: 'unknown', attrType: 'visual', raw: 'animation-duration:unknown' },
      { property: 'animation-duration', value: '1s', isArbitrary: true, attrType: 'visual', raw: 'animation-duration:[1s]' },
      { property: 'animation-delay', value: '0.5s', isArbitrary: true, attrType: 'visual', raw: 'animation-delay:[0.5s]' }
    ];
    const cssDefaults = generateCSS(defaults, config);
    assert.ok(cssDefaults.includes('transition-duration: 200ms'));
    assert.ok(cssDefaults.includes('transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)'));
    assert.ok(cssDefaults.includes('transition-delay: 200ms'));
    assert.ok(cssDefaults.includes('animation-duration: 1s'));
    assert.ok(cssDefaults.includes('animation-delay: 0.5s'));
  });

  await t.test('Visual - Filters and Blends', () => {
    const tokens = [
      { property: 'blur', value: 'small', attrType: 'visual', raw: 'blur:small' },
      { property: 'blur', value: '10px', isArbitrary: true, attrType: 'visual', raw: 'blur:[10px]' },
      { property: '-blur', value: 'small', attrType: 'visual', raw: '-blur:small' },
      { property: 'brightness', value: '50', attrType: 'visual', raw: 'brightness:50' },
      { property: 'brightness', value: '0.5', isArbitrary: true, attrType: 'visual', raw: 'brightness:[0.5]' },
      { property: 'contrast', value: '50', attrType: 'visual', raw: 'contrast:50' },
      { property: 'grayscale', value: '50', attrType: 'visual', raw: 'grayscale:50' },
      { property: 'hue-rotate', value: '90', attrType: 'visual', raw: 'hue-rotate:90' },
      { property: '-hue-rotate', value: '90', attrType: 'visual', raw: '-hue-rotate:90' },
      { property: 'invert', value: '50', attrType: 'visual', raw: 'invert:50' },
      { property: 'saturate', value: '50', attrType: 'visual', raw: 'saturate:50' },
      { property: 'sepia', value: '50', attrType: 'visual', raw: 'sepia:50' },
      { property: 'drop-shadow', value: 'small', attrType: 'visual', raw: 'drop-shadow:small' },
      { property: 'drop-shadow', value: '0_0_5px_rgba(0,0,0,0.5)', isArbitrary: true, attrType: 'visual', raw: 'drop-shadow:[0_0_5px_rgba(0,0,0,0.5)]' },
      { property: 'backdrop-blur', value: 'small', attrType: 'visual', raw: 'backdrop-blur:small' },
      { property: 'brightness', value: '150', isArbitrary: true, attrType: 'visual', raw: 'brightness:[150]' },
      { property: 'contrast', value: '150', isArbitrary: true, attrType: 'visual', raw: 'contrast:[150]' },
      { property: 'grayscale', value: '50%', isArbitrary: true, attrType: 'visual', raw: 'grayscale:[50%]' },
      { property: 'hue-rotate', value: '45deg', isArbitrary: true, attrType: 'visual', raw: 'hue-rotate:[45deg]' },
      { property: 'invert', value: '50%', isArbitrary: true, attrType: 'visual', raw: 'invert:[50%]' },
      { property: 'saturate', value: '150', isArbitrary: true, attrType: 'visual', raw: 'saturate:[150]' },
      { property: 'sepia', value: '50%', isArbitrary: true, attrType: 'visual', raw: 'sepia:[50%]' },
      { property: 'backdrop-brightness', value: '150', isArbitrary: true, attrType: 'visual', raw: 'backdrop-brightness:[150]' },
      { property: 'backdrop-contrast', value: '150', isArbitrary: true, attrType: 'visual', raw: 'backdrop-contrast:[150]' },
      { property: 'backdrop-grayscale', value: '50%', isArbitrary: true, attrType: 'visual', raw: 'backdrop-grayscale:[50%]' },
      { property: 'backdrop-hue-rotate', value: '45deg', isArbitrary: true, attrType: 'visual', raw: 'backdrop-hue-rotate:[45deg]' },
      { property: 'backdrop-invert', value: '50%', isArbitrary: true, attrType: 'visual', raw: 'backdrop-invert:[50%]' },
      { property: 'backdrop-opacity', value: '0.5', isArbitrary: true, attrType: 'visual', raw: 'backdrop-opacity:[0.5]' },
      { property: 'backdrop-saturate', value: '150', isArbitrary: true, attrType: 'visual', raw: 'backdrop-saturate:[150]' },
      { property: 'backdrop-sepia', value: '50%', isArbitrary: true, attrType: 'visual', raw: 'backdrop-sepia:[50%]' },
      { property: 'mix-blend', value: 'multiply', attrType: 'visual', raw: 'mix-blend:multiply' },
      { property: 'bg-blend', value: 'screen', attrType: 'visual', raw: 'bg-blend:screen' }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('filter: brightness(150)'));
    assert.ok(css.includes('backdrop-filter: brightness(150)'));
    assert.ok(css.includes('filter: blur(4px)'));
    assert.ok(css.includes('filter: blur(10px)'));
    assert.ok(css.includes('backdrop-filter: blur(4px)'));
    assert.ok(css.includes('mix-blend-mode: multiply'));
    assert.ok(css.includes('background-blend-mode: screen'));

    // Branch coverage: fallback defaults    // Filters unknown
    assert.match(generateCSS([{ property: 'backdrop-blur', value: 'unknown', attrType: 'visual', raw: 'backdrop-blur:unknown' }], createTestConfig()), /backdrop-filter: blur\(8px\)/);
    const filterDefaults = [
      { property: 'brightness', value: 'unknown', attrType: 'visual', raw: 'brightness:unknown' },
      { property: 'contrast', value: 'unknown', attrType: 'visual', raw: 'contrast:unknown' },
      { property: 'drop-shadow', value: 'unknown', attrType: 'visual', raw: 'drop-shadow:unknown' },
      { property: 'grayscale', value: 'unknown', attrType: 'visual', raw: 'grayscale:unknown' },
      { property: 'invert', value: 'unknown', attrType: 'visual', raw: 'invert:unknown' },
      { property: 'saturate', value: 'unknown', attrType: 'visual', raw: 'saturate:unknown' },
      { property: 'sepia', value: 'unknown', attrType: 'visual', raw: 'sepia:unknown' },
      { property: 'blur', value: 'unknown', attrType: 'visual', raw: 'blur:unknown' },
      { property: 'backdrop-blur', value: 'unknown', attrType: 'visual', raw: 'backdrop-blur:unknown' },
      { property: 'backdrop-brightness', value: 'unknown', attrType: 'visual', raw: 'backdrop-brightness:unknown' },
      { property: 'backdrop-contrast', value: 'unknown', attrType: 'visual', raw: 'backdrop-contrast:unknown' },
      { property: 'backdrop-grayscale', value: 'unknown', attrType: 'visual', raw: 'backdrop-grayscale:unknown' },
      { property: 'backdrop-invert', value: 'unknown', attrType: 'visual', raw: 'backdrop-invert:unknown' },
      { property: 'backdrop-opacity', value: 'unknown', attrType: 'visual', raw: 'backdrop-opacity:unknown' },
      { property: 'backdrop-saturate', value: 'unknown', attrType: 'visual', raw: 'backdrop-saturate:unknown' },
      { property: 'backdrop-sepia', value: 'unknown', attrType: 'visual', raw: 'backdrop-sepia:unknown' }
    ];
    const cssFilterDefaults = generateCSS(filterDefaults, config);
    assert.ok(cssFilterDefaults.includes('filter: brightness(1)'));
    assert.ok(cssFilterDefaults.includes('filter: blur(8px)'));
    assert.ok(cssFilterDefaults.includes('backdrop-filter: blur(8px)'));
    assert.ok(cssFilterDefaults.includes('backdrop-filter: opacity(1)'));
  });

  await t.test('Visual - Borders and Outlines', () => {
    const tokens = [
      { property: 'border-w', value: '2', attrType: 'visual', raw: 'border-w:2' },
      { property: 'border-t-w', value: '2', attrType: 'visual', raw: 'border-t-w:2' },
      { property: 'border-l-w', value: '2', attrType: 'visual', raw: 'border-l-w:2' },
      { property: 'border-r-w', value: '2', attrType: 'visual', raw: 'border-r-w:2' },
      { property: 'border-b-w', value: '2', attrType: 'visual', raw: 'border-b-w:2' },
      { property: 'border-x-w', value: '2', attrType: 'visual', raw: 'border-x-w:2' },
      { property: 'border-y-w', value: '2', attrType: 'visual', raw: 'border-y-w:2' },
      { property: 'border', value: 'blue-500', attrType: 'visual', raw: 'border:blue-500' },
      { property: 'border-t', value: 'blue-500', attrType: 'visual', raw: 'border-t:blue-500' },
      { property: 'border-r', value: 'blue-500', attrType: 'visual', raw: 'border-r:blue-500' },
      { property: 'border-l', value: 'blue-500', attrType: 'visual', raw: 'border-l:blue-500' },
      { property: 'border-b', value: 'blue-500', attrType: 'visual', raw: 'border-b:blue-500' },
      { property: 'border-x', value: 'blue-500', attrType: 'visual', raw: 'border-x:blue-500' },
      { property: 'border-y', value: 'blue-500', attrType: 'visual', raw: 'border-y:blue-500' },
      { property: 'outline', value: 'blue-500', attrType: 'visual', raw: 'outline:blue-500' },
      { property: 'outline-offset', value: 'small', attrType: 'visual', raw: 'outline-offset:small' },
      { property: 'outline-offset', value: '2px', isArbitrary: true, attrType: 'visual', raw: 'outline-offset:[2px]' },
      { property: 'ring', value: 'none', attrType: 'visual', raw: 'ring:none' },
      { property: 'ring', value: 'thin', attrType: 'visual', raw: 'ring:thin' },
      { property: 'ring-color', value: 'blue-500', attrType: 'visual', raw: 'ring-color:blue-500' },
      { property: 'ring-w', value: '2', attrType: 'visual', raw: 'ring-w:2' },
      { property: 'ring-offset', value: 'regular', attrType: 'visual', raw: 'ring-offset:regular' },
      { property: 'ring-offset-color', value: 'white', attrType: 'visual', raw: 'ring-offset-color:white' },
      { property: 'rounded', value: 'medium', attrType: 'visual', raw: 'rounded:medium' },
      { property: 'mask-image', value: 'custom.png', isArbitrary: true, attrType: 'visual', raw: 'mask-image:[custom.png]' },
      { property: 'mask-position', value: '10px_20px', isArbitrary: true, attrType: 'visual', raw: 'mask-position:[10px_20px]' },
      { property: 'mask-size', value: '50%_auto', isArbitrary: true, attrType: 'visual', raw: 'mask-size:[50%_auto]' },
      { property: 'mask-repeat', value: 'custom-repeat', attrType: 'visual', raw: 'mask-repeat:custom-repeat' },
      { property: 'mask-origin', value: 'custom-origin', attrType: 'visual', raw: 'mask-origin:custom-origin' }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('mask-image: url(custom.png)'));
    assert.ok(css.includes('mask-position: 10px 20px'));
    assert.ok(css.includes('mask-size: 50% auto'));
    assert.ok(css.includes('mask-repeat: custom-repeat'));
    assert.ok(css.includes('mask-origin: custom-origin'));
    assert.ok(css.includes('border-width: var(--s-2)'));
    assert.ok(css.includes('border-top-width: var(--s-2)'));
    assert.ok(css.includes('border-bottom-width: var(--s-2)'));
    assert.ok(css.includes('border-left-width: var(--s-2)'));
    assert.ok(css.includes('border-right-width: var(--s-2)'));
    assert.ok(css.includes('border-color: var(--c-blue-500)'));
    assert.ok(css.includes('border-top-color: var(--c-blue-500)'));
    assert.ok(css.includes('border-radius: var(--r-medium)'));
    assert.ok(css.includes('outline-color: var(--c-blue-500)'));
    assert.ok(css.includes('outline-offset: var(--s-small)'));
    assert.ok(css.includes('outline-offset: 2px'));
    assert.ok(css.includes('--ss-ring-color: var(--c-blue-500)'));
    assert.ok(css.includes('--ss-ring-width: 1px'));
    assert.ok(css.includes('--ss-ring-offset-width: var(--s-regular)'));
  });

  await t.test('Space - Special Sizing (min, max, fit)', () => {
    const w_min = { property: 'w', value: 'min', attrType: 'space', raw: 'w:min' };
    const h_max = { property: 'h', value: 'max', attrType: 'space', raw: 'h:max' };
    const css = generateCSS([w_min, h_max], config);
    assert.ok(css.includes('width: min-content'));
    assert.ok(css.includes('height: max-content'));
  });

  await t.test('Space - Tailwind Prefix & Negative', () => {
    const pos = { property: 'p', value: 'tw-4', attrType: 'space', raw: 'p:tw-4' };
    const neg = { property: 'm', value: '-tw-2', attrType: 'space', raw: 'm:-tw-2' };
    const css = generateCSS([pos, neg], config);
    assert.ok(css.includes('var(--tw-4)'));
    assert.ok(css.includes('calc(var(--tw-2) * -1)'));
  });

  await t.test('Visual - Background Image URL and Gradients', () => {
    const url = { property: 'bg-image', value: 'hero.jpg', attrType: 'visual', raw: 'bg-image:hero.jpg' };
    const arb = { property: 'bg-image', value: 'custom.png', isArbitrary: true, attrType: 'visual', raw: 'bg-image:[custom.png]' };
    const grad = { property: 'bg-image', value: 'gradient-to-t', attrType: 'visual', raw: 'bg-image:gradient-to-t' };
    const css = generateCSS([url, arb, grad], config);
    assert.ok(css.includes('background-image: url(hero.jpg)'));
    assert.ok(css.includes('background-image: url(custom.png)'));
    assert.ok(css.includes('linear-gradient(to top,'));
  });

  await t.test('Visual - Background Attachment & Clip', () => {
    const attach = { property: 'bg-attachment', value: 'fixed', attrType: 'visual', raw: 'bg-attachment:fixed' };
    const clip_text = { property: 'bg-clip', value: 'text', attrType: 'visual', raw: 'bg-clip:text' };
    const css = generateCSS([attach, clip_text], config);
    assert.ok(css.includes('background-attachment: fixed'));
    assert.ok(css.includes('background-clip: text'));
  });

  await t.test('Visual - Opacity Edge Cases', () => {
    const arb = { property: 'opacity', value: 'inherit', isArbitrary: true, attrType: 'visual', raw: 'opacity:[inherit]' };
    const css = generateCSS([arb], config);
    assert.ok(css.includes('opacity: inherit'));
  });

  await t.test('Integration - Peer Selectors', () => {
    const tokens = [
      { raw: 'uid1', attrType: 'interact' },
      { 
        raw: 'bg-primary', 
        attrType: 'visual', 
        property: 'bg', 
        value: 'primary', 
        state: 'hover' 
      }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('[interact~="uid1"]'), 'interact selector missing');
    assert.ok(css.includes('~ [listens~="uid1"]'), 'listens selector missing');
  });

  await t.test('Integration - Divide with State', () => {
    const token = { 
      raw: 'divide:primary', 
      attrType: 'visual', 
      property: 'divide', 
      value: 'primary', 
      state: 'hover' 
    };
    const css = generateCSS([token], config);
    assert.ok(css.includes('> :not([hidden]) ~ :not([hidden]):hover'));
  });

  await t.test('Integration - Unknown Breakpoints', () => {
    const tokens = [
      { 
        raw: 'unknown:block', 
        attrType: 'layout', 
        property: 'block', 
        value: 'block', 
        breakpoint: 'unknown-bp' 
      }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('@media'));
  });

  await t.test('Integration - Animation Keyframes', () => {
    const css = generateCSS([], config);
    assert.ok(css.includes('@keyframes spin'));
  });

  await t.test('Integration - Custom Dark Selector', () => {
    const token = { state: 'dark', property: 'bg', value: 'black', attrType: 'visual', raw: 'dark:bg:black' };
    const configCustom = createTestConfig({ darkMode: ['selector', '[data-theme="dark"]'] });
    const css = generateCSS([token], configCustom);
    assert.ok(css.includes('[data-theme="dark"] [visual~="dark:bg:black"]'));
  });

  await t.test('Visual - Font Weight Base', () => {
    const token = { property: 'font', value: 'bold', attrType: 'visual', raw: 'font:bold' };
    const css = generateCSS([token], config);
    assert.ok(css.includes('font-weight: var(--fw-bold)'));
  });

  await t.test('Visual - Text Size Base', () => {
    const token = { property: 'text-size', value: 'medium', attrType: 'visual', raw: 'text-size:medium' };
    const css = generateCSS([token], config);
    assert.ok(css.includes('font-size: var(--font-medium)'));
    assert.ok(css.includes('line-height: var(--font-lh-medium)'));
  });

  await t.test('Layout - Grid Row Span Numeric', () => {
    const token = { property: 'row-span', value: '2', attrType: 'layout', raw: 'row-span:2' };
    const css = generateCSS([token], config);
    assert.ok(css.includes('grid-row: span 2 / span 2'));
  });

  await t.test('Layout - Grid Template Columns and Rows', () => {
    const cols_none = { property: 'grid-cols', value: 'none', attrType: 'layout', raw: 'grid-cols:none' };
    const cols_sub = { property: 'grid-cols', value: 'subgrid', attrType: 'layout', raw: 'grid-cols:subgrid' };
    const cols_arb = { property: 'grid-cols', value: '200px_1fr', isArbitrary: true, attrType: 'layout', raw: 'grid-cols:[200px_1fr]' };
    
    const rows_none = { property: 'grid-rows', value: 'none', attrType: 'layout', raw: 'grid-rows:none' };
    const rows_sub = { property: 'grid-rows', value: 'subgrid', attrType: 'layout', raw: 'grid-rows:subgrid' };
    const rows_arb = { property: 'grid-rows', value: '100px_auto', isArbitrary: true, attrType: 'layout', raw: 'grid-rows:[100px_auto]' };
    
    const css = generateCSS([cols_none, cols_sub, cols_arb, rows_none, rows_sub, rows_arb], config);
    assert.ok(css.includes('grid-template-columns: none'));
    assert.ok(css.includes('grid-template-columns: subgrid'));
    assert.ok(css.includes('grid-template-columns: 200px 1fr'));
    assert.ok(css.includes('grid-template-rows: none'));
    assert.ok(css.includes('grid-template-rows: subgrid'));
    assert.ok(css.includes('grid-template-rows: 100px auto'));
  });

  await t.test('Layout - Overflow and Aspect Ratio', () => {
    const ov = { property: 'overflow', value: 'hidden', attrType: 'layout', raw: 'overflow:hidden' };
    const ovX = { property: 'overflow-x', value: 'scroll', attrType: 'layout', raw: 'overflow-x:scroll' };
    const ovY = { property: 'overflow-y', value: 'auto', attrType: 'layout', raw: 'overflow-y:auto' };
    const aspectSquare = { property: 'aspect', value: 'square', attrType: 'layout', raw: 'aspect:square' };
    const aspectVideo = { property: 'aspect', value: 'video', attrType: 'layout', raw: 'aspect:video' };
    const aspectArb = { property: 'aspect', value: '21/9', isArbitrary: true, attrType: 'layout', raw: 'aspect:[21/9]' };
    
    const css = generateCSS([ov, ovX, ovY, aspectSquare, aspectVideo, aspectArb], config);
    assert.ok(css.includes('overflow: hidden'));
    assert.ok(css.includes('overflow-x: scroll'));
    assert.ok(css.includes('overflow-y: auto'));
    assert.ok(css.includes('aspect-ratio: 1 / 1'));
    assert.ok(css.includes('aspect-ratio: 16 / 9'));
    assert.ok(css.includes('aspect-ratio: 21/9'));
  });

  await t.test('Layout - Object Fit and Position', () => {
    const objFit = { property: 'object', value: 'cover', attrType: 'layout', raw: 'object:cover' };
    const objPos = { property: 'object-pos', value: 'center_top', isArbitrary: true, attrType: 'layout', raw: 'object-pos:[center_top]' };
    const placeItems = { property: 'place-items', value: 'center', attrType: 'layout', raw: 'place-items:center' };
    const placeSelf = { property: 'place-self', value: 'end', attrType: 'layout', raw: 'place-self:end' };
    const justifyItems = { property: 'justify-items', value: 'center', attrType: 'layout', raw: 'justify-items:center' };
    const justifySelf = { property: 'justify-self', value: 'start', attrType: 'layout', raw: 'justify-self:start' };
    const alignContent = { property: 'content', value: 'center', attrType: 'layout', raw: 'content:center' };
    const placeContent = { property: 'place-content', value: 'evenly', attrType: 'layout', raw: 'place-content:evenly' };
    const justify = { property: 'justify', value: 'between', attrType: 'layout', raw: 'justify:between' };
    
    const css = generateCSS([objFit, objPos, placeItems, placeSelf, justifyItems, justifySelf, alignContent, placeContent, justify], config);
    assert.ok(css.includes('object-fit: cover'));
    assert.ok(css.includes('object-position: center top'));
    assert.ok(css.includes('place-items: center'));
    assert.ok(css.includes('place-self: end'));
    assert.ok(css.includes('justify-items: center'));
    assert.ok(css.includes('justify-self: start'));
    assert.ok(css.includes('align-content: center'));
    assert.ok(css.includes('place-content: space-evenly'));
    assert.ok(css.includes('justify-content: space-between'));
  });

  await t.test('Layout - Inset and Positioning', () => {
    const insetArb = { property: 'inset', value: '10px', isArbitrary: true, attrType: 'layout', raw: 'inset:[10px]' };
    const topArb = { property: 'top', value: '5px', isArbitrary: true, attrType: 'layout', raw: 'top:[5px]' };
    const insetX = { property: 'inset-x', value: '0', attrType: 'layout', raw: 'inset-x:0' };
    const insetY = { property: 'inset-y', value: 'medium', attrType: 'layout', raw: 'inset-y:medium' };
    
    const css = generateCSS([insetArb, topArb, insetX, insetY], config);
    assert.ok(css.includes('inset: 10px'));
    assert.ok(css.includes('top: 5px'));
    assert.ok(css.includes('left: 0; right: 0;'));
    assert.ok(css.includes('top: var(--s-medium); bottom: var(--s-medium);'));
  });

  await t.test('Layout - Columns and Overscroll', () => {
    const cols = { property: 'cols', value: '3', attrType: 'layout', raw: 'cols:3' };
    const over = { property: 'overscroll', value: 'contain', attrType: 'layout', raw: 'overscroll:contain' };
    const overX = { property: 'overscroll-x', value: 'none', attrType: 'layout', raw: 'overscroll-x:none' };
    const overY = { property: 'overscroll-y', value: 'auto', attrType: 'layout', raw: 'overscroll-y:auto' };
    
    const css = generateCSS([cols, over, overX, overY], config);
    assert.ok(css.includes('columns: 3'));
    assert.ok(css.includes('overscroll-behavior: contain'));
    assert.ok(css.includes('overscroll-behavior-x: none'));
    assert.ok(css.includes('overscroll-behavior-y: auto'));
  });

  await t.test('Layout - Flex and Order', () => {
    const basis = { property: 'basis', value: 'medium', attrType: 'layout', raw: 'basis:medium' };
    const basisArb = { property: 'basis', value: '10px', isArbitrary: true, attrType: 'layout', raw: 'basis:[10px]' };
    const flex1 = { property: 'flex', value: '1', attrType: 'layout', raw: 'flex:1' };
    const flexAuto = { property: 'flex', value: 'auto', attrType: 'layout', raw: 'flex:auto' };
    const flexInitial = { property: 'flex', value: 'initial', attrType: 'layout', raw: 'flex:initial' };
    const flexNone = { property: 'flex', value: 'none', attrType: 'layout', raw: 'flex:none' };
    const orderFirst = { property: 'order', value: 'first', attrType: 'layout', raw: 'order:first' };
    const orderLast = { property: 'order', value: 'last', attrType: 'layout', raw: 'order:last' };
    const orderNone = { property: 'order', value: 'none', attrType: 'layout', raw: 'order:none' };
    const orderVal = { property: 'order', value: '5', attrType: 'layout', raw: 'order:5' };
    
    const css = generateCSS([basis, basisArb, flex1, flexAuto, flexInitial, flexNone, orderFirst, orderLast, orderNone, orderVal], config);
    assert.ok(css.includes('flex-basis: var(--s-medium)'));
    assert.ok(css.includes('flex-basis: 10px'));
    assert.ok(css.includes('order: -9999'));
  });

  await t.test('Layout - Map Branch Coverage', () => {
    const tokens = [
      { property: 'items', value: 'start', attrType: 'layout', raw: 'items:start' },
      { property: 'items', value: 'custom', attrType: 'layout', raw: 'items:custom' },
      { property: 'self', value: 'center', attrType: 'layout', raw: 'self:center' },
      { property: 'self', value: 'custom', attrType: 'layout', raw: 'self:custom' },
      { property: 'place-content', value: 'between', attrType: 'layout', raw: 'place-content:between' },
      { property: 'place-content', value: 'custom', attrType: 'layout', raw: 'place-content:custom' },
      { property: 'justify-items', value: 'start', attrType: 'layout', raw: 'justify-items:start' },
      { property: 'justify-items', value: 'custom', attrType: 'layout', raw: 'justify-items:custom' },
      { property: 'justify-self', value: 'end', attrType: 'layout', raw: 'justify-self:end' },
      { property: 'justify-self', value: 'custom', attrType: 'layout', raw: 'justify-self:custom' },
      { property: 'align-content', value: 'center', attrType: 'layout', raw: 'align-content:center' },
      { property: 'align-content', value: 'custom', attrType: 'layout', raw: 'align-content:custom' },
      { property: 'object-fit', value: 'cover', attrType: 'layout', raw: 'object-fit:cover' },
      { property: 'object-fit', value: 'custom', attrType: 'layout', raw: 'object-fit:custom' },
      { property: 'object-position', value: 'bottom', attrType: 'layout', raw: 'object-position:bottom' },
      { property: 'object-position', value: 'custom', attrType: 'layout', raw: 'object-position:custom' },
      { property: 'overflow', value: 'hidden', attrType: 'layout', raw: 'overflow:hidden' },
      { property: 'overflow', value: 'visible_scroll', attrType: 'layout', raw: 'overflow:visible_scroll' },
      { property: 'overflow-x', value: 'auto', attrType: 'layout', raw: 'overflow-x:auto' },
      { property: 'overflow-y', value: 'scroll', attrType: 'layout', raw: 'overflow-y:scroll' },
      { property: 'overscroll', value: 'none', attrType: 'layout', raw: 'overscroll:none' },
      { property: 'overscroll-x', value: 'contain', attrType: 'layout', raw: 'overscroll-x:contain' },
      { property: 'overscroll-y', value: 'auto', attrType: 'layout', raw: 'overscroll-y:auto' }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('align-items: flex-start'));
    assert.ok(css.includes('align-items: custom'));
  });

  await t.test('Branch Coverage - Full Sweep', () => {
    const tokens = [
      // Scale
      { property: 'scale', value: '50', attrType: 'visual', raw: 'scale:50' },
      { property: 'scale', value: '0.5', isArbitrary: true, attrType: 'visual', raw: 'scale:[0.5]' },
      { property: 'scale-x', value: '50', attrType: 'visual', raw: 'scale-x:50' },
      { property: 'scale-x', value: '0.5', isArbitrary: true, attrType: 'visual', raw: 'scale-x:[0.5]' },
      { property: 'scale-y', value: '50', attrType: 'visual', raw: 'scale-y:50' },
      { property: 'scale-y', value: '0.5', isArbitrary: true, attrType: 'visual', raw: 'scale-y:[0.5]' },
      // Typography
      { property: 'font-family', value: 'sans', attrType: 'visual', raw: 'font-family:sans' },
      { property: 'font-family', value: 'Arial', isArbitrary: true, attrType: 'visual', raw: 'font-family:[Arial]' },
      { property: 'letter-spacing', value: 'wide', attrType: 'visual', raw: 'letter-spacing:wide' },
      { property: 'letter-spacing', value: '0.1em', isArbitrary: true, attrType: 'visual', raw: 'letter-spacing:[0.1em]' },
      { property: 'line-height', value: 'loose', attrType: 'visual', raw: 'line-height:loose' },
      { property: 'line-height', value: '2', isArbitrary: true, attrType: 'visual', raw: 'line-height:[2]' },
      // Rotate
      { property: 'rotate', value: '45', attrType: 'visual', raw: 'rotate:45' },
      { property: 'rotate', value: '45deg', isArbitrary: true, attrType: 'visual', raw: 'rotate:[45deg]' },
      // Translation
      { property: 'translate-x', value: 'medium', attrType: 'visual', raw: 'translate-x:medium' },
      { property: 'translate-y', value: 'medium', attrType: 'visual', raw: 'translate-y:medium' },
      { property: '-translate-x', value: 'medium', attrType: 'visual', raw: '-translate-x:medium' },
      { property: '-translate-x', value: '10px', isArbitrary: true, attrType: 'visual', raw: '-translate-x:[10px]' },
      { property: '-translate-y', value: 'medium', attrType: 'visual', raw: '-translate-y:medium' },
      { property: '-translate-y', value: '10px', isArbitrary: true, attrType: 'visual', raw: '-translate-y:[10px]' },
      // Skew
      { property: 'skew-x', value: '10', attrType: 'visual', raw: 'skew-x:10' },
      { property: 'skew-y', value: '10', attrType: 'visual', raw: 'skew-y:10' },
      { property: '-skew-x', value: '10', attrType: 'visual', raw: '-skew-x:10' },
      { property: '-skew-y', value: '10', attrType: 'visual', raw: '-skew-y:10' },
      // Interactivity
      { property: 'resize', value: 'both', attrType: 'visual', raw: 'resize:both' },
      { property: 'resize', value: 'custom', attrType: 'visual', raw: 'resize:custom' },
      // SVG
      { property: 'fill', value: 'red-500', attrType: 'visual', raw: 'fill:red-500' },
      { property: 'fill', value: 'none', attrType: 'visual', raw: 'fill:none' },
      { property: 'fill', value: 'current', attrType: 'visual', raw: 'fill:current' },
      { property: 'fill', value: '#ff0000', isArbitrary: true, attrType: 'visual', raw: 'fill:[#ff0000]' },
      { property: 'stroke', value: 'red-500', attrType: 'visual', raw: 'stroke:red-500' },
      { property: 'stroke', value: 'none', attrType: 'visual', raw: 'stroke:none' },
      { property: 'stroke', value: 'current', attrType: 'visual', raw: 'stroke:current' },
      { property: 'stroke', value: '#ff0000', isArbitrary: true, attrType: 'visual', raw: 'stroke:[#ff0000]' },
      { property: 'stroke-w', value: '2', attrType: 'visual', raw: 'stroke-w:2' },
      { property: 'stroke-w', value: '10px', isArbitrary: true, attrType: 'visual', raw: 'stroke-w:[10px]' }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.length > 0);
  });

  await t.test('Interactivity - Scroll and Touch Snap', () => {
    // Scroll margin/padding (static and arbitrary)
    const tokens = [
      { property: 'scroll-m', value: 'big', attrType: 'visual', raw: 'scroll-m:big' },
      { property: 'scroll-m', value: '10px', isArbitrary: true, attrType: 'visual', raw: 'scroll-m:[10px]' },
      { property: 'scroll-m-t', value: '10px', isArbitrary: true, attrType: 'visual', raw: 'scroll-m-t:[10px]' },
      { property: 'scroll-m-r', value: 'small', attrType: 'visual', raw: 'scroll-m-r:small' },
      { property: 'scroll-m-r', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-m-r:[5px]' },
      { property: 'scroll-m-b', value: 'small', attrType: 'visual', raw: 'scroll-m-b:small' },
      { property: 'scroll-m-b', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-m-b:[5px]' },
      { property: 'scroll-m-l', value: 'small', attrType: 'visual', raw: 'scroll-m-l:small' },
      { property: 'scroll-m-l', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-m-l:[5px]' },
      { property: 'scroll-m-x', value: 'small', attrType: 'visual', raw: 'scroll-m-x:small' },
      { property: 'scroll-m-x', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-m-x:[5px]' },
      { property: 'scroll-m-y', value: 'small', attrType: 'visual', raw: 'scroll-m-y:small' },
      { property: 'scroll-m-y', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-m-y:[5px]' },
      { property: 'scroll-p', value: 'big', attrType: 'visual', raw: 'scroll-p:big' },
      { property: 'scroll-p', value: '20px', isArbitrary: true, attrType: 'visual', raw: 'scroll-p:[20px]' },
      { property: 'scroll-p-t', value: '10px', isArbitrary: true, attrType: 'visual', raw: 'scroll-p-t:[10px]' },
      { property: 'scroll-p-r', value: 'small', attrType: 'visual', raw: 'scroll-p-r:small' },
      { property: 'scroll-p-r', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-p-r:[5px]' },
      { property: 'scroll-p-b', value: 'small', attrType: 'visual', raw: 'scroll-p-b:small' },
      { property: 'scroll-p-b', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-p-b:[5px]' },
      { property: 'scroll-p-l', value: 'small', attrType: 'visual', raw: 'scroll-p-l:small' },
      { property: 'scroll-p-l', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-p-l:[5px]' },
      { property: 'scroll-p-x', value: 'small', attrType: 'visual', raw: 'scroll-p-x:small' },
      { property: 'scroll-p-x', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-p-x:[5px]' },
      { property: 'scroll-p-y', value: 'small', attrType: 'visual', raw: 'scroll-p-y:small' },
      { property: 'scroll-p-y', value: '5px', isArbitrary: true, attrType: 'visual', raw: 'scroll-p-y:[5px]' },
      // Snap type presets and arbitrary (covers snapMap[value] || value)
      { property: 'snap', value: 'x', attrType: 'visual', raw: 'snap:x' },
      { property: 'snap', value: 'custom-mandatory', attrType: 'visual', raw: 'snap:custom-mandatory' },
      // Touch action presets and arbitrary
      { property: 'touch', value: 'auto', attrType: 'visual', raw: 'touch:auto' },
      { property: 'touch', value: 'custom-action', attrType: 'visual', raw: 'touch:custom-action' },
      // Will change presets and arbitrary
      { property: 'will-change', value: 'scroll', attrType: 'visual', raw: 'will-change:scroll' },
      { property: 'will-change', value: 'filter', attrType: 'visual', raw: 'will-change:filter' },
      // Other interactivity
      { property: 'accent', value: 'red-500', attrType: 'visual', raw: 'accent:red-500' },
      { property: 'accent', value: '#ff0000', isArbitrary: true, attrType: 'visual', raw: 'accent:[#ff0000]' },
      { property: 'appearance', value: 'none', attrType: 'visual', raw: 'appearance:none' },
      { property: 'caret', value: 'blue-500', attrType: 'visual', raw: 'caret:blue-500' },
      { property: 'caret', value: '#0000ff', isArbitrary: true, attrType: 'visual', raw: 'caret:[#0000ff]' },
      { property: 'cursor', value: 'pointer', attrType: 'visual', raw: 'cursor:pointer' },
      { property: 'select', value: 'none', attrType: 'visual', raw: 'select:none' },
      { property: 'field-sizing', value: 'content', attrType: 'visual', raw: 'field-sizing:content' },
      { property: 'forced-colors', value: 'none', attrType: 'visual', raw: 'forced-colors:none' }
    ];
    
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('scroll-margin: var(--s-big)'));
    assert.ok(css.includes('scroll-margin: 10px'));
    assert.ok(css.includes('scroll-margin-top: 10px'));
    assert.ok(css.includes('scroll-padding: var(--s-big)'));
    assert.ok(css.includes('scroll-padding: 20px'));
    assert.ok(css.includes('scroll-snap-type: x mandatory'));
    assert.ok(css.includes('scroll-snap-type: custom-mandatory'));
    assert.ok(css.includes('touch-action: auto'));
    assert.ok(css.includes('touch-action: custom-action'));
    assert.ok(css.includes('will-change: scroll-position'));
    assert.ok(css.includes('will-change: filter'));
    assert.ok(css.includes('accent-color: var(--c-red-500)'));
    assert.ok(css.includes('accent-color: #ff0000'));
  });

  await t.test('Integration - Branch Edge Cases', () => {
    // 1. Dark mode missing in config (defaults to 'media')
    const darkToken = { property: 'bg', value: 'red-500', state: 'dark', attrType: 'visual', raw: 'dark:bg:red-500' };
    const configNoDark = createTestConfig({ darkMode: undefined });
    const cssDark = generateCSS([darkToken], configNoDark);
    assert.ok(cssDark.includes('@media (prefers-color-scheme: dark)'));

    // 2. Responsive display reset - already covered but let's ensure the 'has(bpToken.raw)' branch
    const baseFlex = { property: 'flex', attrType: 'layout', raw: 'flex' };
    const respFlex = { property: 'flex', breakpoint: 'tab', attrType: 'layout', raw: 'flex' }; // Same as base, should NOT trigger reset
    const cssReset = generateCSS([baseFlex, respFlex], config);
    // Should NOT contain revert-layer because they are the same
    assert.ok(!cssReset.includes('revert-layer'));

    // 3. Token without attrType or unknown category
    const noAttr = { property: 'display', value: 'block', raw: 'display-block' };
    const unknownCat = { property: 'display', value: 'block', attrType: 'unknown', raw: 'unknown:block' };
    const cssNoAttr = generateCSS([noAttr, unknownCat], config);
    assert.ok(cssNoAttr.length > 0);

    // 4. Unknown visual property
    const unknownProp = { property: 'unknown-visual', value: 'value', attrType: 'visual', raw: 'unknown-visual:value' };
    const cssUnknown = generateCSS([unknownProp], config);
    assert.ok(!cssUnknown.includes('unknown-visual'));
  });

  await t.test('Integration - Preflight', () => {
    const configPreflight = createTestConfig({ preflight: true });
    const css = generateCSS([], configPreflight);
    assert.ok(css.includes('SenangStart Preflight') || css.includes('box-sizing: border-box'));
  });

  await t.test('Integration - Responsive Display Reset', () => {
    const tokens = [
      { raw: 'hidden', attrType: 'layout', property: 'hidden', value: 'hidden' },
      { raw: 'tab:flex', attrType: 'layout', property: 'flex', value: 'flex', breakpoint: 'tab' }
    ];
    const css = generateCSS(tokens, config);
    assert.ok(css.includes('[layout~="tab:flex"] { display: revert-layer; }'));
  });
  await t.test('Interactivity and Snap Utilities', () => {
    const config = createTestConfig();
    const res = generateCSS([
      { property: 'transform-style', value: 'preserve-3d', attrType: 'visual', raw: 'transform-style:preserve-3d' },
      { property: 'backface', value: 'hidden', attrType: 'visual', raw: 'backface:hidden' },
      { property: 'color-scheme', value: 'dark', attrType: 'visual', raw: 'color-scheme:dark' },
      { property: 'pointer-events', value: 'none', attrType: 'visual', raw: 'pointer-events:none' },
      { property: 'scroll', value: 'smooth', attrType: 'visual', raw: 'scroll:smooth' },
      { property: 'snap-align', value: 'center', attrType: 'visual', raw: 'snap-align:center' },
      { property: 'snap-stop', value: 'always', attrType: 'visual', raw: 'snap-stop:always' },
      { property: 'accent', value: 'blue-500', attrType: 'visual', raw: 'accent:blue-500' },
      { property: 'caret', value: 'red-500', attrType: 'visual', raw: 'caret:red-500' },
      { property: 'scroll-m-x', value: '4', attrType: 'visual', raw: 'scroll-m-x:4' },
      { property: 'scroll-m-y', value: '4', attrType: 'visual', raw: 'scroll-m-y:4' },
      { property: 'scroll-p-x', value: '4', attrType: 'visual', raw: 'scroll-p-x:4' },
      { property: 'scroll-p-y', value: '4', attrType: 'visual', raw: 'scroll-p-y:4' },
      { property: 'touch', value: 'none', attrType: 'visual', raw: 'touch:none' },
      { property: 'select', value: 'none', attrType: 'visual', raw: 'select:none' },
      { property: 'will-change', value: 'transform', attrType: 'visual', raw: 'will-change:transform' }
    ], config);
    
    assert.match(res, /transform-style: preserve-3d/);
    assert.match(res, /backface-visibility: hidden/);
    assert.match(res, /color-scheme: dark/);
    assert.match(res, /pointer-events: none/);
    assert.match(res, /scroll-behavior: smooth/);
    assert.match(res, /scroll-snap-align: center/);
    assert.match(res, /scroll-snap-stop: always/);
    assert.match(res, /accent-color: var\(--c-blue-500\)/);
    assert.match(res, /caret-color: var\(--c-red-500\)/);
    assert.match(res, /scroll-margin-left: var\(--s-4\); scroll-margin-right: var\(--s-4\);/);
    assert.match(res, /touch-action: none/);
    assert.match(res, /user-select: none/);
    assert.match(res, /will-change: transform/);
  });

  await t.test('Space Shortcuts', () => {
    const config = createTestConfig();
    const res = generateCSS([
      { property: 'p-x', value: '4', attrType: 'space', raw: 'p-x:4' },
      { property: 'p-y', value: '4', attrType: 'space', raw: 'p-y:4' },
      { property: 'm-x', value: '4', attrType: 'space', raw: 'm-x:4' },
      { property: 'm-y', value: '4', attrType: 'space', raw: 'm-y:4' },
      { property: 'g-x', value: '4', attrType: 'space', raw: 'g-x:4' },
      { property: 'g-y', value: '4', attrType: 'space', raw: 'g-y:4' }
    ], config);
    
    assert.match(res, /padding-left: var\(--s-4\); padding-right: var\(--s-4\);/);
    assert.match(res, /padding-top: var\(--s-4\); padding-bottom: var\(--s-4\);/);
    assert.match(res, /margin-left: var\(--s-4\); margin-right: var\(--s-4\);/);
    assert.match(res, /margin-top: var\(--s-4\); margin-bottom: var\(--s-4\);/);
    assert.match(res, /column-gap: var\(--s-4\);/);
    assert.match(res, /row-gap: var\(--s-4\);/);
  });

  await t.test('Dark Mode Selector Strategy', () => {
    const tokens = [{ property: 'opacity', value: '50', attrType: 'visual', state: 'dark', raw: 'dark:opacity:50' }];
    const config = createTestConfig({ darkMode: 'selector' });
    const res = generateCSS(tokens, config);
    assert.match(res, /\.dark \[visual~="dark:opacity:50"\]/);
    
    // Custom selector
    const config2 = createTestConfig({ darkMode: ['selector', '[data-theme="dark"]'] });
    const res2 = generateCSS(tokens, config2);
    assert.match(res2, /\[data-theme="dark"\] \[visual~="dark:opacity:50"\]/);
  });

  await t.test('Minify CSS', () => {
    const input = `
      /* comment */
      .foo {
        color: red;
        margin: 10px 20px ;
      }
    `;
    const minified = minifyCSS(input);
    assert.strictEqual(minified, '.foo{color:red;margin:10px 20px;}');
  });
});
