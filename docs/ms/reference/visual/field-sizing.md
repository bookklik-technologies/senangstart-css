# Field Sizing

Kawal saiz medan borang

## Sintaks
```
visual="field-sizing:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `fixed` | `field-sizing: fixed` | Saiz tetap |
| `content` | `field-sizing: content` | Saiz mengikut kandungan |

## Contoh

```html
<textarea visual="field-sizing:content">Auto-grow textarea</textarea>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Saiz Medan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="field-sizing:content"</code> - Besarkan medan dengan kandungan</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
```

</details>

</div>
