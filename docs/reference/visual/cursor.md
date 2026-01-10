# Cursor

Control the mouse cursor style with the `visual` attribute.

## Syntax
```
visual="cursor:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `cursor:auto` | `cursor: auto` |
| `cursor:default` | `cursor: default` |
| `cursor:pointer` | `cursor: pointer` |
| `cursor:wait` | `cursor: wait` |
| `cursor:text` | `cursor: text` |
| `cursor:move` | `cursor: move` |
| `cursor:help` | `cursor: help` |
| `cursor:not-allowed` | `cursor: not-allowed` |
| `cursor:none` | `cursor: none` |
| `cursor:grab` | `cursor: grab` |
| `cursor:grabbing` | `cursor: grabbing` |
| `cursor:crosshair` | `cursor: crosshair` |
| `cursor:zoom-in` | `cursor: zoom-in` |
| `cursor:zoom-out` | `cursor: zoom-out` |
| `cursor:col-resize` | `cursor: col-resize` |
| `cursor:row-resize` | `cursor: row-resize` |

## Examples

```html
<button visual="cursor:pointer">Click me</button>
<div visual="cursor:move">Draggable</div>
<button visual="cursor:not-allowed" disabled>Disabled</button>
```

## States

```html
<div visual="cursor:grab active:cursor:grabbing">
  Drag me
</div>
```
