# Animation

Apply pre-built CSS animations with natural adjective-based timing controls.

## Syntax
```
visual="animate:[animation]"
visual="animation-duration:[value]"
visual="animation-delay:[value]"
```

## Built-in Animations

### Spin

Add a spinning animation, useful for loading indicators.

```html
<div visual="animate:spin" space="w:big h:big">
  <svg>...</svg>
</div>
```

### Ping

Create a ping effect that radiates outward, great for notification badges.

```html
<span layout="relative inline-flex">
  <span visual="animate:ping bg:red-400 opacity:75" layout="absolute inline-flex" space="h:full w:full rounded:full"></span>
  <span visual="bg:red-500 rounded:full" space="h:small w:small"></span>
</span>
```

### Pulse

Add a subtle pulsing fade effect.

```html
<div visual="animate:pulse bg:gray-200" space="h:medium w:giant rounded:small"></div>
```

### Bounce

Add a bouncing animation for attention-grabbing elements.

```html
<div visual="animate:bounce" space="w:big h:big">
  ↓
</div>
```

### No Animation

Remove animation from an element.

```html
<div visual="animate:none">...</div>
```

## Animation Duration

Control how long the animation takes using natural words.

```html
<div visual="animate:spin animation-duration:instant">...</div>  <!-- 75ms -->
<div visual="animate:spin animation-duration:quick">...</div>    <!-- 100ms -->
<div visual="animate:spin animation-duration:fast">...</div>     <!-- 150ms -->
<div visual="animate:spin animation-duration:normal">...</div>   <!-- 200ms -->
<div visual="animate:spin animation-duration:slow">...</div>     <!-- 300ms -->
<div visual="animate:spin animation-duration:slower">...</div>   <!-- 500ms -->
<div visual="animate:spin animation-duration:lazy">...</div>     <!-- 700ms -->
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

## Animation Delay

Add a delay before the animation starts.

```html
<div visual="animate:pulse animation-delay:quick">...</div>   <!-- 100ms delay -->
<div visual="animate:pulse animation-delay:normal">...</div>  <!-- 200ms delay -->
<div visual="animate:pulse animation-delay:slow">...</div>    <!-- 300ms delay -->
```

## Animation Iteration Count

Control how many times the animation repeats.

```html
<div visual="animate:bounce animation-iteration:1">...</div>        <!-- Once -->
<div visual="animate:bounce animation-iteration:2">...</div>        <!-- Twice -->
<div visual="animate:bounce animation-iteration:infinite">...</div> <!-- Forever -->
```

## Animation Direction

Control the direction of the animation.

```html
<div visual="animate:spin animation-direction:normal">...</div>            <!-- Normal -->
<div visual="animate:spin animation-direction:reverse">...</div>           <!-- Reverse -->
<div visual="animate:spin animation-direction:alternate">...</div>         <!-- Alternate -->
<div visual="animate:spin animation-direction:alternate-reverse">...</div> <!-- Alternate Reverse -->
```

## Animation Fill Mode

Control the element's style before and after the animation.

```html
<div visual="animate:bounce animation-fill:none">...</div>      <!-- None -->
<div visual="animate:bounce animation-fill:forwards">...</div>  <!-- Forwards -->
<div visual="animate:bounce animation-fill:backwards">...</div> <!-- Backwards -->
<div visual="animate:bounce animation-fill:both">...</div>      <!-- Both -->
```

## Animation Play State

Pause or play an animation.

```html
<div visual="animate:spin animation-play:running">...</div> <!-- Running -->
<div visual="animate:spin animation-play:paused">...</div>  <!-- Paused -->
<div visual="animate:spin hover:animation-play:paused">...</div> <!-- Pause on hover -->
```

## Skeleton Loading Example

```html
<div layout="flex" space="g:medium">
  <!-- Avatar skeleton -->
  <div visual="animate:pulse bg:gray-200 rounded:full" space="w:giant h:giant"></div>
  
  <!-- Text skeleton -->
  <div layout="flex col" space="g:small flex:1">
    <div visual="animate:pulse bg:gray-200 rounded:small" space="h:medium w:[75%]"></div>
    <div visual="animate:pulse bg:gray-200 rounded:small" space="h:medium w:[50%]"></div>
  </div>
</div>
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `animate:spin` | `animation: spin 1s linear infinite;` |
| `animate:ping` | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;` |
| `animate:pulse` | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;` |
| `animate:bounce` | `animation: bounce 1s infinite;` |
| `animate:none` | `animation: none;` |
| `animation-duration:{word}` | `animation-duration: {time};` |
| `animation-delay:{word}` | `animation-delay: {time};` |
| `animation-iteration:{n}` | `animation-iteration-count: {n};` |
| `animation-direction:{dir}` | `animation-direction: {dir};` |
| `animation-fill:{mode}` | `animation-fill-mode: {mode};` |
| `animation-play:{state}` | `animation-play-state: {state};` |
