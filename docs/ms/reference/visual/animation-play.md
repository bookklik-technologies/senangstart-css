# Status Main Animasi

Jeda atau mainkan animasi.

## Sintaks
```
visual="animation-play:running | animation-play:paused"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `animation-play:running` | `animation-play-state: running` |
| `animation-play:paused` | `animation-play-state: paused` |

## Contoh

```html
<div visual="animate:spin animation-play:running">...</div> <!-- Berjalan -->
<div visual="animate:spin animation-play:paused">...</div>  <!-- Dijeda -->
```

## Dengan Keadaan

```html
<!-- Jeda apabila hover -->
<div visual="animate:spin hover:animation-play:paused">...</div>
```
