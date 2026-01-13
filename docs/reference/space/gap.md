# Gap

Add gap between flex/grid items

## Syntax
```
space="g:[value]" or space="g-{axis}:[value]"
```

## Values

| Property | CSS Output | Description |
|--------|------------|-------------|
| `g` | `gap: var(--s-{value})` | All gaps |
| `g-x` | `column-gap: var(--s-{value})` | Column gap |
| `g-y` | `row-gap: var(--s-{value})` | Row gap |

## Scale Values

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Examples

```html
<div layout="flex" space="g:medium">Gap between items</div>
<div layout="grid" space="g-x:big g-y:small">Grid gaps</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div space="gap:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind numeric scale: `g:tw-4` (1rem), `g:tw-8` (2rem)
> 
> [Reference](https://tailwindcss.com/docs/gap)

## Responsive

```html
<!-- Responsive example -->
<div space="mob:... tab:... lap:...">
  Responsive content
</div>
```
