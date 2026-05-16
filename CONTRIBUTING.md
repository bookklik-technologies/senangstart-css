# Contributing to SenangStart CSS

Thanks for your interest in contributing!

## Getting Started

```bash
git clone https://github.com/bookklik-technologies/senangstart-css
cd senangstart-css
npm install
npm test
```

## Development Workflow

| Command | Description |
|---------|-------------|
| `npm test` | Run all unit + integration tests |
| `npm run test:watch` | Watch mode |
| `npm run test:coverage` | Coverage report |
| `npm run test:visual` | Playwright visual regression tests |
| `npm run lint:css` | Stylelint CSS validation |
| `npm run build:dist` | Build distribution bundles |
| `npm run docs:dev` | Start VitePress docs dev server |

## Project Structure

```
src/
  core/           # Shared constants + tokenizer logic
  compiler/       # Parser, CSS generators, preflight
  config/         # Default configuration
  definitions/    # Utility definitions (single source of truth)
  cdn/            # JIT runtime + Tailwind converter
  cli/            # CLI commands (init, build, dev)
  utils/          # Shared utilities (sanitizer, I/O, logger)
tests/
  unit/           # Unit tests mirroring src/ structure
  integration/    # End-to-end compiler tests
  sync/           # Docs-code sync validation
  visual/         # Playwright visual regression tests
  fixtures/       # Test HTML fixtures
```

## Code Standards

- **No comments** in source files unless the logic is non-obvious (existing code style)
- **Use Node.js native test runner** (`node --test`) — no Jest/Mocha
- **All exports must have JSDoc types** for the TypeScript definition generator
- **Definitions** in `src/definitions/` are the canonical API reference
- **Run `npm test` before committing** — CI enforces this

## Adding a New Utility

1. Add the definition in `src/definitions/` (see existing files for the schema)
2. Add CSS generation logic in `src/compiler/generators/css.js`
3. Add tests in `tests/unit/compiler/generators/css.test.js`
4. Run `npm run docs:generate` to update documentation
5. Run `npm test` to verify

## Known Technical Debt

- `src/cdn/tw-conversion-engine.js`: The `convertClass()` function is a 685-line monolith with sequential regex matching. A registry-based pattern (`pattern → handler` map) would be more maintainable. Contributions to refactor this are welcome.
- `src/cli/commands/dev.js`: The watcher restart mechanism uses event re-attachment rather than proper watcher replacement.
- `types/` directory: Currently gitignored but files exist on disk. The types should either be committed or generated during `npm install`.
