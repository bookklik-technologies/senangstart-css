# Peralihan (Transition)

Kawal peralihan sifat CSS menggunakan tempoh berasaskan kata sifat semula jadi.

## Penggunaan Asas

```html
<button 
  visual="transition bg:blue-500 hover:bg:blue-700" 
  space="p-x:medium p-y:small"
>
  Hover saya
</button>
```

## Sifat Peralihan

```html
<div visual="transition">...</div>           <!-- Sifat lalai -->
<div visual="transition:all">...</div>       <!-- Semua sifat -->
<div visual="transition:colors">...</div>    <!-- Warna sahaja -->
<div visual="transition:opacity">...</div>   <!-- Kelegapan sahaja -->
<div visual="transition:shadow">...</div>    <!-- Bayang kotak sahaja -->
<div visual="transition:transform">...</div> <!-- Transform sahaja -->
<div visual="transition-none">...</div>      <!-- Tiada peralihan -->
```

## Tempoh

Kawal tempoh peralihan menggunakan kata semula jadi.

```html
<div visual="transition duration:instant">...</div>  <!-- 75ms - Hampir serta-merta -->
<div visual="transition duration:quick">...</div>    <!-- 100ms - Pantas -->
<div visual="transition duration:fast">...</div>     <!-- 150ms - Responsif -->
<div visual="transition duration:normal">...</div>   <!-- 200ms - Standard -->
<div visual="transition duration:slow">...</div>     <!-- 300ms - Ketara -->
<div visual="transition duration:slower">...</div>   <!-- 500ms - Elegan -->
<div visual="transition duration:lazy">...</div>     <!-- 700ms - Santai -->
```

### Rujukan Skala Tempoh

| Kata | Masa | Rasa |
|------|------|------|
| `instant` | 75ms | Hampir tidak ketara |
| `quick` | 100ms | Tajam |
| `fast` | 150ms | Responsif |
| `normal` | 200ms | **Lalai**, seimbang |
| `slow` | 300ms | Licin, ketara |
| `slower` | 500ms | Teliti, elegan |
| `lazy` | 700ms | Santai, dramatik |

### Nilai Arbitrari

```html
<div visual="transition duration:[2000ms]">...</div>
```

## Fungsi Masa

```html
<div visual="transition ease:linear">...</div>  <!-- Linear -->
<div visual="transition ease:in">...</div>      <!-- Ease in -->
<div visual="transition ease:out">...</div>     <!-- Ease out -->
<div visual="transition ease:in-out">...</div>  <!-- Ease in-out (lalai) -->
```

## Kelewatan

```html
<div visual="transition delay:instant">...</div>  <!-- 75ms kelewatan -->
<div visual="transition delay:quick">...</div>    <!-- 100ms kelewatan -->
<div visual="transition delay:fast">...</div>     <!-- 150ms kelewatan -->
<div visual="transition delay:normal">...</div>   <!-- 200ms kelewatan -->
<div visual="transition delay:slow">...</div>     <!-- 300ms kelewatan -->
<div visual="transition delay:slower">...</div>   <!-- 500ms kelewatan -->
<div visual="transition delay:lazy">...</div>     <!-- 700ms kelewatan -->
```

## Contoh Lengkap

```html
<button 
  visual="
    transition 
    duration:slow 
    ease:in-out
    bg:primary 
    hover:bg:primary-dark
    scale:100 
    hover:scale:105
  " 
  space="p-x:big p-y:medium"
>
  Butang Animasi
</button>
```
