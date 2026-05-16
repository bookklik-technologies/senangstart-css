/**
 * SenangStart CSS - JIT Engine Component Tests
 * Tests the core modules used by the JIT engine
 * without requiring a browser DOM.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { tokenizeAll } from '../../../src/core/tokenizer-core.js';
import { generateCSS } from '../../../src/compiler/generators/css.js';
import { mergeConfig, defaultConfig } from '../../../src/config/defaults.js';

describe('JIT Engine Components', () => {
  it('parses layout attribute tokens', () => {
    const tokens = tokenizeAll({
      layout: new Set(['flex', 'center', 'row']),
      space: new Set(),
      visual: new Set(),
      interact: new Set(),
      listens: new Set()
    });
    assert.equal(tokens.length, 3);
    assert.ok(tokens.some(t => t.property === 'flex'));
    assert.ok(tokens.some(t => t.property === 'center'));
    assert.ok(tokens.some(t => t.property === 'row'));
  });

  it('parses visual attribute tokens with states', () => {
    const tokens = tokenizeAll({
      layout: new Set(),
      space: new Set(),
      visual: new Set(['bg:primary', 'hover:bg:red-500', 'dark:text:white']),
      interact: new Set(),
      listens: new Set()
    });
    assert.equal(tokens.length, 3);
    const hoverToken = tokens.find(t => t.state === 'hover');
    assert.ok(hoverToken, 'should find hover token');
    assert.equal(hoverToken.property, 'bg');

    const darkToken = tokens.find(t => t.state === 'dark');
    assert.ok(darkToken, 'should find dark token');
    assert.equal(darkToken.property, 'text');
  });

  it('deduplicates tokens via Set', () => {
    const tokens = tokenizeAll({
      layout: new Set(['flex']),
      space: new Set(['p:medium']),
      visual: new Set(),
      interact: new Set(),
      listens: new Set()
    });
    assert.equal(tokens.length, 2);
    const layoutTokens = tokens.filter(t => t.attrType === 'layout');
    assert.equal(layoutTokens.length, 1);
  });

  it('generates CSS from tokens', () => {
    const tokens = tokenizeAll({
      layout: new Set(['flex']),
      space: new Set(['p:medium']),
      visual: new Set(['bg:primary']),
      interact: new Set(),
      listens: new Set()
    });
    const css = generateCSS(tokens, defaultConfig);
    assert.ok(css.includes('display: flex'));
    assert.ok(css.includes('padding'));
    assert.ok(css.includes('background-color'));
  });

  it('merges configuration correctly', () => {
    const merged = mergeConfig({
      theme: {
        colors: { 'brand': '#FF6600' }
      }
    });
    assert.equal(merged.theme.colors['brand'], '#FF6600');
    assert.ok(merged.theme.colors['primary'], 'default colors should be preserved');
  });

  it('handles placeholder state tokens', () => {
    const tokens = tokenizeAll({
      layout: new Set(),
      space: new Set(),
      visual: new Set(['placeholder:text:neutral-400']),
      interact: new Set(),
      listens: new Set()
    });
    const placeholderToken = tokens.find(t => t.state === 'placeholder');
    assert.ok(placeholderToken, 'should find placeholder state token');
    assert.equal(placeholderToken.property, 'text');
  });
});