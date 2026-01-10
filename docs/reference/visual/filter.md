# Filter

Apply visual filter effects to elements using natural adjective-based utilities.

## Blur

Apply blur effects to elements.

```html
<img visual="blur:none" />    <!-- No blur -->
<img visual="blur:tiny" />    <!-- 2px blur -->
<img visual="blur:small" />   <!-- 4px blur -->
<img visual="blur:medium" />  <!-- 8px blur -->
<img visual="blur:big" />     <!-- 12px blur -->
<img visual="blur:giant" />   <!-- 24px blur -->
<img visual="blur:vast" />    <!-- 48px blur -->
```

### Arbitrary Values

```html
<img visual="blur:[20px]" />
```

## Brightness

Adjust the brightness of elements.

```html
<img visual="brightness:dim" />     <!-- 50% brightness -->
<img visual="brightness:dark" />    <!-- 75% brightness -->
<img visual="brightness:normal" />  <!-- 100% brightness -->
<img visual="brightness:bright" />  <!-- 125% brightness -->
<img visual="brightness:vivid" />   <!-- 150% brightness -->
```

## Contrast

Adjust the contrast of elements.

```html
<img visual="contrast:low" />      <!-- 50% contrast -->
<img visual="contrast:reduced" />  <!-- 75% contrast -->
<img visual="contrast:normal" />   <!-- 100% contrast -->
<img visual="contrast:high" />     <!-- 125% contrast -->
<img visual="contrast:max" />      <!-- 150% contrast -->
```

## Drop Shadow

Add drop shadow effects to elements.

```html
<div visual="drop-shadow:none">...</div>    <!-- No shadow -->
<div visual="drop-shadow:tiny">...</div>    <!-- Minimal shadow -->
<div visual="drop-shadow:small">...</div>   <!-- Subtle shadow -->
<div visual="drop-shadow:medium">...</div>  <!-- Standard shadow -->
<div visual="drop-shadow:big">...</div>     <!-- Large shadow -->
<div visual="drop-shadow:giant">...</div>   <!-- Dramatic shadow -->
```

## Grayscale

Convert elements to grayscale.

```html
<img visual="grayscale:none" />     <!-- Full color -->
<img visual="grayscale:partial" />  <!-- 50% grayscale -->
<img visual="grayscale:full" />     <!-- Full grayscale -->
<img visual="grayscale" />          <!-- Full grayscale (default) -->
```

## Hue Rotate

Rotate the hue of elements.

```html
<img visual="hue-rotate:15" />   <!-- 15 degrees -->
<img visual="hue-rotate:30" />   <!-- 30 degrees -->
<img visual="hue-rotate:60" />   <!-- 60 degrees -->
<img visual="hue-rotate:90" />   <!-- 90 degrees -->
<img visual="hue-rotate:180" />  <!-- 180 degrees -->
```

## Invert

Invert the colors of elements.

```html
<img visual="invert:none" />     <!-- No inversion -->
<img visual="invert:partial" />  <!-- 50% inverted -->
<img visual="invert:full" />     <!-- Fully inverted -->
<img visual="invert" />          <!-- Fully inverted (default) -->
```

## Saturate

Adjust the saturation of elements.

```html
<img visual="saturate:none" />    <!-- No saturation (grayscale) -->
<img visual="saturate:low" />     <!-- 50% saturation -->
<img visual="saturate:normal" />  <!-- 100% saturation -->
<img visual="saturate:high" />    <!-- 150% saturation -->
<img visual="saturate:vivid" />   <!-- 200% saturation -->
```

## Sepia

Apply sepia tone to elements.

```html
<img visual="sepia:none" />     <!-- No sepia -->
<img visual="sepia:partial" />  <!-- 50% sepia -->
<img visual="sepia:full" />     <!-- Full sepia -->
<img visual="sepia" />          <!-- Full sepia (default) -->
```

## Combining Filters

```html
<img 
  visual="blur:small brightness:bright contrast:high" 
  src="photo.jpg" 
/>
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `blur:{scale}` | `filter: blur({value});` |
| `brightness:{scale}` | `filter: brightness({value});` |
| `contrast:{scale}` | `filter: contrast({value});` |
| `drop-shadow:{scale}` | `filter: drop-shadow({value});` |
| `grayscale:{scale}` | `filter: grayscale({value});` |
| `hue-rotate:{deg}` | `filter: hue-rotate({deg}deg);` |
| `invert:{scale}` | `filter: invert({value});` |
| `saturate:{scale}` | `filter: saturate({value});` |
| `sepia:{scale}` | `filter: sepia({value});` |

### Natural Adjective Scales

| Scale | Words |
|-------|-------|
| Blur | `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast` |
| Brightness | `dim`, `dark`, `normal`, `bright`, `vivid` |
| Contrast | `low`, `reduced`, `normal`, `high`, `max` |
| Drop Shadow | `none`, `tiny`, `small`, `medium`, `big`, `giant` |
| Saturate | `none`, `low`, `normal`, `high`, `vivid` |
| Grayscale/Sepia/Invert | `none`, `partial`, `full` |
