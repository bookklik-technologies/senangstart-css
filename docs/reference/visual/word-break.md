# Word Break

Control word breaking

## Syntax
```
visual="[break-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `break-normal` | `overflow-wrap: normal; word-break: normal` | Normal break |
| `break-words` | `overflow-wrap: break-word` | Break words |
| `break-all` | `word-break: break-all` | Break all |
| `break-keep` | `word-break: keep-all` | Keep all |

## Examples

```html
<div visual="break-words">Long words break properly</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Word Break

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="break-words"</code> - Control word breaking</p>
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[120px]" visual="bg:primary text:white rounded:small break-normal">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:success text:white rounded:small break-words">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:warning text:black rounded:small break-all">Supercalifragilisticexpialidocious</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[120px]" visual="bg:primary text:white rounded:small break-normal">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:success text:white rounded:small break-words">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:warning text:black rounded:small break-all">Supercalifragilisticexpialidocious</div>
</div>
```

</details>

</div>
