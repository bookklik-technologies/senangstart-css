# Appearance

Control native appearance

## Syntax
```
visual="appearance:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `appearance: none` | Remove native styling |
| `auto` | `appearance: auto` | Default appearance |

## Examples

```html
<select visual="appearance:none">Custom select</select>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Appearance

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="appearance:none"</code> - Remove native browser styling from form elements</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <select space="p:tiny" visual="appearance:auto"><option>Native</option></select>
  <select space="p:tiny" visual="appearance:none bg:white border:neutral-300 rounded:small"><option>Custom</option></select>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <select space="p:tiny" visual="appearance:auto"><option>Native</option></select>
  <select space="p:tiny" visual="appearance:none bg:white border:neutral-300 rounded:small"><option>Custom</option></select>
</div>
```

</details>

</div>
