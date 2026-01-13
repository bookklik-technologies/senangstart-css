# Border Spacing

Kawal jarak antara sempadan jadual

## Sintaks
```
layout="border-spacing:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `border-spacing` | `border-spacing: {value}` | Semua jarak |
| `border-spacing-x` | `border-spacing: {value} 0` | Jarak mendatar |
| `border-spacing-y` | `border-spacing: 0 {value}` | Jarak menegak |

## Contoh

```html
<table layout="border-separate border-spacing:small">Spaced</table>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Jarak Sempadan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="border-spacing:small"</code> - Jarak antara sempadan sel jadual</p>
<table layout="border:separate" style="width: 100%; border-spacing: 8px;">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<table layout="border:separate" style="width: 100%; border-spacing: 8px;">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="border:[custom-value]">Custom</div>
```
