# Transform Style

Control whether children elements are positioned in 3D space.

## Syntax
```
visual="transform-style:flat | transform-style:preserve-3d"
```

## Values

| Value | CSS Output |
|-------|------------|
| `transform-style:flat` | `transform-style: flat` |
| `transform-style:preserve-3d` | `transform-style: preserve-3d` |

## Flat (Default)

Children are flattened to the parent's plane.

```html
<div visual="transform-style:flat">
  <div visual="rotate:[60deg]">Flattened</div>
</div>
```

## Preserve 3D

Children preserve their 3D position.

```html
<div visual="transform-style:preserve-3d">
  <div visual="rotate:[60deg]">3D Preserved</div>
</div>
```

## Use Case

Required for creating 3D effects like flip cards where child elements need to maintain their 3D position relative to the parent.
