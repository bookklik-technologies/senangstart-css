# Typography Keywords

Kata kunci utiliti tipografi (hanya gaya hiasan teks; kata kunci tipografi lain ada dalam definisi masing-masing)

## Sintaks
```
visual="[keyword]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `decoration-solid` | `text-decoration-style: solid` | Garisan pepejal |
| `decoration-double` | `text-decoration-style: double` | Garisan berganda |
| `decoration-dotted` | `text-decoration-style: dotted` | Garisan bertitik |
| `decoration-dashed` | `text-decoration-style: dashed` | Garisan putus-putus |
| `decoration-wavy` | `text-decoration-style: wavy` | Garisan bergelombang |

## Contoh

```html
<span visual="underline decoration-dashed">Dashed underline</span>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Hiasan Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="decoration-dashed"</code> - Tetapkan gaya garis hiasan teks</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-solid">solid</span>
  <span visual="underline decoration-dashed">dashed</span>
  <span visual="underline decoration-dotted">dotted</span>
  <span visual="underline decoration-wavy">wavy</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-solid">solid</span>
  <span visual="underline decoration-dashed">dashed</span>
  <span visual="underline decoration-dotted">dotted</span>
  <span visual="underline decoration-wavy">wavy</span>
</div>
```

</details>

</div>
