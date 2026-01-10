# Isolation

Mengawal penciptaan konteks susun dengan atribut `layout`.

## Sintaks
```
layout="isolate | isolate-auto"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `isolate` | `isolation: isolate` |
| `isolate-auto` | `isolation: auto` |

## Contoh

```html
<div layout="isolate">
  <div layout="relative z:high">Konteks z-index yang diasingkan</div>
</div>
```

## Kes Penggunaan

- Mencipta konteks susun baharu
- Mencegah konflik z-index antara komponen
- Mengasingkan mod campuran atau penapis
