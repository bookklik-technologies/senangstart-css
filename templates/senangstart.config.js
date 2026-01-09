/**
 * SenangStart CSS Configuration
 * @see https://senangstart.dev/docs/configuration
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

  // Theme customization
  theme: {
    // Override or extend the default spacing scale
    // spacing: {
    //   'huge': '256px'  // Add custom scale
    // },

    // Add custom colors
    // colors: {
    //   'brand': '#8B5CF6',
    //   'accent': '#EC4899'
    // }
  }
}
