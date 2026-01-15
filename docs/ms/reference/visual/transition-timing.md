# Transition Timing

Tetapkan fungsi masa peralihan

## Sintaks
```
visual="ease:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `linear` | `transition-timing-function: linear` | Masa linear |
| `in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1)` | Memasuki mudah |
| `out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1)` | Keluar mudah |
| `in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` | Masuk-keluar mudah |

## Contoh

```html
<div visual="transition:all ease:out">Ease out effect</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Fungsi Masa

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="ease:out"</code> - Kawal lengkung pecutan</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in hover:scale:110">ease:in</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:out hover:scale:110">ease:out</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in-out hover:scale:110">ease:in-out</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in hover:scale:110">ease:in</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:out hover:scale:110">ease:out</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in-out hover:scale:110">ease:in-out</button>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transition:[custom-value]">Custom</div>
```
