# Navigation Examples

Navigation patterns built with SenangStart CSS.

## Simple Navbar

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

## Fixed Navigation

```html
<nav
  layout="flex between center fixed z:top"
  space="w:[100%] p-x:big p-y:small"
  visual="bg:white shadow:small"
>
  <div visual="font:bold text-size:big text:primary">Logo</div>
  <div layout="flex" space="g:medium">
    <a visual="text:dark hover:text:primary font:medium">Home</a>
    <a visual="text:grey hover:text:primary">Products</a>
    <a visual="text:grey hover:text:primary">Pricing</a>
    <a visual="text:grey hover:text:primary">About</a>
  </div>
  <button
    space="p-x:medium p-y:tiny"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Sign Up
  </button>
</nav>
```

## Responsive Navigation

```html
<!-- Mobile menu button (hidden on tablet+) -->
<button layout="block tab:hidden" visual="text:dark">
  ☰ Menu
</button>

<!-- Desktop navigation (hidden on mobile) -->
<nav
  layout="hidden tab:flex between center"
  space="p-x:big p-y:small"
  visual="bg:white"
>
  <div visual="font:bold text-size:big">Logo</div>
  <div layout="flex" space="g:medium">
    <a visual="text:dark hover:text:primary">Home</a>
    <a visual="text:grey hover:text:primary">About</a>
  </div>
</nav>
```

## Sidebar Navigation

```html
<aside
  layout="flex col"
  space="w:[250px] h:[100vh] p:medium"
  visual="bg:dark"
>
  <div space="m-b:big" visual="font:bold text-size:big text:white">
    Dashboard
  </div>
  
  <nav layout="flex col" space="g:tiny">
    <a 
      space="p:small"
      visual="text:white bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      🏠 Home
    </a>
    <a 
      space="p:small"
      visual="text:light hover:bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      📊 Analytics
    </a>
    <a 
      space="p:small"
      visual="text:light hover:bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      👥 Users
    </a>
    <a 
      space="p:small"
      visual="text:light hover:bg:[rgba(255,255,255,0.1)] rounded:small"
    >
      ⚙️ Settings
    </a>
  </nav>
</aside>
```

## Breadcrumb

```html
<nav layout="flex" space="g:small p:small">
  <a visual="text:primary hover:text:[#2563EB]">Home</a>
  <span visual="text:grey">/</span>
  <a visual="text:primary hover:text:[#2563EB]">Products</a>
  <span visual="text:grey">/</span>
  <span visual="text:dark">Current Page</span>
</nav>
```

## Tab Navigation

```html
<div layout="flex" space="g:none" visual="border-b:light">
  <button 
    space="p-x:medium p-y:small"
    visual="text:primary border-b:[2px] border:primary"
  >
    Tab 1
  </button>
  <button 
    space="p-x:medium p-y:small"
    visual="text:grey hover:text:dark"
  >
    Tab 2
  </button>
  <button 
    space="p-x:medium p-y:small"
    visual="text:grey hover:text:dark"
  >
    Tab 3
  </button>
</div>
```
