# Pointer Events

Kawal peristiwa penunjuk

## Sintaks
```
visual="pointer-events:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `pointer-events: none` | Abaikan peristiwa penunjuk |
| `auto` | `pointer-events: auto` | Peristiwa penunjuk normal |

## Contoh

```html
<div visual="pointer-events:none">Click through</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Peristiwa Penunjuk

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="pointer-events:none"</code> - Jadikan elemen boleh klik tembus atau interaktif</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto (clickable)</div>
  <div space="p:small" visual="bg:neutral-400 text:white rounded:small">none (click-through)</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto (clickable)</div>
  <div space="p:small" visual="bg:neutral-400 text:white rounded:small">none (click-through)</div>
</div>
```

</details>

</div>
