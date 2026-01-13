# Font Variant Numeric

Control numeric font variants

## Syntax
```
visual="[variant-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal-nums` | `font-variant-numeric: normal` | Normal numbers |
| `ordinal` | `font-variant-numeric: ordinal` | Ordinal markers |
| `slashed-zero` | `font-variant-numeric: slashed-zero` | Slashed zero |
| `lining-nums` | `font-variant-numeric: lining-nums` | Lining numbers |
| `oldstyle-nums` | `font-variant-numeric: oldstyle-nums` | Oldstyle numbers |
| `proportional-nums` | `font-variant-numeric: proportional-nums` | Proportional numbers |
| `tabular-nums` | `font-variant-numeric: tabular-nums` | Tabular numbers |

## Examples

```html
<span visual="tabular-nums">123,456.00</span>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Font Variant Numeric

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="tabular-nums"</code> - Control number display</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">tabular-nums</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ordinal</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">tabular-nums</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ordinal</div>
</div>
```

</details>

</div>
