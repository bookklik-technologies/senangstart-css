# SenangStart CSS + Laravel + Vite

A minimal Laravel-style layout (documentation-grade — no PHP runtime needed to
read it). Drop these files into a Laravel 10/11 app:

```
vite.config.js                 # senangstart() + laravel-vite-plugin
senangstart.config.js          # content: resources/views/**/*.blade.php …
resources/css/app.css          # @import "senangstart";
resources/js/app.js
resources/views/layouts/app.blade.php   # @vite([...])
resources/views/components/card.blade.php
resources/views/welcome.blade.php
```

```bash
npm install -D @bookklik/senangstart-css
npm run dev      # Blade edits → CSS regenerated + page refresh
npm run build    # public/build/assets/app-*.css (minified, only used utilities)
```

Notes

- `senangstart()` should be listed **before** `laravel()` so it sees
  `resources/css/app.css` before any other CSS processing.
- Blade interpolations are understood: `visual="rounded:medium {{ $x ? 'bg:primary' : 'bg:white' }}"`
  yields `rounded:medium`, `bg:primary` and `bg:white`. Fully dynamic values
  (`visual="{{ $classes }}"`) cannot be seen — add those tokens to `safelist`
  or a `{{-- senang: visual="…" --}}` hint comment.
- Invalid tokens fail `npm run build`; use `senangstart({ ignoreInvalid: true })`
  to downgrade them to warnings.
