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

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ulangan Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-repeat:no-repeat"</code> - Kawal jubin latar</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">no-repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat-x</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">no-repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat-x</div>
</div>
```

</details>

</div>
