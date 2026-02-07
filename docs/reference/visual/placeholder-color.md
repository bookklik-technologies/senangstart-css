# Placeholder Color

Set the color of placeholder text in form inputs

## Syntax

Placeholder color is configured via theme customization in `senangstart.config.js`:

```javascript
theme: {
  placeholder: '#9ca3af'  // Default gray color
}
```

## Theme Configuration

Set a custom placeholder color:

```javascript
// senangstart.config.js
export default {
  theme: {
    placeholder: '#94a3b8'  // Custom slate gray
  }
}
```

## Examples

```html
<input type="text" placeholder="Enter your name">
<input type="email" placeholder="you@example.com">
<textarea placeholder="Your message..."></textarea>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Placeholder Color

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm">Placeholder text color is automatically applied via Preflight</p>
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Enter your name" space="p:small border:neutral-300 border-w:thin rounded:small">
  <input type="email" placeholder="you@example.com" space="p:small border:neutral-300 border-w:thin rounded:small">
  <textarea placeholder="Your message..." space="p:small border:neutral-300 border-w:thin rounded:small"></textarea>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Enter your name" space="p:small border:neutral-300 border-w:thin rounded:small">
  <input type="email" placeholder="you@example.com" space="p:small border:neutral-300 border-w:thin rounded:small">
  <textarea placeholder="Your message..." space="p:small border:neutral-300 border-w:thin rounded:small"></textarea>
</div>
```

</details>

</div>

## Dark Mode Support

Placeholder color automatically adapts to dark mode:

```javascript
theme: {
  placeholder: '#9ca3af',  // Light mode
  colors: {
    'neutral-400': '#9ca3af'  // Used in dark mode
  }
}
```

## Browser Support

The `::placeholder` pseudo-element is supported in:
- Chrome 57+
- Firefox 51+
- Safari 10.1+
- Edge 12+

## Notes

- Placeholder color is applied globally via Preflight CSS
- You can customize the color in your theme configuration
- Use neutral tones for better readability
- Avoid using white or black for contrast issues
