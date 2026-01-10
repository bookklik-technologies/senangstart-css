# Built-in Animations

Pre-built CSS animations with natural adjective-based timing controls.

## Syntax
```
visual="animate:spin | animate:ping | animate:pulse | animate:bounce | animate:none"
```

## Spin

Add a spinning animation, useful for loading indicators.

```html
<div visual="animate:spin" space="w:big h:big">
  <svg>...</svg>
</div>
```

| CSS Output |
|------------|
| `animation: spin 1s linear infinite;` |

## Ping

Create a ping effect that radiates outward, great for notification badges.

```html
<span layout="relative inline-flex">
  <span visual="animate:ping bg:red-400 opacity:75" layout="absolute inline-flex" space="h:full w:full rounded:full"></span>
  <span visual="bg:red-500 rounded:full" space="h:small w:small"></span>
</span>
```

| CSS Output |
|------------|
| `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;` |

## Pulse

Add a subtle pulsing fade effect.

```html
<div visual="animate:pulse bg:gray-200" space="h:medium w:giant rounded:small"></div>
```

| CSS Output |
|------------|
| `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;` |

## Bounce

Add a bouncing animation for attention-grabbing elements.

```html
<div visual="animate:bounce" space="w:big h:big">
  ↓
</div>
```

| CSS Output |
|------------|
| `animation: bounce 1s infinite;` |

## No Animation

Remove animation from an element.

```html
<div visual="animate:none">...</div>
```
