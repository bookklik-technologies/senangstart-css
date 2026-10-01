/**
 * SenangStart CSS - Preact JSX augmentation
 *
 *     import '@bookklik/senangstart-css/preact';
 */

import type { SenangAttributes } from './attributes.js';

export * from './attributes.js';

declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes<RefType extends EventTarget = EventTarget> extends SenangAttributes {}
    interface SVGAttributes<Target extends EventTarget = SVGElement> extends SenangAttributes {}
  }
}
