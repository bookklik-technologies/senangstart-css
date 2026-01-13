# Text Size

Set font size

## Syntax
```
visual="text-size:[value]"
```

## Examples

```html
<div visual="text-size:big">Large text</div>
<div visual="text-size:[24px]">24px text</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind font scale: `text-size:tw-xl` (1.25rem), `text-size:tw-2xl` (1.5rem)
> 
> [Reference](https://tailwindcss.com/docs/font-size)
