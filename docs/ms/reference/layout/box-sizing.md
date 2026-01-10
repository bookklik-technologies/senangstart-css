# Box Sizing

Mengawal cara dimensi elemen dikira dengan atribut `layout`.

## Sintaks
```
layout="box-border | box-content"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `box-border` | `box-sizing: border-box` |
| `box-content` | `box-sizing: content-box` |

## Contoh

```html
<!-- Padding dimasukkan dalam lebar (lalai dalam preflight) -->
<div layout="box-border" space="p:medium w:[200px]">
  Padding dimasukkan dalam lebar 200px
</div>

<!-- Padding ditambah kepada lebar -->
<div layout="box-content" space="p:medium w:[200px]">
  Jumlah lebar = 200px + padding
</div>
```

## Nota

Gaya preflight menetapkan `box-sizing: border-box` secara global, jadi anda biasanya hanya perlu `box-content` untuk mengatasi kelakuan ini.
