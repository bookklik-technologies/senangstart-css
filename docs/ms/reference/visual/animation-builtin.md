# Animation Builtin

Terapkan animasi terbina dalam

## Sintaks
```
visual="animate:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `animation: none` | Tiada animasi |
| `spin` | `animation: spin 1s linear infinite` | Berpusing |
| `ping` | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite` | Kesan ping |
| `pulse` | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite` | Berdenyut |
| `bounce` | `animation: bounce 1s infinite` | Melantun |

## Contoh

```html
<div visual="animate:spin">Loading...</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Animasi Terbina Dalam

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animate:spin"</code> - Animasi sedia guna</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin">spin</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse">pulse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce">bounce</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin">spin</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse">pulse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce">bounce</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="animation:[custom-value]">Custom</div>
```
