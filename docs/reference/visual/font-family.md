# Font Family

Set font family

## Syntax
```
visual="font:[family]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `sans` | `font-family: ui-sans-serif, system-ui, sans-serif` | Sans-serif |
| `serif` | `font-family: ui-serif, Georgia, serif` | Serif |
| `mono` | `font-family: ui-monospace, monospace` | Monospace |

## Examples

```html
<div visual="font:mono">Monospace text</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Font Family

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="font:sans"</code> - Choose between sans, serif, or mono</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:sans">Sans-serif font</span>
  <span visual="font:serif">Serif font</span>
  <span visual="font:mono">Monospace font</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:sans">Sans-serif font</span>
  <span visual="font:serif">Serif font</span>
  <span visual="font:mono">Monospace font</span>
</div>
```

</details>

</div>
