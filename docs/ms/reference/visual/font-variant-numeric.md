# Font Variant Numeric

Kawal varian nombor fon

## Sintaks
```
visual="[variant-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal-nums` | `font-variant-numeric: normal` | Nombor biasa |
| `ordinal` | `font-variant-numeric: ordinal` | Penanda ordinal |
| `slashed-zero` | `font-variant-numeric: slashed-zero` | Sifar bergaris |
| `lining-nums` | `font-variant-numeric: lining-nums` | Nombor garis |
| `oldstyle-nums` | `font-variant-numeric: oldstyle-nums` | Nombor gaya lama |
| `proportional-nums` | `font-variant-numeric: proportional-nums` | Nombor proporsional |
| `tabular-nums` | `font-variant-numeric: tabular-nums` | Nombor tabular |

## Contoh

```html
<span visual="tabular-nums">123,456.00</span>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Varian Nombor Fon

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="tabular-nums"</code> - Kawal paparan nombor</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">tabular-nums</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ordinal</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">tabular-nums</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ordinal</div>
</div>
```

</details>

</div>
