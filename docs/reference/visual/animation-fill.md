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
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-fill:forwards"</code> - Control state before/after animation. "forwards" keeps the final state, "none" returns to original.</p>
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text-size:small text:neutral-600 dark:text:neutral-400">Hover to replay animation:</p>
  <div layout="flex" space="g:medium">
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">none (returns)</span>
      <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1 animation-fill:none hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">forwards (stays)</span>
      <div space="p:small" visual="bg:success text:white rounded:small animate:bounce animation-iteration:1 animation-fill:forwards hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">both</span>
      <div space="p:small" visual="bg:warning text:white rounded:small animate:bounce animation-iteration:1 animation-fill:both hover:animate:bounce">⬆</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text-size:small text:neutral-600 dark:text:neutral-400">Hover to replay animation:</p>
  <div layout="flex" space="g:medium">
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">none (returns)</span>
      <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1 animation-fill:none hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">forwards (stays)</span>
      <div space="p:small" visual="bg:success text:white rounded:small animate:bounce animation-iteration:1 animation-fill:forwards hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">both</span>
      <div space="p:small" visual="bg:warning text:white rounded:small animate:bounce animation-iteration:1 animation-fill:both hover:animate:bounce">⬆</div>
    </div>
  </div>
</div>
```

</details>

</div>
