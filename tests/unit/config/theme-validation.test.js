/**
 * SenangStart CSS - Theme Validation Tests
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { defaultConfig, mergeConfig, validateTheme } from '../../../src/config/defaults.js';

describe('validateTheme', () => {
  it('returns no warnings for valid theme', () => {
    const warnings = validateTheme(defaultConfig.theme);
    assert.equal(warnings.length, 0);
  });

  it('warns on invalid spacing values', () => {
    const warnings = validateTheme({
      spacing: { 'bad': 'not_a_value' }
    });
    assert.ok(warnings.length > 0);
    assert.ok(warnings.some(w => w.includes('spacing')));
  });

  it('warns on non-string spacing values', () => {
    const warnings = validateTheme({
      spacing: { 'bad': 42 }
    });
    assert.ok(warnings.length > 0);
    assert.ok(warnings.some(w => w.includes('expected string')));
  });

  it('warns on invalid screens values', () => {
    const warnings = validateTheme({
      screens: { 'bad': 'not_a_breakpoint' }
    });
    assert.ok(warnings.length > 0);
  });

  it('accepts valid screens including print', () => {
    const warnings = validateTheme({
      screens: { 'print': 'print' }
    });
    assert.equal(warnings.length, 0);
  });

  it('returns empty warnings for null theme', () => {
    const warnings = validateTheme(null);
    assert.equal(warnings.length, 0);
  });

  it('returns empty warnings for empty theme', () => {
    const warnings = validateTheme({});
    assert.equal(warnings.length, 0);
  });
});

describe('mergeConfig with validation', () => {
  it('merges valid config without warnings', () => {
    const originalWarn = console.warn;
    const warnings = [];
    console.warn = (msg) => warnings.push(msg);

    const result = mergeConfig({
      theme: {
        colors: { 'brand': '#FF0000' }
      }
    });

    console.warn = originalWarn;
    assert.equal(result.theme.colors['brand'], '#FF0000');
    assert.equal(warnings.length, 0);
  });

  it('warns on invalid theme values during merge', () => {
    const originalWarn = console.warn;
    const warnings = [];
    console.warn = (msg) => warnings.push(msg);

    mergeConfig({
      theme: {
        spacing: { 'bad': 123 }
      }
    });

    console.warn = originalWarn;
    assert.ok(warnings.some(w => w.includes('spacing')));
  });
});