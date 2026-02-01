# Configuration

Customize SenangStart CSS with `senangstart.config.js`.

## Creating a Config File

Run the init command to create a config file:

```bash
senangstart init
```

Or create it manually:

```javascript
// senangstart.config.js
export default {
  // Files to scan for SenangStart attributes
  content: [
    './**/*.html',
    './src/**/*.{html,jsx,tsx,vue,svelte}',
    './components/**/*.{html,jsx,tsx}'
  ],

  // Output configuration
  output: {
    css: './public/senangstart.css',
    minify: true,
    aiContext: './.cursorrules',
    typescript: './types/senang.d.ts'
  },

  // Theme customization
  theme: {
    // Your overrides here
  }
}
```

## Content Patterns

Specify which files to scan:

```javascript
content: [
  './**/*.html',           // All HTML files
  './src/**/*.jsx',        // React components
  './pages/**/*.vue',      // Vue pages
  './components/**/*.svelte'
]
```

## Output Options

| Option | Description | Default |
|--------|-------------|---------|
| `css` | Output CSS path | `./public/senangstart.css` |
| `minify` | Minify output | `false` |
| `aiContext` | AI context file path | `./.cursorrules` |
| `typescript` | TypeScript definitions path | `./types/senang.d.ts` |

## Theme Customization

### Custom Spacing

```javascript
theme: {
  spacing: {
    'tiny': '2px',       // Override existing
    'huge': '256px',     // Add new scale
    'massive': '512px'
  }
}
```

### Custom Colors

```javascript
theme: {
  colors: {
    'brand': '#38BDF8',
    'accent': '#EC4899',
    'custom': '#FF5733'
  }
}
```

### Custom Breakpoints

```javascript
theme: {
  screens: {
    'mob': '480px',
    'tab': '768px',
    'lap': '1024px',
    'desk': '1280px',
    'wide': '1536px'    // Add wider breakpoint
  }
}
```

### Custom Shadows

```javascript
theme: {
  shadow: {
    'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
    'inset': 'inset 0 2px 4px rgba(0,0,0,0.1)'
  }
}
```

## Full Example

```javascript
export default {
  content: [
    './src/**/*.{html,jsx,tsx}',
    './components/**/*.vue'
  ],

  output: {
    css: './dist/styles.css',
    minify: true,
    aiContext: './.cursorrules',
    typescript: './src/types/senang.d.ts'
  },

  theme: {
    spacing: {
      'huge': '256px'
    },
    colors: {
      'brand': '#38BDF8',
      'accent': '#EC4899'
    },
    screens: {
      'wide': '1536px'
    }
  }
}
```

## Using Custom Values

After configuring, use your custom scales:

```html
<div space="p:huge">Custom huge padding</div>
<div visual="bg:brand text:accent">Custom colors</div>
<div space="tab:p:big wide:p:huge">Custom breakpoint</div>
```
