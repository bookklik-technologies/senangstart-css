# Pilihan Pengguna

Mengawal sama ada teks boleh dipilih dengan atribut `visual`.

## Sintaks
```
visual="select:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `select:none` | `user-select: none` |
| `select:text` | `user-select: text` |
| `select:all` | `user-select: all` |
| `select:auto` | `user-select: auto` |

## Contoh

```html
<!-- Cegah pemilihan teks -->
<button visual="select:none">Tidak boleh pilih teks ini</button>

<!-- Pilih semua teks apabila klik -->
<code visual="select:all">npm install senangstart-css</code>

<!-- Benarkan pemilihan teks (lalai) -->
<p visual="select:text">Perenggan boleh dipilih</p>
```

## Kegunaan

- `select:none` - Butang, elemen UI, pemegang seret
- `select:all` - Coretan kod, kandungan salin-ke-papan keratan
- `select:text` - Aktif semula pemilihan pada elemen anak
