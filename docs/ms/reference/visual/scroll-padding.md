# Padding Skrol

Mengawal padding snap skrol pada bekas dengan atribut `visual`.

## Sintaks
```
visual="scroll-p:[nilai]"
visual="scroll-p-t:[nilai]"
visual="scroll-p-r:[nilai]"
visual="scroll-p-b:[nilai]"
visual="scroll-p-l:[nilai]"
visual="scroll-p-x:[nilai]"
visual="scroll-p-y:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `scroll-p:4` | `scroll-padding: var(--s-4)` |
| `scroll-p-t:8` | `scroll-padding-top: var(--s-8)` |
| `scroll-p-x:4` | `scroll-padding-left/right: var(--s-4)` |
| `scroll-p:[20px]` | `scroll-padding: 20px` |

## Contoh

```html
<!-- Bekas skrol dengan padding untuk item snap -->
<div visual="scroll-p:4 snap:x" layout="flex overflow:auto">
  <div visual="snap-align:start">Item 1</div>
  <div visual="snap-align:start">Item 2</div>
</div>

<!-- Mengambil kira header tetap -->
<div visual="scroll-p-t:16">
  Kandungan snap di bawah kawasan header
</div>
```

## Kegunaan

Gunakan `scroll-padding` pada bekas skrol untuk:
- Mengofset titik snap dari tepi bekas
- Mencegah kandungan snap di bawah header melekit
