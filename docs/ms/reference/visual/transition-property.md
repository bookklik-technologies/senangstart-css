# Transition Property

Mengawal sifat CSS mana yang akan ditransisikan.

## Sintaks
```
visual="transition | transition:all | transition:colors | transition:opacity | transition:shadow | transition:transform | transition-none"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `transition` | Sifat transisi lalai |
| `transition:all` | `transition-property: all` |
| `transition:colors` | `transition-property: color, background-color, border-color, fill, stroke` |
| `transition:opacity` | `transition-property: opacity` |
| `transition:shadow` | `transition-property: box-shadow` |
| `transition:transform` | `transition-property: transform` |
| `transition-none` | `transition-property: none` |

## Contoh

```html
<div visual="transition">...</div>           <!-- Sifat lalai -->
<div visual="transition:all">...</div>       <!-- Semua sifat -->
<div visual="transition:colors">...</div>    <!-- Berkaitan warna sahaja -->
<div visual="transition:opacity">...</div>   <!-- Kelegapan sahaja -->
<div visual="transition:shadow">...</div>    <!-- Box shadow sahaja -->
<div visual="transition:transform">...</div> <!-- Transform sahaja -->
<div visual="transition-none">...</div>      <!-- Tiada transisi -->
```

## Penggunaan Asas

```html
<button 
  visual="transition bg:blue-500 hover:bg:blue-700" 
  space="p-x:medium p-y:small"
>
  Hover saya
</button>
```
