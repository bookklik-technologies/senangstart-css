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

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### State Prefixes

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="hover:scale:110"</code> - Apply styles on hover, focus, etc.</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all hover:scale:110">hover:scale:110</button>
  <button space="p:small" visual="bg:neutral-500 text:white rounded:small transition:all hover:bg:primary">hover:bg:primary</button>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all hover:scale:110">hover:scale:110</button>
  <button space="p:small" visual="bg:neutral-500 text:white rounded:small transition:all hover:bg:primary">hover:bg:primary</button>
</div>
```

</details>

</div>
