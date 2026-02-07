---
name: Add Utility
description: Add new CSS utilities to the framework with definitions, engine, docs, and tests
---

# Add Utility Skill

This skill guides you through the process of adding a new utility to the SenangStart CSS framework.

## Overview

Adding a utility involves four main steps:
1. **Definition**: Define the utility's metadata and syntax in `src/definitions/`.
2. **Engine Implementation**: Add handling logic to the JIT engine.
3. **Documentation**: Document the new utility in the VitePress docs.
4. **Testing**: Add unit and synchronization tests.

## 1. Define the Utility

Add a new definition in the appropriate file in `src/definitions/` (e.g., `visual.js`, `layout.js`, or `space.js`).

```javascript
{
  name: 'my-utility',
  property: 'my-css-property',
  category: 'visual',
  attribute: 'visual',
  description: '...',
  descriptionMs: '...',
  syntax: 'value1 | value2 | [arbitrary]',
  values: [
    { name: 'value1', value: 'css-value1', description: '...' }
  ],
  examples: [
    { code: 'visual="my-utility:value1"', description: '...' }
  ]
}
```

## 2. Update the JIT Engine

Modify `src/cdn/senangstart-engine.js` to handle the new utility in the appropriate generator function (`generateVisualRule`, `generateLayoutRule`, or `generateSpaceRule`).

```javascript
if (prop === 'my-utility') {
    const scaleValue = config.theme.myScale?.[value];
    if (scaleValue) return `my-css-property: ${scaleValue}`;
    if (value.startsWith('[') && value.endsWith(']')) {
        return `my-css-property: ${value.slice(1, -1)}`;
    }
}
```

## 3. Update Documentation

Add the utility to the relevant documentation file in `docs/utilities/`.

## 4. Add Tests

1. **Unit Test**: Add a test in `tests/unit/compiler/generators/`.
2. **Sync Test**: Ensure the utility is covered by synchronization tests.

## Workflows

Use the `/add-utility` workflow to assist with these steps.
