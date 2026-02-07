# Writing Mode

Tetapkan arah penulisan untuk teks RTL/menegak

## Sintaks
```
visual="writing-mode:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `horizontal-tb` | `writing-mode: horizontal-tb` | Kiri ke kanan |
| `vertical-rl` | `writing-mode: vertical-rl` | Atas ke bawah RTL |
| `vertical-lr` | `writing-mode: vertical-lr` | Atas ke bawah LTR |
| `sideways-rl` | `writing-mode: sideways-rl` | Menyerong RTL |
| `sideways-lr` | `writing-mode: sideways-lr` | Menyerong LTR |

## Contoh

```html
<div visual="writing-mode:vertical-rl">Vertical text</div>
<div visual="writing-mode:horizontal-tb">Horizontal text</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Mod Penulisan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="writing-mode:vertical-rl"</code> - Kawal arah dan orientasi teks</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">horizontal-tb</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">vertical-rl</div>
 </div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">horizontal-tb</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">vertical-rl</div>
 </div>
```

</details>

</div>
