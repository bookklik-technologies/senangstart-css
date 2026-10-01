import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import senangstart from '@bookklik/senangstart-css/vite';

export default defineConfig({
  plugins: [
    // Generates CSS from the attributes used in resources/views/**/*.blade.php
    // (see senangstart.config.js) and replaces `@import "senangstart";` in app.css.
    senangstart(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      // Full page reload on Blade edits. SenangStart regenerates the CSS
      // before the reloaded page requests it.
      refresh: true
    })
  ]
});
