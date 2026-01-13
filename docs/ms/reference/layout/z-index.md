# Z Index

Kawal susunan tindanan

## Sintaks
```
layout="z:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `base` | `z-index: var(--z-base)` | Lapisan asas (0) |
| `low` | `z-index: var(--z-low)` | Lapisan rendah (10) |
| `mid` | `z-index: var(--z-mid)` | Lapisan tengah (50) |
| `high` | `z-index: var(--z-high)` | Lapisan tinggi (100) |
| `top` | `z-index: var(--z-top)` | Lapisan teratas (9999) |

## Contoh

```html
<div layout="z:top">On top</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Lapisan Z-Index

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="z:high"</code> - Kawal susunan tindanan elemen yang diletakkan</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute z:base" style="left: 0; top: 10px;" space="p:small" visual="bg:neutral-400 text:white rounded:small">z:base</span>
  <span layout="absolute z:low" style="left: 30px; top: 20px;" space="p:small" visual="bg:neutral-500 text:white rounded:small">z:low</span>
  <span layout="absolute z:mid" style="left: 60px; top: 30px;" space="p:small" visual="bg:neutral-600 text:white rounded:small">z:mid</span>
  <span layout="absolute z:high" style="left: 90px; top: 40px;" space="p:small" visual="bg:primary text:white rounded:small">z:high</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute z:base" style="left: 0; top: 10px;" space="p:small" visual="bg:neutral-400 text:white rounded:small">z:base</span>
  <span layout="absolute z:low" style="left: 30px; top: 20px;" space="p:small" visual="bg:neutral-500 text:white rounded:small">z:low</span>
  <span layout="absolute z:mid" style="left: 60px; top: 30px;" space="p:small" visual="bg:neutral-600 text:white rounded:small">z:mid</span>
  <span layout="absolute z:high" style="left: 90px; top: 40px;" space="p:small" visual="bg:primary text:white rounded:small">z:high</span>
</div>
```

</details>

</div>
