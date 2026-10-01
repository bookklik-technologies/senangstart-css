/**
 * SenangStart CSS - PostCSS plugin
 *
 *     // postcss.config.js
 *     import senangstart from '@bookklik/senangstart-css/postcss';
 *     export default { plugins: [senangstart()] };
 *
 *     // app.css
 *     @import "senangstart";   (or)   @senangstart;
 */

import type { PluginCreator } from 'postcss';
import type { SenangStartConfig } from './index.js';

export interface SenangStartPostcssOptions {
  /** Config path (relative to `cwd`) or inline config object. Default: auto-discover senangstart.config.*. */
  config?: string | SenangStartConfig;
  /** Project root for config discovery and content globs. Default: `process.cwd()`. */
  cwd?: string;
  /** Override the config's `content` globs. */
  content?: string[];
  /** Extra safelist entries. */
  safelist?: string[];
  /** Override `preflight`. */
  preflight?: boolean;
  /** Override `output.minify`. */
  minify?: boolean;
  /** Report invalid tokens via `result.warn()` instead of throwing. */
  ignoreInvalid?: boolean;
  /** Re-import the config file on every run so edits are picked up in watch mode. Default `true`. */
  fresh?: boolean;
}

export declare const senangstart: PluginCreator<SenangStartPostcssOptions>;
export default senangstart;
