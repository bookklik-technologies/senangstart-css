# Examples

Ready-to-use component examples built with SenangStart CSS.

## Quick Links

- [Cards](/examples/cards) — Profile cards, pricing cards, feature cards
- [Navigation](/examples/navigation) — Navbars, sidebars, menus
- [Hero Sections](/examples/hero) — Landing page heroes
- [Forms](/examples/forms) — Inputs, buttons, form layouts

## Getting Started

All examples use the SenangStart CDN for zero-config usage:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
</head>
<body>
  <!-- Paste any example here -->
</body>
</html>
```

## Simple Card

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <h3 visual="font:bold text-size:big text:dark">Card Title</h3>
  <p space="m-t:small" visual="text:grey">
    Card description goes here.
  </p>
  <button
    space="m-t:medium p-y:small"
    visual="bg:primary text:white rounded:medium"
  >
    Action
  </button>
</div>
```

## Basic Navigation

```html
<nav
  layout="flex between center"
  space="p-x:big p-y:small"
  visual="bg:white shadow:small"
>
  <div visual="font:bold text-size:big text:primary">Logo</div>
  <div layout="flex" space="g:medium">
    <a visual="text:dark hover:text:primary">Home</a>
    <a visual="text:grey hover:text:primary">About</a>
    <a visual="text:grey hover:text:primary">Contact</a>
  </div>
</nav>
```

## Hero Section

```html
<section
  layout="flex col center"
  space="p:giant min-h:[80vh]"
  visual="bg:dark text:white"
>
  <h1 visual="text-size:vast font:bold text:center">
    Welcome
  </h1>
  <p space="m-t:medium max-w:[600px]" visual="text:light text:center text-size:big">
    Build beautiful interfaces with natural language.
  </p>
  <button
    space="m-t:big p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Get Started
  </button>
</section>
```
