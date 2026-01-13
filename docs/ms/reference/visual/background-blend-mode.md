# Background Blend Mode

Tetapkan mod campuran latar

## Sintaks
```
visual="bg-blend:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal` | `background-blend-mode: normal` | Campuran normal |
| `multiply` | `background-blend-mode: multiply` | Campuran darab |
| `screen` | `background-blend-mode: screen` | Campuran skrin |
| `overlay` | `background-blend-mode: overlay` | Campuran tindanan |
| `darken` | `background-blend-mode: darken` | Campuran gelap |
| `lighten` | `background-blend-mode: lighten` | Campuran cerah |

## Contoh

```html
<div visual="bg-blend:multiply">Multiplied background</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Mod Campuran Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-blend:multiply"</code> - Campurkan latar bersama</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">multiply</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">screen</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">overlay</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">multiply</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">screen</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">overlay</div>
</div>
```

</details>

</div>
