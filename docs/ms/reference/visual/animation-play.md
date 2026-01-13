# Animation Play

Kawal keadaan main animasi

## Sintaks
```
visual="animation-play:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `running` | `animation-play-state: running` | Animasi berjalan |
| `paused` | `animation-play-state: paused` | Animasi dijeda |

## Contoh

```html
<div visual="animate:spin hover:animation-play:paused">Pause on hover</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Keadaan Main Animasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-play:paused"</code> - Jeda atau sambung animasi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">running</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">paused</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">running</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">paused</div>
</div>
```

</details>

</div>
