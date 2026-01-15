# State Prefixes

Terapkan gaya pada keadaan tertentu

## Sintaks
```
visual="hover:... focus:... active:..."
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `hover:` | `:hover` | Pada hover |
| `focus:` | `:focus` | Pada fokus |
| `active:` | `:active` | Pada aktif |
| `disabled:` | `:disabled` | Apabila dilumpuhkan |
| `visited:` | `:visited` | Apabila dilawati |
| `first:` | `:first-child` | Anak pertama |
| `last:` | `:last-child` | Anak terakhir |
| `odd:` | `:nth-child(odd)` | Anak ganjil |
| `even:` | `:nth-child(even)` | Anak genap |

## Contoh

```html
<button visual="hover:bg:primary focus:outline:primary">Interactive button</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Awalan Keadaan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="hover:scale:110"</code> - Terapkan gaya pada hover, fokus, dll.</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all hover:scale:110">hover:scale:110</button>
  <button space="p:small" visual="bg:neutral-500 text:white rounded:small transition:all hover:bg:primary">hover:bg:primary</button>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all hover:scale:110">hover:scale:110</button>
  <button space="p:small" visual="bg:neutral-500 text:white rounded:small transition:all hover:bg:primary">hover:bg:primary</button>
</div>
```

</details>

</div>
