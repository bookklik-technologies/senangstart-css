/**
 * SenangStart CSS Configuration
 * @see https://bookklik-technologies.github.io/senangstart-css/guide/configuration
 */

export default {
  // Files to scan for SenangStart attributes
  content: [
    './**/*.html',
    './src/**/*.{html,jsx,tsx,vue,svelte}',
    './components/**/*.{html,jsx,tsx}'
  ],

  // Output configuration
  output: {
    css: './public/senangstart.css',
    minify: true,
    aiContext: './.cursorrules',
    typescript: './types/senang.d.ts'
  },

  // Build behavior
  build: {
    // true = warn instead of failing on invalid tokens (same as --ignore-invalid)
    ignoreInvalid: false
  },

  // Base reset styles (set false if you have your own reset/normalize)
  preflight: true,

  // Dark mode: 'media' (OS preference) | 'selector' (.dark class) | ['selector', '.custom']
  darkMode: 'media',

  // Theme customization
  theme: {
    // Override or extend the default spacing scale
    // spacing: {
    //   'huge': '256px'  // Add custom scale
    // },

    // Add custom colors
    // colors: {
    //   'brand': '#38BDF8',
    //   'accent': '#EC4899'
    // }
  }
}
