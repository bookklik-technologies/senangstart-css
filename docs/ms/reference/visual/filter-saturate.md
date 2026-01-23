# Filter Saturate

Laraskan ketepuan

## Sintaks
```
visual="saturate:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: saturate(0)` | Tidak tepu |
| `low` | `filter: saturate(0.5)` | Ketepuan rendah |
| `normal` | `filter: saturate(1)` | Ketepuan normal |
| `high` | `filter: saturate(1.5)` | Ketepuan tinggi |
| `vivid` | `filter: saturate(2)` | Sangat tepu |

## Contoh

```html
<img visual="saturate:vivid">Vivid colors</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penapis Ketepuan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="saturate:vivid"</code> - Laraskan ketepuan warna</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small saturate:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small saturate:vivid">vivid</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small saturate:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small saturate:vivid">vivid</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
