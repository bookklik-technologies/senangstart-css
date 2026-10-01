import { defineConfig } from 'vite';
import senangstart from '@bookklik/senangstart-css/vite';

export default defineConfig({
  plugins: [
    // Options are optional — senangstart.config.js is discovered automatically.
    senangstart()
  ]
});
