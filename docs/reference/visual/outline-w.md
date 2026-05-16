# Outline W

Set outline width

## Syntax
```
visual="outline-w:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `outline-width: var(--s-none)` | No outline width (0px) |
| `thin` | `outline-width: var(--s-thin)` | Thin outline (1px) |
| `regular` | `outline-width: var(--s-regular)` | Regular outline (2px) |
| `thick` | `outline-width: var(--s-thick)` | Thick outline (3px) |

## Examples

```html
<button visual="outline-w:regular outline:primary">Outlined button</button>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Outline Widths

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="outline-w:regular"</code> - Different outline width options</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:thin rounded:small">thin</div>
  <div space="p:medium" visual="outline:primary outline-w:regular rounded:small">regular</div>
  <div space="p:medium" visual="outline:primary outline-w:thick rounded:small">thick</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:thin rounded:small">thin</div>
  <div space="p:medium" visual="outline:primary outline-w:regular rounded:small">regular</div>
  <div space="p:medium" visual="outline:primary outline-w:thick rounded:small">thick</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="outline:[custom-value]">Custom</div>
```
