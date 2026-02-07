# Contain

Pencil rendering elemen untuk prestasi

## Sintaks
```
visual="contain:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `contain: none` | Tiada pengandungan |
| `strict` | `contain: strict` | Pengandungan penuh |
| `content` | `contain: content` | Pengandungan kandungan |
| `size` | `contain: size` | Pengandungan saiz |
| `layout` | `contain: layout` | Pengandungan susun atur |
| `style` | `contain: style` | Pengandungan gaya |
| `paint` | `contain: paint` | Pengandungan lukis |

## Contoh

```html
<div visual="contain:strict">Isolated rendering</div>
<div visual="contain:content">Content isolation</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Mengandung

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="contain:strict"</code> - Pencil elemen dari halaman lain untuk prestasi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">strict</div>
 </div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">strict</div>
 </div>
```

</details>

</div>
