# Ring

Tambah cincin fokus pada elemen menggunakan box-shadow

## Sintaks
```
visual="ring:[size]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `box-shadow: 0 0 0 0 transparent` | Tiada cincin |
| `thin` | `box-shadow: 0 0 0 1px var(--ring-color)` | Cincin nipis (1px) |
| `regular` | `box-shadow: 0 0 0 2px var(--ring-color)` | Cincin biasa (2px) |
| `small` | `box-shadow: 0 0 0 4px var(--ring-color)` | Cincin kecil (4px) |
| `medium` | `box-shadow: 0 0 0 6px var(--ring-color)` | Cincin sederhana (6px) |
| `big` | `box-shadow: 0 0 0 8px var(--ring-color)` | Cincin besar (8px) |

## Contoh

```html
<button visual="focus-visible:ring:small ring-color:primary">Focus me</button>
<input visual="focus:ring:regular ring-color:blue-500">
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Cincin Fokus

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="focus-visible:ring:small"</code> - Cincin muncul pada fokus papan kekunci (cuba kekunci Tab)</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="bg:primary text:white rounded:small focus-visible:ring:small ring-color:blue-300">Tab to me</button>
  <button space="p:small p-x:medium" visual="bg:white dark:bg:neutral-800 border:neutral-300 border-w:thin rounded:small focus-visible:ring:small ring-color:primary">Or me</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="bg:primary text:white rounded:small focus-visible:ring:small ring-color:blue-300">Tab to me</button>
  <button space="p:small p-x:medium" visual="bg:white dark:bg:neutral-800 border:neutral-300 border-w:thin rounded:small focus-visible:ring:small ring-color:primary">Or me</button>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="ring:[custom-value]">Custom</div>
```
