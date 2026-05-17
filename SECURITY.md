# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.3.x   | ✅ Yes |
| < 0.3.0 | ❌ No |

## Reporting a Vulnerability

If you discover a security vulnerability in SenangStart CSS, please report it to the maintainers. Do **not** open a public GitHub issue.

**Report security issues via:**  
- Email: hello@bookklik.com 
- GitHub Security Advisory: https://github.com/bookklik-technologies/senangstart-css/security/advisories/new

**We take CSS injection and XSS vectors seriously.** All user-provided values are sanitized through `sanitizeValue()` which blocks:

- `javascript:`, `data:`, `file:` URLs in `url()` expressions
- `expression()`, `eval()`, `alert()` execution vectors
- `document.` and `window.` access patterns
- Event handler injection (`onclick=`, etc.)
- `<script>` tag injection
- CSS at-rule injection (`@import`, `@keyframes`, `@charset`, `@font-face`)
- Deeply nested brackets (DoS prevention)
- Semicolon-based statement breaking

## Security Model

SenangStart generates CSS from user-provided attribute values. The security model assumes:

1. **Attributes are user-controlled** — any value in `layout`, `space`, or `visual` attributes is considered untrusted input
2. **The sanitizer runs before CSS generation** — `sanitizeValue()` in `src/utils/common.js` is the gate
3. **CSS is injected via `textContent`** — never via `innerHTML` or string concatenation
4. **The JIT engine uses `MutationObserver`** — all DOM scanning is read-only
5. **File I/O has path traversal protection** — the CLI validates paths before reading/writing
6. **HTML parsing uses fresh regex instances** — to prevent ReDoS via regex state accumulation

## Known Limitations

- The semicolon replacement (`[;]` → `_`) may affect legitimate CSS values containing semicolons (extremely rare in property values)
- The JIT engine imports modules without explicit error boundaries (the build process bundles them via esbuild, so this is only relevant during development with raw source)
- Arbitrary bracket values (`[something]`) are length-limited to 500 characters after sanitization
