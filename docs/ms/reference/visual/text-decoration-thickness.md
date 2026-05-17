# Text Decoration Thickness

Tetapkan ketebalan hiasan teks

## Sintaks
```
visual="decoration-thickness:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `text-decoration-thickness: auto` | Ketebalan automatik |
| `from-font` | `text-decoration-thickness: from-font` | Gunakan ketebalan yang ditetapkan fon |

## Contoh

```html
<span visual="underline decoration-thickness:[3px]">3px underline</span>
<span visual="underline decoration-thickness:from-font">Font thickness</span>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ketebalan Hiasan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="decoration-thickness:[3px]"</code> - Kawal ketebalan garis bawah/atas</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-thickness:auto text-size:big">auto</span>
  <span visual="underline decoration-thickness:[3px] text-size:big">3px</span>
  <span visual="underline decoration-thickness:[5px] text-size:big">5px</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-thickness:auto text-size:big">auto</span>
  <span visual="underline decoration-thickness:[3px] text-size:big">3px</span>
  <span visual="underline decoration-thickness:[5px] text-size:big">5px</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```
