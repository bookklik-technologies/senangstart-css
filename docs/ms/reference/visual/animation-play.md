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

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
