# Text Shadow

Tambah bayang teks

## Sintaks
```
visual="text-shadow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `text-shadow: none` | Tiada bayang |
| `small` | `text-shadow: 0 1px 2px rgba(0,0,0,0.1)` | Bayang kecil |
| `medium` | `text-shadow: 0 2px 4px rgba(0,0,0,0.1)` | Bayang sederhana |
| `big` | `text-shadow: 0 4px 8px rgba(0,0,0,0.1)` | Bayang besar |

## Contoh

```html
<h1 visual="text-shadow:medium">Shadowed heading</h1>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Bayang Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text-shadow:medium"</code> - Tambah bayang pada teks</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">shadow</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">shadow</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```
