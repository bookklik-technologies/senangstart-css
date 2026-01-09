# Card Examples

Beautiful card components built with SenangStart CSS.

## Basic Card

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <h3 visual="font:bold text-size:big text:dark">Card Title</h3>
  <p space="m-t:small" visual="text:grey">
    Card description goes here with some helpful text.
  </p>
</div>
```

## Profile Card

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div layout="flex between" space="m-b:big">
    <span visual="font:bold text-size:big text:dark">Profile</span>
    <span visual="text:primary">Edit</span>
  </div>
  <div layout="flex col" space="g:small">
    <label visual="text:grey text-size:small">Username</label>
    <div visual="text:dark">@senang_dev</div>
  </div>
  <div layout="flex col" space="g:small m-t:medium">
    <label visual="text:grey text-size:small">Email</label>
    <div visual="text:dark">hello@senangstart.dev</div>
  </div>
  <button 
    space="m-t:big p-y:small"
    visual="bg:primary text:white rounded:medium font:medium hover:bg:[#2563EB]"
  >
    View Full Profile
  </button>
</div>
```

## Pricing Card

```html
<div
  layout="flex col"
  space="w:[300px] p:big"
  visual="bg:white rounded:big shadow:medium text:center"
>
  <h3 visual="font:bold text-size:big text:dark">Pro Plan</h3>
  <div space="m-t:small m-b:medium">
    <span visual="text-size:vast font:bold text:dark">$29</span>
    <span visual="text:grey">/month</span>
  </div>
  <div layout="flex col" space="g:small" visual="text:grey text:left">
    <div>✓ Unlimited projects</div>
    <div>✓ Priority support</div>
    <div>✓ Advanced analytics</div>
    <div>✓ Custom domains</div>
  </div>
  <button 
    space="m-t:big p:small"
    visual="bg:primary text:white rounded:medium font:bold"
  >
    Get Started
  </button>
</div>
```

## Feature Card

```html
<div
  layout="flex col"
  space="p:big"
  visual="bg:white rounded:big shadow:small hover:shadow:big"
>
  <div space="m-b:medium" visual="text-size:giant">🚀</div>
  <h3 space="m-b:small" visual="font:bold text-size:big text:dark">
    Fast Performance
  </h3>
  <p visual="text:grey">
    Lightning fast builds with optimized output. 
    Your users will love the speed.
  </p>
</div>
```

## Horizontal Card

```html
<div
  layout="flex row"
  space="p:medium g:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <div 
    space="w:[80px] h:[80px]"
    visual="bg:primary rounded:medium"
  ></div>
  <div layout="flex col" space="g:tiny">
    <h3 visual="font:bold text:dark">Article Title</h3>
    <p visual="text:grey text-size:small">
      A brief description of the article content.
    </p>
    <span visual="text:primary text-size:small">Read more →</span>
  </div>
</div>
```
