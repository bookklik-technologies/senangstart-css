# Isolation

Cipta konteks tindanan baharu

## Sintaks
```
layout="isolation:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `isolate` | `isolation: isolate` | Cipta konteks tindanan |
| `auto` | `isolation: auto` | Pengasingan automatik |

## Contoh

```html
<div layout="isolation:isolate">Isolated</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pengasingan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="isolation:isolate"</code> - Cipta konteks tindanan baharu</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="isolation:isolate" space="p:small" visual="bg:primary text:white rounded:small">isolation:isolate</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="isolation:isolate" space="p:small" visual="bg:primary text:white rounded:small">isolation:isolate</div>
</div>
```

</details>

</div>
