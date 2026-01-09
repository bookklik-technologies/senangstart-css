# Dark Mode

Add dark mode styling with the `dark:` prefix, similar to Tailwind CSS.

## Configuration

By default, dark mode uses the `media` strategy based on system preferences. You can change this in your config:

```js
// senangstart.config.js
export default {
  // Option 1: System preference (default)
  darkMode: 'media',
  
  // Option 2: Class-based toggle
  darkMode: 'selector',  // Uses .dark class
  
  // Option 3: Custom selector
  darkMode: ['selector', '[data-theme="dark"]']
}
```

For CDN usage:
```html
<script type="senangstart/config">
{
  "darkMode": "selector"
}
</script>
```

## Basic Usage

Add dark mode styles using the `dark:` prefix:

```html
<div visual="bg:white dark:bg:slate-900 text:dark dark:text:white">
  This adapts to dark mode
</div>
```

## Strategy Comparison

### Media Strategy (Default)

Automatically follows the user's OS preference:

```css
/* Generated CSS */
@media (prefers-color-scheme: dark) {
  [visual~="dark:bg:slate-900"] { background-color: var(--c-slate-900); }
}
```

No JavaScript required. Respects system settings automatically.

### Selector Strategy

Manual control via `.dark` class:

```css
/* Generated CSS */
.dark [visual~="dark:bg:slate-900"] { background-color: var(--c-slate-900); }
```

Toggle with JavaScript:
```js
document.documentElement.classList.toggle('dark');
```

## Common Patterns

### Card with Dark Mode

```html
<div
  layout="flex col"
  space="p:medium g:small"
  visual="
    bg:white dark:bg:slate-800
    rounded:big
    shadow:medium dark:shadow:none
    border:gray-200 dark:border:slate-700
    border-w:[1px]
  "
>
  <h3 visual="text:dark dark:text:white font:bold">Card Title</h3>
  <p visual="text:grey dark:text:gray-400">Description text</p>
</div>
```

### Button with Dark Mode

```html
<button
  space="p-x:big p-y:small"
  visual="
    bg:primary dark:bg:blue-500
    text:white
    rounded:medium
    hover:bg:blue-700 dark:hover:bg:blue-400
  "
>
  Submit
</button>
```

### Navigation

```html
<nav 
  layout="flex between"
  space="p:medium"
  visual="bg:white dark:bg:slate-900"
>
  <a visual="text:dark dark:text:white hover:text:primary">Home</a>
  <a visual="text:grey dark:text:gray-400 hover:text:primary">About</a>
</nav>
```

## Toggle Implementation

For the selector strategy, implement a toggle:

```html
<button onclick="toggleDarkMode()">
  <span visual="dark:hidden">🌙</span>
  <span visual="hidden dark:inline">☀️</span>
</button>

<script>
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  // Optionally save preference
  localStorage.setItem('theme', 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
}

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
</script>
```

## Tips

- Use semantic color names like `slate`, `gray`, `zinc` for dark backgrounds
- Dark text on light, light text on dark: `text:dark dark:text:white`
- Reduce shadows in dark mode: `shadow:medium dark:shadow:none`
- Subtle borders often look better in dark mode
