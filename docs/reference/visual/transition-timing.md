# Transition Timing Function

Control the easing of transitions.

## Syntax
```
visual="ease:linear | ease:in | ease:out | ease:in-out"
```

## Values

| Value | CSS Output |
|-------|------------|
| `ease:linear` | `transition-timing-function: linear` |
| `ease:in` | `transition-timing-function: ease-in` |
| `ease:out` | `transition-timing-function: ease-out` |
| `ease:in-out` | `transition-timing-function: ease-in-out` |

## Examples

```html
<div visual="transition ease:linear">...</div>  <!-- Linear -->
<div visual="transition ease:in">...</div>      <!-- Ease in -->
<div visual="transition ease:out">...</div>     <!-- Ease out -->
<div visual="transition ease:in-out">...</div>  <!-- Ease in-out (default) -->
```

## With Duration

```html
<button 
  visual="transition duration:slow ease:in-out bg:primary hover:bg:primary-dark"
>
  Smooth Button
</button>
```
