# Filter

Apply visual effects like blur, grayscale, and color adjustments to elements.

## Blur

Add blur effect to an element.

```html
<img visual="blur-sm" src="..." />   <!-- 4px blur -->
<img visual="blur" src="..." />      <!-- 8px blur (default) -->
<img visual="blur-md" src="..." />   <!-- 12px blur -->
<img visual="blur-lg" src="..." />   <!-- 16px blur -->
<img visual="blur-xl" src="..." />   <!-- 24px blur -->
<img visual="blur-2xl" src="..." />  <!-- 40px blur -->
<img visual="blur-3xl" src="..." />  <!-- 64px blur -->
<img visual="blur-none" src="..." /> <!-- Remove blur -->
```

### Arbitrary Values

```html
<img visual="blur-[2px]" src="..." />
```

## Brightness

Adjust brightness of an element. Values are percentages (100 = normal).

```html
<img visual="brightness-50" src="..." />  <!-- 50% brightness (darker) -->
<img visual="brightness-75" src="..." />  <!-- 75% brightness -->
<img visual="brightness-100" src="..." /> <!-- Normal -->
<img visual="brightness-125" src="..." /> <!-- 125% brightness -->
<img visual="brightness-150" src="..." /> <!-- 150% brightness (brighter) -->
<img visual="brightness-200" src="..." /> <!-- 200% brightness -->
```

## Contrast

Adjust contrast of an element. Values are percentages (100 = normal).

```html
<img visual="contrast-50" src="..." />  <!-- 50% contrast (less contrast) -->
<img visual="contrast-75" src="..." />  <!-- 75% contrast -->
<img visual="contrast-100" src="..." /> <!-- Normal -->
<img visual="contrast-125" src="..." /> <!-- 125% contrast -->
<img visual="contrast-150" src="..." /> <!-- 150% contrast (more contrast) -->
<img visual="contrast-200" src="..." /> <!-- 200% contrast -->
```

## Drop Shadow

Add drop shadow effect to an element.

```html
<img visual="drop-shadow-sm" src="..." />  <!-- Small shadow -->
<img visual="drop-shadow" src="..." />     <!-- Default shadow -->
<img visual="drop-shadow-md" src="..." />  <!-- Medium shadow -->
<img visual="drop-shadow-lg" src="..." />  <!-- Large shadow -->
<img visual="drop-shadow-xl" src="..." />  <!-- Extra large shadow -->
<img visual="drop-shadow-2xl" src="..." /> <!-- 2XL shadow -->
<img visual="drop-shadow-none" src="..." /><!-- Remove shadow -->
```

## Grayscale

Convert element to grayscale.

```html
<img visual="grayscale" src="..." />    <!-- Full grayscale (100%) -->
<img visual="grayscale-0" src="..." />  <!-- No grayscale (color) -->
<img visual="grayscale-50" src="..." /> <!-- 50% grayscale -->
```

## Hue Rotate

Rotate the hue of an element's colors.

```html
<img visual="hue-rotate-0" src="..." />   <!-- No rotation -->
<img visual="hue-rotate-15" src="..." />  <!-- 15 degrees -->
<img visual="hue-rotate-30" src="..." />  <!-- 30 degrees -->
<img visual="hue-rotate-60" src="..." />  <!-- 60 degrees -->
<img visual="hue-rotate-90" src="..." />  <!-- 90 degrees -->
<img visual="hue-rotate-180" src="..." /> <!-- 180 degrees -->
```

## Invert

Invert the colors of an element.

```html
<img visual="invert" src="..." />    <!-- Full invert (100%) -->
<img visual="invert-0" src="..." />  <!-- No invert -->
<img visual="invert-50" src="..." /> <!-- 50% invert -->
```

## Saturate

Adjust color saturation. Values are percentages (100 = normal).

```html
<img visual="saturate-0" src="..." />   <!-- No saturation (grayscale) -->
<img visual="saturate-50" src="..." />  <!-- 50% saturation -->
<img visual="saturate-100" src="..." /> <!-- Normal -->
<img visual="saturate-150" src="..." /> <!-- 150% saturation -->
<img visual="saturate-200" src="..." /> <!-- 200% saturation (vivid) -->
```

## Sepia

Apply sepia tone effect.

```html
<img visual="sepia" src="..." />    <!-- Full sepia (100%) -->
<img visual="sepia-0" src="..." />  <!-- No sepia -->
<img visual="sepia-50" src="..." /> <!-- 50% sepia -->
```

## Combining Hover States

```html
<img 
  visual="grayscale hover:grayscale-0" 
  src="..." 
/>
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `blur-none` | `filter: blur(0);` |
| `blur-sm` | `filter: blur(4px);` |
| `blur` | `filter: blur(8px);` |
| `blur-md` | `filter: blur(12px);` |
| `blur-lg` | `filter: blur(16px);` |
| `blur-xl` | `filter: blur(24px);` |
| `blur-2xl` | `filter: blur(40px);` |
| `blur-3xl` | `filter: blur(64px);` |
| `brightness-{value}` | `filter: brightness({value/100});` |
| `contrast-{value}` | `filter: contrast({value/100});` |
| `drop-shadow-{size}` | `filter: drop-shadow(...);` |
| `grayscale` | `filter: grayscale(100%);` |
| `grayscale-{value}` | `filter: grayscale({value}%);` |
| `hue-rotate-{deg}` | `filter: hue-rotate({deg}deg);` |
| `invert` | `filter: invert(100%);` |
| `invert-{value}` | `filter: invert({value}%);` |
| `saturate-{value}` | `filter: saturate({value/100});` |
| `sepia` | `filter: sepia(100%);` |
| `sepia-{value}` | `filter: sepia({value}%);` |
