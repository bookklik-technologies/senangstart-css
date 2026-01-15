# Line Height

Set line height

## Syntax
```
visual="leading:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `line-height: 1` | No extra height |
| `tight` | `line-height: 1.25` | Tight leading |
| `snug` | `line-height: 1.375` | Snug leading |
| `normal` | `line-height: 1.5` | Normal leading |
| `relaxed` | `line-height: 1.625` | Relaxed leading |
| `loose` | `line-height: 2` | Loose leading |

## Examples

```html
<div visual="leading:relaxed">Relaxed line height</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Line Height

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="leading:relaxed"</code> - Control vertical spacing between lines</p>
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="m:0" visual="leading:tight">Tight leading<br>for headings</p>
  <p space="m:0" visual="leading:normal">Normal leading<br>for body text</p>
  <p space="m:0" visual="leading:loose">Loose leading<br>for readability</p>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="m:0" visual="leading:tight">Tight leading<br>for headings</p>
  <p space="m:0" visual="leading:normal">Normal leading<br>for body text</p>
  <p space="m:0" visual="leading:loose">Loose leading<br>for readability</p>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="line:[custom-value]">Custom</div>
```
