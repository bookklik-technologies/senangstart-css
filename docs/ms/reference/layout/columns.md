# Columns

Mengawal susun atur teks berbilang lajur dengan atribut `layout`.

## Sintaks
```
layout="cols:[number]"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `cols:1` hingga `cols:4` | `columns: n` |

## Contoh

```html
<article layout="cols:2" space="g:medium">
  Teks panjang yang mengalir ke dalam 2 lajur secara automatik
</article>

<article layout="cols:3">
  Teks mengalir ke dalam 3 lajur
</article>
```

## Responsif

```html
<article layout="cols:1 tab:cols:2 lap:cols:3">
  1 lajur → 2 lajur → 3 lajur
</article>
```
