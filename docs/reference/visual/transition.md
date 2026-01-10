# Transition

Control the transition of CSS properties using natural adjective-based durations.

## Syntax
```
visual="transition:[value]"
```

## Basic Usage

Add transitions to enable smooth state changes on hover, focus, and other interactions.

```html
<button 
  visual="transition bg:blue-500 hover:bg:blue-700" 
  space="p-x:medium p-y:small"
>
  Hover me
</button>
```

## Transition Property

Control which CSS properties to transition.

```html
<div visual="transition">...</div>           <!-- Default properties -->
<div visual="transition:all">...</div>       <!-- All properties -->
<div visual="transition:colors">...</div>    <!-- Color-related only -->
<div visual="transition:opacity">...</div>   <!-- Opacity only -->
<div visual="transition:shadow">...</div>    <!-- Box shadow only -->
<div visual="transition:transform">...</div> <!-- Transform only -->
<div visual="transition-none">...</div>      <!-- No transition -->
```

## Duration

Control the duration of transitions using natural words.

```html
<div visual="transition duration:instant">...</div>  <!-- 75ms - Nearly instant -->
<div visual="transition duration:quick">...</div>    <!-- 100ms - Quick snap -->
<div visual="transition duration:fast">...</div>     <!-- 150ms - Fast response -->
<div visual="transition duration:normal">...</div>   <!-- 200ms - Standard feel -->
<div visual="transition duration:slow">...</div>     <!-- 300ms - Noticeable -->
<div visual="transition duration:slower">...</div>   <!-- 500ms - Deliberate -->
<div visual="transition duration:lazy">...</div>     <!-- 700ms - Relaxed -->
```

### Duration Scale Reference

| Word | Time | Feel |
|------|------|------|
| `instant` | 75ms | Barely perceptible |
| `quick` | 100ms | Snappy |
| `fast` | 150ms | Responsive |
| `normal` | 200ms | **Default**, balanced |
| `slow` | 300ms | Smooth, noticeable |
| `slower` | 500ms | Deliberate, elegant |
| `lazy` | 700ms | Relaxed, dramatic |

### Arbitrary Values

```html
<div visual="transition duration:[2000ms]">...</div>
<div visual="transition duration:[0.5s]">...</div>
```

## Timing Function

Control the easing of transitions.

```html
<div visual="transition ease:linear">...</div>  <!-- Linear -->
<div visual="transition ease:in">...</div>      <!-- Ease in -->
<div visual="transition ease:out">...</div>     <!-- Ease out -->
<div visual="transition ease:in-out">...</div>  <!-- Ease in-out (default) -->
```

## Delay

Control the delay before a transition starts using natural words.

```html
<div visual="transition delay:instant">...</div>  <!-- 75ms delay -->
<div visual="transition delay:quick">...</div>    <!-- 100ms delay -->
<div visual="transition delay:fast">...</div>     <!-- 150ms delay -->
<div visual="transition delay:normal">...</div>   <!-- 200ms delay -->
<div visual="transition delay:slow">...</div>     <!-- 300ms delay -->
<div visual="transition delay:slower">...</div>   <!-- 500ms delay -->
<div visual="transition delay:lazy">...</div>     <!-- 700ms delay -->
```

### Arbitrary Delay

```html
<div visual="transition delay:[1s]">...</div>
```

## Complete Example

```html
<button 
  visual="
    transition 
    duration:slow 
    ease:in-out
    bg:primary 
    hover:bg:primary-dark
    scale:100 
    hover:scale:105
  " 
  space="p-x:big p-y:medium"
>
  Animated Button
</button>
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `transition` | Transition with 150ms default duration |
| `transition:all` | `transition-property: all;` |
| `transition:colors` | `transition-property: color, background-color, ...;` |
| `transition-none` | `transition-property: none;` |
| `duration:{word}` | `transition-duration: {time};` |
| `ease:{type}` | `transition-timing-function: {easing};` |
| `delay:{word}` | `transition-delay: {time};` |
