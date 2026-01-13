# Background Image

Tetapkan imej latar atau gradien

## Sintaks
```
visual="bg-image:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `background-image: none` | Tiada imej latar |
| `gradient-to-t` | `background-image: linear-gradient(to top, var(--tw-gradient-stops))` | Gradien ke atas |
| `gradient-to-b` | `background-image: linear-gradient(to bottom, var(--tw-gradient-stops))` | Gradien ke bawah |
| `gradient-to-l` | `background-image: linear-gradient(to left, var(--tw-gradient-stops))` | Gradien ke kiri |
| `gradient-to-r` | `background-image: linear-gradient(to right, var(--tw-gradient-stops))` | Gradien ke kanan |

## Contoh

```html
<div visual="bg-image:gradient-to-r">Gradient background</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gradien Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-image:gradient-to-r"</code> - Terapkan latar gradien</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="text:white rounded:small" style="background-image: linear-gradient(to right, #3b82f6, #8b5cf6);">gradient-to-r</div>
  <div space="p:medium" visual="text:white rounded:small" style="background-image: linear-gradient(to bottom, #10b981, #3b82f6);">gradient-to-b</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="text:white rounded:small" style="background-image: linear-gradient(to right, #3b82f6, #8b5cf6);">gradient-to-r</div>
  <div space="p:medium" visual="text:white rounded:small" style="background-image: linear-gradient(to bottom, #10b981, #3b82f6);">gradient-to-b</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="background:[custom-value]">Custom</div>
```
