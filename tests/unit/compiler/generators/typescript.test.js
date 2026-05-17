/**
 * SenangStart CSS - TypeScript Generator Tests
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateTypeScript } from '../../../../src/compiler/generators/typescript.js';
import { createTestConfig } from '../../../helpers/test-utils.js';

describe('TypeScript Generator', () => {

  it('generates TypeScript definitions from config', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(typeof result === 'string');
    assert.ok(result.length > 0);
  });

  it('includes React type declarations', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes("declare module 'react'"));
    assert.ok(result.includes('layout?'));
    assert.ok(result.includes('space?'));
    assert.ok(result.includes('visual?'));
  });

  it('includes Vue type declarations', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes("declare module 'vue'"));
  });

  it('includes Svelte type declarations', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('declare namespace svelteHTML'));
  });

  it('generates spacing unions from config theme', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('type SpacingScale'));
    assert.ok(result.includes("'none'"));
    assert.ok(result.includes("'tiny'"));
    assert.ok(result.includes("'medium'"));
    assert.ok(result.includes("'big'"));
  });

  it('generates color unions from config theme', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('type ColorKey'));
    assert.ok(result.includes("'primary'"));
    assert.ok(result.includes("'white'"));
    assert.ok(result.includes("'success'"));
  });

  it('generates radius unions from config theme', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('type RadiusKey'));
    assert.ok(result.includes("'none'"));
    assert.ok(result.includes("'medium'"));
  });

  it('generates shadow unions from config theme', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('type ShadowKey'));
    assert.ok(result.includes("'small'"));
    assert.ok(result.includes("'medium'"));
  });

  it('generates fontSize unions from config theme', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('type FontSizeKey'));
    assert.ok(result.includes("'small'"));
    assert.ok(result.includes("'medium'"));
  });

  it('generates fontWeight unions from config theme', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('type FontWeightKey'));
    assert.ok(result.includes("'medium'"));
    assert.ok(result.includes("'bold'"));
  });

  it('includes breakpoint type definitions', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('type Breakpoint'));
    assert.ok(result.includes("'mob'"));
    assert.ok(result.includes("'tab'"));
    assert.ok(result.includes("'lap'"));
    assert.ok(result.includes("'desk'"));
  });

  it('generates directional rounded utilities', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes("'rounded-t:"));
    assert.ok(result.includes("'rounded-b:"));
    assert.ok(result.includes("'rounded-tl:"));
    assert.ok(result.includes("'rounded-br:"));
  });

  it('handles config with minimal theme', () => {
    const config = createTestConfig({
      theme: {
        spacing: { 'none': '0px', 'small': '8px' },
        radius: { 'none': '0px' },
        shadow: { 'none': 'none' },
        fontSize: { 'base': '1rem' },
        fontWeight: { 'normal': '400' },
        colors: { 'black': '#000' }
      }
    });
    const result = generateTypeScript(config);

    assert.ok(result.includes('type SpacingScale'));
    assert.ok(result.includes("'none'"));
    assert.ok(result.includes("'small'"));
    // Custom keys should appear
    assert.ok(result.includes("'base'"));
    assert.ok(result.includes("'black'"));
    assert.ok(result.includes("'normal'"));
  });

  it('output ends with export {} for module isolation', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes('export {};'));
  });

  it('generates text alignment values', () => {
    const config = createTestConfig();
    const result = generateTypeScript(config);

    assert.ok(result.includes("'text:left'"));
    assert.ok(result.includes("'text:right'"));
    assert.ok(result.includes("'text:center'"));
  });
});
