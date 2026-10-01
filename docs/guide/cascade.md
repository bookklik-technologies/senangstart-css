# Cascade, Layers & Ordering

Since **0.4.0**, SenangStart CSS emits deterministic, layered output.

## Cascade layers

```css
@layer senangstart.theme, senangstart.base, senangstart.utilities;
@layer senangstart.theme { :root { … } }        /* design tokens */
@layer senangstart.base { … }                    /* preflight */
@keyframes spin { … }                            /* keyframes (global) */
@layer senangstart.utilities { … }               /* everything you write */
```

Because utilities live in a named layer, **any unlayered CSS you write wins over
utilities**, regardless of stylesheet order. This matches Tailwind v4. To opt out
(for example if you rely on utilities overriding a third-party stylesheet), set:

```js
export default { layers: false };
```

## Deterministic ordering

The output no longer depends on file names, file order or the order in which a
token first appears. Inside each block, rules are ordered by:

1. **Shorthand depth.** Shorthands come before longhands (`p` → `p-x` → `p-t`,
   `rounded` → `rounded-t`, `inset` → `top`), so a longhand always refines a
   shorthand on the same element.
2. **Number of declarations.** `p-x` (two properties) comes before `p-l` (one).
3. **Token name**, alphabetically, as a stable tie-breaker.

Responsive blocks are ordered by their numeric `min-width` (mobile-first),
whatever order `theme.screens` is written in. `print` is emitted as `@media print`.

## Dark mode

- `darkMode: 'media'` uses `@media (prefers-color-scheme: dark)`.
- `darkMode: 'selector'` (or the Tailwind v3 name `'class'`) wraps rules in
  `:where(.dark, :is(.dark) *)`. The wrapper has **zero specificity** and matches
  the `.dark` element itself as well as its descendants, so `hover:` and other
  state variants keep working in dark mode.
- `darkMode: ['selector', '[data-theme=dark]']` uses a custom selector.

## Theme variables

Only the variables your page uses are emitted for palette shades
(`--c-blue-500`, …) and Tailwind-compatible scales (`--tw-*`). Semantic tokens
(`--c-primary`, `--s-big`, `--r-medium`, …) are always emitted so your own CSS can
use them. Set `theme.exposeAll: true` to emit every variable.

## Migrating from 0.3.x

| Change | What to check |
|---|---|
| Utilities are in `@layer` | Your own unlayered CSS now beats utilities. Use `layers: false` if you need the old behaviour. |
| Deterministic order | Pages that accidentally depended on file order may render differently, now consistently. |
| Dark selector | `.dark [visual~=…]` became `:where(.dark, :is(.dark) *)[visual~=…]`. Update any CSS or tests that matched the old selector string. |
| `darkMode: 'class'` | Previously applied dark styles **always** (bug). Now behaves like `'selector'`. |
| Pruned palette | If your CSS uses `var(--c-red-500)` without any utility using it, set `theme.exposeAll: true`. |
| Display resets removed | `display: revert-layer` resets were dead code; responsive display utilities override base ones by order. |
