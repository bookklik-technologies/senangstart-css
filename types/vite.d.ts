/**
 * SenangStart CSS - Vite plugin
 *
 *     import senangstart from '@bookklik/senangstart-css/vite';
 *     export default defineConfig({ plugins: [senangstart()] });
 *
 *     // then, in your entry:
 *     import 'virtual:senangstart.css';
 *     // or in any CSS file:  @import "senangstart";   /   @senangstart;
 */

import type { Plugin } from 'vite';
import type { SenangStartConfig } from './index.js';

export interface SenangStartViteOptions {
  /** Config path (relative to `cwd`) or inline config object. Default: auto-discover senangstart.config.*. */
  config?: string | SenangStartConfig;
  /** Project root used for config discovery and content globs. Default: Vite's `root`. */
  cwd?: string;
  /** Override the config's `content` globs. */
  content?: string[];
  /** Extra safelist entries. */
  safelist?: string[];
  /** Override `preflight`. */
  preflight?: boolean;
  /** Report invalid tokens as warnings instead of failing `vite build`. Dev never fails. */
  ignoreInvalid?: boolean;
  /** Minify the generated CSS before Vite sees it. Default `false` (Vite's own CSS minifier runs in build). */
  minify?: boolean;
}

export declare function senangstart(options?: SenangStartViteOptions): Plugin;
export default senangstart;
