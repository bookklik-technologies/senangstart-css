# Integrations

::: v-pre

SenangStart generates CSS by [scanning your content files](/guide/content-scanning) for `layout`, `space` and `visual` attributes. Pick the integration that matches your toolchain — they all share the same config file (`senangstart.config.{js,mjs,cjs,json,ts}`) and the same engine.

| Toolchain | Use | Entry point |
|-----------|-----|-------------|
| Vite (any framework) | Vite plugin | `@bookklik/senangstart-css/vite` |
| Laravel + Vite | Vite plugin + `laravel-vite-plugin` | `@bookklik/senangstart-css/vite` |
| PostCSS (postcss-cli, webpack `postcss-loader`, Parcel, …) | PostCSS plugin | `@bookklik/senangstart-css/postcss` |
| Custom scripts / other bundlers | Node API | `@bookklik/senangstart-css/node` |
| No build step | CDN JIT runtime | `dist/senangstart-css.min.js` |
| Anything else | CLI (`senangstart build` / `dev`) | see [CLI](/guide/cli) |

`vite` (≥ 5) and `postcss` (≥ 8.4) are **optional** peer dependencies — install only what you use.

## Vite

```bash
npm install -D @bookklik/senangstart-css
```

```js
// vite.config.js
import { defineConfig } from 'vite';
import senangstart from '@bookklik/senangstart-css/vite';

export default defineConfig({
  plugins: [senangstart()]
});
```

Then load the generated CSS in **one** of two ways:

```js
// 1. Virtual module — in your JS entry (main.js / main.ts)
import 'virtual:senangstart.css';
```

```css
/* 2. Directive — in any CSS file Vite processes */
@import "senangstart";   /* or: @senangstart; */

.my-own-styles { /* … */ }
```

The directive line is replaced with the generated CSS; everything else in the file stays. Only the first directive in a file is expanded.

For TypeScript, declare the virtual module once (e.g. in `src/vite-env.d.ts`):

```ts
declare module 'virtual:senangstart.css';
```

### Behaviour

| | `vite` (dev) | `vite build` |
|---|---|---|
| Generation | in memory, on demand | once per build |
| Content / config changes | HMR CSS update — no full page reload | `vite build --watch` re-runs when a scanned file or the config changes |
| Minification | none | Vite's CSS minifier (`build.cssMinify`) |
| Invalid tokens | logged as warnings | **fail the build** (unless `ignoreInvalid: true`) |

Edits to files matched by `content` (and files newly created inside a content glob) regenerate the CSS and push an HMR update for the virtual module and for every CSS file containing the directive. Editing the config file reloads it (cache-busted) before regenerating.

### Options

```ts
senangstart({
  config?: string | SenangStartConfig, // path (relative to cwd) or inline config; default: auto-discover
  cwd?: string,                        // default: Vite's `root`
  content?: string[],                  // override config.content
  safelist?: string[],                 // appended to config.safelist
  preflight?: boolean,                 // override config.preflight
  ignoreInvalid?: boolean,             // warn instead of failing `vite build`
  minify?: boolean                     // pre-minify (default false — Vite minifies in build)
})
```

The plugin never writes files (`output.css`, `output.aiContext` and `output.typescript` are ignored); use the CLI for side outputs.

