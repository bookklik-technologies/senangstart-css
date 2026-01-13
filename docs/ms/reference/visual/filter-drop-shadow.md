# Filter Drop Shadow

Tambah bayang jatuh

## Sintaks
```
visual="drop-shadow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: drop-shadow(none)` | Tiada bayang |
| `tiny` | `filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))` | Bayang kecil |
| `small` | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1))` | Bayang kecil |
| `medium` | `filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07))` | Bayang sederhana |
| `big` | `filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04))` | Bayang besar |
| `giant` | `filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03))` | Bayang gergasi |

## Contoh

```html
<img visual="drop-shadow:medium">Shadow on image</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Bayang Jatuh

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="drop-shadow:medium"</code> - Tambah bayang pada elemen</p>
<div layout="flex" space="g:medium p:big" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));">medium</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">big</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:big" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));">medium</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">big</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
