# Font Style

Tetapkan gaya fon

## Sintaks
```
visual="[style-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `italic` | `font-style: italic` | Teks italic |
| `not-italic` | `font-style: normal` | Gaya normal |

## Contoh

```html
<em visual="not-italic">Normal style emphasis</em>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Fon

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="italic"</code> - Teks italic atau normal</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small italic">italic</span>
  <span space="p:small" visual="bg:success text:white rounded:small not-italic">not-italic</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small italic">italic</span>
  <span space="p:small" visual="bg:success text:white rounded:small not-italic">not-italic</span>
</div>
```

</details>

</div>
