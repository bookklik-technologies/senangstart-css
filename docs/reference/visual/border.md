# Border

Control border properties with the `visual` attribute.

## Border Color

### Syntax
```
visual="border:[color]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `border:grey` | `border-color: var(--c-grey); border-style: solid` |
| `border:primary` | `border-color: var(--c-primary); border-style: solid` |
| `border:[#hex]` | `border-color: #hex; border-style: solid` |

---

## Border Width

### Syntax
```
visual="border-w:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `border-w:tiny` | `border-width: var(--s-tiny); border-style: solid` |
| `border-w:small` | `border-width: var(--s-small); border-style: solid` |
| `border-w:[1px]` | `border-width: 1px; border-style: solid` |
| `border-w:[2px]` | `border-width: 2px; border-style: solid` |

---

## Border Style

### Syntax
```
visual="border-style:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `border-style:solid` | `border-style: solid` |
| `border-style:dashed` | `border-style: dashed` |
| `border-style:dotted` | `border-style: dotted` |
| `border-style:double` | `border-style: double` |
| `border-style:groove` | `border-style: groove` |
| `border-style:ridge" | `border-style: ridge` |
| `border-style:inset` | `border-style: inset` |
| `border-style:outset` | `border-style: outset` |
| `border-style:none` | `border-style: none` |

---

## Full Example

```html
<div visual="border:grey border-w:[1px] border-style:solid">
  Bordered element
</div>

<input visual="border:grey border-w:small focus:border:primary">

<div visual="border:primary border-w:[2px] border-style:dashed rounded:medium">
  Border with rounded corners
</div>
```
