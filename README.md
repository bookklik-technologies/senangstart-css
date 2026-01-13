# SenangStart CSS

A utility-first CSS framework that replaces abstract naming conventions with Natural Adjectives.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

## Quick Start

### CDN (Zero Build)

```html
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>

<div
  layout="flex col center"
  space="p:big"
  visual="bg:primary text:white rounded:big"
>
  Hello SenangStart!
</div>
```

### CLI

```bash
npm i @bookklik/senangstart-css
senangstart init
senangstart dev
```

## Tailwind CSS Converter

Migrate from Tailwind to SenangStart with the built-in converter:

```bash
# Convert HTML file
node scripts/convert-tailwind.js input.html -o output.html

# Convert inline string
node scripts/convert-tailwind.js --string "<div class='flex p-4 bg-blue-500'>"
```

**Before (Tailwind):**
```html
<div class="flex items-center p-8 bg-blue-500 text-white rounded-lg">
```

**After (SenangStart):**
```html
<div layout="flex items:center" space="p:big" visual="bg:blue-500 text:white rounded:medium">
```

## Documentation

Full docs at [bookklik-technologies.github.io/senangstart-css](https://bookklik-technologies.github.io/senangstart-css/)

## License

Read [MIT License](LICENSE.md)
