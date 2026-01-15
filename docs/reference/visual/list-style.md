# List Style

Set list style

## Syntax
```
visual="list:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `list-style-type: none` | No bullets |
| `disc` | `list-style-type: disc` | Disc bullets |
| `decimal` | `list-style-type: decimal` | Numbers |
| `square` | `list-style-type: square` | Square bullets |
| `inside` | `list-style-position: inside` | Inside position |
| `outside` | `list-style-position: outside` | Outside position |

## Examples

```html
<ul visual="list:none">No bullets</ul>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### List Style

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="list:disc"</code> - Control list markers</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <ul space="p:small" visual="bg:primary text:white rounded:small list:none"><li>none</li><li>no bullets</li></ul>
  <ul space="p:small" visual="bg:success text:white rounded:small list:disc"><li>disc</li><li>bullet</li></ul>
  <ol space="p:small" visual="bg:warning text:black rounded:small list:decimal"><li>decimal</li><li>numbers</li></ol>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <ul space="p:small" visual="bg:primary text:white rounded:small list:none"><li>none</li><li>no bullets</li></ul>
  <ul space="p:small" visual="bg:success text:white rounded:small list:disc"><li>disc</li><li>bullet</li></ul>
  <ol space="p:small" visual="bg:warning text:black rounded:small list:decimal"><li>decimal</li><li>numbers</li></ol>
</div>
```

</details>

</div>
