# What is SenangStart CSS?

SenangStart CSS is a utility-first CSS framework that replaces abstract naming conventions with **Natural Adjectives**.

## The Problem

Traditional utility frameworks make you memorize arbitrary scales:

```html
<!-- What does px-4 even mean? -->
<div class="px-4 py-8 mt-16 mb-32">...</div>
```

Is `px-4` pixels? Is `mt-16` bigger than `mb-32`? You need to constantly look up the documentation.

## The Solution

SenangStart uses words you already understand:

```html
<!-- Instantly understandable -->
<div space="p-x:small p-y:medium m-t:big m-b:giant">...</div>
```

**No mental math. No lookup tables. Just describe what you want.**

## Core Principles

### 1. Natural Language First

| Instead of... | Use... |
|---------------|--------|
| `px-4` | `tiny` |
| `px-8` | `small` |
| `px-16` | `medium` |
| `px-32` | `big` |
| `px-64` | `giant` |
| `px-128` | `vast` |

### 2. Separation of Concerns

Three attributes, three responsibilities:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `layout` | Structure & flow | `layout="flex col center"` |
| `space` | Spacing & sizing | `space="p:medium g:small"` |
| `visual` | Colors & appearance | `visual="bg:white rounded:big"` |

### 3. AI-Friendly

SenangStart generates context files that help AI assistants understand your design system:

> **When user says:** "tighten it up"  
> **AI knows to:** Scale spacing DOWN (medium → small → tiny)

> **When user says:** "give it air"  
> **AI knows to:** Scale spacing UP (medium → big → giant)

## Next Steps

- [Getting Started](/guide/getting-started) — Install and use SenangStart
- [The Natural Scale](/guide/natural-scale) — Understand the spacing philosophy
- [Tri-Attribute Syntax](/guide/tri-attribute) — Learn layout, space, and visual
