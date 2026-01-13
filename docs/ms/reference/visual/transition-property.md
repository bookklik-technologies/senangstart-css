# Transition Property

Tetapkan properti peralihan

## Sintaks
```
visual="transition:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `transition-property: none` | Tiada peralihan |
| `all` | `transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Semua properti |
| `colors` | `transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Properti warna |
| `opacity` | `transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Kelegapan sahaja |
| `shadow` | `transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Bayang sahaja |
| `transform` | `transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Transformasi sahaja |

## Contoh

```html
<button visual="transition:all hover:bg:primary">Smooth hover</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Peralihan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="transition:all"</code> - Perubahan properti yang lancar</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all">transition:all</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all">transition:all</button>
</div>
```

</details>

</div>
