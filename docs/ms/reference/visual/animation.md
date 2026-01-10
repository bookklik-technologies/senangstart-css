# Animasi (Animation)

Gunakan animasi CSS pra-bina dengan kawalan masa berasaskan kata sifat semula jadi.

## Animasi Terbina Dalam

### Pusing (Spin)

```html
<div visual="animate:spin" space="w:big h:big">
  <svg>...</svg>
</div>
```

### Ping

```html
<span layout="relative inline-flex">
  <span visual="animate:ping bg:red-400 opacity:75" layout="absolute inline-flex" space="h:full w:full rounded:full"></span>
  <span visual="bg:red-500 rounded:full" space="h:small w:small"></span>
</span>
```

### Denyut (Pulse)

```html
<div visual="animate:pulse bg:gray-200" space="h:medium w:giant rounded:small"></div>
```

### Lompat (Bounce)

```html
<div visual="animate:bounce" space="w:big h:big">↓</div>
```

### Tiada Animasi

```html
<div visual="animate:none">...</div>
```

## Tempoh Animasi

Kawal tempoh animasi menggunakan kata semula jadi.

```html
<div visual="animate:spin animation-duration:instant">...</div>  <!-- 75ms -->
<div visual="animate:spin animation-duration:quick">...</div>    <!-- 100ms -->
<div visual="animate:spin animation-duration:fast">...</div>     <!-- 150ms -->
<div visual="animate:spin animation-duration:normal">...</div>   <!-- 200ms -->
<div visual="animate:spin animation-duration:slow">...</div>     <!-- 300ms -->
<div visual="animate:spin animation-duration:slower">...</div>   <!-- 500ms -->
<div visual="animate:spin animation-duration:lazy">...</div>     <!-- 700ms -->
```

### Rujukan Skala Tempoh

| Kata | Masa | Rasa |
|------|------|------|
| `instant` | 75ms | Hampir tidak ketara |
| `quick` | 100ms | Tajam |
| `fast` | 150ms | Responsif |
| `normal` | 200ms | **Lalai**, seimbang |
| `slow` | 300ms | Licin, ketara |
| `slower` | 500ms | Teliti, elegan |
| `lazy` | 700ms | Santai, dramatik |

## Kelewatan Animasi

```html
<div visual="animate:pulse animation-delay:quick">...</div>   <!-- 100ms kelewatan -->
<div visual="animate:pulse animation-delay:normal">...</div>  <!-- 200ms kelewatan -->
<div visual="animate:pulse animation-delay:slow">...</div>    <!-- 300ms kelewatan -->
```

## Kiraan Ulangan Animasi

```html
<div visual="animate:bounce animation-iteration:1">...</div>        <!-- Sekali -->
<div visual="animate:bounce animation-iteration:2">...</div>        <!-- Dua kali -->
<div visual="animate:bounce animation-iteration:infinite">...</div> <!-- Selamanya -->
```

## Arah Animasi

```html
<div visual="animate:spin animation-direction:normal">...</div>    <!-- Normal -->
<div visual="animate:spin animation-direction:reverse">...</div>   <!-- Terbalik -->
<div visual="animate:spin animation-direction:alternate">...</div> <!-- Berselang-seli -->
```

## Keadaan Main Animasi

```html
<div visual="animate:spin animation-play:running">...</div> <!-- Berjalan -->
<div visual="animate:spin animation-play:paused">...</div>  <!-- Dijeda -->
<div visual="animate:spin hover:animation-play:paused">...</div> <!-- Jeda pada hover -->
```

## Contoh Pemuatan Rangka

```html
<div layout="flex" space="g:medium">
  <div visual="animate:pulse bg:gray-200 rounded:full" space="w:giant h:giant"></div>
  <div layout="flex col" space="g:small flex:1">
    <div visual="animate:pulse bg:gray-200 rounded:small" space="h:medium w:[75%]"></div>
    <div visual="animate:pulse bg:gray-200 rounded:small" space="h:medium w:[50%]"></div>
  </div>
</div>
```
