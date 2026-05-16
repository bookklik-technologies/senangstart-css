# Migration Guide

Migrating to SenangStart CSS from other CSS frameworks.

## From Tailwind CSS

SenangStart provides a [Tailwind conversion engine](https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-tw.min.js) that automatically translates Tailwind classes to SenangStart attribute syntax.

### Automated Conversion

```bash
npx senangstart convert-tailwind input.html -o output.html
```

For single strings:

```bash
npx senangstart convert-tailwind --string '<div class="flex p-4 bg-blue-500 text-white rounded-lg">'
```

### Manual Mapping

| Tailwind | SenangStart |
|----------|-------------|
| `flex` | `layout="flex"` |
| `flex-col` | `layout="col"` |
| `items-center` | `layout="items:center"` |
| `justify-between` | `layout="between"` |
| `grid grid-cols-3` | `layout="grid grid-cols:3"` |
| `p-4` | `space="p:medium"` |
| `m-2` | `space="m:small"` |
| `gap-4` | `space="g:medium"` |
| `w-full` | `space="w:[100%]"` |
| `bg-blue-500` | `visual="bg:blue-500"` |
| `text-white` | `visual="text:white"` |
| `rounded-lg` | `visual="rounded:big"` |
| `shadow-md` | `visual="shadow:medium"` |
| `font-bold` | `visual="font:bold"` |
| `hover:bg-blue-700` | `visual="hover:bg:blue-700"` |
| `dark:bg-gray-800` | `visual="dark:bg:gray-800"` |
| `md:flex-row` | `layout="tab:row"` |

### Exact Mode (TW Prefix)

For projects that need Tailwind scale fidelity without semantic mapping:

```bash
npx senangstart convert-tailwind --exact input.html -o output.html
```

This preserves Tailwind numeric values using the `tw-` prefix (`space="p:tw-4"`).

## From Bootstrap

Bootstrap uses component classes that don't map 1:1 to utility classes. Recommended approach:

1. **Use the CDN JIT engine** alongside your existing Bootstrap setup with preflight disabled
2. **Replace Bootstrap utilities** one section at a time
3. **Keep Bootstrap's grid** or migrate to SenangStart's native grid

```js
// senangstart.config.js
export default {
  preflight: false,  // Disable preflight to avoid conflicts with Bootstrap's reboot
}
```

## From Vanilla CSS / Other Frameworks

1. **Disable preflight** if you have your own reset/normalize
2. **Start with visual attributes** (`visual="bg:primary text:white rounded:small"`)
3. **Add layout attributes** as you refactor components
4. **Use space attributes** for padding, margin, and gap

## Upgrading Between SenangStart Versions

SenangStart is pre-1.0, meaning breaking changes may occur between minor versions. Check the [CHANGELOG](/CHANGELOG) before upgrading.

### v0.2.x → v0.3.0

- **Perspective values changed**: `small/medium/big/giant/vast` → `dramatic/near/normal/midrange/far/distant`
- **Preflight deduplicated**: The `box-sizing: border-box` rule now appears once. If you relied on the duplicate for override purposes, add your own rule.
- **CSS variable fallbacks added**: Critical spacing variables now have fallback values for edge cases.
