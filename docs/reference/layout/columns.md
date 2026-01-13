# Columns

Create multi-column layouts

## Syntax
```
layout="cols:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1-12` | `columns: {n}` | N columns |
| `auto` | `columns: auto` | Auto columns |

## Examples

```html
<div layout="cols:3">Three columns</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Multi-Column Layout

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="cols:2"</code> - Text flows into multiple columns</p>
<div layout="cols:2" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text:neutral-800 dark:text:neutral-200">This text will automatically flow into two columns. Great for newspaper-style layouts and improving readability of long text content.</p>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="cols:2" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text:neutral-800 dark:text:neutral-200">This text will automatically flow into two columns. Great for newspaper-style layouts and improving readability of long text content.</p>
</div>
```

</details>

</div>
