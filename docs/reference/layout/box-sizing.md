# Box Sizing

Control how width and height are calculated

## Syntax
```
layout="box:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `border` | `box-sizing: border-box` | Include padding and border in size |
| `content` | `box-sizing: content-box` | Exclude padding and border |

## Examples

```html
<div layout="box:border">Border box</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Border Box

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="box:border"</code> - Padding and border included in width</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="box:border" space="p:medium" visual="bg:primary text:white border:4 border:white rounded:small" style="width: 100px;">box:border<br>100px</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="box:border" space="p:medium" visual="bg:primary text:white border:4 border:white rounded:small" style="width: 100px;">box:border<br>100px</div>
</div>
```

</details>

</div>
