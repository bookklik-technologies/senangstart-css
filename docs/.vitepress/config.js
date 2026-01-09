import { defineConfig } from 'vitepress'

// Shared theme config
const sharedThemeConfig = {
  logo: 'https://senangstart.com/img/ss_logo_typo.svg',
  siteTitle: false,
  socialLinks: [
    { icon: 'github', link: 'https://github.com/bookklik-technologies/senangstart-css' }
  ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2026 SenangStart'
  },
  search: {
    provider: 'local'
  }
}

// English sidebar
const enSidebar = {
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
        { text: 'Hover & States', link: '/guide/states' },
        { text: 'Dark Mode', link: '/guide/dark-mode' }
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
}

// Malay sidebar
const msSidebar = {
  '/ms/guide/': [
    {
      text: 'Pengenalan',
      items: [
        { text: 'Apa itu SenangStart?', link: '/ms/guide/' },
        { text: 'Bermula', link: '/ms/guide/getting-started' },
        { text: 'Mengapa Bahasa Semula Jadi?', link: '/ms/guide/philosophy' }
      ]
    },
    {
      text: 'Konsep Teras',
      items: [
        { text: 'Sintaks Tri-Atribut', link: '/ms/guide/tri-attribute' },
        { text: 'Skala Semula Jadi', link: '/ms/guide/natural-scale' },
        { text: 'Reka Bentuk Responsif', link: '/ms/guide/responsive' },
        { text: 'Hover & Keadaan', link: '/ms/guide/states' },
        { text: 'Mod Gelap', link: '/ms/guide/dark-mode' }
      ]
    },
    {
      text: 'Penggunaan',
      items: [
        { text: 'CDN (Tanpa Bina)', link: '/ms/guide/cdn' },
        { text: 'Bina CLI', link: '/ms/guide/cli' },
        { text: 'Konfigurasi', link: '/ms/guide/configuration' }
      ]
    }
  ],
  '/ms/reference/': [
    {
      text: 'Atribut',
      items: [
        { text: 'layout', link: '/ms/reference/layout' },
        { text: 'space', link: '/ms/reference/space' },
        { text: 'visual', link: '/ms/reference/visual' }
      ]
    },
    {
      text: 'Tema',
      items: [
        { text: 'Jarak', link: '/ms/reference/spacing' },
        { text: 'Warna', link: '/ms/reference/colors' },
        { text: 'Breakpoint', link: '/ms/reference/breakpoints' }
      ]
    }
  ],
  '/ms/examples/': [
    {
      text: 'Komponen',
      items: [
        { text: 'Gambaran Keseluruhan', link: '/ms/examples/' },
        { text: 'Kad', link: '/ms/examples/cards' },
        { text: 'Navigasi', link: '/ms/examples/navigation' },
        { text: 'Bahagian Hero', link: '/ms/examples/hero' },
        { text: 'Borang', link: '/ms/examples/forms' }
      ]
    }
  ]
}

export default defineConfig({
  // GitHub Pages base path (change to your repo name)
  base: '/senangstart-css/',
  
  // Force light mode only (disable toggle)
  appearance: false,
  
  head: [
    ['link', { rel: 'icon', href: 'https://senangstart.com/img/ss_icon_accent.svg' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'SenangStart CSS',
      description: 'The Intent-First CSS Engine - Speak Human, Compile to Logic',
      themeConfig: {
        ...sharedThemeConfig,
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'Reference', link: '/reference/layout' },
          { text: 'Examples', link: '/examples/' },
          {
            text: 'v0.1.4',
            items: [
              { text: 'Changelog', link: '/changelog' },
              { text: 'GitHub', link: 'https://github.com/bookklik-technologies/senangstart-css' }
            ]
          }
        ],
        sidebar: enSidebar
      }
    },
    ms: {
      label: 'Bahasa Melayu',
      lang: 'ms',
      title: 'SenangStart CSS',
      description: 'Enjin CSS Intent-First - Cakap Manusia, Kompil ke Logik',
      themeConfig: {
        ...sharedThemeConfig,
        nav: [
          { text: 'Panduan', link: '/ms/guide/getting-started' },
          { text: 'Rujukan', link: '/ms/reference/layout' },
          { text: 'Contoh', link: '/ms/examples/' },
          {
            text: 'v0.1.4',
            items: [
              { text: 'Log Perubahan', link: '/ms/changelog' },
              { text: 'GitHub', link: 'https://github.com/bookklik-technologies/senangstart-css' }
            ]
          }
        ],
        sidebar: msSidebar
      }
    }
  }
})
