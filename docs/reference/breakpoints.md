# Breakpoints Reference

Complete reference for responsive breakpoints.

## Default Breakpoints

| Prefix | Min-Width | Device Target |
|--------|-----------|---------------|
| (none) | 0px | Mobile (default) |
| `mob:` | 480px | Large mobile |
| `tab:` | 768px | Tablet |
| `lap:` | 1024px | Laptop |
| `desk:` | 1280px | Desktop |

## Tailwind Compatibility

SenangStart supports Tailwind CSS default breakpoints using the `tw-` prefix.

| Prefix | Min-Width | Tailwind Equiv. |
|--------|-----------|-----------------|
| `tw-sm:` | 640px | `sm:` |
| `tw-md:` | 768px | `md:` |
| `tw-lg:` | 1024px | `lg:` |
| `tw-xl:` | 1280px | `xl:` |
| `tw-2xl:` | 1536px | `2xl:` |

### Usage with Tailwind Scale

```html
<div 
  space="p:tw-4 tw-md:p:tw-8" 
  visual="rounded:tw-lg tw-lg:shadow:tw-xl"
>
  Tailwind-compatible scaling
</div>
```

## CSS Media Queries

```css
/* Mobile first - no prefix needed */

@media (min-width: 480px) { /* mob: */ }
@media (min-width: 768px) { /* tab: */ }
@media (min-width: 1024px) { /* lap: */ }
@media (min-width: 1280px) { /* desk: */ }
```

## Usage

### Responsive Spacing

```html
<div space="p:small tab:p:medium lap:p:big">
  Progressive padding
</div>
```

### Responsive Layout

```html
<div layout="flex col tab:row">
  Column on mobile, row on tablet+
</div>

<nav layout="hidden tab:flex">
  Hidden on mobile, visible on tablet+
</nav>
```

### Responsive Typography

```html
<h1 visual="text-size:big tab:text-size:giant lap:text-size:vast">
  Responsive heading
</h1>
```

## Mobile-First Approach

SenangStart uses mobile-first responsive design:

1. **Base styles** apply to all screen sizes
2. **Breakpoint prefixes** apply from that breakpoint UP

```html
<!-- This means: -->
<!-- - Mobile: small padding -->
<!-- - Tablet and up: medium padding -->
<!-- - Laptop and up: big padding -->
<div space="p:small tab:p:medium lap:p:big">
  Content
</div>
```

## Customization

Add or modify breakpoints in `senangstart.config.js`:

```javascript
export default {
  theme: {
    screens: {
      'mob': '480px',
      'tab': '768px',
      'lap': '1024px',
      'desk': '1280px',
      'wide': '1536px',    // Add wider
      'ultra': '1920px'    // Add ultra-wide
    }
  }
}
```

Use custom breakpoints:

```html
<div space="desk:p:big wide:p:giant ultra:p:vast">
  Extra-large screen padding
</div>
```

## Common Patterns

### Show/Hide Elements

```html
<!-- Mobile only -->
<div layout="block tab:hidden">Mobile menu</div>

<!-- Desktop only -->
<div layout="hidden lap:block">Desktop sidebar</div>
```

### Responsive Grid

```html
<div 
  layout="grid"
  space="g:small tab:g:medium"
  style="grid-template-columns: 1fr; 
         @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }"
>
  Cards...
</div>
```

### Responsive Container

```html
<div space="p:small tab:p:medium lap:p:big max-w:[1200px] m-x:auto">
  Centered container with responsive padding
</div>
```
