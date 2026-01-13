# Text Wrap

Kawal pembalutan teks

## Sintaks
```
visual="[wrap-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `text-wrap` | `text-wrap: wrap` | Balut teks |
| `text-nowrap` | `text-wrap: nowrap` | Tiada balutan |
| `text-balance` | `text-wrap: balance` | Balutan seimbang |
| `text-pretty` | `text-wrap: pretty` | Balutan cantik |

## Contoh

```html
<h1 visual="text-balance">Balanced heading</h1>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pembalutan Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text-balance"</code> - Kawal pembalutan baris</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">wrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">balance</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">wrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">balance</div>
</div>
```

</details>

</div>
