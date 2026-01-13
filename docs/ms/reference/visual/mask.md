# Mask

Terapkan topeng pada elemen

## Sintaks
```
visual="mask:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `mask-image: none` | Tiada topeng |
| `fade-y` | `mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)` | Pudar menegak |
| `fade-x` | `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` | Pudar mendatar |

## Contoh

```html
<div visual="mask:fade-y">Faded edges</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Topeng

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="mask:fade-y"</code> - Terapkan topeng kecerunan pada tepi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg:primary text:white rounded:small">mask:fade-y</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg:primary text:white rounded:small">mask:fade-y</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="mask:[custom-value]">Custom</div>
```
