# Filter Sepia

Apply sepia filter

## Syntax
```
visual="sepia:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: sepia(0%)` | No sepia |
| `partial` | `filter: sepia(50%)` | 50% sepia |
| `full` | `filter: sepia(100%)` | Full sepia |

## Examples

```html
<img visual="sepia:full">Vintage look</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
