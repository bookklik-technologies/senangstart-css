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
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-fill:forwards"</code> - Kawal keadaan sebelum/selepas animasi. "forwards" kekalkan keadaan akhir, "none" kembali kepada asal.</p>
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text-size:small text:neutral-600 dark:text:neutral-400">Hover to replay animation:</p>
  <div layout="flex" space="g:medium">
    <div layout="flex:col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">none (returns)</span>
      <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1 animation-fill:none hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex:col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">forwards (stays)</span>
      <div space="p:small" visual="bg:success text:white rounded:small animate:bounce animation-iteration:1 animation-fill:forwards hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex:col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">both</span>
      <div space="p:small" visual="bg:warning text:white rounded:small animate:bounce animation-iteration:1 animation-fill:both hover:animate:bounce">⬆</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text-size:small text:neutral-600 dark:text:neutral-400">Hover to replay animation:</p>
  <div layout="flex" space="g:medium">
    <div layout="flex:col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">none (returns)</span>
      <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1 animation-fill:none hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex:col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">forwards (stays)</span>
      <div space="p:small" visual="bg:success text:white rounded:small animate:bounce animation-iteration:1 animation-fill:forwards hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex:col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">both</span>
      <div space="p:small" visual="bg:warning text:white rounded:small animate:bounce animation-iteration:1 animation-fill:both hover:animate:bounce">⬆</div>
    </div>
  </div>
</div>
```

</details>

</div>
