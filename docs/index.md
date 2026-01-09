---
layout: home

hero:
  name: SenangStart CSS
  text: The Intent-First CSS Engine
  tagline: Speak Human. Compile to Logic.
  image:
    src: https://senangstart.com/img/ss_logo_typo.svg
    alt: SenangStart CSS
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/nicemak/senangstart-css

features:
  - icon: 🧠
    title: Natural Language
    details: Use tiny, small, medium, big, giant, vast — words you already know. No more memorizing px-4, px-8, px-16.
  - icon: 🎯
    title: Separation of Concerns
    details: layout for structure, space for sizing, visual for appearance. Clean, semantic, maintainable.
  - icon: 🤖
    title: AI-Friendly
    details: Generates context files for LLMs. Say "tighten it up" and AI knows to scale down spacing.
  - icon: ⚡
    title: Zero Build Option
    details: Use the CDN JIT runtime for instant styling. No build step required for prototyping.
  - icon: 📱
    title: Responsive by Design
    details: Mobile-first breakpoints with intuitive prefixes like mob:, tab:, lap:, desk:.
  - icon: 🎨
    title: Fully Customizable
    details: Override any scale, add custom colors, extend the theme to match your brand.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #2563EB 30%, #3B82F6);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #2563EB 50%, #3B82F6 50%);
  --vp-home-hero-image-filter: blur(44px);
  --vp-c-brand-1: #2563EB;
  --vp-c-brand-2: #3B82F6;
  --vp-c-brand-3: #DBEAFE;
}
</style>

## Quick Example

```html
<div
  layout="flex col center"
  space="p:big"
  visual="bg:primary text:white rounded:big"
>
  Hello SenangStart!
</div>
```

This creates a flexbox column, centered, with big padding, primary background, white text, and big rounded corners. **No CSS classes to memorize.**
