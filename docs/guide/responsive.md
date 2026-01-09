# Responsive Design

SenangStart uses mobile-first responsive prefixes.

## Breakpoints

| Prefix | Min-Width | Device |
|--------|-----------|--------|
| (none) | 0px | Mobile (default) |
| `mob:` | 480px | Large mobile |
| `tab:` | 768px | Tablet |
| `lap:` | 1024px | Laptop |
| `desk:` | 1280px | Desktop |

## Usage

Add breakpoint prefixes to any space or layout value:

```html
<div space="p:small tab:p:medium lap:p:big">
  <!-- Small padding on mobile -->
  <!-- Medium padding on tablet+ -->
  <!-- Big padding on laptop+ -->
</div>
```

## Common Patterns

### Responsive Padding

```html
<section space="p:medium tab:p:big desk:p:giant">
  Content with progressive padding
</section>
```

### Responsive Layout

```html
<div layout="flex col tab:row">
  <!-- Stacked on mobile, horizontal on tablet+ -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Responsive Grid

```html
<div
  layout="grid"
  space="g:small tab:g:medium"
  style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));"
>
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Hide on Mobile

```html
<nav layout="hidden tab:flex">
  <!-- Hidden on mobile, flex on tablet+ -->
</nav>
```

### Mobile Navigation

```html
<!-- Mobile menu button -->
<button layout="block tab:hidden">☰ Menu</button>

<!-- Desktop navigation -->
<nav layout="hidden tab:flex" space="g:medium">
  <a>Home</a>
  <a>About</a>
  <a>Contact</a>
</nav>
```

## Full Responsive Example

```html
<div
  layout="flex col lap:row"
  space="p:medium tab:p:big gap:medium tab:gap:big"
>
  <!-- Sidebar -->
  <aside
    space="w:[100%] lap:w:[300px]"
    visual="bg:light"
  >
    Sidebar content
  </aside>
  
  <!-- Main content -->
  <main space="w:[100%] lap:w:[calc(100%-300px)]">
    Main content
  </main>
</div>
```

## Custom Breakpoints

Override in `senangstart.config.js`:

```javascript
export default {
  theme: {
    screens: {
      'mob': '480px',
      'tab': '768px',
      'lap': '1024px',
      'desk': '1280px',
      'wide': '1536px'  // Add custom breakpoint
    }
  }
}
```

Use your custom breakpoint:

```html
<div space="p:big wide:p:giant">
  Extra large padding on wide screens
</div>
```
