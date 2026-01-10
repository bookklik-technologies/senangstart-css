# Transition Delay

Control the delay before a transition starts using natural words.

## Syntax
```
visual="delay:instant | delay:quick | delay:fast | delay:normal | delay:slow | delay:slower | delay:lazy"
```

## Values

| Value | Time |
|-------|------|
| `delay:instant` | 75ms |
| `delay:quick` | 100ms |
| `delay:fast` | 150ms |
| `delay:normal` | 200ms |
| `delay:slow` | 300ms |
| `delay:slower` | 500ms |
| `delay:lazy` | 700ms |

## Examples

```html
<div visual="transition delay:instant">...</div>  <!-- 75ms delay -->
<div visual="transition delay:quick">...</div>    <!-- 100ms delay -->
<div visual="transition delay:fast">...</div>     <!-- 150ms delay -->
<div visual="transition delay:normal">...</div>   <!-- 200ms delay -->
<div visual="transition delay:slow">...</div>     <!-- 300ms delay -->
<div visual="transition delay:slower">...</div>   <!-- 500ms delay -->
<div visual="transition delay:lazy">...</div>     <!-- 700ms delay -->
```

## Arbitrary Delay

```html
<div visual="transition delay:[1s]">...</div>
```
