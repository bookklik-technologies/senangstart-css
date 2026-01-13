# Transition Property

Set transition properties

## Syntax
```
visual="transition:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `transition-property: none` | No transition |
| `all` | `transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | All properties |
| `colors` | `transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Color properties |
| `opacity` | `transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Opacity only |
| `shadow` | `transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Shadow only |
| `transform` | `transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Transform only |

## Examples

```html
<button visual="transition:all hover:bg:primary">Smooth hover</button>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transition

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="transition:all"</code> - Smooth property changes</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all">transition:all</button>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all">transition:all</button>
</div>
```

</details>

</div>
