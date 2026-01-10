# Width

Set element width

## Syntax
```
space="w:[value]"
```

## Values

| Property | CSS Output | Description |
|--------|------------|-------------|
| `w` | `width: var(--s-{value})` | Width |
| `min-w` | `min-width: var(--s-{value})` | Minimum width |
| `max-w` | `max-width: var(--s-{value})` | Maximum width |

## Scale Values

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Examples

```html
<div space="w:[100%]">Full width</div>
<div space="max-w:[1200px]">Max width container</div>
<div space="min-w:[300px]">Min width</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div space="width:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div space="mob:... tab:... lap:...">
  Responsive content
</div>
```
