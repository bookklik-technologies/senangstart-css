# Translate

Mengalihkan elemen secara mendatar atau menegak.

## Sintaks
```
visual="translate-x:small | translate-y:big | translate-x:1/2 | -translate-x:medium"
```

## Menggunakan Skala Jarak

| Nilai | Output CSS |
|-------|------------|
| `translate-x:small` | `transform: translateX(var(--s-small))` |
| `translate-x:medium` | `transform: translateX(var(--s-medium))` |
| `translate-y:big` | `transform: translateY(var(--s-big))` |

```html
<div visual="translate-x:small" />   <!-- translateX(var(--s-small)) -->
<div visual="translate-x:medium" />  <!-- translateX(var(--s-medium)) -->
<div visual="translate-y:big" />     <!-- translateY(var(--s-big)) -->
```

## Menggunakan Pecahan

| Nilai | Output CSS |
|-------|------------|
| `translate-x:1/2` | `transform: translateX(50%)` |
| `translate-y:1/4` | `transform: translateY(25%)` |
| `translate-x:full` | `transform: translateX(100%)` |

```html
<div visual="translate-x:1/2" />   <!-- translateX(50%) -->
<div visual="translate-y:1/4" />   <!-- translateY(25%) -->
<div visual="translate-x:full" />  <!-- translateX(100%) -->
```

## Terjemahan Negatif

```html
<div visual="-translate-x:medium" />  <!-- translateX(calc(var(--s-medium) * -1)) -->
<div visual="-translate-y:1/2" />     <!-- translateY(-50%) -->
<div visual="-translate-x:full" />    <!-- translateX(-100%) -->
```

## Nilai Sewenang-Wenang

```html
<div visual="translate-x:[100px]" />
<div visual="translate-y:[-50%]" />
```
