# Blend Modes

Tetapkan mod campuran

## Sintaks
```
visual="mix-blend:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal` | `mix-blend-mode: normal` | Campuran normal |
| `multiply` | `mix-blend-mode: multiply` | Campuran darab |
| `screen` | `mix-blend-mode: screen` | Campuran skrin |
| `overlay` | `mix-blend-mode: overlay` | Campuran tindanan |
| `darken` | `mix-blend-mode: darken` | Campuran gelap |
| `lighten` | `mix-blend-mode: lighten` | Campuran cerah |

## Contoh

```html
<div visual="mix-blend:multiply">Multiply blend</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Mod Campuran

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="mix-blend:multiply"</code> - Campurkan elemen dengan kandungan di belakangnya</p>
<div layout="flex" space="g:medium p:medium" visual="rounded:medium bg:gradient-red-orange">
  <div space="p:small" visual="bg:blue-500 text:white rounded:small mix-blend:multiply">multiply</div>
  <div space="p:small" visual="bg:blue-500 text:white rounded:small mix-blend:screen">screen</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="rounded:medium bg:gradient-red-orange">
  <div space="p:small" visual="bg:blue-500 text:white rounded:small mix-blend:multiply">multiply</div>
  <div space="p:small" visual="bg:blue-500 text:white rounded:small mix-blend:screen">screen</div>
</div>
```

</details>

</div>
