# Backdrop Saturate

Laraskan ketepuan latar belakang

## Sintaks
```
visual="backdrop-saturate:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: saturate(0)` | Tidak tepu |
| `low` | `backdrop-filter: saturate(0.5)` | Ketepuan rendah |
| `normal` | `backdrop-filter: saturate(1)` | Ketepuan normal |
| `high` | `backdrop-filter: saturate(1.5)` | Ketepuan tinggi |
| `vivid` | `backdrop-filter: saturate(2)` | Sangat tepu |

## Contoh

```html
<div visual="backdrop-saturate:vivid">Vivid backdrop</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ketepuan Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-saturate:vivid"</code> - Laraskan ketepuan di belakang elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">vivid</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">vivid</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
