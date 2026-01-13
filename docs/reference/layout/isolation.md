# Isolation

Create new stacking context

## Syntax
```
layout="isolation:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `isolate` | `isolation: isolate` | Create stacking context |
| `auto` | `isolation: auto` | Auto isolation |

## Examples

```html
<div layout="isolation:isolate">Isolated</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Isolation

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="isolation:isolate"</code> - Create new stacking context</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="isolation:isolate" space="p:small" visual="bg:primary text:white rounded:small">isolation:isolate</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="isolation:isolate" space="p:small" visual="bg:primary text:white rounded:small">isolation:isolate</div>
</div>
```

</details>

</div>
