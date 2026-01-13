# Letter Spacing

Set letter spacing

## Syntax
```
visual="tracking:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `tighter` | `letter-spacing: -0.05em` | Tighter spacing |
| `tight` | `letter-spacing: -0.025em` | Tight spacing |
| `normal` | `letter-spacing: 0` | Normal spacing |
| `wide` | `letter-spacing: 0.025em` | Wide spacing |
| `wider` | `letter-spacing: 0.05em` | Wider spacing |
| `widest` | `letter-spacing: 0.1em` | Widest spacing |

## Examples

```html
<div visual="tracking:wide">Wide tracking</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Letter Spacing

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="tracking:wide"</code> - Adjust spacing between characters</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="letter-spacing: -0.05em;">tighter spacing</span>
  <span style="letter-spacing: 0;">normal spacing</span>
  <span style="letter-spacing: 0.1em;">widest spacing</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="letter-spacing: -0.05em;">tighter spacing</span>
  <span style="letter-spacing: 0;">normal spacing</span>
  <span style="letter-spacing: 0.1em;">widest spacing</span>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="letter:[custom-value]">Custom</div>
```
