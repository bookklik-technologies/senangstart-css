
import { test } from 'node:test';
import assert from 'node:assert';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { convertClass, main, convertHTML, convertClasses, isValidFilePath } from '../../scripts/convert-tailwind.js';
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

test('convert-tailwind coverage', async (t) => {
  
  await t.test('mask and divide utilities', () => {
    assert.deepStrictEqual(convertClass('mask-none'), { category: 'visual', value: 'mask:none' });
    assert.deepStrictEqual(convertClass('mask-image-none'), { category: 'visual', value: 'mask-image:none' });
    assert.deepStrictEqual(convertClass('mask-mode-match'), { category: 'visual', value: 'mask-mode:match' });
    assert.deepStrictEqual(convertClass('mask-origin-center'), { category: 'visual', value: 'mask-origin:center' });
    assert.deepStrictEqual(convertClass('mask-position-center'), { category: 'visual', value: 'mask-position:center' });
    assert.deepStrictEqual(convertClass('mask-repeat-repeat'), { category: 'visual', value: 'mask-repeat:repeat' });
    assert.deepStrictEqual(convertClass('mask-size-auto'), { category: 'visual', value: 'mask-size:auto' });
    assert.deepStrictEqual(convertClass('mask-type-luminance'), { category: 'visual', value: 'mask-type:luminance' });

    assert.deepStrictEqual(convertClass('divide-x-reverse'), { category: 'visual', value: 'divide-x:reverse' });
    assert.deepStrictEqual(convertClass('divide-y-reverse'), { category: 'visual', value: 'divide-y:reverse' });
    
    assert.deepStrictEqual(convertClass('divide-x'), { category: 'visual', value: 'divide-x-w:thin' });
    assert.deepStrictEqual(convertClass('divide-y'), { category: 'visual', value: 'divide-y-w:thin' });
    
    assert.deepStrictEqual(convertClass('divide-x-2'), { category: 'visual', value: 'divide-x-w:regular' });
    assert.deepStrictEqual(convertClass('divide-y-4'), { category: 'visual', value: 'divide-y-w:medium' });
    
    assert.deepStrictEqual(convertClass('divide-dotted'), { category: 'visual', value: 'divide-style:dotted' });

    assert.deepStrictEqual(convertClass('divide-4'), { category: 'visual', value: 'divide-w:medium' });
    assert.deepStrictEqual(convertClass('divide-red-500'), { category: 'visual', value: 'divide:red-500' });
  });

  await t.test('space utilities', () => {
    assert.deepStrictEqual(convertClass('m-[10px]'), { category: 'space', value: 'm:[10px]' });
    assert.deepStrictEqual(convertClass('-m-[10px]'), { category: 'space', value: 'm:[-10px]' });
    assert.deepStrictEqual(convertClass('p-[10px]'), { category: 'space', value: 'p:[10px]' });
    
    assert.deepStrictEqual(convertClass('w-min'), { category: 'space', value: 'w:min' });
    assert.deepStrictEqual(convertClass('w-max'), { category: 'space', value: 'w:max' });
    assert.deepStrictEqual(convertClass('w-fit'), { category: 'space', value: 'w:fit' });
    assert.deepStrictEqual(convertClass('h-screen'), { category: 'space', value: 'h:[100vh]' });
    
    // Percentage adjectives
    assert.deepStrictEqual(convertClass('w-1/2'), { category: 'space', value: 'w:half' });
    assert.deepStrictEqual(convertClass('h-1/3'), { category: 'space', value: 'h:third' });

    // Fractional values in getSpacingScale (for padding/gap)
    assert.deepStrictEqual(convertClass('p-1/2'), { category: 'space', value: 'p:half' });
    assert.deepStrictEqual(convertClass('p-1/2', { exact: true }), { category: 'space', value: 'p:half' });
    assert.deepStrictEqual(convertClass('gap-x-1/2'), { category: 'space', value: 'g-x:half' });
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
    assert.deepStrictEqual(convertClass('translate-x-4'), { category: 'visual', value: 'translate-x:medium' });
    assert.deepStrictEqual(convertClass('translate-y-4'), { category: 'visual', value: 'translate-y:medium' });
    assert.deepStrictEqual(convertClass('translate-z-4'), { category: 'visual', value: 'translate-z:medium' });
    
    // Origin
    assert.deepStrictEqual(convertClass('origin-top'), { category: 'visual', value: 'origin:top' });

    // Translate edge cases
    assert.deepStrictEqual(convertClass('translate-x-0'), { category: 'visual', value: 'translate-x:0' });
    assert.deepStrictEqual(convertClass('-translate-x-[10px]'), { category: 'visual', value: 'translate-x:[-10px]' });
  });

  // Mask utilities already covered in first block

  await t.test('exact mode and edge cases', () => {
    // Spacing scale exact mode
    assert.deepStrictEqual(convertClass('p-4', { exact: true }), { category: 'space', value: 'p:tw-4' });
    assert.deepStrictEqual(convertClass('m-auto', { exact: true }), { category: 'space', value: 'm:auto' });
    assert.deepStrictEqual(convertClass('w-full', { exact: true }), { category: 'space', value: 'w:full' });
    assert.deepStrictEqual(convertClass('p-[20px]', { exact: true }), { category: 'space', value: 'p:[20px]' });
    
    // Unknown spacing scale
    assert.deepStrictEqual(convertClass('p-unknown'), { category: 'space', value: 'p:[unknown]' });
    
    // Border width exact mode
    assert.deepStrictEqual(convertClass('border-2', { exact: true }), { category: 'visual', value: 'border-w:tw-2' });
    assert.deepStrictEqual(convertClass('border-t-2', { exact: true }), { category: 'visual', value: 'border-t-w:tw-2' });
    
    // Other utilities
    assert.deepStrictEqual(convertClass('border-red-500'), { category: 'visual', value: 'border:red-500' });
    assert.deepStrictEqual(convertClass('order-1'), { category: 'layout', value: 'order:1' });
    assert.deepStrictEqual(convertClass('grid-cols-3'), { category: 'layout', value: 'grid-cols:3' });
    assert.deepStrictEqual(convertClass('col-span-2'), { category: 'layout', value: 'col-span:2' });
    assert.deepStrictEqual(convertClass('grid-rows-2'), { category: 'layout', value: 'grid-rows:2' });
    assert.deepStrictEqual(convertClass('row-span-3'), { category: 'layout', value: 'row-span:3' });
    assert.deepStrictEqual(convertClass('opacity-50'), { category: 'visual', value: 'opacity:50' });
    
    // Font weight
    assert.deepStrictEqual(convertClass('font-bold'), { category: 'visual', value: 'font:tw-bold' });

    // Positional arbitrary values
    assert.deepStrictEqual(convertClass('left-[10px]'), { category: 'layout', value: 'left:[10px]' });

    // Unrecognized classes
    const result = convertClasses('flex unknown-class');
    assert.deepStrictEqual(result.unrecognized, ['unknown-class']);
  });

  await t.test('internal tests', async (t) => {
    // Mock process.exit and console.error
    const originalExit = process.exit;
    const originalConsoleError = console.error;
    const originalConsoleLog = console.log;
    let lastExitCode = null;
    
    process.exit = (code) => { 
      lastExitCode = code; 
      throw new Error(`ProcessExit:${code}`); 
    };
    console.error = (...args) => { /* originalConsoleError('MOCK ERROR:', ...args); */ };
    console.log = (...args) => { /* originalConsoleLog('MOCK LOG:', ...args); */ };

    try {
      // Help - should return normally
      main(['--help']);
      
      // String mode - success
      main(['--string', '<div class="flex"></div>']);
      
      // Missing string argument - should exit 1
      assert.throws(() => main(['--string']), /ProcessExit:1/);
      
      // Invalid file path - should exit 1
      assert.throws(() => main(['/etc/passwd']), /ProcessExit:1/);
      
      // Valid file but nonexistent (ENOENT) - should exit 1
      assert.throws(() => main(['non-existent-local.html']), /ProcessExit:1/);

      // Create a dummy input file first
      const dummyFile = 'dummy.html';
      fs.writeFileSync(dummyFile, '<div></div>');
      try {
        // Invalid output path - should exit 1
        assert.throws(() => main([dummyFile, '-o', '/etc/passwd']), /ProcessExit:1/);

        // Console output when no output file
        main([dummyFile]);

        // main with multiple args to test skip logic
        main(['--string', '<div class="flex"></div>', '-o', 'out.html']);

        // Test isValidFilePath non-Windows branch if on Windows
        if (process.platform === 'win32') {
          const originalPlatform = process.platform;
          // Node's process.platform is read-only in some versions, try to overwrite
          try {
            Object.defineProperty(process, 'platform', { value: 'linux', configurable: true });
            main([dummyFile]);
          } catch (e) {
            // If platform is not configurable, we might not be able to hit this line on Windows
          } finally {
            Object.defineProperty(process, 'platform', { value: originalPlatform, configurable: true });
          }
        }

        // Successful file output (line 1146-1147)
        const dummyOutput = 'dummy_out.html';
        main([dummyFile, '-o', dummyOutput]);
        assert.ok(fs.existsSync(dummyOutput));
        if (fs.existsSync(dummyOutput)) fs.unlinkSync(dummyOutput);
      } finally {
        if (fs.existsSync(dummyFile)) fs.unlinkSync(dummyFile);
      }

      // convertHTML direct call
      const res = convertHTML('<div class="p-4 text-red-500 unknown-class"></div>');
      assert.match(res, /space="p:medium"/);
      assert.match(res, /visual="text:red-500"/);
      assert.match(res, /class="unknown-class"/);
      
      // main with missing input file should exit 1
      assert.throws(() => main(['-o', 'out.html']), /ProcessExit:1/);

      // Trigger catch block in main (though it's hard to trigger without real FS errors)
      // We pass a number to trigger TypeError: The "path" argument must be of type string.
      assert.throws(() => main(['dummy.html', '-o', 123]), /ProcessExit:1/);

      // Directly test isValidFilePath catch block
      assert.strictEqual(isValidFilePath(null), false);
      assert.strictEqual(isValidFilePath(undefined), false);
      assert.strictEqual(isValidFilePath(123), false);

      // CLI entry point coverage (line 1160-1161)
      const scriptPath = path.resolve('scripts/convert-tailwind.js');
      spawnSync('node', [scriptPath, '--help'], { encoding: 'utf8' });

    } finally {
      process.exit = originalExit;
      console.error = originalConsoleError;
      console.log = originalConsoleLog;
    }
  });

});
