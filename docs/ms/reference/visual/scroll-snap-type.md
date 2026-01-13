# Scroll Snap Type

Tetapkan jenis snap skrol

## Sintaks
```
visual="snap-type:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `scroll-snap-type: none` | Tiada snapping |
| `x` | `scroll-snap-type: x mandatory` | Snap mendatar |
| `y` | `scroll-snap-type: y mandatory` | Snap menegak |
| `both` | `scroll-snap-type: both mandatory` | Kedua-dua paksi |
| `x-proximity` | `scroll-snap-type: x proximity` | Kedekatan mendatar |
| `y-proximity` | `scroll-snap-type: y proximity` | Kedekatan menegak |

## Contoh

```html
<div visual="snap-type:x">Horizontal snap container</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Jenis Snap

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="snap-type:x"</code> - Dayakan snapping skrol</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
```

</details>

</div>
