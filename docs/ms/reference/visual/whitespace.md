# Whitespace

Mengawal pengendalian ruang putih dengan atribut `visual`.

## Sintaks
```
visual="white-space:normal | white-space:nowrap | white-space:pre | white-space:pre-line | white-space:pre-wrap"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `white-space:normal` | `white-space: normal` |
| `white-space:nowrap` | `white-space: nowrap` |
| `white-space:pre` | `white-space: pre` |
| `white-space:pre-line` | `white-space: pre-line` |
| `white-space:pre-wrap` | `white-space: pre-wrap` |

## Contoh

```html
<p visual="white-space:normal">Ruang putih normal (menciutkan ruang)</p>
<p visual="white-space:nowrap">Tiada pemisahan baris dibenarkan</p>
<pre visual="white-space:pre">Mengekalkan   ruang   dan
pemisahan baris</pre>
<p visual="white-space:pre-line">Mengekalkan pemisahan baris
tetapi menciutkan ruang</p>
<p visual="white-space:pre-wrap">Mengekalkan semua ruang putih
dan membungkus apabila perlu</p>
```
