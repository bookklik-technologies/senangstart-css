# Space Between

Add space between direct children (margin on every child after the first), like Tailwind space-x/space-y

## Syntax
```
visual="space-x:[value]" or visual="space-y:[value]"
```

## Values

| Property | CSS Output | Description |
|--------|------------|-------------|
| `space-x` | `margin-left: var(--s-{value})` | Horizontal space between children |
| `space-y` | `margin-top: var(--s-{value})` | Vertical space between children |

## Scale Values

`none`, `tiny`, `small`, `medium`, `large`, `big`, `giant`

## Examples

```html
<ul visual="space-y:small"><li>a</li><li>b</li></ul>
<nav layout="flex" visual="space-x:medium">…</nav>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="space:[custom-value]">Custom</div>
```
