# Columns

Control multi-column text layout with the `layout` attribute.

## Syntax
```
layout="cols:[number]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `cols:1` to `cols:4` | `columns: n` |

## Examples

```html
<article layout="cols:2" space="g:medium">
  Long text that flows into 2 columns automatically
</article>

<article layout="cols:3">
  Text flows into 3 columns
</article>
```

## Responsive

```html
<article layout="cols:1 tab:cols:2 lap:cols:3">
  1 column → 2 columns → 3 columns
</article>
```
