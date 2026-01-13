# Visibility

Kawal ketampakan elemen

## Sintaks
```
layout="[visibility-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `visible` | `visibility: visible` | Elemen kelihatan |
| `invisible` | `visibility: hidden` | Elemen tidak kelihatan tetapi mengambil ruang |

## Contoh

```html
<div layout="invisible">Invisible but present</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kelihatan vs Tidak Kelihatan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="invisible"</code> - Elemen tidak kelihatan masih mengambil ruang</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
  <span layout="invisible" space="p:small" visual="bg:neutral-300 rounded:small">Invisible</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
  <span layout="invisible" space="p:small" visual="bg:neutral-300 rounded:small">Invisible</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
</div>
```

</details>

</div>
