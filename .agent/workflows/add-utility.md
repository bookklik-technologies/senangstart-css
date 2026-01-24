---
description: Add new CSS utilities to the framework with definitions, engine, docs, and tests
---

# Add New Utility Workflow

## Overview

Adding a new utility requires updates to 4 areas:
1. **Definition** - Single source of truth in `src/definitions/`
2. **JIT Engine** - Runtime handler in `src/cdn/senangstart-engine.js`
3. **Documentation** - Auto-generated via `npm run docs:generate`
4. **Tests** - Unit tests in `tests/unit/`

## Step 1: Create/Update Definition

1. Identify the appropriate definition file:
   - `layout-*.js` - Layout utilities
   - `space.js` - Spacing utilities
   - `visual-*.js` - Visual utilities

2. Add the definition object:
```javascript
export const myUtility = {
  name: 'my-utility',
  property: 'my-css-property',
  category: 'visual',  // layout | space | visual
  attribute: 'visual', // Which HTML attribute
  description: 'Does something useful',
  descriptionMs: 'Melakukan sesuatu yang berguna',
  syntax: 'my-utility:<value>',
  values: [
    { name: 'option1', value: 'css-value-1', description: 'Option 1' },
    { name: 'option2', value: 'css-value-2', description: 'Option 2' }
  ],
  examples: [
    { code: 'visual="my-utility:option1"', description: 'Example usage' }
  ],
  notes: 'Additional notes for documentation'
};
```

3. Export in the definition file and `src/definitions/index.js`

## Step 2: Implement in JIT Engine

Edit `src/cdn/senangstart-engine.js`:

1. Find the appropriate handler section (layout/space/visual)
2. Add the utility pattern matching:

```javascript
// In generateVisualRule or similar function
if (prop === 'my-utility') {
  if (value === 'option1') return 'my-css-property: css-value-1';
  if (value === 'option2') return 'my-css-property: css-value-2';
  // Or with scales:
  const scaleValue = config.theme.myScale?.[value];
  if (scaleValue) return `my-css-property: ${scaleValue}`;
}
```

3. If using a new scale, add to `defaultConfig.theme`:
```javascript
myScale: {
  'small': '4px',
  'medium': '8px',
  'big': '16px'
}
```

## Step 3: Generate Documentation

// turbo
1. Auto-generate reference docs:
```bash
npm run docs:generate
```

2. Verify output in:
   - `docs/reference/<category>/<utility-name>.md`
   - `docs/ms/reference/<category>/<utility-name>.md`

## Step 4: Write Tests

1. Add to existing test file or create new one in `tests/unit/`:

```javascript
import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('my-utility', () => {
  test('generates correct CSS for option1', () => {
    const result = generateVisualRule('my-utility', 'option1', config);
    assert.strictEqual(result, 'my-css-property: css-value-1');
  });
});
```

// turbo
2. Run tests:
```bash
npm test
```

## Step 5: Rebuild Distribution

// turbo
1. Rebuild to include changes:
```bash
npm run build:dist
```

## Verification Checklist

- [ ] Definition has all required fields: `name`, `property`, `category`, `attribute`, `description`, `descriptionMs`, `syntax`, `values`, `examples`
- [ ] JIT engine handles all defined values
- [ ] Documentation generates correctly for EN and MS
- [ ] Tests pass
- [ ] Distribution builds successfully

## Definition Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Utility name (e.g., 'display', 'bg') |
| `property` | string/array | CSS property(s) affected |
| `category` | string | 'layout', 'space', or 'visual' |
| `attribute` | string | HTML attribute this belongs to |
| `description` | string | English description |
| `descriptionMs` | string | Malay description |
| `syntax` | string | Usage syntax pattern |
| `values` | array | Possible values with descriptions |
| `examples` | array | Usage examples |
| `notes` | string | (Optional) Extra documentation notes |

## Common Patterns

**Boolean/Toggle Utility:**
```javascript
values: [{ name: 'true', value: 'inherit', description: 'Enable' }]
```

**Scale-Based Utility:**
```javascript
values: Object.keys(theme.myScale).map(k => ({ name: k, ... }))
```

**Arbitrary Value Support:**
```javascript
// In JIT: Allow [value] pattern
if (value.startsWith('[') && value.endsWith(']')) {
  return `my-property: ${value.slice(1, -1)}`;
}
```
