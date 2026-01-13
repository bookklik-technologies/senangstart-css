# Box Sizing

Kawal cara lebar dan tinggi dikira

## Sintaks
```
layout="box:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `border` | `box-sizing: border-box` | Termasuk padding dan sempadan dalam saiz |
| `content` | `box-sizing: content-box` | Tidak termasuk padding dan sempadan |

## Contoh

```html
<div layout="box:border">Border box</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kotak Sempadan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="box:border"</code> - Padding dan sempadan termasuk dalam lebar</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="box:border" space="p:medium" visual="bg:primary text:white border:4 border:white rounded:small" style="width: 100px;">box:border<br>100px</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="box:border" space="p:medium" visual="bg:primary text:white border:4 border:white rounded:small" style="width: 100px;">box:border<br>100px</div>
</div>
```

</details>

</div>
