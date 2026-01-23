# Ring Offset

Add gap between ring and element

## Syntax
```
visual="ring-offset:[size]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `--ring-offset: 0px` | No offset |
| `2` | `--ring-offset: 2px` | 2px offset |
| `4` | `--ring-offset: 4px` | 4px offset |

## Examples

```html
<button visual="ring:small ring-offset:2 ring-color:primary">With offset</button>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="ring:[custom-value]">Custom</div>
```
