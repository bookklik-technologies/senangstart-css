# Grayscale

Convert elements to grayscale.

## Syntax
```
visual="grayscale:none | grayscale:partial | grayscale:full | grayscale"
```

## Values

| Value | CSS Output |
|-------|------------|
| `grayscale:none` | `filter: grayscale(0)` |
| `grayscale:partial` | `filter: grayscale(0.5)` |
| `grayscale:full` | `filter: grayscale(1)` |
| `grayscale` | `filter: grayscale(1)` |

## Examples

```html
<img visual="grayscale:none" />     <!-- Full color -->
<img visual="grayscale:partial" />  <!-- 50% grayscale -->
<img visual="grayscale:full" />     <!-- Full grayscale -->
<img visual="grayscale" />          <!-- Full grayscale (default) -->
```

## With States

```html
<!-- Color on hover -->
<img visual="grayscale hover:grayscale:none" />
```
