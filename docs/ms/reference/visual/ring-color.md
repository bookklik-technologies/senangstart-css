# Ring Color

Tetapkan warna cincin

## Sintaks
```
visual="ring-color:[color]/[opacity]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `primary` | `--ss-ring-color: var(--c-primary)` | Warna cincin utama |
| `blue-500` | `--ss-ring-color: var(--c-blue-500)` | Warna cincin biru |

## Contoh

```html
<button visual="ring:small ring-color:primary">Colored ring</button>
<button visual="ring:small ring-color:primary/50">50% opacity ring</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Cincin

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="ring-color:primary"</code> - Tetapkan warna cincin fokus</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-color:primary bg:white dark:bg:neutral-800 rounded:small">primary</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:danger bg:white dark:bg:neutral-800 rounded:small">danger</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:success bg:white dark:bg:neutral-800 rounded:small">success</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-color:primary bg:white dark:bg:neutral-800 rounded:small">primary</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:danger bg:white dark:bg:neutral-800 rounded:small">danger</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:success bg:white dark:bg:neutral-800 rounded:small">success</button>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="ring:[custom-value]">Custom</div>
```
