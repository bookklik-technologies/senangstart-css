/**
 * SenangStart CSS - Astro augmentation
 *
 * Extends the global `astroHTML.JSX.HTMLAttributes` interface used by the
 * Astro language server for `.astro` templates.
 *
 *     import '@bookklik/senangstart-css/astro';   // e.g. in src/env.d.ts
 */

import type { SenangAttributes } from './attributes.js';

export * from './attributes.js';

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes extends SenangAttributes {}
    interface SVGAttributes extends SenangAttributes {}
  }
}
