# Forced Color Adjust

Kawal kelakuan mod warna paksa

## Sintaks
```
visual="forced-color:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `forced-color-adjust: auto` | Penyesuaian automatik |
| `none` | `forced-color-adjust: none` | Tiada penyesuaian |

## Contoh

```html
<div visual="forced-color:none">Preserve colors in high contrast</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penyesuaian Warna Paksa

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="forced-color:none"</code> - Kawal mod kontras tinggi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
</div>
```

</details>

</div>
