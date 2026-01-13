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

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Keratan Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-clip:text"</code> - Keratan latar kepada teks untuk kesan teks gradien</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="font-size: 1.5rem; font-weight: bold; background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; background-clip: text; color: transparent;">Gradient Text</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="font-size: 1.5rem; font-weight: bold; background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; background-clip: text; color: transparent;">Gradient Text</span>
</div>
```

</details>

</div>