A runnable example lives in [`examples/vite-vanilla`](https://github.com/bookklik-technologies/senangstart-css/tree/main/examples/vite-vanilla).

## Laravel + Vite

Laravel 10/11 ship with Vite and `laravel-vite-plugin`. Add SenangStart **before** `laravel()`:

```js
// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import senangstart from '@bookklik/senangstart-css/vite';

export default defineConfig({
  plugins: [
    senangstart(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true
    })
  ]
});
```

```js
// senangstart.config.js
export default {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.{js,vue}'
  ]
};
```

```css
/* resources/css/app.css */
@import "senangstart";
```

```blade
{{-- resources/views/layouts/app.blade.php --}}
<head>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body visual="bg:neutral-50">
    <main layout="flex col" space="p:big">@yield('content')</main>
</body>
```

With `refresh: true`, Blade edits trigger a page refresh; SenangStart marks its CSS stale on the same file event, so the refreshed page receives the regenerated CSS. `npm run build` writes a minified `public/build/assets/app-*.css`.

Blade interpolation is understood — `visual="rounded:medium {{ $active ? 'bg:primary' : 'bg:white' }}"` yields all three tokens. Fully dynamic values (`visual="{{ $classes }}"`) can't be seen; list those tokens in `safelist` or a `{{-- senang: visual="bg:danger" --}}` hint. See [Content Scanning](/guide/content-scanning).

Full layout: [`examples/laravel-vite`](https://github.com/bookklik-technologies/senangstart-css/tree/main/examples/laravel-vite).

## PostCSS

```js
// postcss.config.js
import senangstart from '@bookklik/senangstart-css/postcss';

export default {
  plugins: [
    senangstart(),       // must run before postcss-import, which would try to resolve "senangstart"
    // autoprefixer(), …
  ]
};
```

```css
/* src/app.css */
@import "senangstart";   /* or: @senangstart; */
```

- The directive is replaced with the generated CSS. Files **without** the directive pass through untouched, so it is safe to apply the plugin to every CSS file.
- Every scanned file is registered as a `dependency` message, the config file too, and each content-glob base directory as a `dir-dependency` (with its `glob`). `postcss-cli --watch`, webpack's `postcss-loader`, Vite and Parcel use these to rebuild when markup changes.
- Invalid tokens **throw** a `CssSyntaxError` (mirroring `senangstart build`), with `file:line` for each token. Pass `ignoreInvalid: true` to report them through `result.warn()` instead — e.g. `ignoreInvalid: process.env.NODE_ENV !== 'production'`.
- Warnings (unknown config keys, unreadable files, no matching sources) are reported through `result.warn()`.

Options: `config`, `cwd` (default `process.cwd()`), `content`, `safelist`, `preflight`, `minify`, `ignoreInvalid` — same meaning as for Vite — plus `fresh` (default `true`: re-import the config on every run so edits are picked up by long-running watchers; set `false` to import it once).

::: tip Using Vite?
Prefer the Vite plugin: it gives HMR CSS updates and dev-only warnings. If you already use the PostCSS plugin inside Vite, it works too (Vite reads the dependency messages).
:::

## Programmatic API

For custom build scripts, other bundlers, or server-side rendering:

```js
import { build, watch, loadConfig, defineConfig } from '@bookklik/senangstart-css/node';

const result = await build({
  cwd: process.cwd(),
  config: 'senangstart.config.mjs', // path or config object; omit to auto-discover
  content: ['./src/**/*.html'],     // optional override
  output: false,                    // false = return CSS only; string = write to this path
  minify: true,
  safelist: ['flex'],
  ignoreInvalid: false
});

result.css;      // generated CSS
result.ok;       // errors.length === 0
result.errors;   // [{ raw, attrType, code, message, suggestion?, file?, line?, level }]
result.warnings;
result.files;    // absolute paths that were scanned — use them as watch dependencies

const watcher = await watch({ cwd: process.cwd(), output: 'public/app.css' }, (res, err, meta) => {
  if (err) console.error(err.message);
  else console.log(`${meta.event}: ${res.tokenCount} tokens in ${res.durationMs}ms`);
});
await watcher.close();
```

`build()` throws `ConfigError` for a missing/invalid config and `BuildError` (with `.code`, e.g. `NO_SOURCES`) for unrecoverable failures; invalid tokens are reported in `result.errors`, not thrown. Types ship with the package (`@bookklik/senangstart-css/node`).

## CDN

No bundler at all? The JIT runtime scans the live DOM in the browser:

```html
<script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-css.min.js"></script>
```

Great for prototypes, CMS themes and demos; for production prefer a build-time integration so users download only the CSS you use. See [CDN](/guide/cdn).

:::
