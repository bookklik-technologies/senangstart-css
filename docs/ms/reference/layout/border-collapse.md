# Border Collapse

Kawal runtuhan sempadan jadual

## Sintaks
```
layout="border:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `collapse` | `border-collapse: collapse` | Runtuhkan sempadan |
| `separate` | `border-collapse: separate` | Asingkan sempadan |

## Contoh

```html
<table layout="border:collapse">Collapsed table</table>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Runtuh Sempadan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="border:collapse"</code> - Sempadan jadual runtuh menjadi satu baris</p>
<table layout="border:collapse" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B2</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<table layout="border:collapse" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B2</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Asingkan Sempadan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="border:separate"</code> - Sempadan jadual diasingkan (lalai)</p>
<table layout="border:separate" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%; border-spacing: 4px;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<table layout="border:separate" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%; border-spacing: 4px;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>
