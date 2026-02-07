# Warna Placeholder

Tetapkan warna teks placeholder dalam input borang

## Sintaks

Warna placeholder dikonfigurasikan melalui penyesuaian tema dalam `senangstart.config.js`:

```javascript
theme: {
  placeholder: '#9ca3af'  // Warna kelabu lalai
}
```

## Konfigurasi Tema

Tetapkan warna placeholder tersuai:

```javascript
// senangstart.config.js
export default {
  theme: {
    placeholder: '#94a3b8'  // Kelabu slate tersuai
  }
}
```

## Contoh

```html
<input type="text" placeholder="Masukkan nama anda">
<input type="email" placeholder="anda@contoh.com">
<textarea placeholder="Mesej anda..."></textarea>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Placeholder

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm">Warna teks placeholder digunakan secara automatik melalui Preflight</p>
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Masukkan nama anda" space="p:small border:neutral-300 border-w:thin rounded:small">
  <input type="email" placeholder="anda@contoh.com" space="p:small border:neutral-300 border-w:thin rounded:small">
  <textarea placeholder="Mesej anda..." space="p:small border:neutral-300 border-w:thin rounded:small"></textarea>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Masukkan nama anda" space="p:small border:neutral-300 border-w:thin rounded:small">
  <input type="email" placeholder="anda@contoh.com" space="p:small border:neutral-300 border-w:thin rounded:small">
  <textarea placeholder="Mesej anda..." space="p:small border:neutral-300 border-w:thin rounded:small"></textarea>
</div>
```

</details>

</div>

## Sokongan Mod Gelap

Warna placeholder menyesuai secara automatik dengan mod gelap:

```javascript
theme: {
  placeholder: '#9ca3af',  // Mod cerah
  colors: {
    'neutral-400': '#9ca3af'  // Digunakan dalam mod gelap
  }
}
```

## Sokongan Pelayar

Pseudo-elemen `::placeholder` disokong dalam:
- Chrome 57+
- Firefox 51+
- Safari 10.1+
- Edge 12+

## Nota

- Warna placeholder digunakan secara global melalui CSS Preflight
- Anda boleh menyesuaikan warna dalam konfigurasi tema anda
- Gunakan nada neutral untuk keterbacaan yang lebih baik
- Elakkan menggunakan putih atau hitam kerana isu kontras
