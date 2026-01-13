# Object Fit

Kawal bagaimana kandungan media muat dalam bekasnya

## Sintaks
```
layout="object:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `contain` | `object-fit: contain` | Skala untuk muat, kekalkan nisbah |
| `cover` | `object-fit: cover` | Tutup bekas, mungkin dipotong |
| `fill` | `object-fit: fill` | Regang untuk mengisi |
| `none` | `object-fit: none` | Tiada penskalaan |
| `scale-down` | `object-fit: scale-down` | Lebih kecil antara tiada atau kandung |

## Contoh

```html
<img layout="object:cover">Cover image</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Objek Muat Tutup

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="object:cover"</code> - Imej menutup bekas, mungkin dipotong</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="overflow:hidden">
    <div layout="object:cover" style="width: 100%; height: 100%;" visual="bg:primary"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:cover</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="overflow:hidden">
    <div layout="object:cover" style="width: 100%; height: 100%;" visual="bg:primary"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:cover</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Objek Muat Kandung

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="object:contain"</code> - Imej muat di dalam, kekalkan nisbah</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="flex center">
    <div layout="object:contain" style="width: 60%; height: 60%;" visual="bg:primary rounded:small"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:contain</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="flex center">
    <div layout="object:contain" style="width: 60%; height: 60%;" visual="bg:primary rounded:small"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:contain</span>
</div>
```

</details>

</div>
