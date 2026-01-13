# Scroll Snap Stop

Kawal kelakuan hentian snap skrol

## Sintaks
```
visual="snap-stop:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal` | `scroll-snap-stop: normal` | Hentian biasa |
| `always` | `scroll-snap-stop: always` | Sentiasa berhenti |

## Contoh

```html
<div visual="snap-stop:always">Always stop here</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Hentian Snap

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="snap-stop:always"</code> - Kawal sama ada berhenti di titik snap</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">always</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">always</div>
</div>
```

</details>

</div>
