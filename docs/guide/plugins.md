# Extending SenangStart

Since **0.4.0** you can add your own utilities, variants and keyframes from
`senangstart.config`, either declaratively or with functional plugins. Both
forms produce the same result and work in the CLI, the Vite/PostCSS plugins and
the programmatic API (the browser CDN accepts the declarative keys in its inline
JSON config).

## Declarative

```js
// senangstart.config.mjs
export default {
  theme: {
    textShadow: { soft: '0 1px 2px rgb(0 0 0 / .3)', hard: '2px 2px 0 #000' },
    keyframes:  { wiggle: '0%,100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) }' },
    animation:  { wiggle: 'wiggle 1s ease-in-out infinite' }
  },
  utilities: {
    // keyword utility: visual="glass"
    glass: { attr: 'visual', css: 'backdrop-filter: blur(12px); background: rgb(255 255 255 / .1);' },
    // valued utility: visual="text-shadow:soft" / "text-shadow:[1px_1px_red]"
    'text-shadow': { attr: 'visual', template: 'text-shadow: {value};', scale: 'textShadow' },
    // reuse a built-in scale: layout="gap-cols:big"
    'gap-cols': { attr: 'layout', template: 'column-gap: {value};', scale: 'spacing' }
  },
  variants: {
    hocus:        '&:hover, &:focus',                        // → :is(:hover, :focus)
    'theme-dark': '[data-theme=dark] &',                     // ancestor → :where([data-theme=dark] *)
    'motion-ok':  '@media (prefers-reduced-motion: no-preference)'
  }
};
```

```html
<button visual="glass text-shadow:soft hocus:bg:primary motion-ok:animate:wiggle">…</button>
```

### Utility spec

| Field | Meaning |
|---|---|
| `attr` | `layout`, `space` or `visual` (default `visual`) |
| `css` | Static declarations → a keyword utility |
| `template` | Declaration template containing `{value}` |
| `scale` | `theme` key whose entries are the accepted values (`theme.textShadow.soft` → `text-shadow:soft`). Built-in scales (`spacing`, `colors`, `radius`, …) emit their CSS variables; custom scales are inlined |
| `literals` | Fixed values, e.g. `{ none: 'none' }` |
| `enum` | Full declarations per value, e.g. `{ x: 'overflow-x: auto;' }` |
| `passthrough` | Accept any CSS identifier as the value |
| `numeric` | `{ unit: 'deg' }` / `{ unit: '', divide: 100 }` for numeric values |
| `arbitrary` | Allow `[…]` values (default `true` when a template exists) |

Unknown values produce the usual `UNKNOWN_VALUE` diagnostic with a suggestion.

### Variant spec

| Definition | Result |
|---|---|
| `'&:hover'` / `':hover'` | pseudo-class suffix |
| `'&:hover, &:focus'` | `:is(:hover, :focus)` |
| `'[data-theme=dark] &'` | ancestor: `:where([data-theme=dark] *)` |
| `'@media (…)'` / `'@supports (…)'` | at-rule wrapper |

Custom variants stack with built-ins (`tab:hocus:bg:primary`).

### Keyframes

`theme.keyframes` entries are emitted as `@keyframes` only when an `animate:`
utility references them; `theme.animation` adds named values to `animate:`.

## Functional plugins

```js
export default {
  plugins: [
    ({ addUtilities, addVariants, addKeyframes, addAnimation, theme }) => {
      addUtilities({
        'brand-ring': { attr: 'visual', css: `box-shadow: 0 0 0 3px ${theme('colors.primary')};` }
      });
      addVariants({ 'group-open': '[open] &' });
      addKeyframes({ fade: '0% { opacity: 0 } 100% { opacity: 1 }' });
      addAnimation({ fade: 'fade .3s ease-out' });
    }
  ]
};
```

Plugins run once per config when the engine first needs them; `theme(path, fallback)`
reads the merged theme. Plugin definitions go through the same value validation
as everything else, so a definition containing `{`, `}` or `;` in the wrong place
is rejected rather than injected.

## Component extraction

SenangStart does not have an `@apply`. The intended pattern is a keyword
utility with `css`, or — for anything that needs the full utility vocabulary —
a component in your framework that renders the attributes.
