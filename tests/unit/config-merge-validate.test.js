/**
 * Config hardening: frozen defaults, deep clone, theme.extend, new reserved
 * fields, validateConfig.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  defaultConfig,
  mergeConfig,
  validateConfig,
  deepFreeze,
  KNOWN_CONFIG_KEYS
} from '../../src/config/defaults.js';

describe('Config: defaults are frozen and opt-in outputs are off', () => {
  it('defaultConfig is deeply frozen', () => {
    assert.ok(Object.isFrozen(defaultConfig));
    assert.ok(Object.isFrozen(defaultConfig.output));
    assert.ok(Object.isFrozen(defaultConfig.theme.spacing));
    assert.throws(() => { 'use strict'; defaultConfig.output.css = 'x'; }, TypeError);
  });

  it('aiContext and typescript outputs default to null (opt-in)', () => {
    assert.equal(defaultConfig.output.aiContext, null);
    assert.equal(defaultConfig.output.typescript, null);
  });

  it('defines reserved fields safelist/prefix/layers/theme.exposeAll', () => {
    assert.deepEqual(defaultConfig.safelist, []);
    assert.equal(defaultConfig.prefix, '');
    assert.equal(defaultConfig.layers, true);
    assert.equal(defaultConfig.theme.exposeAll, false);
  });

  it('default content globs cover common templating languages', () => {
    const joined = defaultConfig.content.join(' ');
    for (const ext of ['html', 'php', 'blade.php', 'jsx', 'tsx', 'vue', 'svelte', 'astro', 'md', 'mdx']) {
      assert.ok(joined.includes(ext), `default content should include ${ext}`);
    }
  });

  it('deepFreeze freezes nested structures', () => {
    const o = deepFreeze({ a: { b: { c: 1 } } });
    assert.ok(Object.isFrozen(o.a.b));
  });
});

describe('Config: mergeConfig', () => {
  it('returns a fresh, mutable deep clone every time', () => {
    const a = mergeConfig({});
    const b = mergeConfig({});
    assert.notEqual(a, b);
    assert.notEqual(a.theme, b.theme);
    assert.notEqual(a.theme.spacing, defaultConfig.theme.spacing);
    a.theme.spacing.medium = '999px';
    assert.equal(b.theme.spacing.medium, defaultConfig.theme.spacing.medium);
    assert.equal(defaultConfig.theme.spacing.medium, '16px');
  });

  it('does not keep references to the user config object', () => {
    const user = { theme: { colors: { brand: '#fff' } } };
    const merged = mergeConfig(user);
    user.theme.colors.brand = '#000';
    assert.equal(merged.theme.colors.brand, '#fff');
  });

  it('honours theme.extend (merges into base theme, does not replace)', () => {
    const merged = mergeConfig({ theme: { extend: { colors: { brand: '#38BDF8' }, spacing: { huge: '256px' } } } });
    assert.equal(merged.theme.colors.brand, '#38BDF8');
    assert.equal(merged.theme.colors.primary, defaultConfig.theme.colors.primary);
    assert.equal(merged.theme.spacing.huge, '256px');
    assert.equal(merged.theme.spacing.medium, '16px');
    assert.equal(merged.theme.extend, undefined, 'extend is consumed, not left on the theme');
  });

  it('theme.extend wins over direct theme keys', () => {
    const merged = mergeConfig({ theme: { colors: { brand: '#111' }, extend: { colors: { brand: '#222' } } } });
    assert.equal(merged.theme.colors.brand, '#222');
  });

  it('treats deprecated top-level extend as theme.extend', () => {
    const merged = mergeConfig({ extend: { colors: { legacy: '#abc' } } });
    assert.equal(merged.theme.colors.legacy, '#abc');
  });

  it('merges safelist/prefix/layers/exposeAll', () => {
    const merged = mergeConfig({ safelist: ['flex', { attr: 'space', tokens: ['p:medium'] }], prefix: 'ss-', layers: false, theme: { exposeAll: true } });
    assert.deepEqual(merged.safelist, ['flex', { attr: 'space', tokens: ['p:medium'] }]);
    assert.equal(merged.prefix, 'ss-');
    assert.equal(merged.layers, false);
    assert.equal(merged.theme.exposeAll, true);
  });

  it('accepts the legacy (defaultConfig, {}) call shape used by golden builder', () => {
    const merged = mergeConfig(defaultConfig, {});
    assert.deepEqual(merged.theme.spacing, defaultConfig.theme.spacing);
  });

  it('{ silent: true } suppresses theme warnings on console', () => {
    const calls = [];
    const orig = console.warn;
    console.warn = (m) => calls.push(m);
    try {
      mergeConfig({ theme: { spacing: { bad: 'not-a-length' } } }, { silent: true });
      assert.equal(calls.length, 0);
      mergeConfig({ theme: { spacing: { bad: 'not-a-length' } } });
      assert.ok(calls.length > 0);
    } finally {
      console.warn = orig;
    }
  });
});

describe('Config: validateConfig', () => {
  it('returns no errors/warnings for the template-like config', () => {
    const { errors, warnings } = validateConfig({
      content: ['./**/*.html'], safelist: ['flex'], prefix: '', layers: true,
      output: { css: './x.css', minify: true, aiContext: null, typescript: null },
      build: { ignoreInvalid: false }, preflight: true, darkMode: 'media',
      theme: { exposeAll: false, extend: {} }
    });
    assert.deepEqual(errors, []);
    assert.deepEqual(warnings, []);
  });

  it('warns on unknown top-level keys', () => {
    const { errors, warnings } = validateConfig({ contnet: ['x'] });
    assert.equal(errors.length, 0);
    assert.ok(warnings.some(w => w.includes('contnet')));
  });

  it('errors on wrong types', () => {
    const { errors } = validateConfig({
      content: 'not-an-array', preflight: 'yes', layers: 1, prefix: 2,
      output: { css: 3, minify: 'no', aiContext: 4 }, build: { ignoreInvalid: 'x' },
      darkMode: 'purple', safelist: [1], theme: []
    });
    for (const key of ['content', 'preflight', 'layers', 'prefix', 'output.css', 'output.minify', 'output.aiContext', 'build.ignoreInvalid', 'darkMode', 'safelist[0]', 'theme']) {
      assert.ok(errors.some(e => e.includes(key)), `expected an error about ${key}: ${errors.join(' | ')}`);
    }
  });

  it('errors for non-object config', () => {
    assert.ok(validateConfig(null).errors.length > 0);
    assert.ok(validateConfig([]).errors.length > 0);
    assert.ok(validateConfig('x').errors.length > 0);
  });

  it('accepts darkMode selector tuple and false', () => {
    assert.equal(validateConfig({ darkMode: ['selector', '.dark'] }).errors.length, 0);
    assert.equal(validateConfig({ darkMode: false }).errors.length, 0);
  });

  it('surfaces theme value problems as warnings (incl. theme.extend)', () => {
    const { warnings } = validateConfig({ theme: { spacing: { bad: 'xx' }, extend: { spacing: { worse: 'yy' } } } });
    assert.ok(warnings.some(w => w.includes('theme.spacing["bad"]')));
    assert.ok(warnings.some(w => w.includes('theme.extend.spacing["worse"]')));
  });

  it('KNOWN_CONFIG_KEYS covers every default key', () => {
    for (const key of Object.keys(defaultConfig)) {
      assert.ok(KNOWN_CONFIG_KEYS.includes(key), `${key} should be a known key`);
    }
  });
});
