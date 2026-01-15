# Word Break

Kawal pemecahan perkataan

## Sintaks
```
visual="[break-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `break-normal` | `overflow-wrap: normal; word-break: normal` | Pemecahan normal |
| `break-words` | `overflow-wrap: break-word` | Pecah perkataan |
| `break-all` | `word-break: break-all` | Pecah semua |
| `break-keep` | `word-break: keep-all` | Kekalkan semua |

## Contoh

```html
<div visual="break-words">Long words break properly</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pemecahan Perkataan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="break-words"</code> - Kawal pemecahan perkataan</p>
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[120px]" visual="bg:primary text:white rounded:small break-normal">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:success text:white rounded:small break-words">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:warning text:black rounded:small break-all">Supercalifragilisticexpialidocious</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[120px]" visual="bg:primary text:white rounded:small break-normal">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:success text:white rounded:small break-words">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:warning text:black rounded:small break-all">Supercalifragilisticexpialidocious</div>
</div>
```

</details>

</div>
