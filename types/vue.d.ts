/**
 * SenangStart CSS - Vue 3 augmentation
 *
 * Extends `HTMLAttributes` from `@vue/runtime-dom` (re-exported by `vue`), so
 * `<div layout="flex col" space="p:medium">` type-checks in SFC templates
 * (vue-tsc / Volar) and in TSX.
 *
 *     import '@bookklik/senangstart-css/vue';
 */

import type { SenangAttributes } from './attributes.js';

export * from './attributes.js';

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends SenangAttributes {}
  interface SVGAttributes extends SenangAttributes {}
}
