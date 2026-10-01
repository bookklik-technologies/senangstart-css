# Content Scanning

::: v-pre

At build time SenangStart reads every file matched by `content`, extracts the tokens used in `layout`, `space`, `visual`, `interact` and `listens` attributes, and generates CSS for exactly those tokens. This page explains which files are read and what the extractor can (and cannot) see.

## Which files are scanned

```js
// senangstart.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
    './resources/views/**/*.blade.php',
    '!./src/legacy/**'          // negation
  ]
};
```

- Globs are resolved relative to the project root (the CLI's working directory, Vite's `root`, or the `cwd` option) with [tinyglobby](https://github.com/SuperchupuDev/tinyglobby): `**`, `{a,b}` braces, multi-dot extensions such as `*.blade.php`, and `!negations` all work.
- A plain path to a file is included as-is; a plain path to a directory scans everything inside it.
- `node_modules`, `.git`, `dist`, `.cache`, `.next`, `.nuxt`, `.output`, `.turbo`, `.vercel`, `coverage` and `.nyc_output` are always ignored. Symlinks are not followed.
- Without a `content` key the default is:

  ```js
  ['./**/*.html', './**/*.{php,blade.php}', './**/*.{js,jsx,ts,tsx}', './**/*.{vue,svelte,astro}', './**/*.{md,mdx}']
  ```

  Narrow it in real projects — scanning fewer files is faster and avoids picking up tokens from fixtures or docs.

If nothing matches (and the `safelist` is empty) the CLI fails with *"No source files found matching content patterns"*; the Vite and PostCSS plugins log a warning and emit no utilities.

## What the extractor sees

The extractor is a single-pass, tag-aware scanner (see `src/compiler/extractor/`). It is the same for every file type — HTML, JSX/TSX, Vue, Svelte, Astro, Blade, PHP, Markdown.

### Attributes inside tags only

Attributes are recognised only inside a tag (`<name …>`):

```html
<div layout="flex col" space="p:big">   <!-- ✓ scanned -->
<p>Set space = big to add padding</p>   <!-- ✗ prose -->
```

```js
const layout = 'grid';                  // ✗ JS variable
el.setAttribute('visual', 'bg:blue');   // ✗ not inside a tag
```

Attribute names must match exactly (case-insensitive): `data-layout`, `x-layout`, `playout` or `layoutMode` are ignored. HTML comments (`<!-- -->`), JS block comments (`/* */`, including JSX `{/* */}`) and Blade comments (`{{-- --}}`) are skipped. Markup inside JS template literals **is** scanned:

```js
app.innerHTML = `<span layout="flex center">Ready</span>`;   // ✓ flex, center
```

### Framework bindings

Dynamic bindings are recognised and their expressions are mined for string literals:

| Syntax | Framework |
|--------|-----------|
| `layout={…}` | JSX / TSX, Svelte, Astro, Solid |
| `:layout="…"`, `v-bind:layout="…"` (with `.modifiers`) | Vue, Blade components |
| `x-bind:layout="…"` | Alpine.js |
| `[layout]="…"`, `[attr.layout]="…"` | Angular |
| `layout="… {{ $x }} …"`, `layout="<?= … ?>"` | Blade, PHP, Twig-style |
| `layout="… {expr} …"`, `` layout="… ${expr} …" `` | Svelte, lit-html |

Inside an expression the extractor collects:

- every **string literal** and **template literal** — both branches of a ternary, array items, `&&` operands:
  `layout={open ? 'flex row' : 'grid'}` → `flex`, `row`, `grid`
- **unquoted object keys** — `layout={classNames({ wrap: true, center: open })}` → `wrap`, `center`
- string arguments of known class helpers: `clsx`, `classnames`/`classNames`, `cn`, `cx`, `cva`, `tv`, `tw`, `twMerge`, `twJoin`, `classList`, array/string methods (`join`, `concat`, `map`, `filter`, `flat`, `flatMap`, `trim`, `split`, `push`, `toString`, `String`, `Array`) and PHP's `implode`, `array_merge`, `array_filter`.

It deliberately **drops**:

| Dropped | Why | Example |
|---------|-----|---------|
| Arguments of any other function | almost never tokens | `route('home')`, `t('bg:red')`, `config('app.visual')` |
| Comparison operands | values, not tokens | `size === 'big'` → `big` dropped (but the ternary results are kept) |
| Partial fragments touching an interpolation | can't be completed statically | `` `ring-${tone}` ``, `bg-{color}`, `'shadow:' + level` |
| Anything that doesn't look like a token | junk filter | `$var`, `a?b`, `e=f`, `'quoted'`, `<g>` |

Arbitrary values keep their brackets intact — `w:[350px]`, `bg:[#ff0000]`, `text:[var(--x)]`. Characters such as `=` are allowed inside `[...]` only.

### Tokens the extractor can't see

Build class strings from **complete tokens**, never by concatenating fragments:

```jsx
// ✗ generates nothing for the dynamic part
<div visual={`bg:${color}`} />

// ✓ both complete tokens are visible
<div visual={color === 'red' ? 'bg:danger' : 'bg:primary'} />
```

A lookup table in plain JS (`const tone = { red: 'bg:danger' }`) is **not** inside a tag, so it isn't scanned — pair it with a hint comment or the safelist below.

For values that come from a database, CMS or a variable with no literal in sight, use one of:

**Hint comments** — declare tokens next to the code that uses them:

```html
<!-- senang: visual="bg:danger bg:success" -->
```
```js
// senang: layout="grid grid-cols:3"
/* senang: space="p:big" */
```
```blade
{{-- senang: visual="bg:warning" --}}
```
```yaml
# senang: layout="flex"
```

**`safelist`** — always generate, regardless of content:

```js
export default {
  safelist: ['visual=bg:danger', 'flex', { attr: 'space', tokens: ['p:small', 'p:big'] }]
};
```

## Robustness

Malformed input never throws: unterminated quotes, braces, comments or `<?php` blocks are reported as *skipped* and the scan stays linear-time, so a broken file can't hang or crash the build. Overlong attribute values are skipped as well.

The behaviour above is pinned by fixtures in `tests/fixtures/extractor/` (`html`, `jsx`, `vue`, `svelte`, `astro`, `blade`, `php`, `edge-cases`), each with an `*.expected.json` listing the tokens that must — and must not — be extracted.

## Diagnostics

Tokens that are extracted but unknown to the engine (e.g. `space="p:hueg"`) become diagnostics with the file and line of their first occurrence. They fail `senangstart build`, `vite build` and the PostCSS plugin unless `ignoreInvalid` is set — see [CLI › Invalid Token Handling](/guide/cli#invalid-token-handling).

:::
