/**
 * Tests for convert-tailwind.js
 * Tailwind CSS to SenangStart CSS converter
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { convertClass, convertClasses, convertHTML, spacingScale } from '../../scripts/convert-tailwind.js';

describe('convertClass', () => {
  describe('Layout classes', () => {
    it('should convert display classes', () => {
      assert.deepStrictEqual(convertClass('flex'), { category: 'layout', value: 'flex' });
      assert.deepStrictEqual(convertClass('grid'), { category: 'layout', value: 'grid' });
      assert.deepStrictEqual(convertClass('hidden'), { category: 'layout', value: 'hidden' });
      assert.deepStrictEqual(convertClass('block'), { category: 'layout', value: 'block' });
    });

    it('should convert flex direction classes', () => {
      assert.deepStrictEqual(convertClass('flex-col'), { category: 'layout', value: 'col' });
      assert.deepStrictEqual(convertClass('flex-row'), { category: 'layout', value: 'row' });
      assert.deepStrictEqual(convertClass('flex-col-reverse'), { category: 'layout', value: 'col-reverse' });
    });

    it('should convert justify/align classes', () => {
      assert.deepStrictEqual(convertClass('justify-center'), { category: 'layout', value: 'justify:center' });
      assert.deepStrictEqual(convertClass('justify-between'), { category: 'layout', value: 'justify:between' });
      assert.deepStrictEqual(convertClass('items-center'), { category: 'layout', value: 'items:center' });
      assert.deepStrictEqual(convertClass('items-start'), { category: 'layout', value: 'items:start' });
    });

    it('should convert flex grow/shrink classes', () => {
      assert.deepStrictEqual(convertClass('flex-grow'), { category: 'layout', value: 'grow' });
      assert.deepStrictEqual(convertClass('grow'), { category: 'layout', value: 'grow' });
      assert.deepStrictEqual(convertClass('shrink-0'), { category: 'layout', value: 'shrink-0' });
    });

    it('should convert position classes', () => {
      assert.deepStrictEqual(convertClass('relative'), { category: 'layout', value: 'relative' });
      assert.deepStrictEqual(convertClass('absolute'), { category: 'layout', value: 'absolute' });
      assert.deepStrictEqual(convertClass('fixed'), { category: 'layout', value: 'fixed' });
    });
    
    it('should convert positional offsets (top, left, right, bottom)', () => {
      assert.deepStrictEqual(convertClass('top-0'), { category: 'layout', value: 'top:none' });
      assert.deepStrictEqual(convertClass('left-0'), { category: 'layout', value: 'left:none' });
      assert.deepStrictEqual(convertClass('bottom-full'), { category: 'layout', value: 'bottom:full' });
      assert.deepStrictEqual(convertClass('left-1/2'), { category: 'layout', value: 'left:half' });
      assert.deepStrictEqual(convertClass('top-1/3'), { category: 'layout', value: 'top:third' });
      assert.deepStrictEqual(convertClass('inset-0'), { category: 'layout', value: 'inset:none' });
    });
    
    it('should convert grid classes', () => {
      assert.deepStrictEqual(convertClass('grid-cols-3'), { category: 'layout', value: 'grid-cols:3' });
      assert.deepStrictEqual(convertClass('col-span-2'), { category: 'layout', value: 'col-span:2' });
    });
  });

  describe('Spacing classes', () => {
    it('should convert padding classes', () => {
      assert.deepStrictEqual(convertClass('p-4'), { category: 'space', value: 'p:medium' });
      assert.deepStrictEqual(convertClass('p-8'), { category: 'space', value: 'p:large' });
      assert.deepStrictEqual(convertClass('px-4'), { category: 'space', value: 'p-x:medium' });
      assert.deepStrictEqual(convertClass('py-2'), { category: 'space', value: 'p-y:small' });
    });

    it('should convert margin classes', () => {
      assert.deepStrictEqual(convertClass('m-4'), { category: 'space', value: 'm:medium' });
      assert.deepStrictEqual(convertClass('mt-8'), { category: 'space', value: 'm-t:large' });
      assert.deepStrictEqual(convertClass('mx-auto'), { category: 'space', value: 'm-x:auto' });
    });

    it('should convert gap classes', () => {
      assert.deepStrictEqual(convertClass('gap-4'), { category: 'space', value: 'g:medium' });
      assert.deepStrictEqual(convertClass('gap-x-2'), { category: 'space', value: 'g-x:small' });
    });

    it('should convert width/height classes', () => {
      assert.deepStrictEqual(convertClass('w-full'), { category: 'space', value: 'w:full' });
      assert.deepStrictEqual(convertClass('w-1/2'), { category: 'space', value: 'w:half' });
      assert.deepStrictEqual(convertClass('w-1/3'), { category: 'space', value: 'w:third' });
      assert.deepStrictEqual(convertClass('w-2/3'), { category: 'space', value: 'w:third-2x' });
      assert.deepStrictEqual(convertClass('w-1/4'), { category: 'space', value: 'w:quarter' });
      assert.deepStrictEqual(convertClass('w-3/4'), { category: 'space', value: 'w:quarter-3x' });
      assert.deepStrictEqual(convertClass('h-screen'), { category: 'space', value: 'h:[100vh]' });
      assert.deepStrictEqual(convertClass('max-w-4'), { category: 'space', value: 'max-w:medium' });
    });

    it('should convert negative margin classes', () => {
      // Standard exact=false
      assert.deepStrictEqual(convertClass('-m-4'), { category: 'space', value: 'm:-medium' });
      assert.deepStrictEqual(convertClass('-mt-8'), { category: 'space', value: 'm-t:-large' });
      
      // Exact=true
      assert.deepStrictEqual(convertClass('-m-4', { exact: true }), { category: 'space', value: 'm:-tw-4' });

      // Arbitrary
      assert.deepStrictEqual(convertClass('-m-[10px]'), { category: 'space', value: 'm:[-10px]' });
    });
  });

  describe('Visual classes', () => {
    it('should convert background color classes', () => {
      assert.deepStrictEqual(convertClass('bg-blue-500'), { category: 'visual', value: 'bg:blue-500' });
      assert.deepStrictEqual(convertClass('bg-white'), { category: 'visual', value: 'bg:white' });
      assert.deepStrictEqual(convertClass('bg-transparent'), { category: 'visual', value: 'bg:transparent' });
    });

    it('should convert border color classes', () => {
      assert.deepStrictEqual(convertClass('border-gray-900'), { category: 'visual', value: 'border:gray-900' });
      assert.deepStrictEqual(convertClass('border-t-gray-900'), { category: 'visual', value: 'border-t:gray-900' });
      assert.deepStrictEqual(convertClass('border-b-blue-500'), { category: 'visual', value: 'border-b:blue-500' });
      assert.deepStrictEqual(convertClass('border-l-red-300'), { category: 'visual', value: 'border-l:red-300' });
      assert.deepStrictEqual(convertClass('border-r-transparent'), { category: 'visual', value: 'border-r:transparent' });
    });

    it('should convert text color classes', () => {
      assert.deepStrictEqual(convertClass('text-white'), { category: 'visual', value: 'text:white' });
      assert.deepStrictEqual(convertClass('text-gray-700'), { category: 'visual', value: 'text:gray-700' });
    });

    it('should convert text alignment classes', () => {
      assert.deepStrictEqual(convertClass('text-center'), { category: 'visual', value: 'text:center' });
      assert.deepStrictEqual(convertClass('text-left'), { category: 'visual', value: 'text:left' });
    });

    it('should convert text size classes', () => {
      assert.deepStrictEqual(convertClass('text-sm'), { category: 'visual', value: 'text-size:small' });
      assert.deepStrictEqual(convertClass('text-xl'), { category: 'visual', value: 'text-size:big' });
      assert.deepStrictEqual(convertClass('text-2xl'), { category: 'visual', value: 'text-size:giant' });
    });

    it('should convert border radius classes', () => {
      assert.deepStrictEqual(convertClass('rounded'), { category: 'visual', value: 'rounded:small' });
      assert.deepStrictEqual(convertClass('rounded-lg'), { category: 'visual', value: 'rounded:medium' });
      assert.deepStrictEqual(convertClass('rounded-full'), { category: 'visual', value: 'rounded:round' });
    });

    it('should convert shadow classes', () => {
      assert.deepStrictEqual(convertClass('shadow'), { category: 'visual', value: 'shadow:small' });
      assert.deepStrictEqual(convertClass('shadow-md'), { category: 'visual', value: 'shadow:medium' });
      assert.deepStrictEqual(convertClass('shadow-lg'), { category: 'visual', value: 'shadow:big' });
    });

    it('should convert font weight classes', () => {
      assert.deepStrictEqual(convertClass('font-bold'), { category: 'visual', value: 'font:tw-bold' });
      assert.deepStrictEqual(convertClass('font-medium'), { category: 'visual', value: 'font:tw-medium' });
    });

    it('should convert typography keywords', () => {
      assert.deepStrictEqual(convertClass('italic'), { category: 'visual', value: 'italic' });
      assert.deepStrictEqual(convertClass('uppercase'), { category: 'visual', value: 'uppercase' });
      assert.deepStrictEqual(convertClass('underline'), { category: 'visual', value: 'underline' });
      assert.deepStrictEqual(convertClass('truncate'), { category: 'visual', value: 'truncate' });
    });

    it('should convert opacity classes', () => {
      assert.deepStrictEqual(convertClass('opacity-50'), { category: 'visual', value: 'opacity:50' });
      assert.deepStrictEqual(convertClass('opacity-100'), { category: 'visual', value: 'opacity:100' });
    });
    
    it('should convert cursor classes', () => {
      assert.deepStrictEqual(convertClass('cursor-pointer'), { category: 'visual', value: 'cursor:pointer' });
      assert.deepStrictEqual(convertClass('cursor-not-allowed'), { category: 'visual', value: 'cursor:not-allowed' });
    });

    it('should convert gradient classes', () => {
      assert.deepStrictEqual(convertClass('bg-gradient-to-r'), { category: 'visual', value: 'bg-image:gradient-to-r' });
      assert.deepStrictEqual(convertClass('bg-gradient-to-br'), { category: 'visual', value: 'bg-image:gradient-to-br' });
      assert.deepStrictEqual(convertClass('from-blue-500'), { category: 'visual', value: 'from:blue-500' });
      assert.deepStrictEqual(convertClass('via-purple-500'), { category: 'visual', value: 'via:purple-500' });
      assert.deepStrictEqual(convertClass('to-pink-500'), { category: 'visual', value: 'to:pink-500' });
    });

    it('should convert translate utilities with fractions', () => {
      assert.deepStrictEqual(convertClass('translate-x-1/2'), { category: 'visual', value: 'translate-x:half' });
      assert.deepStrictEqual(convertClass('translate-y-full'), { category: 'visual', value: 'translate-y:full' });
      assert.deepStrictEqual(convertClass('-translate-x-1/2'), { category: 'visual', value: 'translate-x:-half' });
      assert.deepStrictEqual(convertClass('-translate-y-full'), { category: 'visual', value: 'translate-y:-full' });
    });
  });

  describe('Prefixed classes', () => {
    it('should handle responsive prefixes', () => {
      assert.deepStrictEqual(convertClass('md:flex'), { category: 'layout', value: 'tw-md:flex' });
      assert.deepStrictEqual(convertClass('lg:p-8'), { category: 'space', value: 'tw-lg:p:large' });
    });

    it('should handle dark mode prefix', () => {
      assert.deepStrictEqual(convertClass('dark:bg-gray-900'), { category: 'visual', value: 'dark:bg:gray-900' });
      assert.deepStrictEqual(convertClass('dark:text-white'), { category: 'visual', value: 'dark:text:white' });
    });

    it('should handle hover/focus prefixes', () => {
      assert.deepStrictEqual(convertClass('hover:bg-blue-600'), { category: 'visual', value: 'hover:bg:blue-600' });
      // focus:ring returns null because 'ring' is not a recognized base class
      assert.strictEqual(convertClass('focus:ring'), null);
    });
  });

  describe('Arbitrary values', () => {
    it('should handle arbitrary spacing', () => {
      assert.deepStrictEqual(convertClass('p-[20px]'), { category: 'space', value: 'p:[20px]' });
      assert.deepStrictEqual(convertClass('w-[300px]'), { category: 'space', value: 'w:[300px]' });
    });
  });

  describe('Unrecognized classes', () => {
    it('should return null for unknown classes', () => {
      assert.strictEqual(convertClass('some-unknown-class'), null);
      assert.strictEqual(convertClass('custom-utility'), null);
    });
  });
});

describe('convertClasses', () => {
  it('should group classes by category', () => {
    const result = convertClasses('flex items-center p-4 bg-blue-500 text-white');
    
    assert.deepStrictEqual(result.layout, ['flex', 'items:center']);
    assert.deepStrictEqual(result.space, ['p:medium']);
    assert.deepStrictEqual(result.visual, ['bg:blue-500', 'text:white']);
    assert.deepStrictEqual(result.unrecognized, []);
  });

  it('should collect unrecognized classes', () => {
    const result = convertClasses('flex my-custom-class p-4');
    
    assert.deepStrictEqual(result.unrecognized, ['my-custom-class']);
  });
});

describe('convertHTML', () => {
  it('should convert simple HTML element', () => {
    const input = '<div class="flex items-center p-4 bg-blue-500"></div>';
    const result = convertHTML(input);
    
    assert.ok(result.includes('layout="flex items:center"'));
    assert.ok(result.includes('space="p:medium"'));
    assert.ok(result.includes('visual="bg:blue-500"'));
    assert.ok(!result.includes('class='));
  });

  it('should preserve unrecognized classes in class attribute', () => {
    const input = '<div class="flex my-custom-class"></div>';
    const result = convertHTML(input);
    
    assert.ok(result.includes('layout="flex"'));
    assert.ok(result.includes('class="my-custom-class"'));
  });

  it('should handle multiple elements', () => {
    const input = `
      <div class="flex">
        <span class="text-white">Hello</span>
      </div>
    `;
    const result = convertHTML(input);
    
    assert.ok(result.includes('layout="flex"'));
    assert.ok(result.includes('visual="text:white"'));
  });

  it('should handle single quotes', () => {
    const input = "<div class='flex p-4'></div>";
    const result = convertHTML(input);
    
    assert.ok(result.includes('layout="flex"'));
    assert.ok(result.includes('space="p:medium"'));
  });
});

describe('spacingScale', () => {
  it('should have expected scale mappings', () => {
    assert.strictEqual(spacingScale['0'], 'none');
    assert.strictEqual(spacingScale['4'], 'medium');
    assert.strictEqual(spacingScale['8'], 'large');
    assert.strictEqual(spacingScale['12'], 'big');
    assert.strictEqual(spacingScale['24'], 'giant');
    assert.strictEqual(spacingScale['auto'], 'auto');
  });
});

describe('Exact mode (tw- prefix)', () => {
  describe('Spacing with exact mode', () => {
    it('should output tw- prefix for padding', () => {
      assert.deepStrictEqual(
        convertClass('p-4', { exact: true }),
        { category: 'space', value: 'p:tw-4' }
      );
      assert.deepStrictEqual(
        convertClass('p-8', { exact: true }),
        { category: 'space', value: 'p:tw-8' }
      );
    });

    it('should output tw- prefix for margin', () => {
      assert.deepStrictEqual(
        convertClass('mt-4', { exact: true }),
        { category: 'space', value: 'm-t:tw-4' }
      );
    });

    it('should output tw- prefix for gap', () => {
      assert.deepStrictEqual(
        convertClass('gap-4', { exact: true }),
        { category: 'space', value: 'g:tw-4' }
      );
    });

    it('should output tw- prefix for width/height', () => {
      assert.deepStrictEqual(
        convertClass('w-8', { exact: true }),
        { category: 'space', value: 'w:tw-8' }
      );
    });
  });

  describe('Border radius with exact mode', () => {
    it('should output tw- prefix for rounded', () => {
      assert.deepStrictEqual(
        convertClass('rounded', { exact: true }),
        { category: 'visual', value: 'rounded:tw-DEFAULT' }
      );
      assert.deepStrictEqual(
        convertClass('rounded-lg', { exact: true }),
        { category: 'visual', value: 'rounded:tw-lg' }
      );
    });
  });

  describe('Shadow with exact mode', () => {
    it('should output tw- prefix for shadow', () => {
      assert.deepStrictEqual(
        convertClass('shadow', { exact: true }),
        { category: 'visual', value: 'shadow:tw-DEFAULT' }
      );
      assert.deepStrictEqual(
        convertClass('shadow-lg', { exact: true }),
        { category: 'visual', value: 'shadow:tw-lg' }
      );
    });
  });

  describe('Font size with exact mode', () => {
    it('should output tw- prefix for text size', () => {
      assert.deepStrictEqual(
        convertClass('text-2xl', { exact: true }),
        { category: 'visual', value: 'text-size:tw-2xl' }
      );
    });
  });
  
  describe('Divide utilities', () => {
    it('should convert divide color', () => {
      assert.deepStrictEqual(
        convertClass('divide-gray-200'),
        { category: 'visual', value: 'divide:gray-200' }
      );
    });
    
    it('should convert divide-x', () => {
      assert.deepStrictEqual(
        convertClass('divide-x-gray-200'),
        { category: 'visual', value: 'divide-x:gray-200' }
      );
    });
    
    it('should convert divide-y', () => {
      assert.deepStrictEqual(
        convertClass('divide-y-gray-200'),
        { category: 'visual', value: 'divide-y:gray-200' }
      );
    });
    
    it('should convert divide width', () => {
      assert.deepStrictEqual(
        convertClass('divide-2'),
        { category: 'visual', value: 'divide-w:regular' }
      );
    });
    
    it('should convert divide-x width', () => {
      assert.deepStrictEqual(
        convertClass('divide-x-2'),
        { category: 'visual', value: 'divide-x-w:regular' }
      );
    });
    
    it('should convert divide-y width', () => {
      assert.deepStrictEqual(
        convertClass('divide-y-2'),
        { category: 'visual', value: 'divide-y-w:regular' }
      );
    });
    
    it('should convert divide style', () => {
      assert.deepStrictEqual(
        convertClass('divide-dashed'),
        { category: 'visual', value: 'divide-style:dashed' }
      );
    });
    
    it('should convert divide style with exact mode', () => {
      assert.deepStrictEqual(
        convertClass('divide-dashed', { exact: true }),
        { category: 'visual', value: 'divide-style:dashed' }
      );
    });
  });
  
  describe('convertClasses with exact mode', () => {
    it('should group classes with tw- prefix', () => {
      const result = convertClasses('flex p-4 rounded-lg', { exact: true });
      
      assert.deepStrictEqual(result.layout, ['flex']);
      assert.deepStrictEqual(result.space, ['p:tw-4']);
      assert.deepStrictEqual(result.visual, ['rounded:tw-lg']);
    });
  });

  describe('convertHTML with exact mode', () => {
    it('should convert HTML with tw- prefix', () => {
      const input = '<div class="p-4 rounded-lg"></div>';
      const result = convertHTML(input, { exact: true });
      
      assert.ok(result.includes('space="p:tw-4"'));
      assert.ok(result.includes('visual="rounded:tw-lg"'));
    });
  });
});
