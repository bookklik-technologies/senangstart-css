# SenangStart CSS Blueprint

**Tagline:** The Intent-First CSS Engine.
**Philosophy:** "Speak Human. Compile to Logic."

---

## 1. The Core Configuration

This is the single source of truth. We replace abstract "vibes" with **Natural Adjectives**. This eliminates the mental lookup table—users instinctively know the order.

**`senangstart.config.js`**

```jsx
export default {
  theme: {
    // 1. Spacing: The "Natural Object" Scale
    // Logic: How big is the object/gap physically?
    spacing: {
      'none':   '0px',
      'tiny':   '4px',   // Pebble (Borders, offsets)
      'small':  '8px',   // Matchbox (Grouping inside components)
      'medium': '16px',  // Smartphone (Standard default)
      'big':    '32px',  // Laptop (Separation between groups)
      'giant':  '64px',  // Door (Layout sections)
      'vast':   '128px'  // House (Hero sections)
    },

    // 2. Radius: Tactile Feel
    radius: {
      'none':   '0px',
      'small':  '4px',   // Subtle nudge
      'medium': '8px',   // Soft corner
      'big':    '16px',  // Distinct curve
      'round':  '9999px' // Pill/Circle
    },

    // 3. Breakpoints: Device Intent
    screens: {
      'mob': '480px',
      'tab': '768px',
      'lap': '1024px',
      'desk': '1280px'
    }
  }
}

```

---

## 2. The Tri-Attribute Syntax

We strictly enforce separation of concerns using three HTML attributes.

### A. `layout="..."` (The Skeleton)

*Controls positioning, display logic, and flow.*

- **Keywords:** `flex`, `grid`, `block`, `hidden`, `absolute`, `fixed`, `sticky`.
- **Modifiers:** `row`, `col`, `center`, `between`, `wrap`.
- **Z-Index:** `z:top`, `z:base`, `z:low`.

### B. `space="..."` (The Geometry)

*Controls size, gaps, and breathing room using the Natural Scale.*

- **Syntax:** `[breakpoint]:[property]:[scale]`
- **Properties:** `p` (padding), `m` (margin), `g` (gap), `w` (width), `h` (height).
- **Values:** `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`.
- **Escape Hatch:** `w:[350px]` (Use brackets for specific "Magic Numbers").

### C. `visual="..."` (The Skin)

*Controls texture, color, and state.*

- **Properties:** `bg`, `text`, `border`, `shadow`, `opacity`, `rounded`.
- **Values:** Uses the config (e.g., `rounded:medium`, `shadow:big`).

---

## 3. The Compiler Architecture

The CLI watches files and generates **three** specific outputs to bridge Human, Browser, and AI.

### Output 1: The Stylesheet (`public/senangstart.css`)

Uses Attribute Selectors for specificity without class-name bloat.

```css
/* Variable Injection */
:root {
  --s-small: 8px;
  --s-medium: 16px;
  --s-big: 32px;
}

/* Logic */
[layout~="flex"] { display: flex; }
[layout~="col"] { flex-direction: column; }

/* Geometry */
[space~="p:medium"] { padding: var(--s-medium); }
[space~="g:small"] { gap: var(--s-small); }

/* Responsive */
@media (min-width: 768px) {
  [space~="tab:p:big"] { padding: var(--s-big); }
}

```

### Output 2: The AI Bridge (`.cursorrules` / `ai-context.md`)

**This is the v1.2 Killer Feature.** The compiler translates your config into a logic prompt for LLMs.

> Generated AI Context:
> 
> 1. **SPACING RULES:**
>     - Use `medium` (16px) as the default for standard flow.
>     - Use `small` (8px) to group related items (e.g., Image + Title).
>     - Use `big` (32px) to separate distinct sections.
> 2. **NATURAL LANGUAGE MAPPING:**
>     - If user says "tighten it up", shift scale down (e.g., Medium -> Small).
>     - If user says "give it air", shift scale up (e.g., Medium -> Big).

### Output 3: TypeScript Definitions (`types/senang.d.ts`)

Ensures autocomplete works in VS Code and silences React errors.

```tsx
declare module 'react' {
  interface HTMLAttributes<T> {
    layout?: string;
    space?: "p:tiny" | "p:small" | "p:medium" | "p:big" | string; // Auto-generated unions
    visual?: string;
  }
}

```

---

## 4. Usage Comparison

**Scenario:** A User Profile Card.
*Requirements:* Standard padding, distinct header separation, items grouped tightly.

### The "Senang" Way

```html
<div
  layout="flex col"
  space="w:[320px] p:medium"
  visual="bg:white rounded:big shadow:medium"
>
  <!-- Header: Big margin bottom to separate from content -->
  <div layout="flex between" space="m-b:big">
     <span visual="font:bold text:lg">Profile</span>
     <span visual="text:grey">Edit</span>
  </div>

  <!-- Content: Small gap to keep label and value connected -->
  <div layout="flex col" space="g:small">
     <label visual="text:grey text:sm">Username</label>
     <div visual="text:dark">@senang_dev</div>
  </div>
</div>

```

---

## 5. Implementation Roadmap

1. **Parser Update:**
    - Refactor the Regex engine to accept the `tiny/small/medium/big` keywords instead of the old v1.0 logic.
2. **Config Loader:**
    - Ensure `senangstart.config.js` defaults to the "Natural Scale" if no file is found.
3. **AI Context Generator:**
    - Write the script that parses the config keys and writes the `.cursorrules` file with the "Natural Language Mapping" instructions.
4. **VS Code Extension (Optional but recommended):**
    - Simple JSON schema validation to suggest `p:medium` when typing inside `space=""`.