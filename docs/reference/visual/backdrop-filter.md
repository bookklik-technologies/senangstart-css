# Backdrop Filter

Apply visual effects to the area behind an element, creating glassmorphism and frosted glass effects.

## Backdrop Blur

Apply blur to the backdrop (content behind the element).

```html
<div visual="backdrop-blur-sm bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 4px blur -->
<div visual="backdrop-blur bg-[rgba(255,255,255,0.5)]">...</div>      <!-- 8px blur (default) -->
<div visual="backdrop-blur-md bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 12px blur -->
<div visual="backdrop-blur-lg bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 16px blur -->
<div visual="backdrop-blur-xl bg-[rgba(255,255,255,0.5)]">...</div>   <!-- 24px blur -->
<div visual="backdrop-blur-2xl bg-[rgba(255,255,255,0.5)]">...</div>  <!-- 40px blur -->
<div visual="backdrop-blur-3xl bg-[rgba(255,255,255,0.5)]">...</div>  <!-- 64px blur -->
<div visual="backdrop-blur-none bg-[rgba(255,255,255,0.5)]">...</div> <!-- Remove blur -->
```

::: tip Glassmorphism
Use `backdrop-blur` with a semi-transparent background for modern glassmorphism effects.
:::

## Backdrop Brightness

Adjust brightness of the backdrop.

```html
<div visual="backdrop-brightness-50">...</div>  <!-- 50% brightness -->
<div visual="backdrop-brightness-75">...</div>  <!-- 75% brightness -->
<div visual="backdrop-brightness-100">...</div> <!-- Normal -->
<div visual="backdrop-brightness-125">...</div> <!-- 125% brightness -->
<div visual="backdrop-brightness-150">...</div> <!-- 150% brightness -->
```

## Backdrop Contrast

Adjust contrast of the backdrop.

```html
<div visual="backdrop-contrast-50">...</div>  <!-- 50% contrast -->
<div visual="backdrop-contrast-75">...</div>  <!-- 75% contrast -->
<div visual="backdrop-contrast-100">...</div> <!-- Normal -->
<div visual="backdrop-contrast-125">...</div> <!-- 125% contrast -->
<div visual="backdrop-contrast-150">...</div> <!-- 150% contrast -->
```

## Backdrop Grayscale

Convert backdrop to grayscale.

```html
<div visual="backdrop-grayscale">...</div>    <!-- Full grayscale -->
<div visual="backdrop-grayscale-0">...</div>  <!-- No grayscale -->
<div visual="backdrop-grayscale-50">...</div> <!-- 50% grayscale -->
```

## Backdrop Hue Rotate

Rotate the hue of the backdrop colors.

```html
<div visual="backdrop-hue-rotate-0">...</div>   <!-- No rotation -->
<div visual="backdrop-hue-rotate-15">...</div>  <!-- 15 degrees -->
<div visual="backdrop-hue-rotate-30">...</div>  <!-- 30 degrees -->
<div visual="backdrop-hue-rotate-60">...</div>  <!-- 60 degrees -->
<div visual="backdrop-hue-rotate-90">...</div>  <!-- 90 degrees -->
<div visual="backdrop-hue-rotate-180">...</div> <!-- 180 degrees -->
```

## Backdrop Invert

Invert the colors of the backdrop.

```html
<div visual="backdrop-invert">...</div>    <!-- Full invert -->
<div visual="backdrop-invert-0">...</div>  <!-- No invert -->
<div visual="backdrop-invert-50">...</div> <!-- 50% invert -->
```

## Backdrop Opacity

Adjust opacity of the backdrop.

```html
<div visual="backdrop-opacity-0">...</div>   <!-- Fully transparent -->
<div visual="backdrop-opacity-25">...</div>  <!-- 25% opacity -->
<div visual="backdrop-opacity-50">...</div>  <!-- 50% opacity -->
<div visual="backdrop-opacity-75">...</div>  <!-- 75% opacity -->
<div visual="backdrop-opacity-100">...</div> <!-- Fully opaque -->
```

## Backdrop Saturate

Adjust saturation of the backdrop.

```html
<div visual="backdrop-saturate-0">...</div>   <!-- No saturation -->
<div visual="backdrop-saturate-50">...</div>  <!-- 50% saturation -->
<div visual="backdrop-saturate-100">...</div> <!-- Normal -->
<div visual="backdrop-saturate-150">...</div> <!-- 150% saturation -->
<div visual="backdrop-saturate-200">...</div> <!-- 200% saturation -->
```

## Backdrop Sepia

Apply sepia tone to the backdrop.

```html
<div visual="backdrop-sepia">...</div>    <!-- Full sepia -->
<div visual="backdrop-sepia-0">...</div>  <!-- No sepia -->
<div visual="backdrop-sepia-50">...</div> <!-- 50% sepia -->
```

## Glassmorphism Example

```html
<div 
  layout="relative" 
  space="p-8" 
  visual="bg-image-[url('background.jpg')] bg-size-cover"
>
  <div 
    layout="absolute inset-0" 
    visual="backdrop-blur-lg bg-[rgba(255,255,255,0.3)]"
  >
    <h2 visual="text-white font-bold">Frosted Glass Card</h2>
    <p visual="text-white">This content appears over a blurred background.</p>
  </div>
</div>
```

## Reference

| Token | CSS Output |
|-------|-----------|
| `backdrop-blur-none` | `backdrop-filter: blur(0);` |
| `backdrop-blur-sm` | `backdrop-filter: blur(4px);` |
| `backdrop-blur` | `backdrop-filter: blur(8px);` |
| `backdrop-blur-md` | `backdrop-filter: blur(12px);` |
| `backdrop-blur-lg` | `backdrop-filter: blur(16px);` |
| `backdrop-blur-xl` | `backdrop-filter: blur(24px);` |
| `backdrop-blur-2xl` | `backdrop-filter: blur(40px);` |
| `backdrop-blur-3xl` | `backdrop-filter: blur(64px);` |
| `backdrop-brightness-{value}` | `backdrop-filter: brightness({value/100});` |
| `backdrop-contrast-{value}` | `backdrop-filter: contrast({value/100});` |
| `backdrop-grayscale` | `backdrop-filter: grayscale(100%);` |
| `backdrop-grayscale-{value}` | `backdrop-filter: grayscale({value}%);` |
| `backdrop-hue-rotate-{deg}` | `backdrop-filter: hue-rotate({deg}deg);` |
| `backdrop-invert` | `backdrop-filter: invert(100%);` |
| `backdrop-invert-{value}` | `backdrop-filter: invert({value}%);` |
| `backdrop-opacity-{value}` | `backdrop-filter: opacity({value/100});` |
| `backdrop-saturate-{value}` | `backdrop-filter: saturate({value/100});` |
| `backdrop-sepia` | `backdrop-filter: sepia(100%);` |
| `backdrop-sepia-{value}` | `backdrop-filter: sepia({value}%);` |
