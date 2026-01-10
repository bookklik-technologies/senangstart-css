# Terjemah

Alih elemen secara mendatar atau menegak.

## Sintaks
```
visual="translate-x:small | translate-y:big | translate-x:1/2 | -translate-x:medium"
```

## Menggunakan Skala Jarak

```html
<div visual="translate-x:small" />   <!-- translateX(var(--s-small)) -->
<div visual="translate-x:medium" />  <!-- translateX(var(--s-medium)) -->
<div visual="translate-y:big" />     <!-- translateY(var(--s-big)) -->
```

## Menggunakan Pecahan

```html
<div visual="translate-x:1/2" />   <!-- translateX(50%) -->
<div visual="translate-y:1/4" />   <!-- translateY(25%) -->
<div visual="translate-x:full" />  <!-- translateX(100%) -->
```

## Terjemahan Negatif

```html
<div visual="-translate-x:medium" />  <!-- translateX negatif -->
<div visual="-translate-y:1/2" />     <!-- translateY(-50%) -->
```
