# Appearance

Kawal penampilan asli

## Sintaks
```
visual="appearance:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `appearance: none` | Buang gaya asli |
| `auto` | `appearance: auto` | Penampilan lalai |

## Contoh

```html
<select visual="appearance:none">Custom select</select>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penampilan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="appearance:none"</code> - Buang gaya pelayar asli dari elemen borang</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <select style="appearance: auto; padding: 0.25rem;"><option>Native</option></select>
  <select style="appearance: none; padding: 0.25rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.25rem;"><option>Custom</option></select>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <select style="appearance: auto; padding: 0.25rem;"><option>Native</option></select>
  <select style="appearance: none; padding: 0.25rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.25rem;"><option>Custom</option></select>
</div>
```

</details>

</div>
