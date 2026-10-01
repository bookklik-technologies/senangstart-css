/**
 * SenangStart CSS - Attribute types
 *
 * Core, framework-agnostic types for the `layout`, `space` and `visual`
 * attributes. Token unions come from ./generated-tokens.d.ts (auto-generated
 * from src/definitions; run `npm run generate:types`).
 *
 * Strategy
 * --------
 * Attribute values are space-separated token lists ("p:big m-t:small"), so a
 * union of single tokens would reject real markup. Each attribute is typed as
 *
 *     type SpaceAttr = KnownSpaceToken | (string & {});
 *
 * which accepts any string while still surfacing the known single tokens as
 * editor completions. Strict validation is opt-in through `ValidTokens` /
 * the `ss.*` helpers in ./typed.d.ts.
 */

import type {
  Breakpoint,
  State,
  VariantName,
  ArbitraryToken,
  KnownLayoutToken,
  KnownSpaceToken,
  KnownVisualToken,
  LayoutScaleToken,
  LayoutColorToken,
  SpaceScaleToken,
  SpaceColorToken,
  VisualScaleToken,
  VisualColorToken
} from './generated-tokens.js';

export * from './generated-tokens.js';

/** `string & {}` — accepts any string but does not swallow literal completions. */
export type AnyString = string & {};

/** Names of the styling attributes. */
export type AttrName = 'layout' | 'space' | 'visual';

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

/**
 * One variant prefix including its colon: `tab:`, `max-tab:`, `tab-lap:`,
 * `hover:`, `dark:`. Variants stack in any order (`tab:hover:p:big`).
 */
export type Variant = `${VariantName}:`;

/**
 * Add variant prefixes to a (small!) token union — one variant, or the common
 * breakpoint + state/dark pair:
 * `WithVariant<'p:big'>` → `'p:big' | 'tab:p:big' | 'hover:p:big' | 'tab:hover:p:big' | 'tab:dark:p:big' | …`
 * Do not apply it to the Known*Token unions — the cross product would exceed
 * TypeScript's union limits. Use `ValidTokens` for validation instead.
 */
export type WithVariant<T extends string> =
  | T
  | `${Variant}${T}`
  | `${Breakpoint}:${State | 'dark'}:${T}`;

/** Remove every leading variant prefix from one token (bounded to 4 variants). */
export type StripVariant<T extends string, Depth extends readonly unknown[] = []> =
  Depth['length'] extends 4 ? T
  : T extends `${VariantName}:${infer Rest}` ? StripVariant<Rest, [...Depth, 0]>
  : T;

/** Remove a trailing `/opacity` modifier (`bg:primary/50` → `bg:primary`). */
export type StripOpacity<T extends string> = T extends `${infer Base}/${string}` ? Base : T;

// ---------------------------------------------------------------------------
// Attribute prop types
// ---------------------------------------------------------------------------

/** Known single tokens for an attribute name. */
export type KnownToken<A extends AttrName> =
  A extends 'layout' ? KnownLayoutToken
  : A extends 'space' ? KnownSpaceToken
  : KnownVisualToken;

// NOTE: the prop types use the single `ArbitraryToken` template rather than the
// per-property Arbitrary*Token unions. TypeScript cross-multiplies template
// members when it contextually types `` `bg:white ${props.visual ?? ''}` ``, and
// 100+ template members trip "union type too complex" (TS2590). The precise
// per-property arbitrary unions remain part of Known*Token for `ValidTokens`.

/** `layout="flex col center"` — any string; known layout tokens autocomplete. */
export type LayoutAttr = LayoutScaleToken | LayoutColorToken | ArbitraryToken | AnyString;
/** `space="p:big m-t:small"` — any string; known space tokens autocomplete. */
export type SpaceAttr = SpaceScaleToken | SpaceColorToken | ArbitraryToken | AnyString;
/** `visual="bg:primary hover:bg:blue-500"` — any string; known visual tokens autocomplete. */
export type VisualAttr = VisualScaleToken | VisualColorToken | ArbitraryToken | AnyString;

/** Prop type for an attribute name. */
export type AttrType<A extends AttrName> =
  A extends 'layout' ? LayoutAttr : A extends 'space' ? SpaceAttr : VisualAttr;

/**
 * The attributes SenangStart adds to every element. Framework augmentation
 * files (./react.d.ts, ./vue.d.ts, …) merge this into the framework's
 * HTML attribute interfaces.
 */
export interface SenangAttributes {
  /** Structure & position — `layout="flex col center"` */
  layout?: LayoutAttr;
  /** Sizing & spacing — `space="p:big m-t:small g:medium"` */
  space?: SpaceAttr;
  /** Colors & appearance — `visual="bg:primary text:white rounded:big hover:bg:blue-500"` */
  visual?: VisualAttr;
  /** Peer-interaction trigger id (pairs with `listens`). */
  interact?: string;
  /** Peer-interaction listener id (pairs with `interact`). */
  listens?: string;
}

// ---------------------------------------------------------------------------
// Strict validation (opt-in)
// ---------------------------------------------------------------------------

/** Brand carried by an invalid token so the compiler error names the culprit. */
export interface InvalidToken<Token extends string, A extends AttrName> {
  readonly __senangInvalidToken: Token;
  readonly __senangAttribute: A;
}

/** True when a single (possibly variant-prefixed, possibly `/opacity`) token is known. */
export type IsKnownToken<T extends string, A extends AttrName> =
  StripOpacity<StripVariant<T>> extends KnownToken<A> ? true : false;

/**
 * Validate a whole space-separated attribute string against the known tokens
 * of attribute `A`. Resolves to `S` when every token is known, otherwise to an
 * `InvalidToken<…>` brand for the first unknown token. Bounded to 16 tokens;
 * anything beyond the bound is accepted as-is.
 *
 *     type Ok  = ValidTokens<'p:big m-t:small', 'space'>;   // 'p:big m-t:small'
 *     type Bad = ValidTokens<'p:bogus', 'space'>;           // InvalidToken<'p:bogus', 'space'>
 */
export type ValidTokens<S extends string, A extends AttrName, Depth extends readonly unknown[] = []> =
  Depth['length'] extends 16 ? S
  : S extends `${infer Head} ${infer Rest}`
    ? Head extends ''
      ? ValidTokens<Rest, A, [...Depth, 0]>
      : IsKnownToken<Head, A> extends true
        ? ValidTokens<Rest, A, [...Depth, 0]> extends infer R
          ? R extends string ? S : R
          : never
        : InvalidToken<Head, A>
    : S extends ''
      ? S
      : IsKnownToken<S, A> extends true ? S : InvalidToken<S, A>;

/** Parameter type for the strict helpers: the literal itself, or an error brand. */
export type Strict<S extends string, A extends AttrName> = S & ValidTokens<S, A>;
