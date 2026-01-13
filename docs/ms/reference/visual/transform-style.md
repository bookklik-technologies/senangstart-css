# Transform Style

Tetapkan gaya transform 3D

## Sintaks
```
visual="transform-style:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `flat` | `transform-style: flat` | Persembahan rata |
| `preserve-3d` | `transform-style: preserve-3d` | Kekalkan 3D |

## Contoh

```html
<div visual="transform-style:preserve-3d">3D space</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Transformasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="transform-style:preserve-3d"</code> - Persembahan rata atau kekalkan 3D</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">flat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">preserve-3d</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">flat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">preserve-3d</div>
</div>
```

</details>

</div>
