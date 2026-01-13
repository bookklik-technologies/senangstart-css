# Blend Modes

Set mix blend mode

## Syntax
```
visual="mix-blend:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `mix-blend-mode: normal` | Normal blend |
| `multiply` | `mix-blend-mode: multiply` | Multiply blend |
| `screen` | `mix-blend-mode: screen` | Screen blend |
| `overlay` | `mix-blend-mode: overlay` | Overlay blend |
| `darken` | `mix-blend-mode: darken` | Darken blend |
| `lighten` | `mix-blend-mode: lighten` | Lighten blend |

## Examples

```html
<div visual="mix-blend:multiply">Multiply blend</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Mix Blend Mode

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="mix-blend:multiply"</code> - Blend element with content behind it</p>
<div layout="flex" space="g:medium p:medium" visual="rounded:medium" style="background: linear-gradient(135deg, #ef4444, #f97316);">
  <div space="p:small" visual="text:white rounded:small" style="mix-blend-mode: multiply; background: #3b82f6;">multiply</div>
  <div space="p:small" visual="text:white rounded:small" style="mix-blend-mode: screen; background: #3b82f6;">screen</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="rounded:medium" style="background: linear-gradient(135deg, #ef4444, #f97316);">
  <div space="p:small" visual="text:white rounded:small" style="mix-blend-mode: multiply; background: #3b82f6;">multiply</div>
  <div space="p:small" visual="text:white rounded:small" style="mix-blend-mode: screen; background: #3b82f6;">screen</div>
</div>
```

</details>

</div>
