# Scale Reference

The natural scale used for spacing properties.

## Scale Values

| Keyword | Value | Use Case |
|---------|-------|----------|
| `none` | 0px | Reset spacing |
| `thin` | 1px | Hairline borders |
| `regular` | 2px | Standard borders |
| `thick` | 3px | Bold borders |
| `tiny` | 4px | Small offsets |
| `tiny-2x` | 6px | Tiny multiplied |
| `small` | 8px | Group related items |
| `small-2x` | 10px | Small multiplied |
| `small-3x` | 12px | Small multiplied |
| `small-4x` | 14px | Small multiplied |
| `medium` | 16px | Standard default |
| `medium-2x` | 20px | Medium multiplied |
| `medium-3x` | 24px | Medium multiplied |
| `medium-4x` | 28px | Medium multiplied |
| `large` | 32px | Separate sections |
| `large-2x` | 36px | Large multiplied |
| `large-3x` | 40px | Large multiplied |
| `large-4x` | 44px | Large multiplied |
| `big` | 48px | Layout sections |
| `big-2x` | 56px | Big multiplied |
| `big-3x` | 64px | Big multiplied |
| `big-4x` | 80px | Big multiplied |
| `giant` | 96px | Hero sections |
| `giant-2x` | 112px | Giant multiplied |
| `giant-3x` | 128px | Giant multiplied |
| `giant-4x` | 144px | Giant multiplied |
| `vast` | 160px | Page-level spacing |
| `vast-2x` | 176px | Vast multiplied |
| `vast-3x` | 192px | Vast multiplied |
| `vast-4x` | 208px | Vast multiplied |
| `vast-5x` | 224px | Vast multiplied |
| `vast-6x` | 240px | Vast multiplied |
| `vast-7x` | 256px | Vast multiplied |
| `vast-8x` | 288px | Vast multiplied |
| `vast-9x` | 320px | Vast multiplied |
| `vast-10x` | 384px | Vast multiplied |

## Customization

Override scale values in your configuration:

```js
// senangstart.config.js
export default {
  theme: {
    spacing: {
      'tiny': '2px',        // Override existing
      'micro': '1px',       // Add new custom value
      'humongous': '512px'  // Extrapolate scale
    }
  }
}
```


## Usage

All spacing properties use the same scale:

```html
<div space="p:medium m:small g:big">
  Consistent spacing using the natural scale
</div>
```
