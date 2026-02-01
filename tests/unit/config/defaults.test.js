/**
 * SenangStart CSS - Config Unit Tests
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { defaultConfig, mergeConfig } from '../../../src/config/defaults.js';

describe('Config', () => {

  describe('defaultConfig', () => {

    it('has required top-level properties', () => {
      assert.ok(Array.isArray(defaultConfig.content));
      assert.ok(typeof defaultConfig.output === 'object');
      assert.ok(typeof defaultConfig.theme === 'object');
      assert.ok(typeof defaultConfig.darkMode === 'string');
      assert.ok(typeof defaultConfig.preflight === 'boolean');
    });

    it('has default content patterns', () => {
      assert.ok(defaultConfig.content.length > 0);
      assert.ok(defaultConfig.content.some(p => p.includes('*.html')));
    });

    it('has default output settings', () => {
      assert.ok(defaultConfig.output.css);
    });

    it('has spacing scale', () => {
      const { spacing } = defaultConfig.theme;
      assert.ok(spacing.none);
      assert.ok(spacing.tiny);
      assert.ok(spacing.small);
      assert.ok(spacing.medium);
      assert.ok(spacing.big);
      assert.ok(spacing.giant);
      assert.ok(spacing.vast);
    });

    it('has color palette', () => {
      const { colors } = defaultConfig.theme;
      assert.ok(colors.white);
      assert.ok(colors.black);
      assert.ok(colors.primary);
    });

    it('has breakpoints', () => {
      const { screens } = defaultConfig.theme;
      assert.ok(screens.mob);
      assert.ok(screens.tab);
      assert.ok(screens.lap);
      assert.ok(screens.desk);
    });

  });

  describe('mergeConfig', () => {

    it('returns defaults when no user config', () => {
      const result = mergeConfig({});
      
      assert.deepStrictEqual(result.theme.spacing, defaultConfig.theme.spacing);
    });

    it('merges custom colors without losing defaults', () => {
      const userConfig = {
        theme: {
          colors: {
            'brand': '#38BDF8'
          }
        }
      };
      
      const result = mergeConfig(userConfig);
      
      // Custom color should be added
      assert.strictEqual(result.theme.colors.brand, '#38BDF8');
      // Default colors should still exist
      assert.strictEqual(result.theme.colors.primary, defaultConfig.theme.colors.primary);
    });

    it('merges custom spacing', () => {
      const userConfig = {
        theme: {
          spacing: {
            'huge': '256px'
          }
        }
      };
      
      const result = mergeConfig(userConfig);
      
      assert.strictEqual(result.theme.spacing.huge, '256px');
      assert.strictEqual(result.theme.spacing.medium, defaultConfig.theme.spacing.medium);
    });

    it('overrides output settings', () => {
      const userConfig = {
        output: {
          css: './custom/output.css',
          minify: true
        }
      };
      
      const result = mergeConfig(userConfig);
      
      assert.strictEqual(result.output.css, './custom/output.css');
      assert.strictEqual(result.output.minify, true);
    });

    it('overrides darkMode setting', () => {
      const userConfig = {
        darkMode: 'selector'
      };
      
      const result = mergeConfig(userConfig);
      
      assert.strictEqual(result.darkMode, 'selector');
    });

    it('overrides preflight setting', () => {
      const userConfig = {
        preflight: false
      };
      
      const result = mergeConfig(userConfig);
      
      assert.strictEqual(result.preflight, false);
    });

    it('handles custom content patterns', () => {
      const userConfig = {
        content: ['./custom/**/*.html']
      };
      
      const result = mergeConfig(userConfig);
      
      assert.deepStrictEqual(result.content, ['./custom/**/*.html']);
    });

    it('deep merges nested theme objects', () => {
      const userConfig = {
        theme: {
          colors: {
            'custom-blue': '#1E40AF'
          },
          spacing: {
            'extra-giant': '512px'
          }
        }
      };
      
      const result = mergeConfig(userConfig);
      
      // Custom additions
      assert.strictEqual(result.theme.colors['custom-blue'], '#1E40AF');
      assert.strictEqual(result.theme.spacing['extra-giant'], '512px');
      
      // Preserved defaults
      assert.strictEqual(result.theme.colors.primary, defaultConfig.theme.colors.primary);
      assert.strictEqual(result.theme.spacing.medium, defaultConfig.theme.spacing.medium);
      assert.ok(result.theme.radius); // Other theme sections preserved
    });

  });

});
