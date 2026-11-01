import demoConfig from './examples/vite-vanilla/senangstart.config.js';

export default {
  content: [
    './examples/**/*.{html,php,js,jsx,ts,tsx,vue,svelte,astro}',
    './playground/index.html',
    './docs/.vitepress/theme/**/*.{vue,js,ts}'
  ],
  theme: demoConfig.theme
};
