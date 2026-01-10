# Scale Reference

The natural scale used for spacing properties.

## Scale Values

| Keyword | Default Value |
|---------|---------------|
| `none` | 0px |
| `tiny` | 4px |
| `small` | 8px |
| `medium` | 16px |
| `big` | 32px |
| `giant` | 64px |
| `vast` | 128px |

## Customization

Override scale values in your configuration:

```js
// senangstart.config.js
module.exports = {
  scale: {
    tiny: '2px',
    small: '4px',
    medium: '8px',
    big: '16px',
    giant: '32px',
    vast: '64px'
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
