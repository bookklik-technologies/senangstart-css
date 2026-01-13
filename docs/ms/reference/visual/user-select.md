# User Select

Kawal pemilihan teks

## Sintaks
```
visual="select:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `user-select: none` | Halang pemilihan |
| `text` | `user-select: text` | Benarkan pemilihan teks |
| `all` | `user-select: all` | Pilih semua pada klik |
| `auto` | `user-select: auto` | Kelakuan lalai |

## Contoh

```html
<div visual="select:none">Cannot select this text</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pemilihan Pengguna

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="select:none"</code> - Kawal sama ada teks boleh dipilih</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="user-select: none;">none (try select)</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="user-select: all;">all (click to select)</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="user-select: none;">none (try select)</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="user-select: all;">all (click to select)</div>
</div>
```

</details>

</div>
