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
