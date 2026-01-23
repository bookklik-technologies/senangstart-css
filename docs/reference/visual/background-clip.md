# Background Clip

Set background clipping area

## Syntax
```
visual="bg-clip:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `border` | `background-clip: border-box` | Clip to border |
| `padding` | `background-clip: padding-box` | Clip to padding |
| `content` | `background-clip: content-box` | Clip to content |
| `text` | `background-clip: text; -webkit-background-clip: text` | Clip to text |

## Examples

```html
<div visual="bg-clip:text text:transparent bg:gradient">Gradient text</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Clip

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-clip:text"</code> - Clip background to text for gradient text effect</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span text="size:large weight:bold" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 bg-clip:text text:transparent">Gradient Text</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span text="size:large weight:bold" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 bg-clip:text text:transparent">Gradient Text</span>
</div>
```

</details>

</div>
