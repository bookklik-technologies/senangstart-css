# Ring Offset

Tambah ruang antara cincin dan elemen

## Sintaks
```
visual="ring-offset:[size]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `--ring-offset: 0px` | Tiada ruang |
| `2` | `--ring-offset: 2px` | Ruang 2px |
| `4` | `--ring-offset: 4px` | Ruang 4px |

## Contoh

```html
<button visual="ring:small ring-offset:2 ring-color:primary">With offset</button>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="ring:[custom-value]">Custom</div>
```
