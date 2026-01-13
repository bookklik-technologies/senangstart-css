# State Prefixes

Apply styles on specific states

## Syntax
```
visual="hover:... focus:... active:..."
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `hover:` | `:hover` | On hover |
| `focus:` | `:focus` | On focus |
| `active:` | `:active` | On active |
| `disabled:` | `:disabled` | When disabled |
| `visited:` | `:visited` | When visited |
| `first:` | `:first-child` | First child |
| `last:` | `:last-child` | Last child |
| `odd:` | `:nth-child(odd)` | Odd children |
| `even:` | `:nth-child(even)` | Even children |

## Examples

```html
<button visual="hover:bg:primary focus:outline:primary">Interactive button</button>
```
