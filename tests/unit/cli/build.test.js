/**
 * SenangStart CSS - CLI Build Command Tests
 * Tests core build pipeline logic (parsing, tokenizing, CSS generation)
 * without actually running the CLI process.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { parseSource } from '../../../src/compiler/parser.js';
import { tokenizeAll } from '../../../src/compiler/tokenizer.js';
import { generateCSS, minifyCSS } from '../../../src/compiler/generators/css.js';
import { defaultConfig } from '../../../src/config/defaults.js';
import { createTestConfig } from '../../helpers/test-utils.js';

describe('CLI Build Pipeline', () => {

  describe('Source Parsing', () => {
    it('extracts layout, space, visual, interact, and listens attributes', () => {
      const html = `<div layout="flex center" space="p:medium" visual="bg:primary text:white" interact="card-1" listens="card-1">Test</div>`;
      const parsed = parseSource(html);
      
      assert.ok(parsed.layout instanceof Set);
      assert.ok(parsed.space instanceof Set);
      assert.ok(parsed.visual instanceof Set);
      assert.ok(parsed.interact instanceof Set);
      assert.ok(parsed.listens instanceof Set);
      assert.ok(parsed.layout.has('flex'));
      assert.ok(parsed.layout.has('center'));
      assert.ok(parsed.space.has('p:medium'));
    });

    it('parses multiple elements with same attributes', () => {
      const html = `
        <div layout="flex" space="p:small" visual="bg:white">A</div>
        <div layout="flex" space="p:small" visual="bg:black">B</div>
      `;
      const parsed = parseSource(html);
      
      assert.equal(parsed.layout.size, 1, 'should deduplicate layout tokens');
      assert.equal(parsed.space.size, 1, 'should deduplicate space tokens');
      assert.equal(parsed.visual.size, 2, 'should keep distinct visual tokens');
    });

    it('handles empty HTML gracefully', () => {
      const parsed = parseSource('');
      assert.ok(parsed.layout instanceof Set);
      assert.equal(parsed.layout.size, 0);
    });

    it('handles HTML without SenangStart attributes', () => {
      const parsed = parseSource('<div class="regular">Nothing</div>');
      assert.equal(parsed.layout.size, 0);
      assert.equal(parsed.space.size, 0);
      assert.equal(parsed.visual.size, 0);
    });
  });

  describe('Tokenization', () => {
    it('tokenizes layout, space and visual correctly', () => {
      const tokens = tokenizeAll({
        layout: new Set(['flex', 'center', 'row']),
        space: new Set(['p:medium', 'm:big']),
        visual: new Set(['bg:primary', 'text:white']),
        interact: new Set(),
        listens: new Set()
      });
      
      const layoutTokens = tokens.filter(t => t.attrType === 'layout');
      const spaceTokens = tokens.filter(t => t.attrType === 'space');
      const visualTokens = tokens.filter(t => t.attrType === 'visual');
      
      assert.ok(layoutTokens.length >= 3);
      assert.ok(spaceTokens.length >= 2);
      assert.ok(visualTokens.length >= 2);
    });

    it('tokenizes responsive prefixes', () => {
      const tokens = tokenizeAll({
        layout: new Set(['tab:flex']),
        space: new Set(['mob:p:big']),
        visual: new Set(['desk:bg:primary']),
        interact: new Set(),
        listens: new Set()
      });
      
      const tabToken = tokens.find(t => t.breakpoint === 'tab');
      assert.ok(tabToken, 'should find tab breakpoint token');
      assert.equal(tabToken.property, 'flex');
      
      const mobToken = tokens.find(t => t.breakpoint === 'mob');
      assert.ok(mobToken, 'should find mob breakpoint token');
      
      const deskToken = tokens.find(t => t.breakpoint === 'desk');
      assert.ok(deskToken, 'should find desk breakpoint token');
    });

    it('tokenizes state prefixes', () => {
      const tokens = tokenizeAll({
        layout: new Set(),
        space: new Set(),
        visual: new Set(['hover:bg:secondary', 'focus:shadow:medium']),
        interact: new Set(),
        listens: new Set()
      });
      
      const hoverToken = tokens.find(t => t.state === 'hover');
      assert.ok(hoverToken);
      assert.equal(hoverToken.property, 'bg');
      
      const focusToken = tokens.find(t => t.state === 'focus');
      assert.ok(focusToken);
    });

    it('tokenizes interact and listens attributes', () => {
      const tokens = tokenizeAll({
        layout: new Set(),
        space: new Set(),
        visual: new Set(),
        interact: new Set(['card-1', 'card-2']),
        listens: new Set(['card-1'])
      });
      
      const interactTokens = tokens.filter(t => t.attrType === 'interact');
      const listensTokens = tokens.filter(t => t.attrType === 'listens');
      
      assert.equal(interactTokens.length, 2);
      assert.equal(listensTokens.length, 1);
    });
  });

  describe('CSS Generation', () => {
    it('generates complete CSS with variables, preflight, and rules', () => {
      const config = createTestConfig();
      const tokens = tokenizeAll({
        layout: new Set(['flex', 'center']),
        space: new Set(['p:medium']),
        visual: new Set(['bg:primary']),
        interact: new Set(),
        listens: new Set()
      });
      
      const css = generateCSS(tokens, config);
      
      assert.ok(css.includes(':root'), 'should include CSS variables');
      assert.ok(css.includes('display: flex'), 'should generate layout rule');
      assert.ok(css.includes('padding: var(--s-medium)'), 'should generate space rule');
    });

    it('generates minified CSS', () => {
      const config = createTestConfig();
      const tokens = tokenizeAll({
        layout: new Set(['flex']),
        space: new Set(),
        visual: new Set(),
        interact: new Set(),
        listens: new Set()
      });
      
      const css = generateCSS(tokens, config);
      const minified = minifyCSS(css);
      
      assert.ok(minified, 'should produce minified CSS');
      assert.ok(minified.length < css.length, 'minified should be shorter');
    });

    it('generates CSS for multiple properties correctly', () => {
      const config = createTestConfig();
      const tokens = tokenizeAll({
        layout: new Set(['flex', 'row', 'between', 'wrap']),
        space: new Set(['p:big', 'm:medium', 'g:small']),
        visual: new Set(['bg:white', 'text:black', 'rounded:medium', 'shadow:small']),
        interact: new Set(),
        listens: new Set()
      });
      
      const css = generateCSS(tokens, config);
      
      assert.ok(css.includes('display: flex'));
      assert.ok(css.includes('flex-direction: row'));
      assert.ok(css.includes('justify-content: space-between'));
      assert.ok(css.includes('padding: var(--s-big)'));
      assert.ok(css.includes('border-radius: var(--r-medium)'));
    });
  });

  describe('Error Handling', () => {
    it('continues processing despite invalid tokens', () => {
      const tokens = tokenizeAll({
        layout: new Set(['flex', 'invalid_layout_token']),
        space: new Set(['p:medium']),
        visual: new Set(),
        interact: new Set(),
        listens: new Set()
      });
      
      const config = createTestConfig();
      const css = generateCSS(tokens, config);
      
      assert.ok(css.includes('display: flex'), 'should generate valid layout');
      assert.ok(css.includes('padding'), 'should generate valid space');
    });

    it('handles empty tokens gracefully', () => {
      const config = createTestConfig();
      const css = generateCSS([], config);
      
      assert.ok(css.includes(':root'), 'should still generate variables');
    });
  });
});
