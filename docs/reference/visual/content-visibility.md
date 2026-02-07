# Content Visibility

Optimize rendering by skipping off-screen content

## Syntax
```
visual="content-visibility:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `visible` | `content-visibility: visible` | Render all content |
| `auto` | `content-visibility: auto` | Skip when off-screen |
| `hidden` | `content-visibility: hidden` | Never render off-screen |

## Examples

```html
<section visual="content-visibility:auto">Large list</section>
<div visual="content-visibility:hidden">Hidden until needed</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Content Visibility

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="content-visibility:auto"</code> - Performance optimization for off-screen content</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">visible</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">hidden</div>
 </div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">visible</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">hidden</div>
 </div>
```

</details>

</div>
