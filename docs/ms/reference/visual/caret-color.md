# Warna Karet

Mengawal warna kursor input teks dengan atribut `visual`.

## Sintaks
```
visual="caret:[warna]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `caret:primary` | `caret-color: var(--c-primary)` |
| `caret:blue-500` | `caret-color: var(--c-blue-500)` |
| `caret:[#ff0000]` | `caret-color: #ff0000` |
| `caret:[transparent]` | `caret-color: transparent` |

## Contoh

```html
<input type="text" visual="caret:primary" placeholder="Karet utama" />
<textarea visual="caret:blue-500">Karet biru</textarea>
<input visual="caret:[transparent]" placeholder="Karet tersembunyi" />
```

## Keadaan

```html
<input visual="caret:gray-400 focus:caret:primary" placeholder="Fokus untuk lihat perubahan" />
```
