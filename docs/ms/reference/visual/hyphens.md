# Hyphens

Kawal tanda sempang

## Sintaks
```
visual="hyphens:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `hyphens: none` | Tiada sempang |
| `manual` | `hyphens: manual` | Sempang manual |
| `auto` | `hyphens: auto` | Sempang automatik |

## Contoh

```html
<p visual="hyphens:auto">Automatic hyphenation</p>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Sempang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="hyphens:auto"</code> - Kawal sempang automatik</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manual</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manual</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
</div>
```

</details>

</div>
