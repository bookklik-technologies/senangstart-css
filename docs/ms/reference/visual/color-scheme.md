# Color Scheme

Tetapkan skema warna pilihan

## Sintaks
```
visual="color-scheme:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `light` | `color-scheme: light` | Mod cerah |
| `dark` | `color-scheme: dark` | Mod gelap |
| `normal` | `color-scheme: normal` | Lalai sistem |

## Contoh

```html
<html visual="color-scheme:dark">Dark mode</html>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Skema Warna

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="color-scheme:dark"</code> - Tetapkan mod warna pilihan</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">light</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">dark</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">light</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">dark</div>
</div>
```

</details>

</div>
