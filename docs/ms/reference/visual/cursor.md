# Cursor

Tetapkan gaya kursor

## Sintaks
```
visual="cursor:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `cursor: auto` | Kursor automatik |
| `default` | `cursor: default` | Kursor lalai |
| `pointer` | `cursor: pointer` | Kursor penunjuk |
| `wait` | `cursor: wait` | Kursor tunggu |
| `text` | `cursor: text` | Kursor teks |
| `move` | `cursor: move` | Kursor alih |
| `not-allowed` | `cursor: not-allowed` | Tidak dibenarkan |
| `grab` | `cursor: grab` | Kursor genggam |
| `grabbing` | `cursor: grabbing` | Kursor menggenggam |

## Contoh

```html
<button visual="cursor:pointer">Clickable</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kursor

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="cursor:pointer"</code> - Tukar kursor tetikus semasa hover</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: pointer;">pointer</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: wait;">wait</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: not-allowed;">not-allowed</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: pointer;">pointer</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: wait;">wait</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: not-allowed;">not-allowed</div>
</div>
```

</details>

</div>
