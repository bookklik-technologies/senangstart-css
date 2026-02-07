# Writing Mode

Set writing direction for RTL/vertical text

## Syntax
```
visual="writing-mode:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `horizontal-tb` | `writing-mode: horizontal-tb` | Left to right |
| `vertical-rl` | `writing-mode: vertical-rl` | Top to bottom RTL |
| `vertical-lr` | `writing-mode: vertical-lr` | Top to bottom LTR |
| `sideways-rl` | `writing-mode: sideways-rl` | Sideways RTL |
| `sideways-lr` | `writing-mode: sideways-lr` | Sideways LTR |

## Examples

```html
<div visual="writing-mode:vertical-rl">Vertical text</div>
<div visual="writing-mode:horizontal-tb">Horizontal text</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Writing Mode

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="writing-mode:vertical-rl"</code> - Control text direction and orientation</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">horizontal-tb</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">vertical-rl</div>
 </div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">horizontal-tb</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">vertical-rl</div>
 </div>
```

</details>

</div>
