# Saiz Semula

Mengawal sama ada elemen boleh disaiz semula dengan atribut `visual`.

## Sintaks
```
visual="resize:[nilai]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `resize:none` | `resize: none` |
| `resize:both` | `resize: both` |
| `resize:x` | `resize: horizontal` |
| `resize:y` | `resize: vertical` |

## Contoh

```html
<!-- Boleh disaiz semula dalam kedua-dua arah -->
<textarea visual="resize:both">Saiz semula saya ke mana-mana arah</textarea>

<!-- Hanya boleh disaiz semula mendatar -->
<div visual="resize:x" layout="overflow:auto">Seret tepi kanan</div>

<!-- Hanya boleh disaiz semula menegak -->
<textarea visual="resize:y">Seret tepi bawah</textarea>

<!-- Lumpuhkan saiz semula -->
<textarea visual="resize:none">Tidak boleh saiz semula</textarea>
```

## Nota

Untuk `resize` berfungsi, elemen mesti mempunyai `overflow` selain daripada `visible`.
