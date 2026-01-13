# Overflow

Kawal kelakuan limpahan kandungan

## Sintaks
```
layout="overflow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `overflow: auto` | Bar skrol bila perlu |
| `hidden` | `overflow: hidden` | Sembunyikan limpahan |
| `visible` | `overflow: visible` | Tunjukkan limpahan |
| `scroll` | `overflow: scroll` | Sentiasa tunjuk bar skrol |
| `clip` | `overflow: clip` | Potong limpahan |

## Contoh

```html
<div layout="overflow:hidden">Clipped content</div>
<div layout="overflow:auto">Scrollable</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Limpahan Tersembunyi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="overflow:hidden"</code> - Kandungan dipotong di tepi bekas</p>
<div layout="overflow:hidden" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will be clipped because overflow is hidden.</p>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="overflow:hidden" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will be clipped because overflow is hidden.</p>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Limpahan Auto

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="overflow:auto"</code> - Bar skrol muncul apabila kandungan melimpah</p>
<div layout="overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will show a scrollbar because overflow is auto.</p>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will show a scrollbar because overflow is auto.</p>
</div>
```

</details>

</div>
