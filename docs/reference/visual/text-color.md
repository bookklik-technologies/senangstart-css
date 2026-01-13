# Text Color

Set text color

## Syntax
```
visual="text:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `left` | `text-align: left` | Align left |
| `center` | `text-align: center` | Align center |
| `right` | `text-align: right` | Align right |
| `justify` | `text-align: justify` | Justify text |

## Examples

```html
<div visual="text:white">White text</div>
<div visual="text:center">Centered text</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Color

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text:primary"</code> - Set text color from theme or palette</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text:primary">Primary</span>
  <span visual="text:secondary">Secondary</span>
  <span visual="text:success">Success</span>
  <span visual="text:danger">Danger</span>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text:primary">Primary</span>
  <span visual="text:secondary">Secondary</span>
  <span visual="text:success">Success</span>
  <span visual="text:danger">Danger</span>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```
