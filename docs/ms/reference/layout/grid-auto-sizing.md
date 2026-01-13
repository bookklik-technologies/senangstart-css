# Grid Auto Sizing

Kawal saiz trek grid yang dijana automatik

## Sintaks
```
layout="auto-cols:[value]" or layout="auto-rows:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `auto` | Saiz automatik |
| `min` | `min-content` | Kandungan minimum |
| `max` | `max-content` | Kandungan maksimum |
| `fr` | `minmax(0, 1fr)` | Unit pecahan |

## Contoh

```html
<div layout="grid auto-cols:min">Auto min columns</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Lajur Automatik

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="auto-cols:fr"</code> - Trek lajur bersaiz automatik</p>
<div layout="grid grid-flow:col auto-cols:fr" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 3</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="grid grid-flow:col auto-cols:fr" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 3</span>
</div>
```

</details>

</div>
