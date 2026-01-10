# Background Repeat

Tetapkan kelakuan ulangan latar

## Sintaks
```
visual="bg-repeat:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `repeat` | `background-repeat: repeat` | Ulang kedua-dua paksi |
| `no-repeat` | `background-repeat: no-repeat` | Tiada ulangan |
| `repeat-x` | `background-repeat: repeat-x` | Ulang mendatar |
| `repeat-y` | `background-repeat: repeat-y` | Ulang menegak |
| `round` | `background-repeat: round` | Ulang bulat |
| `space` | `background-repeat: space` | Ulang berjarakd |

## Contoh

```html
<div visual="bg-repeat:no-repeat">Single background</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
