# Background Clip

Tetapkan kawasan keratan latar

## Sintaks
```
visual="bg-clip:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `border` | `background-clip: border-box` | Keratan ke sempadan |
| `padding` | `background-clip: padding-box` | Keratan ke padding |
| `content` | `background-clip: content-box` | Keratan ke kandungan |
| `text` | `background-clip: text; -webkit-background-clip: text` | Keratan ke teks |

## Contoh

```html
<div visual="bg-clip:text text:transparent bg:gradient">Gradient text</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
