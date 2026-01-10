# Text Decoration

Control text decoration with the `visual` attribute.

## Syntax
```
visual="text-decoration-line:underline | text-decoration-style:wavy | text-decoration-color:[#ff0000]"
```

## Decoration Line

| Value | CSS Output |
|-------|------------|
| `text-decoration-line:underline` | `text-decoration-line: underline` |
| `text-decoration-line:overline` | `text-decoration-line: overline` |
| `text-decoration-line:line-through` | `text-decoration-line: line-through` |
| `text-decoration-line:none` | `text-decoration-line: none` |

## Decoration Style

| Value | CSS Output |
|-------|------------|
| `text-decoration-style:solid` | `text-decoration-style: solid` |
| `text-decoration-style:double` | `text-decoration-style: double` |
| `text-decoration-style:dotted` | `text-decoration-style: dotted` |
| `text-decoration-style:dashed` | `text-decoration-style: dashed` |
| `text-decoration-style:wavy` | `text-decoration-style: wavy` |

## Decoration Color

| Value | CSS Output |
|-------|------------|
| `text-decoration-color:primary` | `text-decoration-color: var(--c-primary)` |
| `text-decoration-color:[#ff0000]` | `text-decoration-color: #ff0000` |

## Decoration Thickness

| Value | CSS Output |
|-------|------------|
| `text-decoration-thickness:1` | `text-decoration-thickness: 1px` |
| `text-decoration-thickness:2` | `text-decoration-thickness: 2px` |
| `text-decoration-thickness:[3px]` | `text-decoration-thickness: 3px` |

## Underline Offset

| Value | CSS Output |
|-------|------------|
| `text-underline-offset:1` | `text-underline-offset: 1px` |
| `text-underline-offset:2` | `text-underline-offset: 2px` |
| `text-underline-offset:[4px]` | `text-underline-offset: 4px` |

## Examples

```html
<a visual="text-decoration-line:underline hover:text-decoration-line:none">Link</a>
<span visual="text-decoration-line:line-through">Deleted text</span>
<span visual="text-decoration-line:underline text-decoration-style:wavy text-decoration-color:danger">Error text</span>
<a visual="text-decoration-line:underline text-decoration-thickness:2 text-decoration-color:primary">Thick underline</a>
<a visual="text-decoration-line:underline text-underline-offset:4">Offset underline</a>
```
