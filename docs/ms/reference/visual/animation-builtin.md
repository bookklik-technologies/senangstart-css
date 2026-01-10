# Animasi Terbina Dalam

Animasi CSS terbina siap dengan kawalan masa semula jadi.

## Sintaks
```
visual="animate:spin | animate:ping | animate:pulse | animate:bounce | animate:none"
```

## Spin

Animasi berputar untuk penunjuk pemuatan.

```html
<div visual="animate:spin" space="w:big h:big">
  <svg>...</svg>
</div>
```

## Ping

Kesan ping yang memancar keluar, sesuai untuk lencana notifikasi.

```html
<span layout="relative inline-flex">
  <span visual="animate:ping bg:red-400 opacity:75" layout="absolute inline-flex" space="h:full w:full rounded:full"></span>
  <span visual="bg:red-500 rounded:full" space="h:small w:small"></span>
</span>
```

## Pulse

Kesan denyutan halus.

```html
<div visual="animate:pulse bg:gray-200" space="h:medium w:giant rounded:small"></div>
```

## Bounce

Animasi melantun untuk menarik perhatian.

```html
<div visual="animate:bounce" space="w:big h:big">
  ↓
</div>
```

## Tiada Animasi

```html
<div visual="animate:none">...</div>
```
