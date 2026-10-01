/**
 * SenangStart CSS - React JSX augmentation
 *
 * Adds `layout`, `space`, `visual`, `interact` and `listens` to every React
 * HTML/SVG element. Include it once, e.g. in a `senang-env.d.ts`:
 *
 *     import '@bookklik/senangstart-css/react';
 *
 * or via tsconfig `"types": ["@bookklik/senangstart-css/react"]`.
 */

import type { SenangAttributes } from './attributes.js';

export * from './attributes.js';

declare module 'react' {
  interface HTMLAttributes<T> extends SenangAttributes {}
  interface SVGAttributes<T> extends SenangAttributes {}
}
