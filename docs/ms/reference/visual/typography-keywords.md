# Typography Keywords

Kata kunci utiliti tipografi

## Sintaks
```
visual="[keyword]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `italic` | `font-style: italic` | Teks italic |
| `not-italic` | `font-style: normal` | Gaya normal |
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` | Teks antialias |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto` | Antialias subpiksel |
| `uppercase` | `text-transform: uppercase` | Teks huruf besar |
| `lowercase` | `text-transform: lowercase` | Teks huruf kecil |
| `capitalize` | `text-transform: capitalize` | Huruf besar awal perkataan |
| `normal-case` | `text-transform: none` | Kes normal |
| `underline` | `text-decoration-line: underline` | Garis bawah teks |
| `overline` | `text-decoration-line: overline` | Garis atas teks |
| `line-through` | `text-decoration-line: line-through` | Garis potong |
| `no-underline` | `text-decoration-line: none` | Tiada hiasan |
| `decoration-solid` | `text-decoration-style: solid` | Garisan pepejal |
| `decoration-double` | `text-decoration-style: double` | Garisan berganda |
| `decoration-dotted` | `text-decoration-style: dotted` | Garisan bertitik |
| `decoration-dashed` | `text-decoration-style: dashed` | Garisan putus-putus |
| `decoration-wavy` | `text-decoration-style: wavy` | Garisan bergelombang |
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` | Potong dengan elipsis |
| `text-ellipsis` | `text-overflow: ellipsis` | Limpahan elipsis |
| `text-clip` | `text-overflow: clip` | Limpahan potong |
| `text-wrap` | `text-wrap: wrap` | Bungkus teks |
| `text-nowrap` | `text-wrap: nowrap` | Tiada bungkusan |
| `text-balance` | `text-wrap: balance` | Bungkusan seimbang |
| `text-pretty` | `text-wrap: pretty` | Bungkusan cantik |
| `whitespace-normal` | `white-space: normal` | Ruang putih normal |
| `whitespace-nowrap` | `white-space: nowrap` | Tiada bungkusan ruang putih |
| `whitespace-pre` | `white-space: pre` | Kekalkan ruang putih |
| `whitespace-pre-line` | `white-space: pre-line` | Ruang putih pra-baris |
| `whitespace-pre-wrap` | `white-space: pre-wrap` | Ruang putih pra-bungkus |
| `whitespace-break-spaces` | `white-space: break-spaces` | Ruang putih pecah |
| `break-normal` | `overflow-wrap: normal; word-break: normal` | Pemecahan perkataan normal |
| `break-words` | `overflow-wrap: break-word` | Pecahkan perkataan |
| `break-all` | `word-break: break-all` | Pecahkan semua |
| `break-keep` | `word-break: keep-all` | Kekalkan semua |
| `hyphens-none` | `hyphens: none` | Tiada tanda sempang |
| `hyphens-manual` | `hyphens: manual` | Tanda sempang manual |
| `hyphens-auto` | `hyphens: auto` | Tanda sempang automatik |
| `align-baseline` | `vertical-align: baseline` | Jajar garis asas |
| `align-top` | `vertical-align: top` | Jajar atas |
| `align-middle` | `vertical-align: middle` | Jajar tengah |
| `align-bottom` | `vertical-align: bottom` | Jajar bawah |
| `align-text-top` | `vertical-align: text-top` | Jajar atas teks |
| `align-text-bottom` | `vertical-align: text-bottom` | Jajar bawah teks |
| `align-sub` | `vertical-align: sub` | Jajar subskrip |
| `align-super` | `vertical-align: super` | Jajar superskrip |
| `list-none` | `list-style-type: none` | Tiada gaya senarai |
| `list-disc` | `list-style-type: disc` | Bullet bulat |
| `list-decimal` | `list-style-type: decimal` | Nombor perpuluhan |
| `list-square` | `list-style-type: square` | Bullet segi empat |
| `list-inside` | `list-style-position: inside` | Kedudukan dalam |
| `list-outside` | `list-style-position: outside` | Kedudukan luar |

## Contoh

```html
<span visual="italic">Italic text</span>
<span visual="uppercase">Uppercase</span>
<span visual="truncate">Truncated text...</span>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
