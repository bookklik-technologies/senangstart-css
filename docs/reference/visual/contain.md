# Contain

Isolate element rendering for performance

## Syntax
```
visual="contain:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `contain: none` | No containment |
| `strict` | `contain: strict` | Full containment |
| `content` | `contain: content` | Content containment |
| `size` | `contain: size` | Size containment |
| `layout` | `contain: layout` | Layout containment |
| `style` | `contain: style` | Style containment |
| `paint` | `contain: paint` | Paint containment |

## Examples

```html
<div visual="contain:strict">Isolated rendering</div>
<div visual="contain:content">Content isolation</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Contain

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="contain:strict"</code> - Isolate element from rest of page for performance</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">strict</div>
 </div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">strict</div>
 </div>
```

</details>

</div>
