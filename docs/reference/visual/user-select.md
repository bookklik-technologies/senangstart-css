# User Select

Control text selection

## Syntax
```
visual="select:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `user-select: none` | Prevent selection |
| `text` | `user-select: text` | Allow text selection |
| `all` | `user-select: all` | Select all on click |
| `auto` | `user-select: auto` | Default behavior |

## Examples

```html
<div visual="select:none">Cannot select this text</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### User Select

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="select:none"</code> - Control whether text can be selected</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small select:none">none (try select)</div>
  <div space="p:small" visual="bg:success text:white rounded:small select:all">all (click to select)</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small select:none">none (try select)</div>
  <div space="p:small" visual="bg:success text:white rounded:small select:all">all (click to select)</div>
</div>
```

</details>

</div>
