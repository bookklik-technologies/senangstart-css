# Text Decoration

Control text decoration with the `visual` attribute.

## Decoration Line

| Value | CSS Output |
|-------|------------|
| `underline` | `text-decoration-line: underline` |
| `overline` | `text-decoration-line: overline` |
| `line-through` | `text-decoration-line: line-through` |
| `no-underline` | `text-decoration-line: none` |

## Decoration Style

| Value | CSS Output |
|-------|------------|
| `decoration-solid` | `text-decoration-style: solid` |
| `decoration-double` | `text-decoration-style: double` |
| `decoration-dotted` | `text-decoration-style: dotted` |
| `decoration-dashed` | `text-decoration-style: dashed` |
| `decoration-wavy` | `text-decoration-style: wavy` |

## Decoration Color

| Value | CSS Output |
|-------|------------|
| `decoration:primary` | `text-decoration-color: var(--c-primary)` |
| `decoration:[#ff0000]` | `text-decoration-color: #ff0000` |

## Decoration Thickness

| Value | CSS Output |
|-------|------------|
| `decoration-thickness:1` | `text-decoration-thickness: 1px` |
| `decoration-thickness:2` | `text-decoration-thickness: 2px` |
| `decoration-thickness:[3px]` | `text-decoration-thickness: 3px` |

## Underline Offset

| Value | CSS Output |
|-------|------------|
| `underline-offset:1` | `text-underline-offset: 1px` |
| `underline-offset:2` | `text-underline-offset: 2px` |
| `underline-offset:[4px]` | `text-underline-offset: 4px` |

## Examples

```html
<a visual="underline hover:no-underline">Link</a>
<span visual="line-through">Deleted text</span>
<span visual="underline decoration-wavy decoration:danger">Error text</span>
<a visual="underline decoration-thickness:2 decoration:primary">Thick underline</a>
<a visual="underline underline-offset:4">Offset underline</a>
```
