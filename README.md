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
senangstart init    # or: sen init — creates senangstart.config.js
senangstart dev     # or: sen dev — watch & rebuild on changes
senangstart build --minify  # production build
```

Both `senangstart` and `sen` bin aliases are available.

Link the generated stylesheet in your HTML:

```html
<link rel="stylesheet" href="./public/senangstart.css">
```

> The build **fails on invalid tokens** by default. Use `--ignore-invalid` to warn instead.

## Tailwind CSS Converter

Migrate from Tailwind to SenangStart with the built-in converter:

```bash
# From the SenangStart repository (scripts/ is not shipped in the npm package)
git clone https://github.com/bookklik-technologies/senangstart-css.git
cd senangstart-css

# Convert HTML file
node scripts/convert-tailwind.js input.html -o output.html

# Convert inline string
node scripts/convert-tailwind.js --string "<div class='flex p-4 bg-blue-500'>"
```

Or use the browser bundle (no build step):

```html
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-tw.min.js"></script>
<script>
  console.log(window.SenangStartTW.convertHTML('<div class="flex p-4">Hi</div>'));
</script>
```

**Before (Tailwind):**
```html
<div class="flex items-center p-8 bg-blue-500 text-white rounded-lg">
```

**After (SenangStart):**
```html
<div layout="flex items:center" space="p:big" visual="bg:blue-500 text:white rounded:medium">
```

### Exact Mode (tw- prefix)

Use `--exact` to preserve Tailwind's numeric scale with `tw-` prefix:

```bash
node scripts/convert-tailwind.js --exact --string "<div class='p-4 rounded-lg'>"
# Output: space="p:tw-4" visual="rounded:tw-lg"
```

| Tailwind | Semantic | Exact (tw-) |
|----------|----------|-------------|
| `p-4` | `p:small` | `p:tw-4` |
| `mt-8` | `m-t:big` | `m-t:tw-8` |
| `rounded-lg` | `rounded:medium` | `rounded:tw-lg` |
| `text-2xl` | `text-size:giant` | `text-size:tw-2xl` |

## Documentation

Full docs at [bookklik-technologies.github.io/senangstart-css](https://bookklik-technologies.github.io/senangstart-css/)

## License

Read [MIT License](LICENSE.md)
