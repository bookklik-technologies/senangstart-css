/**
 * SenangStart CSS - Strict, typed attribute helpers (runtime).
 *
 * Every helper is an identity function: validation happens purely in the type
 * system (see ./typed.d.ts and ./attributes.d.ts). Shipping them as real
 * functions lets `import { ss } from '@bookklik/senangstart-css/typed'` work in
 * JSX without any build-time plugin.
 */

const identity = (value) => value;

export const layout = identity;
export const space = identity;
export const visual = identity;
export const attr = (_name, value) => value;

export const ss = Object.freeze({ layout, space, visual, attr });

export default ss;
