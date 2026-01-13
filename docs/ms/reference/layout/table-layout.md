# Table Layout

Kawal algoritma susun atur jadual

## Sintaks
```
layout="table:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `table-layout: auto` | Susun atur automatik |
| `fixed` | `table-layout: fixed` | Susun atur tetap |

## Contoh

```html
<table layout="table:fixed">Fixed width columns</table>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Susun Atur Jadual Tetap

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="table:fixed"</code> - Lajur mempunyai lebar tetap sama</p>
<table layout="table:fixed" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Fixed</td>
      <td space="p:small" visual="bg:primary text:white">Column</td>
      <td space="p:small" visual="bg:primary text:white">Widths</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<table layout="table:fixed" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Fixed</td>
      <td space="p:small" visual="bg:primary text:white">Column</td>
      <td space="p:small" visual="bg:primary text:white">Widths</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Susun Atur Jadual Auto

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="table:auto"</code> - Lajur menyesuaikan dengan lebar kandungan</p>
<table layout="table:auto" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Short</td>
      <td space="p:small" visual="bg:primary text:white">Much Longer Content Here</td>
      <td space="p:small" visual="bg:primary text:white">Med</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<table layout="table:auto" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Short</td>
      <td space="p:small" visual="bg:primary text:white">Much Longer Content Here</td>
      <td space="p:small" visual="bg:primary text:white">Med</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>
