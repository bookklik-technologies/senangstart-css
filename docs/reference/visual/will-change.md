# Will Change

Hint browser about upcoming changes

## Syntax
```
visual="will-change:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `will-change: auto` | Auto optimization |
| `scroll` | `will-change: scroll-position` | Scroll changes |
| `contents` | `will-change: contents` | Content changes |
| `transform` | `will-change: transform` | Transform changes |
| `opacity` | `will-change: opacity` | Opacity changes |

## Examples

```html
<div visual="will-change:transform">Optimized for animation</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Will Change

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="will-change:transform"</code> - Optimize for upcoming changes</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">transform</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">opacity</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">transform</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">opacity</div>
</div>
```

</details>

</div>
