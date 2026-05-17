# Ring Offset

Tambah ruang antara cincin dan elemen

## Sintaks
```
visual="ring-offset:[size]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `--ss-ring-offset-width: 0px` | Tiada ruang |
| `2` | `--ss-ring-offset-width: 2px` | Ruang 2px |
| `4` | `--ss-ring-offset-width: 4px` | Ruang 4px |

## Contoh

```html
<button visual="ring:small ring-offset:2 ring-color:primary">With offset</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Offset Cincin

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="ring-offset:2"</code> - Tambah ruang antara cincin dan elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:0 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">0</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:2 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">2px</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:4 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">4px</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:0 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">0</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:2 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">2px</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:4 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">4px</button>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="ring:[custom-value]">Custom</div>
```
