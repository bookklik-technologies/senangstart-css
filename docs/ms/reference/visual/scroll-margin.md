# Margin Skrol

Mengawal margin snap skrol dengan atribut `visual`.

## Sintaks
```
visual="scroll-m:[nilai]"
visual="scroll-m-t:[nilai]"
visual="scroll-m-r:[nilai]"
visual="scroll-m-b:[nilai]"
visual="scroll-m-l:[nilai]"
visual="scroll-m-x:[nilai]"
visual="scroll-m-y:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `scroll-m:4` | `scroll-margin: var(--s-4)` |
| `scroll-m-t:8` | `scroll-margin-top: var(--s-8)` |
| `scroll-m-x:4` | `scroll-margin-left/right: var(--s-4)` |
| `scroll-m:[20px]` | `scroll-margin: 20px` |

## Contoh

```html
<!-- Ofset kedudukan snap skrol untuk header tetap -->
<section visual="scroll-m-t:16" id="section1">
  Snap 4rem di bawah atas viewport
</section>

<!-- Semua sisi -->
<div visual="scroll-m:4">Margin sama rata sekeliling</div>
```

## Kegunaan

Gunakan `scroll-margin` untuk:
- Mengambil kira header tetap semasa skrol ke sauh
- Menambah ruang bernafas pada titik snap skrol
