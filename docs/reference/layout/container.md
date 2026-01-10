# Container

Center and constrain content width with the `layout` attribute.

## Syntax
```
layout="container"
```

## CSS Output

The container utility applies:
```css
width: 100%;
margin-left: auto;
margin-right: auto;
```

## Examples

```html
<!-- Basic centered container -->
<div layout="container" space="p-x:4">
  <h1>Page Title</h1>
  <p>Content is centered with horizontal padding.</p>
</div>

<!-- Container with max-width -->
<div layout="container" space="max-w:[1200px] p-x:4">
  <nav>Navigation Bar</nav>
</div>

<!-- Full-width hero with contained content -->
<section visual="bg:primary">
  <div layout="container" space="p:8 max-w:[1280px]">
    <h1 visual="text:white">Hero Section</h1>
  </div>
</section>
```

## With Responsive Max-Width

Combine with `max-w` for responsive containers:

```html
<div layout="container" space="max-w:[640px] mob:max-w:[768px] tab:max-w:[1024px] lap:max-w:[1280px]">
  Responsive container
</div>
```

## Common Patterns

```html
<!-- Blog/article layout -->
<article layout="container" space="max-w:[65ch] p-x:4">
  <p>Readable line length for long-form content.</p>
</article>

<!-- Dashboard layout -->
<main layout="container" space="max-w:[1440px] p-x:6">
  <div layout="grid grid-cols:12 g:6">
    <!-- Grid content -->
  </div>
</main>
```
