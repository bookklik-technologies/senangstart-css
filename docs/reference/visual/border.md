# Border

Set border color for all sides or specific sides

## Syntax
```
visual="border:[color]" | visual="border-{t|b|l|r|x|y}:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `primary` | `border-color: var(--c-primary); border-style: solid` | Primary color border |
| `gray-300` | `border-color: var(--c-gray-300); border-style: solid` | Light gray border |
| `danger` | `border-color: var(--c-danger); border-style: solid` | Danger/error border |

## Examples

```html
<div visual="border:primary border-w:thin">Primary border</div>
<div visual="border-t:primary border-t-w:regular">Top only</div>
<div visual="border-b:gray-300 border-b-w:thin">Bottom only</div>
<div visual="border-x:primary border-x-w:regular">Left & right</div>
<div visual="border-y:gray-300 border-y-w:thin">Top & bottom</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="border:[custom-value]">Custom</div>
```
