# Flex Direction

Tetapkan arah item flex

## Sintaks
```
layout="[direction]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `row` | `flex-direction: row` | Mendatar (lalai) |
| `col` | `flex-direction: column` | Menegak |
| `row-reverse` | `flex-direction: row-reverse` | Mendatar terbalik |
| `col-reverse` | `flex-direction: column-reverse` | Menegak terbalik |

## Contoh

```html
<div layout="flex row">Row direction</div>
<div layout="flex col">Column direction</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Arah Baris

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="row"</code> - Item disusun secara mendatar dari kiri ke kanan</p>
<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Arah Lajur

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="col"</code> - Item disusun secara menegak dari atas ke bawah</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Baris Terbalik

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="row-reverse"</code> - Item disusun secara mendatar dari kanan ke kiri</p>
<div layout="flex row-reverse" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex row-reverse" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>
```

</details>

</div>
