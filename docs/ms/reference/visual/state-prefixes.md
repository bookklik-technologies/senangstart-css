# Prefiks Keadaan

Guna gaya visual bersyarat berdasarkan keadaan elemen.

## Prefiks

| Prefiks | Digunakan bila |
|---------|----------------|
| `hover:` | Tetikus di atas elemen |
| `focus:` | Elemen mempunyai fokus |
| `active:` | Elemen sedang ditekan |
| `disabled:` | Elemen dilumpuhkan |
| `dark:` | Mod gelap aktif |

## Contoh

```html
<!-- Kesan hover -->
<button visual="bg:primary hover:bg:[#2563EB]">
  Kesan hover
</button>

<!-- Kesan fokus -->
<input visual="border:grey focus:border:primary">

<!-- Pautan dengan hover -->
<a visual="text:grey hover:text:primary underline hover:no-underline">
  Pautan dengan hover
</a>
```
