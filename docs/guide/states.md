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

## State Capabilities & Interaction

SenangStart allows elements to react to parent ("Group") or sibling ("Peer") states. This works across **all three attributes**.

### Supported Triggers

Add these to the `layout` attribute of the parent/trigger element:

| Capability | Trigger State |
|------------|---------------|
| `layout="hoverable"` | `:hover` |
| `layout="focusable"` | `:focus-within` |
| `layout="pressable"` | `:active` |
| `layout="expandable"` | `[aria-expanded="true"]` |
| `layout="selectable"` | `[aria-selected="true"]` |
| `layout="disabled"` | Disables all triggers |

### Cross-Attribute Example

State variants like `hover:`, `focus:`, etc., apply to **any attribute** (`layout`, `space`, `visual`) when nested inside a capable group.

```html
<!-- Parent has "hoverable" capability -->
<div layout="flex hoverable" space="p:medium" visual="bg:white shadow:medium">
  
  <!-- Layout Reaction: Hidden by default, becomes flex on parent hover -->
  <div layout="hidden hover:flex items:center">
    <span>Revealed!</span>
  </div>

  <!-- Space Reaction: Padding increases on parent hover -->
  <button space="p:small hover:p:medium">
    Expand Me
  </button>
  
  <!-- Visual Reaction: Color changes on parent hover -->
  <p visual="text:grey hover:text:primary">
    Highlight Me
  </p>
  
</div>
```

### Peer Interactions

Use `interact="[id]"` on the trigger and `listens="[id]"` on the receiver.

```html
<button layout="hoverable" interact="menu-trigger">
  Hover me
</button>

<div 
  layout="absolute hidden hover:block" 
  listens="menu-trigger"
>
  Dropdown Menu
</div>
```
