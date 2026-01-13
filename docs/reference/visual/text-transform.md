# Text Transform

Transform text case

## Syntax
```
visual="[transform-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `uppercase` | `text-transform: uppercase` | All uppercase |
| `lowercase` | `text-transform: lowercase` | All lowercase |
| `capitalize` | `text-transform: capitalize` | Capitalize words |
| `normal-case` | `text-transform: none` | Normal case |

## Examples

```html
<span visual="uppercase">Uppercase text</span>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Transform

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="uppercase"</code> - Change text case</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: uppercase;">upper</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: lowercase;">LOWER</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: capitalize;">capitalize</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: uppercase;">upper</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: lowercase;">LOWER</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: capitalize;">capitalize</span>
</div>
```

</details>

</div>
