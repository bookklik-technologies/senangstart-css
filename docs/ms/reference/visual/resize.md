# Resize

Kawal saiz semula elemen

## Sintaks
```
visual="resize:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `resize: none` | Tiada saiz semula |
| `both` | `resize: both` | Saiz semula kedua-dua |
| `x` | `resize: horizontal` | Saiz semula mendatar |
| `y` | `resize: vertical` | Saiz semula menegak |

## Contoh

```html
<textarea visual="resize:y">Vertical resize only</textarea>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Saiz Semula

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="resize:y"</code> - Benarkan saiz semula elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
```

</details>

</div>
