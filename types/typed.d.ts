/**
 * SenangStart CSS - Strict, typed attribute helpers
 *
 *     import { ss } from '@bookklik/senangstart-css/typed';
 *
 *     <div space={ss.space('p:big m-t:small')} visual={ss.visual('bg:primary hover:bg:blue-500')} />
 *     ss.space('p:bogus'); // ✗ compile error: InvalidToken<'p:bogus', 'space'>
 *
 * The helpers are runtime no-ops (identity functions); all checking happens in
 * the type system via `ValidTokens` from './attributes'. Only string literals
 * can be validated — a `string` variable is rejected, so build dynamic values
 * with the plain attribute types instead.
 */

import type { AttrName, Strict } from './attributes.js';

export type { ValidTokens, Strict, InvalidToken, IsKnownToken } from './attributes.js';

/** Validate a `layout` attribute string literal. */
export declare function layout<T extends string>(value: Strict<T, 'layout'>): T;
/** Validate a `space` attribute string literal. */
export declare function space<T extends string>(value: Strict<T, 'space'>): T;
/** Validate a `visual` attribute string literal. */
export declare function visual<T extends string>(value: Strict<T, 'visual'>): T;

/** Generic form: `attr('space', 'p:big')`. */
export declare function attr<A extends AttrName, T extends string>(name: A, value: Strict<T, A>): T;

/** Namespace-style access: `ss.space('p:big')`. */
export declare const ss: {
  readonly layout: typeof layout;
  readonly space: typeof space;
  readonly visual: typeof visual;
  readonly attr: typeof attr;
};

export default ss;
