# Backdrop Sepia

Apply sepia to backdrop

## Syntax
```
visual="backdrop-sepia:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: sepia(0%)` | No sepia |
| `partial` | `backdrop-filter: sepia(50%)` | 50% sepia |
| `full` | `backdrop-filter: sepia(100%)` | Full sepia |

## Examples

```html
<div visual="backdrop-sepia:full">Vintage backdrop</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
