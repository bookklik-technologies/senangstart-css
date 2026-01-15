# Hyphens

Control hyphenation

## Syntax
```
visual="hyphens:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `hyphens: none` | No hyphens |
| `manual` | `hyphens: manual` | Manual hyphens |
| `auto` | `hyphens: auto` | Auto hyphens |

## Examples

```html
<p visual="hyphens:auto">Automatic hyphenation</p>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Hyphens

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="hyphens:auto"</code> - Control automatic hyphenation</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:manual">manual</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:auto">auto</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:manual">manual</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:auto">auto</div>
</div>
```

</details>

</div>
