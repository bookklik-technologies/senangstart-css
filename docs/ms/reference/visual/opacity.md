# Kelegapan

Mengawal kelegapan elemen dengan atribut `visual`.

## Sintaks
```
visual="opacity:[value]"
```

## Nilai

Gunakan nilai sewenang-wenang dengan kurungan:

| Nilai | Output CSS |
|-------|------------|
| `opacity:[0]` | `opacity: 0` |
| `opacity:[0.5]` | `opacity: 0.5` |
| `opacity:[0.8]` | `opacity: 0.8` |
| `opacity:[1]` | `opacity: 1` |

## Contoh

```html
<div visual="opacity:[0.5]">50% kelegapan</div>
<div visual="opacity:[0.8]">80% kelegapan</div>
<div visual="opacity:[0] hover:opacity:[1]">Fade in pada hover</div>
```

## Keadaan

```html
<button visual="opacity:[1] disabled:opacity:[0.5]">
  Malap apabila dilumpuhkan
</button>
```
