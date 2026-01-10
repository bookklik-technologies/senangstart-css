/**
 * SenangStart CSS - Parser Unit Tests
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { parseSource, parseMultipleSources } from '../../../src/compiler/parser.js';

describe('Parser', () => {
  
  describe('parseSource', () => {
    
    it('extracts layout attributes', () => {
      const html = '<div layout="flex center">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.layout instanceof Set);
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('center'));
      assert.strictEqual(result.layout.size, 2);
    });

    it('extracts space attributes', () => {
      const html = '<div space="p:medium m:small">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.space instanceof Set);
      assert.ok(result.space.has('p:medium'));
      assert.ok(result.space.has('m:small'));
      assert.strictEqual(result.space.size, 2);
    });

    it('extracts visual attributes', () => {
      const html = '<div visual="bg:primary text:white">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.visual instanceof Set);
      assert.ok(result.visual.has('bg:primary'));
      assert.ok(result.visual.has('text:white'));
      assert.strictEqual(result.visual.size, 2);
    });

    it('handles multiple attributes in same element', () => {
      const html = '<div layout="flex" space="p:big" visual="bg:success">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.layout.has('flex'));
      assert.ok(result.space.has('p:big'));
      assert.ok(result.visual.has('bg:success'));
    });

    it('handles single quotes', () => {
      const html = "<div layout='grid col'>Test</div>";
      const result = parseSource(html);
      
      assert.ok(result.layout.has('grid'));
      assert.ok(result.layout.has('col'));
    });

    it('handles double quotes', () => {
      const html = '<div layout="flex row">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('row'));
    });

    it('deduplicates repeated tokens within same attribute', () => {
      const html = '<div layout="flex flex center center">Test</div>';
      const result = parseSource(html);
      
      // Set automatically deduplicates
      assert.strictEqual(result.layout.size, 2);
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('center'));
    });

    it('extracts tokens from multiple elements', () => {
      const html = `
        <div layout="flex">First</div>
        <div layout="grid">Second</div>
        <span space="p:tiny">Third</span>
      `;
      const result = parseSource(html);
      
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('grid'));
      assert.ok(result.space.has('p:tiny'));
    });

    it('handles JSX-style attributes', () => {
      const jsx = '<Component layout="flex center" visual="bg:primary" />';
      const result = parseSource(jsx);
      
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('center'));
      assert.ok(result.visual.has('bg:primary'));
    });

    it('handles empty attribute values gracefully', () => {
      const html = '<div layout="">Test</div>';
      const result = parseSource(html);
      
      assert.strictEqual(result.layout.size, 0);
    });

    it('handles whitespace-only attribute values', () => {
      const html = '<div layout="   ">Test</div>';
      const result = parseSource(html);
      
      // After trim and split, should have no valid tokens
      assert.strictEqual(result.layout.size, 0);
    });

    it('ignores non-SenangStart attributes', () => {
      const html = '<div class="my-class" id="my-id" data-test="value" layout="flex">Test</div>';
      const result = parseSource(html);
      
      // Only layout should be parsed
      assert.strictEqual(result.layout.size, 1);
      assert.ok(result.layout.has('flex'));
      assert.strictEqual(result.space.size, 0);
      assert.strictEqual(result.visual.size, 0);
    });

    it('handles responsive prefixes', () => {
      const html = '<div layout="flex tab:row desk:grid">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('tab:row'));
      assert.ok(result.layout.has('desk:grid'));
    });

    it('handles state prefixes', () => {
      const html = '<div visual="bg:primary hover:bg:secondary">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.visual.has('bg:primary'));
      assert.ok(result.visual.has('hover:bg:secondary'));
    });

    it('handles arbitrary values with brackets', () => {
      const html = '<div space="w:[350px] h:[100vh]">Test</div>';
      const result = parseSource(html);
      
      assert.ok(result.space.has('w:[350px]'));
      assert.ok(result.space.has('h:[100vh]'));
    });

    it('handles complex real-world HTML', () => {
      const html = `
        <!DOCTYPE html>
        <html>
        <head><title>Test</title></head>
        <body>
          <header layout="flex between" space="p:medium" visual="bg:white shadow:medium">
            <nav layout="flex" space="g:small">
              <a visual="text:primary hover:text:secondary">Link</a>
            </nav>
          </header>
          <main layout="grid grid-cols:3 tab:grid-cols:2 mob:col" space="p:big g:medium">
            <article visual="bg:white rounded:medium shadow:small">
              <h1 visual="text:big font:bold">Title</h1>
            </article>
          </main>
        </body>
        </html>
      `;
      const result = parseSource(html);
      
      // Layout assertions
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('between'));
      assert.ok(result.layout.has('grid'));
      assert.ok(result.layout.has('grid-cols:3'));
      
      // Space assertions
      assert.ok(result.space.has('p:medium'));
      assert.ok(result.space.has('p:big'));
      assert.ok(result.space.has('g:small'));
      assert.ok(result.space.has('g:medium'));
      
      // Visual assertions
      assert.ok(result.visual.has('bg:white'));
      assert.ok(result.visual.has('shadow:medium'));
      assert.ok(result.visual.has('text:primary'));
      assert.ok(result.visual.has('hover:text:secondary'));
    });

  });

  describe('parseMultipleSources', () => {
    
    it('combines tokens from multiple files', () => {
      const files = [
        { path: 'page1.html', content: '<div layout="flex">Page 1</div>' },
        { path: 'page2.html', content: '<div layout="grid" visual="bg:primary">Page 2</div>' }
      ];
      
      const result = parseMultipleSources(files);
      
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('grid'));
      assert.ok(result.visual.has('bg:primary'));
    });

    it('deduplicates tokens across files', () => {
      const files = [
        { path: 'page1.html', content: '<div layout="flex center">Page 1</div>' },
        { path: 'page2.html', content: '<div layout="flex center">Page 2</div>' }
      ];
      
      const result = parseMultipleSources(files);
      
      // Same tokens appear in both, should only be counted once
      assert.strictEqual(result.layout.size, 2);
      assert.ok(result.layout.has('flex'));
      assert.ok(result.layout.has('center'));
    });

    it('handles empty file array', () => {
      const result = parseMultipleSources([]);
      
      assert.strictEqual(result.layout.size, 0);
      assert.strictEqual(result.space.size, 0);
      assert.strictEqual(result.visual.size, 0);
    });

    it('handles files with no SenangStart attributes', () => {
      const files = [
        { path: 'regular.html', content: '<div class="normal">Regular HTML</div>' }
      ];
      
      const result = parseMultipleSources(files);
      
      assert.strictEqual(result.layout.size, 0);
      assert.strictEqual(result.space.size, 0);
      assert.strictEqual(result.visual.size, 0);
    });

  });

});
