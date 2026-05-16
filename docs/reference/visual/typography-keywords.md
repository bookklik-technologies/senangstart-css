# Typography Keywords

Typography utility keywords (text-decoration-style only; other typography keywords are in their own definitions)

## Syntax
```
visual="[keyword]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `decoration-solid` | `text-decoration-style: solid` | Solid line |
| `decoration-double` | `text-decoration-style: double` | Double line |
| `decoration-dotted` | `text-decoration-style: dotted` | Dotted line |
| `decoration-dashed` | `text-decoration-style: dashed` | Dashed line |
| `decoration-wavy` | `text-decoration-style: wavy` | Wavy line |

## Examples

```html
<span visual="underline decoration-dashed">Dashed underline</span>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Decoration Style

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="decoration-dashed"</code> - Set the style of text decoration lines</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-solid">solid</span>
  <span visual="underline decoration-dashed">dashed</span>
  <span visual="underline decoration-dotted">dotted</span>
  <span visual="underline decoration-wavy">wavy</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-solid">solid</span>
  <span visual="underline decoration-dashed">dashed</span>
  <span visual="underline decoration-dotted">dotted</span>
  <span visual="underline decoration-wavy">wavy</span>
</div>
```

</details>

</div>
