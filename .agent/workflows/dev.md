---
description: Start development server with hot reload for docs or CLI watch mode
---

# Development Workflow

## Start Documentation Dev Server

// turbo
1. Start VitePress dev server:
```bash
npm run docs:dev
```

This launches the documentation site at `http://localhost:5173` with hot reload.

## CLI Watch Mode

// turbo
1. Run the CLI in development watch mode:
```bash
npm run dev
```

Or using the CLI directly:
```bash
senangstart dev
```

Options:
- `--no-preflight` - Exclude Preflight base styles
- `--config <path>` - Custom config file path (default: `senangstart.config.js`)

## Initialize New Project

1. Create a new config file:
```bash
senangstart init
```

This generates `senangstart.config.js` in the current directory.

## Testing Changes

After making changes to source files:
1. The docs dev server will auto-reload for `docs/` changes
2. For `src/` changes affecting JIT, rebuild with `npm run build:dist`
3. Run tests to verify: `npm test`

## Key Development Files

| Purpose | Location |
|---------|----------|
| JIT Engine | `src/cdn/senangstart-engine.js` |
| Definitions | `src/definitions/*.js` |
| CLI Commands | `src/cli/commands/*.js` |
| Compiler | `src/compiler/` |
| Config | `src/config/defaults.js` |
