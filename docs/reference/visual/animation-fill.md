# Animation Fill

Set animation fill mode

## Syntax
```
visual="animation-fill:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `animation-fill-mode: none` | No fill |
| `forwards` | `animation-fill-mode: forwards` | Keep end state |
| `backwards` | `animation-fill-mode: backwards` | Apply start state |
| `both` | `animation-fill-mode: both` | Both directions |

## Examples

```html
<div visual="animate:bounce animation-fill:forwards">Stays at end</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Animation Fill

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-fill:forwards"</code> - Control state before/after animation</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">forwards</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">forwards</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
```

</details>

</div>
