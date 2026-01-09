# Bina CLI

Guna CLI untuk bina sedia produksi dengan output teroptimum.

## Pemasangan

```bash
# Pasang secara global
npm install -g @bookklik/senangstart-css

# Atau guna npx (tanpa pasang)
npx @bookklik/senangstart-css init
```

## Arahan

### `senangstart init`

Cipta fail konfigurasi:

```bash
senangstart init
```

Ini mencipta `senangstart.config.js` dalam root projek anda dengan lalai yang baik.

### `senangstart build`

Kompil CSS dari fail sumber anda:

```bash
senangstart build
```

**Pilihan:**

| Pilihan | Penerangan |
|---------|------------|
| `--minify` | Minify output CSS |
| `--config <path>` | Laluan ke fail config |

```bash
# Build produksi dengan minification
senangstart build --minify

# Guna config tersuai
senangstart build --config ./custom.config.js
```

### `senangstart dev`

Mod watch untuk pembangunan:

```bash
senangstart dev
```

Ini memantau fail sumber anda dan membina semula secara automatik apabila ada perubahan.

## Fail Output

CLI menghasilkan tiga fail:

| Fail | Penerangan |
|------|------------|
| `public/senangstart.css` | Stylesheet terkompil |
| `.cursorrules` | Fail konteks AI untuk LLM |
| `types/senang.d.ts` | Definisi TypeScript |

## Persediaan Projek

### 1. Mulakan

```bash
cd projek-anda
npm init -y
npm i @bookklik/senangstart-css
npx senangstart init
```

### 2. Tambah HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./public/senangstart.css">
</head>
<body>
  <div
    layout="flex col center"
    space="p:big"
    visual="bg:primary text:white rounded:big"
  >
    Hello SenangStart!
  </div>
</body>
</html>
```

### 3. Bina

```bash
npx senangstart build
```

### 4. Pembangunan

```bash
npx senangstart dev
```

## Skrip Package.json

Tambah skrip ini ke `package.json` anda:

```json
{
  "scripts": {
    "build:css": "senangstart build --minify",
    "dev:css": "senangstart dev"
  }
}
```

## Integrasi dengan Framework

### Vite / React / Vue

Tambah ke proses bina anda:

```json
{
  "scripts": {
    "dev": "concurrently \"vite\" \"senangstart dev\"",
    "build": "senangstart build --minify && vite build"
  }
}
```

### Next.js

Import CSS yang dijana dalam `_app.js`:

```jsx
import '../public/senangstart.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

## Integrasi CI/CD

Tambah ke pipeline bina anda:

```yaml
# Contoh GitHub Actions
- name: Build CSS
  run: npx senangstart build --minify
```

## Perbandingan CDN vs CLI

| Ciri | CDN JIT | CLI Build |
|------|---------|-----------|
| Persediaan | Tanpa config | Memerlukan npm |
| Langkah Bina | Tiada | Diperlukan |
| Prestasi | Overhead runtime | Pra-kompil |
| Saiz Fail | ~15KB JS | Hanya CSS yang digunakan |
| Kes Penggunaan | Prototaip | Produksi |
| Kandungan Dinamik | ✅ Automatik | Perlu rebuild |
