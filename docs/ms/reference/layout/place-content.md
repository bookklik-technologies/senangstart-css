# Place Content

Pintasan untuk align-content dan justify-content

## Sintaks
```
layout="place-content:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `place-content: start` | Jajar permulaan |
| `end` | `place-content: end` | Jajar hujung |
| `center` | `place-content: center` | Jajar tengah |
| `between` | `place-content: space-between` | Ruang antara |
| `around` | `place-content: space-around` | Ruang sekeliling |
| `evenly` | `place-content: space-evenly` | Ruang sekata |
| `stretch` | `place-content: stretch` | Regangkan kandungan |

## Contoh

```html
<div layout="grid place-content:center">Centered content</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Letakkan Kandungan Tengah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="place-content:center"</code> - Tengahkan keseluruhan kandungan grid dalam kedua-dua arah</p>
<div layout="grid grid-cols:2 place-content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="grid grid-cols:2 place-content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
</div>
```

</details>

</div>
