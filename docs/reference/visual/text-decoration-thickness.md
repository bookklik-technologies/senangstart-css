# Text Decoration Thickness

Set text decoration thickness

## Syntax
```
visual="decoration-thickness:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `text-decoration-thickness: auto` | Auto thickness |
| `from-font` | `text-decoration-thickness: from-font` | Use font-specified thickness |

## Examples

```html
<span visual="underline decoration-thickness:[3px]">3px underline</span>
<span visual="underline decoration-thickness:from-font">Font thickness</span>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Decoration Thickness

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="decoration-thickness:[3px]"</code> - Control underline/overline thickness</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-thickness:auto text-size:big">auto</span>
  <span visual="underline decoration-thickness:[3px] text-size:big">3px</span>
  <span visual="underline decoration-thickness:[5px] text-size:big">5px</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-thickness:auto text-size:big">auto</span>
  <span visual="underline decoration-thickness:[3px] text-size:big">3px</span>
  <span visual="underline decoration-thickness:[5px] text-size:big">5px</span>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```
