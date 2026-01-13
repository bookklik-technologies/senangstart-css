# Caption Side

Kawal kedudukan kapsyen jadual

## Sintaks
```
layout="caption:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `top` | `caption-side: top` | Kapsyen di atas |
| `bottom` | `caption-side: bottom` | Kapsyen di bawah |

## Contoh

```html
<caption layout="caption:bottom">Bottom caption</caption>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kapsyen Atas

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="caption:top"</code> - Kapsyen jadual di atas</p>
<table style="width: 100%;">
  <caption layout="caption:top" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Top)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<table style="width: 100%;">
  <caption layout="caption:top" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Top)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kapsyen Bawah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="caption:bottom"</code> - Kapsyen jadual di bawah</p>
<table style="width: 100%;">
  <caption layout="caption:bottom" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Bottom)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<table style="width: 100%;">
  <caption layout="caption:bottom" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Bottom)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>
