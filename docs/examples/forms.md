# Form Examples

Form components and layouts built with SenangStart CSS.

## Basic Input

```html
<div layout="flex col" space="g:small">
  <label visual="text:dark font:medium text-size:small">Email</label>
  <input
    type="email"
    space="p:small w:[100%]"
    visual="border:grey border-w:[1px] rounded:small focus:border:primary"
    placeholder="you@example.com"
  />
</div>
```

## Input with Icon

```html
<div layout="flex col" space="g:small">
  <label visual="text:dark font:medium">Search</label>
  <div layout="flex relative">
    <span 
      layout="absolute" 
      space="p-l:small" 
      style="top: 50%; transform: translateY(-50%);"
      visual="text:grey"
    >
      🔍
    </span>
    <input
      type="text"
      space="p:small p-l:big w:[100%]"
      visual="border:grey border-w:[1px] rounded:small"
      placeholder="Search..."
    />
  </div>
</div>
```

## Button Styles

```html
<div layout="flex wrap" space="g:small">
  <!-- Primary -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:primary text:white rounded:medium hover:bg:[#2563EB]"
  >
    Primary
  </button>
  
  <!-- Secondary -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:white text:dark rounded:medium border:grey border-w:[1px] hover:bg:light"
  >
    Secondary
  </button>
  
  <!-- Danger -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:danger text:white rounded:medium hover:bg:[#DC2626]"
  >
    Danger
  </button>
  
  <!-- Ghost -->
  <button
    space="p-x:medium p-y:small"
    visual="bg:[transparent] text:primary hover:bg:light rounded:medium"
  >
    Ghost
  </button>
</div>
```

## Login Form

```html
<div
  layout="flex col"
  space="w:[400px] p:big"
  visual="bg:white rounded:big shadow:medium"
>
  <h2 space="m-b:big" visual="font:bold text-size:big text:dark text:center">
    Welcome Back
  </h2>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Email</label>
    <input
      type="email"
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small focus:border:primary"
      placeholder="you@example.com"
    />
  </div>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Password</label>
    <input
      type="password"
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small focus:border:primary"
      placeholder="••••••••"
    />
  </div>
  
  <div layout="flex between" space="m-b:medium">
    <label layout="flex center" space="g:tiny">
      <input type="checkbox" />
      <span visual="text:grey text-size:small">Remember me</span>
    </label>
    <a visual="text:primary text-size:small">Forgot password?</a>
  </div>
  
  <button
    space="p:small"
    visual="bg:primary text:white rounded:medium font:medium hover:bg:[#2563EB]"
  >
    Sign In
  </button>
  
  <p space="m-t:medium" visual="text:grey text:center text-size:small">
    Don't have an account? <a visual="text:primary">Sign up</a>
  </p>
</div>
```

## Contact Form

```html
<div
  layout="flex col"
  space="max-w:[600px] p:big"
  visual="bg:white rounded:big shadow:medium"
>
  <h2 space="m-b:big" visual="font:bold text-size:big text:dark">
    Get in Touch
  </h2>
  
  <div layout="flex" space="g:medium m-b:medium">
    <div layout="flex col" space="g:small w:[50%]">
      <label visual="text:dark font:medium text-size:small">First Name</label>
      <input
        type="text"
        space="p:small"
        visual="border:grey border-w:[1px] rounded:small"
      />
    </div>
    <div layout="flex col" space="g:small w:[50%]">
      <label visual="text:dark font:medium text-size:small">Last Name</label>
      <input
        type="text"
        space="p:small"
        visual="border:grey border-w:[1px] rounded:small"
      />
    </div>
  </div>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Email</label>
    <input
      type="email"
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small"
    />
  </div>
  
  <div layout="flex col" space="g:small m-b:medium">
    <label visual="text:dark font:medium text-size:small">Message</label>
    <textarea
      space="p:small"
      visual="border:grey border-w:[1px] rounded:small"
      rows="4"
    ></textarea>
  </div>
  
  <button
    space="p:small"
    visual="bg:primary text:white rounded:medium font:medium"
  >
    Send Message
  </button>
</div>
```

## Select Dropdown

```html
<div layout="flex col" space="g:small">
  <label visual="text:dark font:medium text-size:small">Country</label>
  <select
    space="p:small"
    visual="border:grey border-w:[1px] rounded:small bg:white"
  >
    <option>Select a country</option>
    <option>United States</option>
    <option>United Kingdom</option>
    <option>Canada</option>
  </select>
</div>
```
