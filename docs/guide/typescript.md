# TypeScript Integration

SenangStart CSS generates TypeScript type definitions for JSX attribute validation.

## Generated Types

When you run `npx senangstart build` (or `npm run build`), a `types/senang.d.ts` file is generated automatically if configured:

```js
// senangstart.config.js
export default {
  output: {
    typescript: './types/senang.d.ts'
  }
}
```

The generated file provides JSX attribute type augmentation for:

- **React** — `React.HTMLAttributes` interface extension
- **Vue** — `HTMLAttributes` interface extension
- **Svelte** — `svelteHTML.IntrinsicElements` declaration

### What Gets Typed

| Attribute | Type | Example Values |
|-----------|------|----------------|
| `layout` | Union of all layout keywords + colon syntax values | `'flex'`, `'grid'`, `'grid-cols:3'` |
| `space` | Union of all spacing properties with scale values | `'p:medium'`, `'m:big'`, `'w:[100px]'` |
| `visual` | Union of all visual properties with theme values | `'bg:primary'`, `'text:slate-500'` |

## Using in Your Project

### React / JSX

```tsx
// No imports needed — the .d.ts is ambient
<div layout="flex col" space="p:medium" visual="bg:white rounded:small">
  <h1 visual="text-size:big font:bold">Title</h1>
</div>
```

TypeScript will validate these attributes against the generated union types and provide autocomplete in supported editors.

### Vue

```vue
<template>
  <div layout="flex col" space="p:medium" visual="bg:white rounded:small">
    <h1 visual="text-size:big font:bold">Title</h1>
  </div>
</template>
```

### Configuring the Output Path

By default, types are written to `./types/senang.d.ts`. Include this directory in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["./types/senang.d.ts"]
  }
}
```

Or place the output directly in your `src/` directory:

```js
export default {
  output: {
    typescript: './src/types/senang.d.ts'
  }
}
```

## Custom Theme Types

When you customize your theme (colors, spacing, breakpoints), the generated types automatically reflect your custom values. Re-run `npx senangstart build` after any theme changes to update the type definitions.
