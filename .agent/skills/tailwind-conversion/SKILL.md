---
name: Tailwind CSS Conversion
description: Converting Tailwind CSS to SenangStart CSS using the conversion engine
---

# Tailwind CSS Conversion

This skill covers converting Tailwind CSS classes to SenangStart CSS using the built-in conversion engine.

## Conversion Engine Files

| File | Purpose |
|------|---------|
| `src/cdn/tw-conversion-engine.js` | Browser-based converter |
| `scripts/convert-tailwind.js` | CLI conversion script |
| `dist/senangstart-tw.min.js` | CDN-ready converter bundle |

## CLI Usage

### Convert HTML File
```bash
node scripts/convert-tailwind.js input.html -o output.html
```

### Convert Inline String
```bash
node scripts/convert-tailwind.js --string "<div class='flex p-4 bg-blue-500'>"
```

### Exact Mode (Preserve Numeric Values)
```bash
node scripts/convert-tailwind.js --exact input.html -o output.html
```

## Conversion Modes

### Semantic Mode (Default)

Maps Tailwind numeric scales to SenangStart semantic names:

| Tailwind | SenangStart |
|----------|-------------|
| `p-0` | `p:none` |
| `p-1` | `p:thin` |
| `p-2` | `p:regular` |
| `p-4` | `p:small` |
| `p-8` | `p:big` |
| `rounded-sm` | `rounded:small` |
| `rounded-lg` | `rounded:medium` |
| `text-sm` | `text-size:small` |
| `text-2xl` | `text-size:giant` |

### Exact Mode (`--exact` or `tw-` prefix)

Preserves Tailwind's original values with `tw-` prefix:

| Tailwind | SenangStart (Exact) |
|----------|---------------------|
| `p-4` | `p:tw-4` |
| `rounded-lg` | `rounded:tw-lg` |
| `text-2xl` | `text-size:tw-2xl` |

The JIT engine includes CSS variables for all Tailwind values:
```css
:root {
  --tw-4: 1rem;
  --tw-lg: 0.5rem;
  --tw-2xl: 1.5rem;
  /* ... */
}
```

## Scale Mappings

### Spacing Scale (`spacingScale`)

```javascript
const spacingScale = {
  '0': 'none',
  'px': 'thin',
  '0.5': 'thin',
  '1': 'regular',
  '1.5': 'thick',
  '2': 'tiny',
  '3': 'tiny-2x',
  '4': 'small',
  '5': 'small-2x',
  '6': 'small-3x',
  '8': 'medium',
  '10': 'medium-2x',
  '12': 'big',
  '16': 'giant',
  '20': 'giant-2x',
  '24': 'vast',
  // ... extended scale
};
```

### Radius Scale (`radiusScale`)

```javascript
const radiusScale = {
  'none': 'none',
  'sm': 'small',
  '': 'small',      // default rounded
  'md': 'small',
  'lg': 'medium',
  'xl': 'medium',
  '2xl': 'big',
  '3xl': 'big',
  'full': 'round'
};
```

### Shadow Scale (`shadowScale`)

```javascript
const shadowScale = {
  'sm': 'small',
  '': 'small',      // default shadow
  'md': 'medium',
  'lg': 'medium',
  'xl': 'big',
  '2xl': 'giant',
  'none': 'none'
};
```

### Font Size Scale (`fontSizeScale`)

```javascript
const fontSizeScale = {
  'xs': 'tiny',
  'sm': 'small',
  'base': 'base',
  'lg': 'medium',
  'xl': 'big',
  '2xl': 'giant',
  '3xl': 'vast',
  // ...
};
```

## Class Transformation Examples

### Layout Classes
```
flex          → layout="flex"
grid          → layout="grid"
items-center  → layout="items:center"
justify-between → layout="justify:between"
hidden        → layout="hidden"
```

### Spacing Classes
```
p-4           → space="p:small"
px-6          → space="p-x:small-3x"
mt-8          → space="m-t:medium"
gap-4         → space="gap:small"
w-full        → space="w:full"
h-screen      → space="h:screen"
```

### Visual Classes
```
bg-blue-500   → visual="bg:blue-500"
text-white    → visual="text:white"
rounded-lg    → visual="rounded:medium"
shadow-md     → visual="shadow:medium"
opacity-50    → visual="opacity:50"
```

### State Variants
```
hover:bg-blue-600  → visual="hover:bg:blue-600"
focus:ring-2       → visual="focus:ring:regular"
active:scale-95    → visual="active:scale:95"
```

### Responsive Prefixes
```
md:flex       → layout="tab:flex"
lg:grid-cols-3 → layout="lap:cols:3"
xl:p-8        → space="desk:p:medium"
```

Breakpoint mapping:
| Tailwind | SenangStart |
|----------|-------------|
| `sm` | `mob` |
| `md` | `tab` |
| `lg` | `lap` |
| `xl` | `desk` |

## CDN Converter Usage

Load converter in browser:
```html
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-tw.min.js"></script>
<script>
  // Convert Tailwind classes
  const result = SenangStartTW.convert('flex items-center p-4 bg-blue-500');
  console.log(result);
  // Output: { layout: 'flex items:center', space: 'p:small', visual: 'bg:blue-500' }
</script>
```

## Modifying Conversion Logic

### Adding New Mappings

In `src/cdn/tw-conversion-engine.js`:

```javascript
// Add to appropriate handler
function convertVisualClass(cls) {
  // ADD: New class pattern
  if (cls.startsWith('my-prefix-')) {
    const value = cls.replace('my-prefix-', '');
    return `my-utility:${myScale[value] || value}`;
  }
  // ... existing handlers
}
```

### Testing Conversions

```bash
npm run test:unit  # Includes convert-tailwind.test.js
```

Test file: `tests/unit/convert-tailwind.test.js`

## Common Conversion Challenges

### Arbitrary Values
Tailwind's arbitrary values `[...]` are preserved:
```
text-[#ff0000]  → visual="text:[#ff0000]"
w-[200px]       → space="w:[200px]"
```

### Compound Classes
Some Tailwind classes map to multiple SenangStart properties:
```
divide-y        → visual="divide-y:thin"
ring-2          → visual="ring:regular"
```

### Unsupported Classes
Classes without direct mapping are flagged:
```
// In conversion output
/* UNMAPPED: prose lg:prose-xl */
```

## Best Practices

1. **Run in semantic mode first** - Natural names are more maintainable
2. **Use exact mode for gradual migration** - When you need pixel-perfect output
3. **Check unmapped classes** - Some Tailwind plugins need manual conversion
4. **Verify output** - Always test converted HTML in browser
5. **Update scales if needed** - Extend SenangStart scales for custom Tailwind values
