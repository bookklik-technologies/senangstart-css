/**
 * SenangStart CSS - Compiler Integration Tests
 * Tests the full compilation pipeline from HTML to CSS
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { compileSource, compileMultiple } from '../../src/compiler/index.js';
import { createTestConfig, normalizeCSS } from '../helpers/test-utils.js';

describe('Compiler Integration', () => {

  describe('compileSource', () => {

    it('compiles simple HTML to CSS', () => {
      const html = '<div layout="flex center" space="p:medium" visual="bg:primary">Test</div>';
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.ok(result.css);
      assert.ok(result.tokens);
      assert.ok(Array.isArray(result.tokens));
      assert.ok(result.tokens.length > 0);
      
      // Verify CSS contains expected rules
      assert.ok(result.css.includes('display: flex'));
      assert.ok(result.css.includes('padding: var(--s-medium)'));
      assert.ok(result.css.includes('background-color: var(--c-primary)'));
    });

    it('compiles responsive layout', () => {
      const html = `
        <div 
          layout="flex col tab:row desk:grid-cols:3" 
          space="p:small mob:p:medium tab:p:big"
        >
          Responsive
        </div>
      `;
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      // Base styles
      assert.ok(result.css.includes('flex-direction: column'));
      
      // Responsive styles wrapped in media queries
      assert.ok(result.css.includes('@media (min-width: 768px)'));
      assert.ok(result.css.includes('@media (min-width: 1280px)'));
    });

    it('compiles interactive states', () => {
      const html = `
        <button 
          visual="bg:primary hover:bg:secondary focus:shadow:medium active:bg:success"
        >
          Button
        </button>
      `;
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.ok(result.css.includes(':hover'));
      assert.ok(result.css.includes(':focus'));
      assert.ok(result.css.includes(':active'));
    });

    it('compiles dark mode styles', () => {
      const html = '<div visual="bg:white dark:bg:black text:black dark:text:white">Content</div>';
      const config = createTestConfig({ darkMode: 'media' });
      
      const result = compileSource(html, config);
      
      assert.ok(result.css.includes('@media (prefers-color-scheme: dark)'));
    });

    it('compiles arbitrary values', () => {
      const html = '<div space="w:[calc(100%_-_40px)] h:[100vh]" visual="bg:[#FF5733]">Custom</div>';
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.ok(result.css.includes('calc(100% - 40px)'));
      assert.ok(result.css.includes('100vh'));
      assert.ok(result.css.includes('#FF5733'));
    });

    it('includes CSS variables in output', () => {
      const html = '<div layout="flex">Test</div>';
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.ok(result.css.includes(':root'));
      assert.ok(result.css.includes('--s-medium'));
      assert.ok(result.css.includes('--c-primary'));
    });

    it('minifies output when configured', () => {
      const html = '<div layout="flex" space="p:medium">Test</div>';
      const config = createTestConfig({ output: { minify: true } });
      
      const result = compileSource(html, config);
      
      assert.ok(result.minifiedCSS);
      // Minified should be shorter (fewer newlines/spaces)
      assert.ok(result.minifiedCSS.length <= result.css.length);
    });

    it('handles empty HTML gracefully', () => {
      const html = '';
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.ok(result.tokens.length === 0);
      // Should still have CSS variables
      assert.ok(result.css.includes(':root'));
    });

    it('handles HTML without SenangStart attributes', () => {
      const html = '<div class="regular">Normal HTML</div>';
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.strictEqual(result.tokens.length, 0);
    });

  });

  describe('compileMultiple', () => {

    it('compiles multiple source files', () => {
      const files = [
        { path: 'page1.html', content: '<div layout="flex">Page 1</div>' },
        { path: 'page2.html', content: '<div layout="grid" visual="bg:primary">Page 2</div>' },
        { path: 'page3.html', content: '<div space="p:medium m:big">Page 3</div>' }
      ];
      const config = createTestConfig();
      
      const result = compileMultiple(files, config);
      
      // All tokens from all files
      assert.ok(result.css.includes('display: flex'));
      assert.ok(result.css.includes('display: grid'));
      assert.ok(result.css.includes('padding: var(--s-medium)'));
      assert.ok(result.css.includes('margin: var(--s-big)'));
    });

    it('deduplicates tokens across files', () => {
      const files = [
        { path: 'page1.html', content: '<div layout="flex center">Page 1</div>' },
        { path: 'page2.html', content: '<div layout="flex center">Page 2</div>' }
      ];
      const config = createTestConfig();
      
      const result = compileMultiple(files, config);
      
      // Count occurrences of flex rule - should only appear once
      const flexMatches = result.css.match(/layout~="flex"/g) || [];
      assert.strictEqual(flexMatches.length, 1);
    });

    it('handles empty file array', () => {
      const files = [];
      const config = createTestConfig();
      
      const result = compileMultiple(files, config);
      
      assert.ok(result.css);
      assert.strictEqual(result.tokens.length, 0);
    });

  });

  describe('Real-world Scenarios', () => {

    it('compiles a card component', () => {
      const html = `
        <article 
          layout="flex col" 
          space="p:medium" 
          visual="bg:white rounded:medium shadow:small hover:shadow:medium"
        >
          <img layout="w:[100%]" visual="rounded:small" />
          <h3 visual="text:dark text-size:big font:bold">Title</h3>
          <p visual="text:grey text-size:small">Description</p>
        </article>
      `;
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.ok(result.tokens.length > 0);
      assert.ok(result.css.includes('flex-direction: column'));
      assert.ok(result.css.includes('padding: var(--s-medium)'));
      assert.ok(result.css.includes('border-radius: var(--r-medium)'));
      assert.ok(result.css.includes('box-shadow'));
    });

    it('compiles a responsive navigation', () => {
      const html = `
        <nav 
          layout="flex between mob:col mob:center" 
          space="p:medium g:small"
          visual="bg:white shadow:small"
        >
          <a visual="text:primary hover:text:secondary">Home</a>
          <a visual="text:primary hover:text:secondary">About</a>
          <a visual="text:primary hover:text:secondary">Contact</a>
        </nav>
      `;
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      // Check responsive styles
      assert.ok(result.css.includes('@media (min-width: 480px)'));
      assert.ok(result.css.includes(':hover'));
    });

    it('compiles a complex grid layout', () => {
      const html = `
        <main 
          layout="grid grid-cols:1 tab:grid-cols:2 desk:grid-cols:4" 
          space="g:medium p:big"
        >
          <section layout="col-span:1 tab:col-span:2" space="p:small">Wide</section>
          <section space="p:small">Item 1</section>
          <section space="p:small">Item 2</section>
        </main>
      `;
      const config = createTestConfig();
      
      const result = compileSource(html, config);
      
      assert.ok(result.css.includes('display: grid'));
      assert.ok(result.css.includes('grid-template-columns'));
      assert.ok(result.css.includes('grid-column'));
    });

  });

});
