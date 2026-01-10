# Transform

Apply 2D and 3D transformations to elements including scale, rotate, translate, and skew.

## Scale

Resize elements proportionally.

```html
<img visual="scale:0" />   <!-- scale(0) - invisible -->
<img visual="scale:50" />  <!-- scale(0.5) - half size -->
<img visual="scale:75" />  <!-- scale(0.75) -->
<img visual="scale:90" />  <!-- scale(0.9) -->
<img visual="scale:95" />  <!-- scale(0.95) -->
<img visual="scale:100" /> <!-- scale(1) - normal -->
<img visual="scale:105" /> <!-- scale(1.05) -->
<img visual="scale:110" /> <!-- scale(1.1) -->
<img visual="scale:125" /> <!-- scale(1.25) -->
<img visual="scale:150" /> <!-- scale(1.5) -->
```

### Scale X / Y Independently

```html
<img visual="scale-x:50" />  <!-- scaleX(0.5) -->
<img visual="scale-y:150" /> <!-- scaleY(1.5) -->
```

### Hover Scale Effect

```html
<img 
  visual="transition scale:100 hover:scale:110" 
  src="..." 
/>
```

## Rotate

Rotate elements clockwise or counter-clockwise.

```html
<img visual="rotate:0" />   <!-- No rotation -->
<img visual="rotate:1" />   <!-- 1deg -->
<img visual="rotate:2" />   <!-- 2deg -->
<img visual="rotate:3" />   <!-- 3deg -->
<img visual="rotate:6" />   <!-- 6deg -->
<img visual="rotate:12" />  <!-- 12deg -->
<img visual="rotate:45" />  <!-- 45deg -->
<img visual="rotate:90" />  <!-- 90deg -->
<img visual="rotate:180" /> <!-- 180deg -->
```

### Negative Rotation

Use negative values with arbitrary syntax:

```html
<img visual="rotate:[-45deg]" /> <!-- -45deg -->
```

### Arbitrary Values

```html
<img visual="rotate:[17deg]" />
<img visual="rotate:[0.5turn]" />
```

## Translate

Move elements horizontally or vertically.

### Using Spacing Scale

```html
<div visual="translate-x:small" />   <!-- translateX(var(--s-small)) -->
<div visual="translate-x:medium" />  <!-- translateX(var(--s-medium)) -->
<div visual="translate-y:big" />     <!-- translateY(var(--s-big)) -->
```

### Using Fractions

```html
<div visual="translate-x:1/2" />   <!-- translateX(50%) -->
<div visual="translate-y:1/4" />   <!-- translateY(25%) -->
<div visual="translate-x:full" />  <!-- translateX(100%) -->
```

### Negative Translation

```html
<div visual="-translate-x:medium" />  <!-- translateX(calc(var(--s-medium) * -1)) -->
<div visual="-translate-y:1/2" />     <!-- translateY(-50%) -->
<div visual="-translate-x:full" />    <!-- translateX(-100%) -->
```

### Arbitrary Values

```html
<div visual="translate-x:[100px]" />
<div visual="translate-y:[-50%]" />
```

## Skew

Tilt elements along the X or Y axis.

```html
<div visual="skew-x:0" />  <!-- skewX(0deg) -->
<div visual="skew-x:1" />  <!-- skewX(1deg) -->
<div visual="skew-x:2" />  <!-- skewX(2deg) -->
<div visual="skew-x:3" />  <!-- skewX(3deg) -->
<div visual="skew-x:6" />  <!-- skewX(6deg) -->
<div visual="skew-x:12" /> <!-- skewX(12deg) -->

<div visual="skew-y:3" />  <!-- skewY(3deg) -->
<div visual="skew-y:6" />  <!-- skewY(6deg) -->
```

### Negative Skew

```html
<div visual="-skew-x:6" />  <!-- skewX(-6deg) -->
<div visual="-skew-y:12" /> <!-- skewY(-12deg) -->
```

## Transform Origin

Set the origin point for transformations.

```html
<img visual="origin:center" />       <!-- center (default) -->
<img visual="origin:top" />          <!-- top -->
<img visual="origin:top-right" />    <!-- top right -->
<img visual="origin:right" />        <!-- right -->
<img visual="origin:bottom-right" /> <!-- bottom right -->
<img visual="origin:bottom" />       <!-- bottom -->
<img visual="origin:bottom-left" />  <!-- bottom left -->
<img visual="origin:left" />         <!-- left -->
<img visual="origin:top-left" />     <!-- top left -->
```

### Arbitrary Values

```html
<img visual="origin:[33%_75%]" />
```

## Combining Transforms

When using multiple transforms, combine them with hover states:

```html
<div 
  visual="
    transition
    scale:100 
    rotate:0
    hover:scale:110 
    hover:rotate:3
  "
>
  Hover to transform
</div>
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `scale:{n}` | `transform: scale({n/100});` |
| `scale-x:{n}` | `transform: scaleX({n/100});` |
| `scale-y:{n}` | `transform: scaleY({n/100});` |
| `rotate:{deg}` | `transform: rotate({deg}deg);` |
| `translate-x:{value}` | `transform: translateX({value});` |
| `translate-y:{value}` | `transform: translateY({value});` |
| `-translate-x:{value}` | `transform: translateX(-{value});` |
| `-translate-y:{value}` | `transform: translateY(-{value});` |
| `skew-x:{deg}` | `transform: skewX({deg}deg);` |
| `skew-y:{deg}` | `transform: skewY({deg}deg);` |
| `-skew-x:{deg}` | `transform: skewX(-{deg}deg);` |
| `-skew-y:{deg}` | `transform: skewY(-{deg}deg);` |
| `origin:{position}` | `transform-origin: {position};` |
