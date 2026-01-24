---
description: Run tests including unit, integration, sync, and coverage reports
---

// turbo-all

# Testing Workflow

## Run All Tests

// turbo
1. Execute the full test suite:
```bash
npm test
```

## Unit Tests Only

// turbo
1. Run unit tests:
```bash
npm run test:unit
```

Unit tests cover:
- `tests/unit/compiler/` - CSS generators and parser tests
- `tests/unit/config/` - Configuration loading tests
- `tests/unit/convert-tailwind.test.js` - TW conversion tests
- `tests/unit/security.test.js` - Security validation tests

## Integration Tests

// turbo
1. Run integration tests:
```bash
npm run test:integration
```

Integration tests in `tests/integration/` verify end-to-end compilation.

## Sync Tests

// turbo
1. Run sync tests:
```bash
npm run test:sync
```

Sync tests in `tests/sync/` verify definition-to-engine parity.

## Watch Mode

// turbo
1. Run tests in watch mode for TDD:
```bash
npm run test:watch
```

## Coverage Report

1. Generate test coverage report:
```bash
npm run test:coverage
```

This creates:
- Console text report
- HTML report in `coverage/` directory

## Test File Structure

```
tests/
├── helpers/           # Test utilities
├── integration/       # End-to-end tests
├── sync/              # Definition sync tests
└── unit/
    ├── compiler/
    │   ├── generators/
    │   │   ├── 3d-transforms.test.js
    │   │   ├── css.test.js
    │   │   └── html.test.js
    │   └── parser.test.js
    ├── config/
    │   └── config.test.js
    ├── convert-tailwind.test.js
    └── security.test.js
```

## Writing New Tests

1. Create test file in appropriate `tests/` subdirectory
2. Use Node.js built-in test runner:
```javascript
import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('MyFeature', () => {
  test('should do something', () => {
    assert.strictEqual(actual, expected);
  });
});
```
