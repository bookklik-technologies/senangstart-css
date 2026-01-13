# Scroll Behavior

Tetapkan kelakuan skrol

## Sintaks
```
visual="scroll-behavior:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `scroll-behavior: auto` | Skrol serta-merta |
| `smooth` | `scroll-behavior: smooth` | Skrol lancar |

## Contoh

```html
<html visual="scroll-behavior:smooth">Smooth scrolling</html>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kelakuan Skrol

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scroll-behavior:smooth"</code> - Skrol lancar atau serta-merta</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">smooth</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">smooth</div>
</div>
```

</details>

</div>
