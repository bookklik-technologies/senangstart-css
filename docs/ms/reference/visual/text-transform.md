# Text Transform

Ubah kes teks

## Sintaks
```
visual="[transform-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `uppercase` | `text-transform: uppercase` | Semua huruf besar |
| `lowercase` | `text-transform: lowercase` | Semua huruf kecil |
| `capitalize` | `text-transform: capitalize` | Huruf besar awal perkataan |
| `normal-case` | `text-transform: none` | Kes normal |

## Contoh

```html
<span visual="uppercase">Uppercase text</span>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ubah Kes Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="uppercase"</code> - Ubah kes teks</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: uppercase;">upper</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: lowercase;">LOWER</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: capitalize;">capitalize</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: uppercase;">upper</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: lowercase;">LOWER</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: capitalize;">capitalize</span>
</div>
```

</details>

</div>
