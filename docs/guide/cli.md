# CLI Build

Use the CLI for production-ready builds with optimized output.

## Installation

```bash
# Install globally
npm install -g senangstart-css

# Or use npx (no install)
npx senangstart-css init
```

## Commands

### `senangstart init`

Create a configuration file:

```bash
senangstart init
```

This creates `senangstart.config.js` in your project root with sensible defaults.

### `senangstart build`

Compile CSS from your source files:

```bash
senangstart build
```

**Options:**

| Option | Description |
|--------|-------------|
| `--minify` | Minify the output CSS |
| `--config <path>` | Path to config file |

```bash
# Production build with minification
senangstart build --minify

# Use custom config
senangstart build --config ./custom.config.js
```

### `senangstart dev`

Watch mode for development:

```bash
senangstart dev
```

This watches your source files and rebuilds automatically on changes.

## Output Files

The CLI generates three files:

| File | Description |
|------|-------------|
| `public/senangstart.css` | Compiled stylesheet |
| `.cursorrules` | AI context file for LLMs |
| `types/senang.d.ts` | TypeScript definitions |

## Project Setup

### 1. Initialize

```bash
cd your-project
npm init -y
npm install senangstart-css
npx senangstart init
```

### 2. Add HTML

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

### 3. Build

```bash
npx senangstart build
```

### 4. Develop

```bash
npx senangstart dev
```

## Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "build:css": "senangstart build --minify",
    "dev:css": "senangstart dev"
  }
}
```

## Integration with Frameworks

### Vite / React / Vue

Add to your build process:

```json
{
  "scripts": {
    "dev": "concurrently \"vite\" \"senangstart dev\"",
    "build": "senangstart build --minify && vite build"
  }
}
```

### Next.js

Import the generated CSS in `_app.js`:

```jsx
import '../public/senangstart.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

## CI/CD Integration

Add to your build pipeline:

```yaml
# GitHub Actions example
- name: Build CSS
  run: npx senangstart build --minify
```

## CDN vs CLI Comparison

| Feature | CDN JIT | CLI Build |
|---------|---------|-----------|
| Setup | Zero config | Requires npm |
| Build Step | None | Required |
| Performance | Runtime overhead | Pre-compiled |
| File Size | ~15KB JS | Only CSS used |
| Use Case | Prototyping | Production |
| Dynamic Content | ✅ Automatic | Requires rebuild |
