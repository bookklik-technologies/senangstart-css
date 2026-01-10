# 3D Transform

Advanced utilities for 3D transformations including perspective, backface visibility, and transform style.

## Perspective

Control the perspective distance for 3D transforms using natural adjectives.

```html
<div visual="perspective:none">...</div>    <!-- No perspective -->
<div visual="perspective:small">...</div>   <!-- 250px - Dramatic 3D -->
<div visual="perspective:medium">...</div>  <!-- 500px - Standard 3D -->
<div visual="perspective:big">...</div>     <!-- 750px - Subtle 3D -->
<div visual="perspective:giant">...</div>   <!-- 1000px - Very subtle -->
<div visual="perspective:vast">...</div>    <!-- 1500px - Near flat -->
```

### Perspective Scale Reference

| Word | Distance | Effect |
|------|----------|--------|
| `none` | - | No 3D perspective |
| `small` | 250px | Very dramatic 3D effect |
| `medium` | 500px | **Default**, balanced 3D |
| `big` | 750px | Subtle 3D effect |
| `giant` | 1000px | Very subtle 3D |
| `vast` | 1500px | Nearly flat appearance |

### Arbitrary Values

```html
<div visual="perspective:[800px]">...</div>
```

## Perspective Origin

Set the vanishing point for 3D transforms.

```html
<div visual="perspective-origin:center">...</div>       <!-- center (default) -->
<div visual="perspective-origin:top">...</div>          <!-- top -->
<div visual="perspective-origin:top-right">...</div>    <!-- top right -->
<div visual="perspective-origin:right">...</div>        <!-- right -->
<div visual="perspective-origin:bottom-right">...</div> <!-- bottom right -->
<div visual="perspective-origin:bottom">...</div>       <!-- bottom -->
<div visual="perspective-origin:bottom-left">...</div>  <!-- bottom left -->
<div visual="perspective-origin:left">...</div>         <!-- left -->
<div visual="perspective-origin:top-left">...</div>     <!-- top left -->
```

## Transform Style

Control whether children elements are positioned in 3D space.

```html
<!-- Children are flattened to the parent's plane -->
<div visual="transform-style:flat">
  <div visual="rotate:[60deg]">Flattened</div>
</div>

<!-- Children preserve their 3D position -->
<div visual="transform-style:preserve-3d">
  <div visual="rotate:[60deg]">3D Preserved</div>
</div>
```

## Backface Visibility

Control whether the back face of an element is visible when rotated.

```html
<div visual="backface:visible">...</div> <!-- Back face is visible -->
<div visual="backface:hidden">...</div>  <!-- Back face is hidden -->
```

### Flip Card Example

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

## Reference

| Token | CSS Output |
|-------|-----------|
| `perspective:none` | `perspective: none;` |
| `perspective:small` | `perspective: 250px;` |
| `perspective:medium` | `perspective: 500px;` |
| `perspective:big` | `perspective: 750px;` |
| `perspective:giant` | `perspective: 1000px;` |
| `perspective:vast` | `perspective: 1500px;` |
| `perspective-origin:{pos}` | `perspective-origin: {pos};` |
| `transform-style:flat` | `transform-style: flat;` |
| `transform-style:preserve-3d` | `transform-style: preserve-3d;` |
| `backface:visible` | `backface-visibility: visible;` |
| `backface:hidden` | `backface-visibility: hidden;` |
