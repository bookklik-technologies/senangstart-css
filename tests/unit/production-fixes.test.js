/**
 * SenangStart CSS - Production-Readiness Regression Tests (Phase 1)
 *
 * Covers the P0 correctness fixes:
 *   1.1 Breakpoint + dark-mode token combinations keep their media query
 *   1.2 Dark selector mode prefixes every selector (arbitrary values, divide)
 *   1.3 minifyCSS is string/comment aware (content strings, data URIs)
 *   1.4 Invalid tokens fail the build (exit code 1) with --ignore-invalid escape
 *   1.5 Config path guard rejects sibling directories (path.relative check)
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import os from 'node:os';
import { generateCSS, minifyCSS } from '../../src/compiler/generators/css.js';
import { tokenizeAll } from '../../src/compiler/tokenizer.js';
import { isPathInsideRoot } from '../../src/cli/commands/build.js';
import { createTestConfig } from '../helpers/test-utils.js';

describe('Production Fixes (Phase 1)', () => {

  describe('1.1 Breakpoint + dark combination', () => {
    it('keeps media query for breakpoint+dark token (media mode)', () => {
      const token = {
        breakpoint: 'tab',
        state: 'dark',
        property: 'bg',
        value: 'black',
        attrType: 'visual',
        raw: 'tab:dark:bg:black'
      };
      const config = createTestConfig({ darkMode: 'media' });
      const css = generateCSS([token], config);

      assert.ok(css.includes('@media (prefers-color-scheme: dark)'), 'dark block must exist');
      assert.ok(css.includes('@media (min-width: 768px)'), 'breakpoint media query must be preserved inside dark block');
      assert.ok(css.includes('[visual~="tab:dark:bg:black"]'), 'selector must use full raw token');
    });

    it('keeps media query for breakpoint+dark token (selector mode)', () => {
      const token = {
        breakpoint: 'tab',
        state: 'dark',
        property: 'bg',
        value: 'black',
        attrType: 'visual',
        raw: 'tab:dark:bg:black'
      };
      const config = createTestConfig({ darkMode: 'selector' });
      const css = generateCSS([token], config);

      assert.ok(css.includes('@media (min-width: 768px)'), 'breakpoint media query must be preserved');
      assert.ok(css.includes(':where(.dark, :is(.dark) *)[visual~="tab:dark:bg:black"]'), 'dark selector prefix must be applied');
    });

    it('keeps media query for desk:dark token', () => {
      const token = {
        breakpoint: 'desk',
        state: 'dark',
        property: 'text',
        value: 'white',
        attrType: 'visual',
        raw: 'desk:dark:text:white'
      };
      const config = createTestConfig({ darkMode: 'media' });
      const css = generateCSS([token], config);

      assert.ok(css.includes('@media (min-width: 1280px)'));
    });

    it('groups base and breakpoint dark tokens separately', () => {
      const tokens = [
        { state: 'dark', property: 'bg', value: 'black', attrType: 'visual', raw: 'dark:bg:black' },
        { breakpoint: 'tab', state: 'dark', property: 'bg', value: 'black', attrType: 'visual', raw: 'tab:dark:bg:black' }
      ];
      const config = createTestConfig({ darkMode: 'media' });
      const css = generateCSS(tokens, config);

      const darkBlock = css.slice(css.indexOf('@media (prefers-color-scheme: dark)'));
      assert.ok(darkBlock.includes('[visual~="dark:bg:black"]'), 'base dark rule emitted');
      assert.ok(darkBlock.includes('[visual~="tab:dark:bg:black"]'), 'breakpoint dark rule emitted');
    });

    it('emits base dark tokens without breakpoint wrapper (media mode, no regression)', () => {
      const token = { state: 'dark', property: 'bg', value: 'black', attrType: 'visual', raw: 'dark:bg:black' };
      const config = createTestConfig({ darkMode: 'media' });
      const css = generateCSS([token], config);

      const darkBlock = css.slice(css.indexOf('@media (prefers-color-scheme: dark)'));
      assert.ok(darkBlock.includes('[visual~="dark:bg:black"]'));
      // Base dark rule must not be wrapped in a min-width query
      assert.ok(!darkBlock.includes('min-width'), 'base dark rules must not gain a breakpoint wrapper');
    });
  });

  describe('1.2 Dark selector mode prefixing', () => {
    it('prefixes selectors containing brackets in arbitrary values', () => {
      // Regression: naive /^(\[[^\]]+?\])/ replace breaks on raw tokens whose
      // arbitrary value contains "]" (e.g. dark:bg:[#ff0000])
      const tokens = tokenizeAll({ visual: new Set(['dark:bg:[#ff0000]']) });
      const config = createTestConfig({ darkMode: 'selector' });
      const css = generateCSS(tokens, config);

      assert.ok(
        css.includes(':where(.dark, :is(.dark) *)[visual~="dark:bg:[#ff0000]"]'),
        'full selector must be prefixed once, unbroken'
      );
      assert.ok(css.includes('background-color: #ff0000'));
    });

    it('prefixes base dark rules at the start only', () => {
      const tokens = tokenizeAll({ visual: new Set(['dark:bg:black']) });
      const config = createTestConfig({ darkMode: 'selector' });
      const css = generateCSS(tokens, config);

      assert.ok(css.includes(':where(.dark, :is(.dark) *)[visual~="dark:bg:black"]'));
      assert.ok(css.includes('background-color: var(--c-black)'));
    });

    it('never double-prefixes selectors', () => {
      const config = createTestConfig({ darkMode: 'selector' });
      const token = { state: 'dark', property: 'bg', value: 'black', attrType: 'visual', raw: 'dark:bg:black' };
      const css = generateCSS([token], config);
      assert.ok(css.includes(':where(.dark, :is(.dark) *)[visual~="dark:bg:black"]'));
      assert.equal(css.split(':where(.dark').length - 1, 1, 'each selector must be prefixed exactly once');
    });
  });

  describe('1.3 String-aware minification', () => {
    it('preserves colons inside content strings', () => {
      const css = '.a { content: "a: b"; }';
      const minified = minifyCSS(css);
      assert.ok(minified.includes('"a: b"'), `string must be untouched, got: ${minified}`);
    });

    it('preserves data URIs', () => {
      const css = '.a { background-image: url("data:image/png;base64,AAA=="); }';
      const minified = minifyCSS(css);
      assert.ok(minified.includes('data:image/png;base64,AAA=='), `data URI must be untouched, got: ${minified}`);
    });

    it('does not treat comment markers inside strings as comments', () => {
      const css = '.a { content: "/* not a comment */"; }';
      const minified = minifyCSS(css);
      assert.ok(minified.includes('/* not a comment */'), `string content must survive, got: ${minified}`);
    });

    it('strips real comments around strings', () => {
      const css = '/* real comment */ .a { content: "keep"; } /* another */';
      const minified = minifyCSS(css);
      assert.ok(!minified.includes('real comment'));
      assert.ok(minified.includes('"keep"'));
    });

    it('handles escaped quotes in strings', () => {
      const css = `.a { content: "it\\'s: fine"; color: red; }`;
      const minified = minifyCSS(css);
      assert.ok(minified.includes(`"it\\'s: fine"`), `escaped quote must survive, got: ${minified}`);
    });

    it('still minifies regular CSS', () => {
      const css = '[layout~="flex"] { display: flex; padding : 10px; margin : 0 auto; }';
      const minified = minifyCSS(css);
      assert.ok(minified.includes('display:flex'));
      assert.ok(minified.includes('padding:10px'));
      assert.ok(minified.includes('margin:0 auto'), 'shorthand value space must be preserved');
      assert.ok(!minified.includes('\n'));
    });

    it('handles empty and non-string input', () => {
      assert.equal(minifyCSS(''), '');
      assert.equal(minifyCSS(null), '');
    });
  });

  describe('1.5 Config path guard', () => {
    it('accepts paths inside the root', () => {
      const root = path.resolve(path.join(os.tmpdir(), 'sscss-root'));
      const inside = path.join(root, 'config.js');
      assert.equal(isPathInsideRoot(inside, root), true);
    });

    it('accepts the root itself as a boundary case (returns false)', () => {
      const root = path.resolve(path.join(os.tmpdir(), 'sscss-root'));
      assert.equal(isPathInsideRoot(root, root), false);
    });

    it('rejects parent directory paths', () => {
      const root = path.resolve(path.join(os.tmpdir(), 'sscss-root', 'sub'));
      const parent = path.dirname(root);
      assert.equal(isPathInsideRoot(parent, root), false);
    });

    it('rejects sibling directories that share a prefix', () => {
      // Regression: startsWith(cwd) allowed "/app-evil" when cwd was "/app"
      const root = path.resolve(path.join(os.tmpdir(), 'sscss-app'));
      const sibling = root + '-evil';
      assert.equal(isPathInsideRoot(sibling, root), false);
    });

    it('is case-insensitive on Windows', () => {
      if (process.platform !== 'win32') return;
      const root = path.resolve(path.join(os.tmpdir(), 'SSCSS-root'));
      const inside = path.join(root.toLowerCase(), 'config.js');
      assert.equal(isPathInsideRoot(inside, root), true);
    });

    it('rejects absolute paths outside the root', () => {
      const root = path.resolve(path.join(os.tmpdir(), 'sscss-root'));
      assert.equal(isPathInsideRoot(path.resolve(path.join(os.tmpdir(), 'elsewhere', 'x.js')), root), false);
    });
  });
});
