# Scale

Resize elements proportionally.

## Syntax
```
visual="scale:50 | scale:100 | scale:110 | scale-x:50 | scale-y:150"
```

## Values

| Value | CSS Output |
|-------|------------|
| `scale:0` | `transform: scale(0)` |
| `scale:50` | `transform: scale(0.5)` |
| `scale:75` | `transform: scale(0.75)` |
| `scale:90` | `transform: scale(0.9)` |
| `scale:95` | `transform: scale(0.95)` |
| `scale:100` | `transform: scale(1)` |
| `scale:105` | `transform: scale(1.05)` |
| `scale:110` | `transform: scale(1.1)` |
| `scale:125` | `transform: scale(1.25)` |
| `scale:150` | `transform: scale(1.5)` |

## Examples

```html
<img visual="scale:0" />   <!-- invisible -->
<img visual="scale:50" />  <!-- half size -->
<img visual="scale:100" /> <!-- normal -->
<img visual="scale:150" /> <!-- 1.5x size -->
```

## Scale X / Y Independently

```html
<img visual="scale-x:50" />  <!-- scaleX(0.5) -->
<img visual="scale-y:150" /> <!-- scaleY(1.5) -->
```

## Hover Scale Effect

```html
<img 
  visual="transition scale:100 hover:scale:110" 
  src="..." 
/>
```
