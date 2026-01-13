# Columns

Cipta susun atur berbilang lajur

## Sintaks
```
layout="cols:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1-12` | `columns: {n}` | N lajur |
| `auto` | `columns: auto` | Lajur automatik |

## Contoh

```html
<div layout="cols:3">Three columns</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Susun Atur Berbilang Lajur

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="cols:2"</code> - Teks mengalir ke berbilang lajur</p>
<div layout="cols:2" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text:neutral-800 dark:text:neutral-200">This text will automatically flow into two columns. Great for newspaper-style layouts and improving readability of long text content.</p>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="cols:2" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text:neutral-800 dark:text:neutral-200">This text will automatically flow into two columns. Great for newspaper-style layouts and improving readability of long text content.</p>
</div>
```

</details>

</div>
