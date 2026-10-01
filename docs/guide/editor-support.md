# Editor Support

SenangStart ships editor data with the npm package — no extension required. Everything below lives in `node_modules/@bookklik/senangstart-css/types/` and `…/schema/`.

| What | Where it helps | Shipped file / entry |
|------|----------------|----------------------|
| Attribute value completions + descriptions | HTML (VS Code and other editors using the HTML language service) | `types/senang.html-data.json` (`/html-data`) |
| JSX / template attribute types | React, Preact, Solid, Vue, Svelte, Astro | `/react`, `/preact`, `/solid`, `/vue`, `/svelte`, `/astro` |
| Compile-time token validation | TS/TSX | `/typed` (`ss.*` helpers) |
| Config completions + validation | `senangstart.config.*` | `/node` (`Config`, `defineConfig`), `/schema` |
| Machine-readable token data | custom tooling, LLM prompts | `types/senang-data.json` (`/data`) |

## HTML completions (VS Code)

Point VS Code's HTML custom data at the shipped file:

```json
// .vscode/settings.json
{
  "html.customData": [
    "./node_modules/@bookklik/senangstart-css/types/senang.html-data.json"
  ]
}
```

Reload the window. Typing `layout="`, `space="` or `visual="` now suggests every known token (layout ≈ 630, space ≈ 670, visual ≈ 1190 values) with a short description, and hovering an attribute explains the breakpoint (`mob`, `tab`, `lap`, `desk`, `print`, `tw-*`) and state (`hover`, `focus`, …) prefixes. `interact` and `listens` are listed as attributes without value completions.

Completions are offered per token, so variant-prefixed (`tab:hover:p:big`) and arbitrary (`w:[350px]`) tokens are valid even if they aren't suggested.

## Framework attribute types

The attribute types accept any string (attribute values are space-separated lists), while surfacing known single tokens as completions. Opt in once per project — usually in an ambient `.d.ts`:

| Framework | Add to | Line |
|-----------|--------|------|
| React | `src/senang-env.d.ts` (or tsconfig `"types"`) | `import '@bookklik/senangstart-css/react';` |
| Preact | `src/senang-env.d.ts` | `import '@bookklik/senangstart-css/preact';` |
| Solid | `src/senang-env.d.ts` | `import '@bookklik/senangstart-css/solid';` |
| Vue 3 (Volar / vue-tsc) | `src/env.d.ts` | `import '@bookklik/senangstart-css/vue';` |
| Svelte (svelte-check) | `src/app.d.ts` | `import '@bookklik/senangstart-css/svelte';` |
| Astro | `src/env.d.ts` | `import '@bookklik/senangstart-css/astro';` |

```ts
// src/senang-env.d.ts
import '@bookklik/senangstart-css/react';
```

```tsx
<div layout="flex col center" space="p:big m-t:small" visual="bg:primary hover:bg:blue-500" />
```

These entries are type-only — import them from `.d.ts` files (or tsconfig `"types"`), not from runtime code.

The core types are also importable directly:

```ts
import type { LayoutAttr, SpaceAttr, VisualAttr, SenangAttributes } from '@bookklik/senangstart-css';
```

## Strict validation with `ss`

For compile-time errors on typos, wrap literal values with the typed helpers. They are identity functions at runtime; validation happens in the type system:

```tsx
import { ss } from '@bookklik/senangstart-css/typed';

<div space={ss.space('p:big m-t:small')} visual={ss.visual('bg:primary hover:bg:blue-500')} />

ss.space('p:bogus');   // ✗ type error: InvalidToken<'p:bogus', 'space'>
```

Only string literals can be validated — a `string` variable is rejected, so use the plain attribute types for dynamic values.

## Types for your theme

The shipped types describe the **default** theme. If you add colors or scale values, let the build emit project-specific types:

```js
// senangstart.config.js
export default {
  output: { typescript: './src/types/senang.d.ts' }
};
```

Re-run `senangstart build` after theme changes. The generated file carries a marker header and never overwrites a file you wrote yourself. (The Vite and PostCSS plugins don't write side outputs — use the CLI for this.) See [TypeScript](/guide/typescript).

## Config file completions

**JavaScript / TypeScript configs** — use the JSDoc type or `defineConfig`:

```js
// senangstart.config.mjs
/** @type {import('@bookklik/senangstart-css/node').Config} */
export default {
  content: ['./src/**/*.{html,tsx}']
};
```

```js
import { defineConfig } from '@bookklik/senangstart-css/node';

export default defineConfig({
  content: ['./src/**/*.{html,tsx}']
});
```

**JSON configs** — reference the JSON Schema (generated from the config defaults, with descriptions and defaults for every key):

```json
{
  "$schema": "./node_modules/@bookklik/senangstart-css/schema/senangstart.config.schema.json",
  "content": ["./src/**/*.html"]
}
```

Or map it in VS Code once for every project:

```json
// .vscode/settings.json
{
  "json.schemas": [
    {
      "fileMatch": ["senangstart.config.json"],
      "url": "./node_modules/@bookklik/senangstart-css/schema/senangstart.config.schema.json"
    }
  ]
}
```

The schema is also exported as `@bookklik/senangstart-css/schema` for tools that resolve package entries.

## Token data for tooling and AI

`types/senang-data.json` (`@bookklik/senangstart-css/data`) is a compact, machine-readable list of breakpoints, states, variants, scales, colors and per-attribute tokens — useful for custom linters, editor plugins, or feeding an LLM. For an AI-assistant context file tailored to your config, set `output.aiContext` (e.g. `./.cursorrules`) and run `senangstart build`.

## Diagnostics while you type

Editors only know the token lists above. The authoritative check is the build: unknown tokens are reported with `file:line` by `senangstart dev`, the [Vite plugin](/guide/integrations#vite) (dev warnings / build errors) and the [PostCSS plugin](/guide/integrations#postcss).
