# Transition Property

Control which CSS properties to transition.

## Syntax
```
visual="transition | transition:all | transition:colors | transition:opacity | transition:shadow | transition:transform | transition-none"
```

## Values

| Value | CSS Output |
|-------|------------|
| `transition` | Default transitioning properties |
| `transition:all` | `transition-property: all` |
| `transition:colors` | `transition-property: color, background-color, border-color, fill, stroke` |
| `transition:opacity` | `transition-property: opacity` |
| `transition:shadow` | `transition-property: box-shadow` |
| `transition:transform` | `transition-property: transform` |
| `transition-none` | `transition-property: none` |

## Examples

```html
<div visual="transition">...</div>           <!-- Default properties -->
<div visual="transition:all">...</div>       <!-- All properties -->
<div visual="transition:colors">...</div>    <!-- Color-related only -->
<div visual="transition:opacity">...</div>   <!-- Opacity only -->
<div visual="transition:shadow">...</div>    <!-- Box shadow only -->
<div visual="transition:transform">...</div> <!-- Transform only -->
<div visual="transition-none">...</div>      <!-- No transition -->
```

## Basic Usage

```html
<button 
  visual="transition bg:blue-500 hover:bg:blue-700" 
  space="p-x:medium p-y:small"
>
  Hover me
</button>
```
