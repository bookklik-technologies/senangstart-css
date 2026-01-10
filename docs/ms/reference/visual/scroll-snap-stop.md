# Hentian Snap Skrol

Mengawal sama ada snap skrol berhenti pada setiap titik snap dengan atribut `visual`.

## Sintaks
```
visual="snap-stop:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `snap-stop:normal` | `scroll-snap-stop: normal` |
| `snap-stop:always` | `scroll-snap-stop: always` |

## Contoh

```html
<!-- Sentiasa berhenti pada setiap item (tiada langkau) -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start snap-stop:always">Mesti berhenti di sini</div>
  <div visual="snap-align:start snap-stop:always">Mesti berhenti di sini juga</div>
</div>

<!-- Kelakuan normal (boleh langkau item dengan skrol laju) -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start snap-stop:normal">Mungkin dilangkau</div>
</div>
```

## Kegunaan

Gunakan `snap-stop:always` untuk:
- Wizard langkah demi langkah
- Kandungan penting yang tidak boleh dilangkau
- Kandungan terpagin seperti tayangan slaid
