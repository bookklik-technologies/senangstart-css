# Text Size

Set font size

## Syntax
```
visual="text-size:[value]"
```

## Examples

```html
<div visual="text-size:big">Large text</div>
<div visual="text-size:[24px]">24px text</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Font Size

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text-size:big"</code> - Scale text size from tiny to giant</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="align-items: baseline;">
  <span style="font-size: 0.75rem;">tiny</span>
  <span style="font-size: 0.875rem;">small</span>
  <span style="font-size: 1rem;">medium</span>
  <span style="font-size: 1.25rem;">big</span>
  <span style="font-size: 1.5rem;">giant</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="align-items: baseline;">
  <span style="font-size: 0.75rem;">tiny</span>
  <span style="font-size: 0.875rem;">small</span>
  <span style="font-size: 1rem;">medium</span>
  <span style="font-size: 1.25rem;">big</span>
  <span style="font-size: 1.5rem;">giant</span>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```

## Notes

> [!TIP]
> **Tailwind Scale Support**
> 
> Use `tw-` prefix to access Tailwind font scale: `text-size:tw-xl` (1.25rem), `text-size:tw-2xl` (1.5rem)
> 
> [Reference](https://tailwindcss.com/docs/font-size)
