
import { test } from 'node:test';
import assert from 'node:assert';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { convertClass } from '../../scripts/convert-tailwind.js';

test('convert-tailwind coverage', async (t) => {
  
  await t.test('mask utilities', () => {
    const res1 = convertClass('mask-none');
    console.log('mask-none result:', res1);
    assert.deepStrictEqual(res1, { category: 'visual', value: 'mask:none' });
    assert.deepStrictEqual(convertClass('mask-image-none'), { category: 'visual', value: 'mask-image:none' });
    assert.deepStrictEqual(convertClass('mask-mode-match'), { category: 'visual', value: 'mask-mode:match' });
    assert.deepStrictEqual(convertClass('mask-origin-center'), { category: 'visual', value: 'mask-origin:center' });
  });

  await t.test('divide utilities', () => {
    assert.deepStrictEqual(convertClass('divide-x-reverse'), { category: 'visual', value: 'divide-x:reverse' });
    assert.deepStrictEqual(convertClass('divide-y-reverse'), { category: 'visual', value: 'divide-y:reverse' });
    
    assert.deepStrictEqual(convertClass('divide-x'), { category: 'visual', value: 'divide-x-w:thin' });
    assert.deepStrictEqual(convertClass('divide-y'), { category: 'visual', value: 'divide-y-w:thin' });
    
    assert.deepStrictEqual(convertClass('divide-x-2'), { category: 'visual', value: 'divide-x-w:regular' });
    assert.deepStrictEqual(convertClass('divide-y-4'), { category: 'visual', value: 'divide-y-w:tiny' });
    
    assert.deepStrictEqual(convertClass('divide-dotted'), { category: 'visual', value: 'divide-style:dotted' });
  });

  await t.test('space utilities', () => {
    assert.deepStrictEqual(convertClass('m-[10px]'), { category: 'space', value: 'm:[10px]' });
    assert.deepStrictEqual(convertClass('-m-[10px]'), { category: 'space', value: 'm:[-10px]' });
    assert.deepStrictEqual(convertClass('p-[10px]'), { category: 'space', value: 'p:[10px]' });
    
    assert.deepStrictEqual(convertClass('w-min'), { category: 'space', value: 'w:[min-content]' });
    assert.deepStrictEqual(convertClass('h-screen'), { category: 'space', value: 'h:[100vh]' });
  });



  await t.test('transform utilities', () => {
    // 3D Transforms
    assert.deepStrictEqual(convertClass('perspective-500'), { category: 'visual', value: 'perspective:500' });
    assert.deepStrictEqual(convertClass('perspective-origin-top'), { category: 'visual', value: 'perspective-origin:top' });
    assert.deepStrictEqual(convertClass('transform-style-preserve-3d'), { category: 'visual', value: 'transform-style:preserve-3d' });
    assert.deepStrictEqual(convertClass('backface-visible'), { category: 'visual', value: 'backface:visible' });
    
    // Rotate
    assert.deepStrictEqual(convertClass('rotate-45'), { category: 'visual', value: 'rotate:45' });
    assert.deepStrictEqual(convertClass('rotate-x-45'), { category: 'visual', value: 'rotate-x:45' });
    assert.deepStrictEqual(convertClass('rotate-y-45'), { category: 'visual', value: 'rotate-y:45' });
    assert.deepStrictEqual(convertClass('rotate-z-45'), { category: 'visual', value: 'rotate-z:45' });
    
    // Scale
    assert.deepStrictEqual(convertClass('scale-50'), { category: 'visual', value: 'scale:50' });
    assert.deepStrictEqual(convertClass('scale-x-50'), { category: 'visual', value: 'scale-x:50' });
    assert.deepStrictEqual(convertClass('scale-y-50'), { category: 'visual', value: 'scale-y:50' });
    
    // Skew
    assert.deepStrictEqual(convertClass('skew-x-12'), { category: 'visual', value: 'skew-x:12' });
    assert.deepStrictEqual(convertClass('skew-y-12'), { category: 'visual', value: 'skew-y:12' });
    
    // Translate
    assert.deepStrictEqual(convertClass('translate-x-4'), { category: 'visual', value: 'translate-x:4' });
    assert.deepStrictEqual(convertClass('translate-y-4'), { category: 'visual', value: 'translate-y:4' });
    assert.deepStrictEqual(convertClass('translate-z-4'), { category: 'visual', value: 'translate-z:4' });
    
    // Origin
    assert.deepStrictEqual(convertClass('origin-top'), { category: 'visual', value: 'origin:top' });
  });

  await t.test('mask utilities', () => {
    // Mask
    assert.deepStrictEqual(convertClass('mask-linear'), { category: 'visual', value: 'mask:linear' });
    
    // Mask Image
    assert.deepStrictEqual(convertClass('mask-image-none'), { category: 'visual', value: 'mask-image:none' });
    assert.deepStrictEqual(convertClass('mask-image-gradient'), { category: 'visual', value: 'mask-image:gradient' });

    // Mask Mode
    assert.deepStrictEqual(convertClass('mask-mode-alpha'), { category: 'visual', value: 'mask-mode:alpha' });
    // Already covered in previous but adding for completeness/grouping if needed, skipping duplicate check since assertion logic is same

    // Mask Origin
    assert.deepStrictEqual(convertClass('mask-origin-border'), { category: 'visual', value: 'mask-origin:border' });

    // Mask Position
    assert.deepStrictEqual(convertClass('mask-position-center'), { category: 'visual', value: 'mask-position:center' });

    // Mask Repeat
    assert.deepStrictEqual(convertClass('mask-repeat-x'), { category: 'visual', value: 'mask-repeat:x' });
    assert.deepStrictEqual(convertClass('mask-repeat-space'), { category: 'visual', value: 'mask-repeat:space' });

    // Mask Size
    assert.deepStrictEqual(convertClass('mask-size-cover'), { category: 'visual', value: 'mask-size:cover' });
    assert.deepStrictEqual(convertClass('mask-size-contain'), { category: 'visual', value: 'mask-size:contain' });

    // Mask Type
    assert.deepStrictEqual(convertClass('mask-type-alpha'), { category: 'visual', value: 'mask-type:alpha' });
  });

});
