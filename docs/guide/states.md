# Hover & States

Add interactive styles with state prefixes.

## State Prefixes

| Prefix | Trigger |
|--------|---------|
| `hover:` | Mouse over element |
| `focus:` | Element has focus |
| `active:` | Element is being clicked |
| `disabled:` | Element is disabled |

## Basic Usage

### Hover

```html
<button visual="bg:primary hover:bg:[#2563EB] text:white">
  Hover me
</button>

<a visual="text:grey hover:text:primary">
  Link with hover color
</a>
```

### Focus

```html
<input
  visual="border:grey focus:border:primary"
  space="p:small"
/>
```

### Active

```html
<button visual="bg:primary active:bg:[#1D4ED8]">
  Click me
</button>
```

### Disabled

```html
<button visual="bg:primary disabled:bg:grey disabled:opacity:[0.5]">
  Submit
</button>
```

## Common Patterns

### Button with States

```html
<button
  space="p-x:big p-y:small"
  visual="
    bg:primary 
    text:white 
    rounded:medium
    hover:bg:[#2563EB]
    active:bg:[#1D4ED8]
    disabled:bg:grey
    disabled:opacity:[0.5]
  "
>
  Submit
</button>
```

### Card with Hover Effect

```html
<div
  layout="flex col"
  space="p:medium"
  visual="
    bg:white 
    rounded:big 
    shadow:small
    hover:shadow:big
  "
>
  <h3>Card Title</h3>
  <p>Card content that lifts on hover.</p>
</div>
```

### Link Navigation

```html
<nav layout="flex" space="g:medium">
  <a visual="text:dark hover:text:primary font:medium">Home</a>
  <a visual="text:grey hover:text:primary">About</a>
  <a visual="text:grey hover:text:primary">Contact</a>
</nav>
```

### Input with Focus Ring

```html
<input
  type="text"
  space="p:small w:[100%]"
  visual="
    border:grey 
    border-w:[1px]
    rounded:small
    focus:border:primary
  "
  placeholder="Enter your email"
/>
```

### Toggle Button

```html
<button
  space="p:small"
  visual="
    bg:light
    text:dark
    rounded:medium
    hover:bg:grey
    active:bg:dark
    active:text:white
  "
>
  Toggle
</button>
```

## Combining with Responsive

States can be combined with responsive prefixes:

```html
<button visual="
  bg:primary
  hover:bg:[#2563EB]
  tab:hover:shadow:big
">
  Hover shadow only on tablet+
</button>
```

## Accessibility Note

Always ensure sufficient color contrast for hover and focus states. The `:focus` state is especially important for keyboard navigation.

```html
<button visual="
  bg:primary
  text:white
  focus:shadow:[0_0_0_3px_rgba(59,130,246,0.5)]
">
  Accessible focus ring
</button>
```
