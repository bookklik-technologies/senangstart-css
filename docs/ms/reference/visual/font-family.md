# Font Family

Tetapkan keluarga fon

## Sintaks
```
visual="font:[family]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `sans` | `font-family: ui-sans-serif, system-ui, sans-serif` | Sans-serif |
| `serif` | `font-family: ui-serif, Georgia, serif` | Serif |
| `mono` | `font-family: ui-monospace, monospace` | Monospace |

## Contoh

```html
<div visual="font:mono">Monospace text</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Keluarga Fon

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="font:sans"</code> - Pilih antara sans, serif, atau mono</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:sans">Sans-serif font</span>
  <span visual="font:serif">Serif font</span>
  <span visual="font:mono">Monospace font</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:sans">Sans-serif font</span>
  <span visual="font:serif">Serif font</span>
  <span visual="font:mono">Monospace font</span>
</div>
```

</details>

</div>
