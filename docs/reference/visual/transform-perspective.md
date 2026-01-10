# Perspective

Control the perspective distance for 3D transforms using natural adjectives.

## Syntax
```
visual="perspective:none | perspective:small | perspective:medium | perspective:big | perspective:giant | perspective:vast"
```

## Values

| Value | Distance | Effect |
|-------|----------|--------|
| `perspective:none` | - | No 3D perspective |
| `perspective:small` | 250px | Very dramatic 3D effect |
| `perspective:medium` | 500px | **Default**, balanced 3D |
| `perspective:big` | 750px | Subtle 3D effect |
| `perspective:giant` | 1000px | Very subtle 3D |
| `perspective:vast` | 1500px | Nearly flat appearance |

## Examples

```html
<div visual="perspective:none">...</div>    <!-- No perspective -->
<div visual="perspective:small">...</div>   <!-- 250px - Dramatic 3D -->
<div visual="perspective:medium">...</div>  <!-- 500px - Standard 3D -->
<div visual="perspective:big">...</div>     <!-- 750px - Subtle 3D -->
<div visual="perspective:giant">...</div>   <!-- 1000px - Very subtle -->
<div visual="perspective:vast">...</div>    <!-- 1500px - Near flat -->
```

## Arbitrary Values

```html
<div visual="perspective:[800px]">...</div>
```
