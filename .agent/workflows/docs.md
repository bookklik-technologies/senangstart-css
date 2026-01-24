---
description: Generate, build, and manage documentation from definitions
---

// turbo-all

# Documentation Workflow

## Generate Docs from Definitions

// turbo
1. Auto-generate reference documentation from utility definitions:
```bash
npm run docs:generate
```

This reads `src/definitions/*.js` and generates markdown files in:
- `docs/reference/` (English)
- `docs/ms/reference/` (Malay)

Options:
- `--locale en|ms` - Generate for specific locale
- `--dry-run` - Preview without writing files

## Check Doc Sync Status

// turbo
1. Compare generated docs with definitions:
```bash
npm run docs:sync-check
```

## Extract Syntax Reference

// turbo
1. Generate syntax reference files:
```bash
npm run docs:syntax
```

Outputs:
- `docs/SYNTAX-REFERENCE.md`
- `docs/syntax-reference.json`

## Generate LLM Context File

// turbo
1. Build llms.txt for AI context:
```bash
npm run docs:llms
```

Creates `docs/public/llms.txt` with utility definitions.

## Build Production Docs

1. Full production build (includes dist + docs):
```bash
npm run build
```

This runs:
1. `npm run build:dist` - Build distribution files
2. `npm run docs:generate` - Generate reference docs
3. `vitepress build docs` - Build VitePress site
4. `npm run docs:llms` - Generate LLM file

## Documentation Structure

```
docs/
├── .vitepress/         # VitePress config
├── examples/           # Code examples
├── guide/              # User guide pages
│   ├── getting-started.md
│   ├── philosophy.md
│   ├── tri-attribute.md
│   └── ...
├── ms/                 # Malay translations
│   └── reference/      # Auto-generated Malay docs
├── public/             # Static assets
│   ├── assets/         # Bundled JS files
│   └── llms.txt        # LLM context
└── reference/          # Auto-generated English docs
    ├── layout/
    ├── space/
    └── visual/
```

## Adding New Documentation

### Manual Guide Pages
1. Create/edit markdown files in `docs/guide/`
2. Update `docs/.vitepress/config.js` sidebar if needed

### Auto-Generated Reference Pages
1. Add/update definitions in `src/definitions/*.js`
2. Run `npm run docs:generate`
3. Verify with `npm run docs:sync-check`

## Localization

Definitions include both English and Malay descriptions:
```javascript
{
  name: 'display',
  description: 'Controls element display type',
  descriptionMs: 'Mengawal jenis paparan elemen',
  // ...
}
```

The generator automatically uses the appropriate description for each locale.
