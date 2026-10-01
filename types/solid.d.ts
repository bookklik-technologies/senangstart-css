/**
 * SenangStart CSS - Solid JSX augmentation
 *
 *     import '@bookklik/senangstart-css/solid';
 */

import type { SenangAttributes } from './attributes.js';

export * from './attributes.js';

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends SenangAttributes {}
    interface SVGAttributes<T> extends SenangAttributes {}
  }
}
