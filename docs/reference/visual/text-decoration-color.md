# Text Decoration Color

Set text decoration color

## Syntax
```
visual="decoration:[color]/[opacity]"
```

## Examples

```html
<span visual="underline decoration:primary">Colored underline</span>
<span visual="underline decoration:[#FF5733]">Custom color</span>
<span visual="underline decoration:primary/50">50% opacity underline</span>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Decoration Color

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="decoration:primary"</code> - Set text underline/overline color</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration:primary text-size:big">primary underline</span>
  <span visual="line-through decoration:danger text-size:big">danger strikethrough</span>
  <span visual="underline decoration:success text-size:big">success underline</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration:primary text-size:big">primary underline</span>
  <span visual="line-through decoration:danger text-size:big">danger strikethrough</span>
  <span visual="underline decoration:success text-size:big">success underline</span>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```
