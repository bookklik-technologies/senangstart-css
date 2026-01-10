# Outline

Control outline properties with the `visual` attribute.

## Outline Color

### Syntax
```
visual="outline:[color]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `outline:primary` | `outline-color: var(--c-primary)` |
| `outline:grey` | `outline-color: var(--c-grey)` |
| `outline:[#hex]` | `outline-color: #hex` |

### Examples

```html
<button visual="outline:primary">Button with outline</button>
```

---

## Outline Width

### Syntax
```
visual="outline-w:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `outline-w:tiny` | `outline-width: var(--s-tiny)` |
| `outline-w:small` | `outline-width: var(--s-small)` |
| `outline-w:[1px]` | `outline-width: 1px` |
| `outline-w:[2px]` | `outline-width: 2px` |

---

## Outline Style

### Syntax
```
visual="outline-style:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `outline-style:solid` | `outline-style: solid` |
| `outline-style:dashed` | `outline-style: dashed` |
| `outline-style:dotted` | `outline-style: dotted` |
| `outline-style:double` | `outline-style: double` |
| `outline-style:none` | `outline-style: none` |

---

## Outline Offset

### Syntax
```
visual="outline-offset:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `outline-offset:tiny` | `outline-offset: var(--s-tiny)` |
| `outline-offset:small" | `outline-offset: var(--s-small)` |
| `outline-offset:[2px]` | `outline-offset: 2px` |
| `outline-offset:[4px]` | `outline-offset: 4px` |

---

## Full Example

```html
<button visual="
  outline:primary 
  outline-w:[2px] 
  outline-style:solid 
  outline-offset:small
  focus:outline:blue-600
">
  Button with complete outline
</button>

<div visual="outline:grey outline-w:tiny outline-style:dotted outline-offset:[1px]">
  Element with dotted outline
</div>
```
