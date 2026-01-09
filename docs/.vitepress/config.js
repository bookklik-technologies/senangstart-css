import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SenangStart CSS',
  description: 'The Intent-First CSS Engine - Speak Human, Compile to Logic',
  
  // GitHub Pages base path (change to your repo name)
  base: '/bookklik-technologies/senangstart-css/',
  
  head: [
    ['link', { rel: 'icon', href: '/senangstart-css/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/layout' },
      { text: 'Examples', link: '/examples/' },
      {
        text: 'v0.1.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'GitHub', link: 'https://github.com/nicemak/senangstart-css' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is SenangStart?', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Why Natural Language?', link: '/guide/philosophy' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Tri-Attribute Syntax', link: '/guide/tri-attribute' },
            { text: 'The Natural Scale', link: '/guide/natural-scale' },
            { text: 'Responsive Design', link: '/guide/responsive' },
            { text: 'Hover & States', link: '/guide/states' }
          ]
        },
        {
          text: 'Usage',
          items: [
            { text: 'CDN (Zero Build)', link: '/guide/cdn' },
            { text: 'CLI Build', link: '/guide/cli' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Attributes',
          items: [
            { text: 'layout', link: '/reference/layout' },
            { text: 'space', link: '/reference/space' },
            { text: 'visual', link: '/reference/visual' }
          ]
        },
        {
          text: 'Theme',
          items: [
            { text: 'Spacing', link: '/reference/spacing' },
            { text: 'Colors', link: '/reference/colors' },
            { text: 'Breakpoints', link: '/reference/breakpoints' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/examples/' },
            { text: 'Cards', link: '/examples/cards' },
            { text: 'Navigation', link: '/examples/navigation' },
            { text: 'Hero Sections', link: '/examples/hero' },
            { text: 'Forms', link: '/examples/forms' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicemak/senangstart-css' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 SenangStart'
    },

    search: {
      provider: 'local'
    }
  }
})
