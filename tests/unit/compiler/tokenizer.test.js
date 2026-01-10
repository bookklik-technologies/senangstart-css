/**
 * SenangStart CSS - Tokenizer Unit Tests
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { tokenize, tokenizeAll } from '../../../src/compiler/tokenizer.js';

describe('Tokenizer', () => {

  describe('tokenize - Basic Syntax', () => {

    it('parses simple property:value syntax', () => {
      const token = tokenize('p:medium', 'space');
      
      assert.strictEqual(token.property, 'p');
      assert.strictEqual(token.value, 'medium');
      assert.strictEqual(token.breakpoint, null);
      assert.strictEqual(token.state, null);
      assert.strictEqual(token.isArbitrary, false);
      assert.strictEqual(token.attrType, 'space');
    });

    it('parses breakpoint:property:value syntax', () => {
      const token = tokenize('tab:p:big', 'space');
      
      assert.strictEqual(token.breakpoint, 'tab');
      assert.strictEqual(token.property, 'p');
      assert.strictEqual(token.value, 'big');
    });

    it('parses state:property:value syntax', () => {
      const token = tokenize('hover:bg:primary', 'visual');
      
      assert.strictEqual(token.state, 'hover');
      assert.strictEqual(token.property, 'bg');
      assert.strictEqual(token.value, 'primary');
      assert.strictEqual(token.breakpoint, null);
    });

    it('parses full breakpoint:state:property:value syntax', () => {
      const token = tokenize('tab:hover:bg:secondary', 'visual');
      
      assert.strictEqual(token.breakpoint, 'tab');
      assert.strictEqual(token.state, 'hover');
      assert.strictEqual(token.property, 'bg');
      assert.strictEqual(token.value, 'secondary');
    });

    it('handles all breakpoint prefixes', () => {
      const breakpoints = ['mob', 'tab', 'lap', 'desk'];
      
      breakpoints.forEach(bp => {
        const token = tokenize(`${bp}:p:small`, 'space');
        assert.strictEqual(token.breakpoint, bp, `Failed for breakpoint: ${bp}`);
      });
    });

    it('handles all state prefixes', () => {
      const states = ['hover', 'focus', 'active', 'disabled', 'dark'];
      
      states.forEach(state => {
        const token = tokenize(`${state}:bg:white`, 'visual');
        assert.strictEqual(token.state, state, `Failed for state: ${state}`);
      });
    });

  });

  describe('tokenize - Layout Keywords', () => {

    it('parses simple layout keywords', () => {
      const keywords = ['flex', 'grid', 'block', 'inline', 'hidden'];
      
      keywords.forEach(kw => {
        const token = tokenize(kw, 'layout');
        assert.strictEqual(token.property, kw);
        assert.strictEqual(token.value, kw);
      });
    });

    it('parses flex direction keywords', () => {
      const directions = ['row', 'col', 'row-reverse', 'col-reverse'];
      
      directions.forEach(dir => {
        const token = tokenize(dir, 'layout');
        assert.strictEqual(token.property, dir);
        assert.strictEqual(token.value, dir);
      });
    });

    it('parses alignment keywords', () => {
      const alignments = ['center', 'start', 'end', 'between', 'around', 'evenly'];
      
      alignments.forEach(align => {
        const token = tokenize(align, 'layout');
        assert.strictEqual(token.property, align);
        assert.strictEqual(token.value, align);
      });
    });

    it('parses wrap keywords', () => {
      const wraps = ['wrap', 'nowrap'];
      
      wraps.forEach(wrap => {
        const token = tokenize(wrap, 'layout');
        assert.strictEqual(token.property, wrap);
        assert.strictEqual(token.value, wrap);
      });
    });

    it('parses position keywords', () => {
      const positions = ['absolute', 'relative', 'fixed', 'sticky'];
      
      positions.forEach(pos => {
        const token = tokenize(pos, 'layout');
        assert.strictEqual(token.property, pos);
        assert.strictEqual(token.value, pos);
      });
    });

    it('parses responsive layout keywords (tab:row)', () => {
      const token = tokenize('tab:row', 'layout');
      
      assert.strictEqual(token.breakpoint, 'tab');
      assert.strictEqual(token.property, 'row');
      assert.strictEqual(token.value, 'row');
    });

    it('parses z-index syntax (z:top)', () => {
      const token = tokenize('z:top', 'layout');
      
      assert.strictEqual(token.property, 'z');
      assert.strictEqual(token.value, 'top');
    });

    it('parses overflow syntax (overflow:hidden)', () => {
      const token = tokenize('overflow:hidden', 'layout');
      
      assert.strictEqual(token.property, 'overflow');
      assert.strictEqual(token.value, 'hidden');
    });

  });

  describe('tokenize - Arbitrary Values', () => {

    it('extracts arbitrary values with brackets', () => {
      const token = tokenize('w:[350px]', 'space');
      
      assert.strictEqual(token.property, 'w');
      assert.strictEqual(token.value, '350px');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('replaces underscores with spaces in arbitrary values', () => {
      const token = tokenize('font:[Helvetica_Neue]', 'visual');
      
      assert.strictEqual(token.value, 'Helvetica Neue');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('handles arbitrary percentages', () => {
      const token = tokenize('w:[50%]', 'space');
      
      assert.strictEqual(token.value, '50%');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('handles arbitrary viewport units', () => {
      const token = tokenize('h:[100vh]', 'space');
      
      assert.strictEqual(token.value, '100vh');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('handles arbitrary calc expressions', () => {
      const token = tokenize('w:[calc(100%_-_20px)]', 'space');
      
      assert.strictEqual(token.value, 'calc(100% - 20px)');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('handles arbitrary colors', () => {
      const token = tokenize('bg:[#FF5733]', 'visual');
      
      assert.strictEqual(token.value, '#FF5733');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('handles arbitrary rgb colors', () => {
      const token = tokenize('bg:[rgb(255,87,51)]', 'visual');
      
      assert.strictEqual(token.value, 'rgb(255,87,51)');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('handles arbitrary values with responsive prefix', () => {
      const token = tokenize('tab:w:[500px]', 'space');
      
      assert.strictEqual(token.breakpoint, 'tab');
      assert.strictEqual(token.property, 'w');
      assert.strictEqual(token.value, '500px');
      assert.strictEqual(token.isArbitrary, true);
    });

    it('handles arbitrary values with state prefix', () => {
      const token = tokenize('hover:bg:[#333]', 'visual');
      
      assert.strictEqual(token.state, 'hover');
      assert.strictEqual(token.property, 'bg');
      assert.strictEqual(token.value, '#333');
      assert.strictEqual(token.isArbitrary, true);
    });

  });

  describe('tokenize - Edge Cases', () => {

    it('handles values containing colons (URLs)', () => {
      // When value contains colon, it should be preserved
      const token = tokenize('bg-image:[url(https://example.com/img.png)]', 'visual');
      
      assert.strictEqual(token.property, 'bg-image');
      // Value should contain the full URL
      assert.ok(token.value.includes('https'));
    });

    it('preserves raw token string', () => {
      const raw = 'tab:hover:bg:primary';
      const token = tokenize(raw, 'visual');
      
      assert.strictEqual(token.raw, raw);
    });

    it('sets correct attrType', () => {
      const layoutToken = tokenize('flex', 'layout');
      const spaceToken = tokenize('p:medium', 'space');
      const visualToken = tokenize('bg:white', 'visual');
      
      assert.strictEqual(layoutToken.attrType, 'layout');
      assert.strictEqual(spaceToken.attrType, 'space');
      assert.strictEqual(visualToken.attrType, 'visual');
    });

  });

  describe('tokenizeAll', () => {

    it('tokenizes all attribute types', () => {
      const parsed = {
        layout: new Set(['flex', 'center']),
        space: new Set(['p:medium']),
        visual: new Set(['bg:primary'])
      };
      
      const tokens = tokenizeAll(parsed);
      
      assert.strictEqual(tokens.length, 4);
      
      const layoutTokens = tokens.filter(t => t.attrType === 'layout');
      const spaceTokens = tokens.filter(t => t.attrType === 'space');
      const visualTokens = tokens.filter(t => t.attrType === 'visual');
      
      assert.strictEqual(layoutTokens.length, 2);
      assert.strictEqual(spaceTokens.length, 1);
      assert.strictEqual(visualTokens.length, 1);
    });

    it('handles empty parsed result', () => {
      const parsed = {
        layout: new Set(),
        space: new Set(),
        visual: new Set()
      };
      
      const tokens = tokenizeAll(parsed);
      
      assert.strictEqual(tokens.length, 0);
    });

    it('processes complex parsed output', () => {
      const parsed = {
        layout: new Set(['flex', 'tab:row', 'grid-cols:3']),
        space: new Set(['p:medium', 'g:small', 'm-x:auto']),
        visual: new Set(['bg:primary', 'hover:bg:secondary', 'text:white'])
      };
      
      const tokens = tokenizeAll(parsed);
      
      assert.strictEqual(tokens.length, 9);
      
      // Verify some specific tokens
      const tabRowToken = tokens.find(t => t.raw === 'tab:row');
      assert.ok(tabRowToken);
      assert.strictEqual(tabRowToken.breakpoint, 'tab');
      
      const hoverBgToken = tokens.find(t => t.raw === 'hover:bg:secondary');
      assert.ok(hoverBgToken);
      assert.strictEqual(hoverBgToken.state, 'hover');
    });

  });

});
