# Position

Tetapkan kaedah kedudukan

## Sintaks
```
layout="[position-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `static` | `position: static` | Kedudukan lalai |
| `relative` | `position: relative` | Relatif kepada kedudukan normal |
| `absolute` | `position: absolute` | Mutlak dalam bekas |
| `fixed` | `position: fixed` | Tetap pada port pandangan |
| `sticky` | `position: sticky` | Kedudukan melekit |

## Contoh

```html
<div layout="absolute">Absolute positioned</div>
<div layout="fixed">Fixed to viewport</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kedudukan Relatif

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="relative"</code> - Elemen diletakkan relatif kepada aliran normal</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Relative Container</span>
  <span layout="absolute" style="top: 0; right: 0;" space="p:tiny" visual="bg:danger text:white rounded:small">Abs</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Relative Container</span>
  <span layout="absolute" style="top: 0; right: 0;" space="p:tiny" visual="bg:danger text:white rounded:small">Abs</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kedudukan Melekit

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="sticky"</code> - Elemen melekat apabila skrol melepasi</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="sticky" style="top: 0;" space="p:small" visual="bg:primary text:white rounded:small">Sticky Header</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="sticky" style="top: 0;" space="p:small" visual="bg:primary text:white rounded:small">Sticky Header</span>
</div>
```

</details>

</div>
