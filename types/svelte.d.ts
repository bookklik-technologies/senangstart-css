/**
 * SenangStart CSS - Svelte augmentation
 *
 * Extends the global `svelteHTML.HTMLAttributes` interface used by
 * svelte-check / the Svelte language tools.
 *
 *     import '@bookklik/senangstart-css/svelte';   // e.g. in src/app.d.ts
 */

import type { SenangAttributes } from './attributes.js';

export * from './attributes.js';

declare global {
  namespace svelteHTML {
    interface HTMLAttributes<T> extends SenangAttributes {}
    interface SVGAttributes<T> extends SenangAttributes {}
  }
}
