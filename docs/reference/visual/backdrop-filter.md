# Backdrop Filter

Apply filter effects to the area behind an element, creating frosted glass and blur effects.

## Backdrop Blur

Create frosted glass effects with blur.

```html
<div visual="backdrop-blur:none">...</div>    <!-- No blur -->
<div visual="backdrop-blur:tiny">...</div>    <!-- 2px blur -->
<div visual="backdrop-blur:small">...</div>   <!-- 4px blur -->
<div visual="backdrop-blur:medium">...</div>  <!-- 8px blur -->
<div visual="backdrop-blur:big">...</div>     <!-- 12px blur -->
<div visual="backdrop-blur:giant">...</div>   <!-- 24px blur -->
<div visual="backdrop-blur:vast">...</div>    <!-- 48px blur -->
```

### Glassmorphism Example

```html
<div layout="relative" space="h:[400px]" visual="bg-image:[url('bg.jpg')] bg-size:cover">
  <div 
    layout="absolute" 
    space="inset:4 p:big"
    visual="backdrop-blur:medium bg:[rgba(255,255,255,0.3)] rounded:big"
  >
    <h2 visual="text:white font:bold">Frosted Glass Card</h2>
    <p visual="text:white">Beautiful glassmorphism effect</p>
  </div>
</div>
```

## Backdrop Brightness

Adjust brightness of the backdrop.

```html
<div visual="backdrop-brightness:dim">...</div>     <!-- 50% brightness -->
<div visual="backdrop-brightness:dark">...</div>    <!-- 75% brightness -->
<div visual="backdrop-brightness:normal">...</div>  <!-- 100% brightness -->
<div visual="backdrop-brightness:bright">...</div>  <!-- 125% brightness -->
<div visual="backdrop-brightness:vivid">...</div>   <!-- 150% brightness -->
```

## Backdrop Contrast

Adjust contrast of the backdrop.

```html
<div visual="backdrop-contrast:low">...</div>      <!-- 50% contrast -->
<div visual="backdrop-contrast:reduced">...</div>  <!-- 75% contrast -->
<div visual="backdrop-contrast:normal">...</div>   <!-- 100% contrast -->
<div visual="backdrop-contrast:high">...</div>     <!-- 125% contrast -->
<div visual="backdrop-contrast:max">...</div>      <!-- 150% contrast -->
```

## Backdrop Grayscale

Apply grayscale to the backdrop.

```html
<div visual="backdrop-grayscale:none">...</div>     <!-- Full color -->
<div visual="backdrop-grayscale:partial">...</div>  <!-- 50% grayscale -->
<div visual="backdrop-grayscale:full">...</div>     <!-- Full grayscale -->
<div visual="backdrop-grayscale">...</div>          <!-- Full grayscale (default) -->
```

## Backdrop Hue Rotate

Rotate the hue of the backdrop.

```html
<div visual="backdrop-hue-rotate:15">...</div>   <!-- 15 degrees -->
<div visual="backdrop-hue-rotate:90">...</div>   <!-- 90 degrees -->
<div visual="backdrop-hue-rotate:180">...</div>  <!-- 180 degrees -->
```

## Backdrop Invert

Invert colors of the backdrop.

```html
<div visual="backdrop-invert:none">...</div>     <!-- No inversion -->
<div visual="backdrop-invert:partial">...</div>  <!-- 50% inverted -->
<div visual="backdrop-invert:full">...</div>     <!-- Fully inverted -->
<div visual="backdrop-invert">...</div>          <!-- Fully inverted (default) -->
```

## Backdrop Opacity

Adjust opacity of the backdrop filter.

```html
<div visual="backdrop-opacity:invisible">...</div>  <!-- 0% opacity -->
<div visual="backdrop-opacity:faint">...</div>      <!-- 25% opacity -->
<div visual="backdrop-opacity:half">...</div>       <!-- 50% opacity -->
<div visual="backdrop-opacity:visible">...</div>    <!-- 75% opacity -->
<div visual="backdrop-opacity:solid">...</div>      <!-- 100% opacity -->
```

## Backdrop Saturate

Adjust saturation of the backdrop.

```html
<div visual="backdrop-saturate:none">...</div>    <!-- No saturation -->
<div visual="backdrop-saturate:low">...</div>     <!-- 50% saturation -->
<div visual="backdrop-saturate:normal">...</div>  <!-- 100% saturation -->
<div visual="backdrop-saturate:high">...</div>    <!-- 150% saturation -->
<div visual="backdrop-saturate:vivid">...</div>   <!-- 200% saturation -->
```

## Backdrop Sepia

Apply sepia tone to the backdrop.

```html
<div visual="backdrop-sepia:none">...</div>     <!-- No sepia -->
<div visual="backdrop-sepia:partial">...</div>  <!-- 50% sepia -->
<div visual="backdrop-sepia:full">...</div>     <!-- Full sepia -->
<div visual="backdrop-sepia">...</div>          <!-- Full sepia (default) -->
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `backdrop-blur:{scale}` | `backdrop-filter: blur({value});` |
| `backdrop-brightness:{scale}` | `backdrop-filter: brightness({value});` |
| `backdrop-contrast:{scale}` | `backdrop-filter: contrast({value});` |
| `backdrop-grayscale:{scale}` | `backdrop-filter: grayscale({value});` |
| `backdrop-hue-rotate:{deg}` | `backdrop-filter: hue-rotate({deg}deg);` |
| `backdrop-invert:{scale}` | `backdrop-filter: invert({value});` |
| `backdrop-opacity:{scale}` | `backdrop-filter: opacity({value});` |
| `backdrop-saturate:{scale}` | `backdrop-filter: saturate({value});` |
| `backdrop-sepia:{scale}` | `backdrop-filter: sepia({value});` |

### Natural Adjective Scales

| Scale | Words |
|-------|-------|
| Blur | `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast` |
| Brightness | `dim`, `dark`, `normal`, `bright`, `vivid` |
| Contrast | `low`, `reduced`, `normal`, `high`, `max` |
| Opacity | `invisible`, `faint`, `half`, `visible`, `solid` |
| Saturate | `none`, `low`, `normal`, `high`, `vivid` |
| Grayscale/Sepia/Invert | `none`, `partial`, `full` |
