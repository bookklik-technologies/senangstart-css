# Sepia

Apply sepia tone to elements.

## Syntax
```
visual="sepia:none | sepia:partial | sepia:full | sepia"
```

## Values

| Value | CSS Output |
|-------|------------|
| `sepia:none` | `filter: sepia(0)` |
| `sepia:partial` | `filter: sepia(0.5)` |
| `sepia:full` | `filter: sepia(1)` |
| `sepia` | `filter: sepia(1)` |

## Examples

```html
<img visual="sepia:none" />     <!-- No sepia -->
<img visual="sepia:partial" />  <!-- 50% sepia -->
<img visual="sepia:full" />     <!-- Full sepia -->
<img visual="sepia" />          <!-- Full sepia (default) -->
```

## With States

```html
<img visual="sepia hover:sepia:none" />
```
