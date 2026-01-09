# Hero Section Examples

Landing page hero sections built with SenangStart CSS.

## Simple Hero

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

## Hero with Two Buttons

```html
<section
  layout="flex col center"
  space="p:giant min-h:[100vh]"
  visual="bg:dark text:white"
>
  <h1 space="m-b:small" visual="text-size:vast font:bold text:center">
    The Intent-First CSS Engine
  </h1>
  <p space="max-w:[600px] m-b:big" visual="text:light text-size:big text:center">
    Speak Human. Compile to Logic.<br>
    Stop memorizing scales. Start describing intent.
  </p>
  <div layout="flex" space="g:medium">
    <button 
      space="p-x:big p-y:small"
      visual="bg:primary text:white rounded:medium font:bold hover:bg:[#2563EB]"
    >
      Get Started
    </button>
    <button 
      space="p-x:big p-y:small"
      visual="bg:[transparent] text:white rounded:medium border:white border-w:[2px] hover:bg:[rgba(255,255,255,0.1)]"
    >
      Learn More
    </button>
  </div>
</section>
```

## Hero with Image

```html
<section
  layout="flex col lap:row center"
  space="p:big lap:p:giant"
  visual="bg:light"
>
  <div layout="flex col" space="w:[100%] lap:w:[50%] p:medium">
    <h1 visual="text-size:giant font:bold text:dark">
      Build Faster, Ship Sooner
    </h1>
    <p space="m-t:medium" visual="text:grey text-size:big">
      SenangStart CSS lets you write styling that reads like prose.
    </p>
    <div layout="flex" space="g:small m-t:big">
      <button 
        space="p-x:big p-y:small"
        visual="bg:primary text:white rounded:medium"
      >
        Start Free
      </button>
      <button 
        space="p-x:big p-y:small"
        visual="bg:white text:dark rounded:medium shadow:small"
      >
        View Demo
      </button>
    </div>
  </div>
  <div space="w:[100%] lap:w:[50%] p:medium">
    <div 
      space="w:[100%] h:[400px]"
      visual="bg:primary rounded:big"
    >
      <!-- Image placeholder -->
    </div>
  </div>
</section>
```

## Gradient Hero

```html
<section
  layout="flex col center"
  space="p:giant min-h:[100vh]"
  style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
>
  <h1 visual="text-size:vast font:bold text:white text:center">
    Beautiful Gradients
  </h1>
  <p space="m-t:medium max-w:[500px]" visual="text:white text:center opacity:[0.9]">
    Combine SenangStart with inline styles for custom effects.
  </p>
  <button
    space="m-t:big p-x:big p-y:small"
    visual="bg:white text:dark rounded:round font:bold hover:shadow:big"
  >
    Explore Now
  </button>
</section>
```

## Responsive Hero

```html
<section
  layout="flex col center"
  space="p:medium tab:p:big lap:p:giant min-h:[80vh]"
  visual="bg:dark text:white"
>
  <h1 
    visual="text-size:big tab:text-size:giant lap:text-size:vast font:bold text:center"
  >
    Responsive Hero
  </h1>
  <p 
    space="m-t:small tab:m-t:medium max-w:[600px]" 
    visual="text:light text:center text-size:medium tab:text-size:big"
  >
    This hero adapts to all screen sizes.
  </p>
  <button
    space="m-t:medium tab:m-t:big p-x:medium tab:p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium"
  >
    Get Started
  </button>
</section>
```
