# Penampilan

Mengawal penggayaan natif elemen borang dengan atribut `visual`.

## Sintaks
```
visual="appearance:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `appearance:none` | `appearance: none` |
| `appearance:auto` | `appearance: auto` |

## Contoh

```html
<!-- Buang penggayaan lalai pelayar -->
<select visual="appearance:none">
  <option>Select bergaya kustom</option>
</select>

<!-- Set semula ke penampilan lalai pelayar -->
<input type="checkbox" visual="appearance:auto" />
```

## Kegunaan

Gunakan `appearance:none` untuk:
- Mencipta elemen borang bergaya kustom
- Membuang penggayaan lalai pelayar
- Membina reka bentuk borang konsisten merentas pelayar
