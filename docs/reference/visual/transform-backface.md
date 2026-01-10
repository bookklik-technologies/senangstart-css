# Backface Visibility

Control whether the back face of an element is visible when rotated.

## Syntax
```
visual="backface:visible | backface:hidden"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backface:visible` | `backface-visibility: visible` |
| `backface:hidden` | `backface-visibility: hidden` |

## Examples

```html
<div visual="backface:visible">...</div> <!-- Back face is visible -->
<div visual="backface:hidden">...</div>  <!-- Back face is hidden -->
```

## Flip Card Example

```html
<div 
  layout="relative" 
  visual="perspective:medium" 
  space="w:[256px] h:[160px]"
>
  <div 
    layout="absolute inset:0" 
    visual="transition duration:slow transform-style:preserve-3d hover:rotate:[180deg]"
  >
    <!-- Front -->
    <div 
      layout="absolute inset:0" 
      visual="backface:hidden bg:blue-500 rounded:big"
      space="p:medium"
    >
      Front Side
    </div>
    
    <!-- Back -->
    <div 
      layout="absolute inset:0" 
      visual="backface:hidden bg:green-500 rounded:big rotate:[180deg]"
      space="p:medium"
    >
      Back Side
    </div>
  </div>
</div>
```
