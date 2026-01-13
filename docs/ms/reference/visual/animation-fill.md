# Animation Fill

Tetapkan mod pengisian animasi

## Sintaks
```
visual="animation-fill:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `animation-fill-mode: none` | Tiada pengisian |
| `forwards` | `animation-fill-mode: forwards` | Kekalkan keadaan akhir |
| `backwards` | `animation-fill-mode: backwards` | Terapkan keadaan mula |
| `both` | `animation-fill-mode: both` | Kedua-dua arah |

## Contoh

```html
<div visual="animate:bounce animation-fill:forwards">Stays at end</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pengisian Animasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-fill:forwards"</code> - Kawal keadaan sebelum/selepas animasi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">forwards</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">forwards</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
```

</details>

</div>
