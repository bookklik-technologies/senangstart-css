/**
 * SenangStart CSS - Color Palette Shared Module Tests
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { COLOR_PALETTE } from '../../../src/config/colors.js';

describe('COLOR_PALETTE', () => {
  it('has 252 color entries', () => {
    assert.equal(Object.keys(COLOR_PALETTE).length, 252);
  });

  it('contains base colors', () => {
    assert.ok('white' in COLOR_PALETTE);
    assert.ok('black' in COLOR_PALETTE);
  });

  it('contains brand colors', () => {
    assert.ok('primary' in COLOR_PALETTE);
    assert.ok('secondary' in COLOR_PALETTE);
    assert.ok('success' in COLOR_PALETTE);
    assert.ok('warning' in COLOR_PALETTE);
    assert.ok('danger' in COLOR_PALETTE);
  });

  it('contains common color scales', () => {
    assert.ok('red-500' in COLOR_PALETTE);
    assert.ok('blue-500' in COLOR_PALETTE);
    assert.ok('green-500' in COLOR_PALETTE);
    assert.ok('slate-500' in COLOR_PALETTE);
  });

  it('all values are strings', () => {
    for (const [key, val] of Object.entries(COLOR_PALETTE)) {
      assert.equal(typeof val, 'string', `${key} should be a string`);
    }
  });

  it('all hex values start with #', () => {
    for (const [key, val] of Object.entries(COLOR_PALETTE)) {
      assert.ok(val.startsWith('#'), `${key}: expected hex color, got ${val}`);
    }
  });
});