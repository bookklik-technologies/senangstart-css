import { defineConfig } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

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
        { text: 'Preflight', link: '/guide/preflight' },
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
      text: 'Layout',
      link: '/reference/layout',
      collapsed: false,
      items: [
        {
          text: 'Display & Flex',
          collapsed: true,
          items: [
            { text: 'Display', link: '/reference/layout/display' },
            { text: 'Flex Direction', link: '/reference/layout/flex-direction' },
            { text: 'Flex Wrap', link: '/reference/layout/flex-wrap' },
            { text: 'Flex Items', link: '/reference/layout/flex-items' },
            { text: 'Order', link: '/reference/layout/order' }
          ]
        },
        {
          text: 'Alignment',
          collapsed: true,
          items: [
            { text: 'Justify Content', link: '/reference/layout/justify-content' },
            { text: 'Justify Items', link: '/reference/layout/justify-items' },
            { text: 'Justify Self', link: '/reference/layout/justify-self' },
            { text: 'Align Content', link: '/reference/layout/align-content' },
            { text: 'Align Items', link: '/reference/layout/align-items' },
            { text: 'Align Self', link: '/reference/layout/align-self' },
            { text: 'Place Content', link: '/reference/layout/place-content' },
            { text: 'Place Items', link: '/reference/layout/place-items' },
            { text: 'Place Self', link: '/reference/layout/place-self' },
            { text: 'Shorthand', link: '/reference/layout/shorthand-alignment' }
          ]
        },
        {
          text: 'Grid',
          collapsed: true,
          items: [
            { text: 'Grid Columns', link: '/reference/layout/grid-columns' },
            { text: 'Grid Rows', link: '/reference/layout/grid-rows' },
            { text: 'Column Span', link: '/reference/layout/grid-column-span' },
            { text: 'Row Span', link: '/reference/layout/grid-row-span' },
            { text: 'Auto Flow', link: '/reference/layout/grid-auto-flow' },
            { text: 'Auto Sizing', link: '/reference/layout/grid-auto-sizing' }
          ]
        },
        {
          text: 'Positioning',
          collapsed: true,
          items: [
            { text: 'Position', link: '/reference/layout/position' },
            { text: 'Inset', link: '/reference/layout/inset' },
            { text: 'Z-Index', link: '/reference/layout/z-index' }
          ]
        },
        {
          text: 'Utilities',
          collapsed: true,
          items: [
            { text: 'Visibility', link: '/reference/layout/visibility' },
            { text: 'Overflow', link: '/reference/layout/overflow' },
            { text: 'Overscroll', link: '/reference/layout/overscroll' },
            { text: 'Aspect Ratio', link: '/reference/layout/aspect-ratio' },
            { text: 'Columns', link: '/reference/layout/columns' },
            { text: 'Object Fit', link: '/reference/layout/object-fit' },
            { text: 'Object Position', link: '/reference/layout/object-position' },
            { text: 'Float & Clear', link: '/reference/layout/float-clear' },
            { text: 'Isolation', link: '/reference/layout/isolation' },
            { text: 'Box Sizing', link: '/reference/layout/box-sizing' }
          ]
        },
        {
          text: 'Tables',
          collapsed: true,
          items: [
            { text: 'Border Collapse', link: '/reference/layout/border-collapse' },
            { text: 'Border Spacing', link: '/reference/layout/border-spacing' },
            { text: 'Table Layout', link: '/reference/layout/table-layout' },
            { text: 'Caption Side', link: '/reference/layout/caption-side' }
          ]
        }
      ]
    },
    {
      text: 'Space',
      link: '/reference/space',
      collapsed: false,
      items: [
        {
          text: 'Spacing',
          collapsed: true,
          items: [
            { text: 'Padding', link: '/reference/space/padding' },
            { text: 'Margin', link: '/reference/space/margin' },
            { text: 'Gap', link: '/reference/space/gap' }
          ]
        },
        {
          text: 'Dimensions',
          collapsed: true,
          items: [
            { text: 'Sizing', link: '/reference/space/sizing' }
          ]
        },
        {
          text: 'Reference',
          collapsed: true,
          items: [
            { text: 'Arbitrary Values', link: '/reference/space/arbitrary-values' },
            { text: 'Scale Reference', link: '/reference/space/scale-reference' }
          ]
        }
      ]
    },
    {
      text: 'Visual',
      link: '/reference/visual',
      collapsed: false,
      items: [
        {
          text: 'Backgrounds',
          collapsed: true,
          items: [
            { text: 'Background Color', link: '/reference/visual/background-color' },
            { text: 'Background Image', link: '/reference/visual/background-image' },
            { text: 'Background Attachment', link: '/reference/visual/background-attachment' },
            { text: 'Background Clip', link: '/reference/visual/background-clip' },
            { text: 'Background Origin', link: '/reference/visual/background-origin' },
            { text: 'Background Position', link: '/reference/visual/background-position' },
            { text: 'Background Repeat', link: '/reference/visual/background-repeat' },
            { text: 'Background Size', link: '/reference/visual/background-size' },
            { text: 'Background Blend Mode', link: '/reference/visual/background-blend-mode' }
          ]
        },
        {
          text: 'Typography',
          collapsed: true,
          items: [
            { text: 'Text Size', link: '/reference/visual/text-size' },
            { text: 'Font Family', link: '/reference/visual/font-family' },
            { text: 'Font Weight', link: '/reference/visual/font-weight' },
            { text: 'Font Style', link: '/reference/visual/font-style' },
            { text: 'Font Smoothing', link: '/reference/visual/font-smoothing' },
            { text: 'Letter Spacing', link: '/reference/visual/letter-spacing' },
            { text: 'Line Height', link: '/reference/visual/line-height' },
            { text: 'Line Clamp', link: '/reference/visual/line-clamp' }
          ]
        },
        {
          text: 'Text Formatting',
          collapsed: true,
          items: [
            { text: 'Text Color', link: '/reference/visual/text-color' },
            { text: 'Text Alignment', link: '/reference/visual/text-alignment' },
            { text: 'Text Transform', link: '/reference/visual/text-transform' },
            { text: 'Text Decoration', link: '/reference/visual/text-decoration' },
            { text: 'Text Overflow', link: '/reference/visual/text-overflow' },
            { text: 'Text Wrap', link: '/reference/visual/text-wrap' },
            { text: 'Whitespace', link: '/reference/visual/whitespace' },
            { text: 'Word Break', link: '/reference/visual/word-break' },
            { text: 'Hyphens', link: '/reference/visual/hyphens' },
            { text: 'Text Indent', link: '/reference/visual/text-indent' },
            { text: 'Vertical Align', link: '/reference/visual/vertical-align' }
          ]
        },
        {
          text: 'Lists',
          collapsed: true,
          items: [
            { text: 'List Style', link: '/reference/visual/list-style' },
            { text: 'Font Variant Numeric', link: '/reference/visual/font-variant-numeric' }
          ]
        },
        {
          text: 'Borders & Effects',
          collapsed: true,
          items: [
            { text: 'Border Radius', link: '/reference/visual/border-radius' },
            { text: 'Box Shadow', link: '/reference/visual/box-shadow' },
            { text: 'Border', link: '/reference/visual/border' },
            { text: 'Outline', link: '/reference/visual/outline' },
            { text: 'Text Shadow', link: '/reference/visual/text-shadow' },
            { text: 'Opacity', link: '/reference/visual/opacity' },
            { text: 'Blend Modes', link: '/reference/visual/blend-modes' },
            { text: 'Mask', link: '/reference/visual/mask' }
          ]
        },
        {
          text: 'Filter',
          collapsed: true,
          items: [
            { text: 'Blur', link: '/reference/visual/filter-blur' },
            { text: 'Brightness', link: '/reference/visual/filter-brightness' },
            { text: 'Contrast', link: '/reference/visual/filter-contrast' },
            { text: 'Drop Shadow', link: '/reference/visual/filter-drop-shadow' },
            { text: 'Grayscale', link: '/reference/visual/filter-grayscale' },
            { text: 'Hue Rotate', link: '/reference/visual/filter-hue-rotate' },
            { text: 'Invert', link: '/reference/visual/filter-invert' },
            { text: 'Saturate', link: '/reference/visual/filter-saturate' },
            { text: 'Sepia', link: '/reference/visual/filter-sepia' }
          ]
        },
        {
          text: 'Backdrop Filter',
          collapsed: true,
          items: [
            { text: 'Backdrop Blur', link: '/reference/visual/backdrop-blur' },
            { text: 'Backdrop Brightness', link: '/reference/visual/backdrop-brightness' },
            { text: 'Backdrop Contrast', link: '/reference/visual/backdrop-contrast' },
            { text: 'Backdrop Grayscale', link: '/reference/visual/backdrop-grayscale' },
            { text: 'Backdrop Hue Rotate', link: '/reference/visual/backdrop-hue-rotate' },
            { text: 'Backdrop Invert', link: '/reference/visual/backdrop-invert' },
            { text: 'Backdrop Opacity', link: '/reference/visual/backdrop-opacity' },
            { text: 'Backdrop Saturate', link: '/reference/visual/backdrop-saturate' },
            { text: 'Backdrop Sepia', link: '/reference/visual/backdrop-sepia' }
          ]
        },
        {
          text: 'Transition',
          collapsed: true,
          items: [
            { text: 'Property', link: '/reference/visual/transition-property' },
            { text: 'Duration', link: '/reference/visual/transition-duration' },
            { text: 'Timing Function', link: '/reference/visual/transition-timing' },
            { text: 'Delay', link: '/reference/visual/transition-delay' }
          ]
        },
        {
          text: 'Animation',
          collapsed: true,
          items: [
            { text: 'Built-in', link: '/reference/visual/animation-builtin' },
            { text: 'Duration', link: '/reference/visual/animation-duration' },
            { text: 'Delay', link: '/reference/visual/animation-delay' },
            { text: 'Iteration', link: '/reference/visual/animation-iteration' },
            { text: 'Direction', link: '/reference/visual/animation-direction' },
            { text: 'Fill Mode', link: '/reference/visual/animation-fill' },
            { text: 'Play State', link: '/reference/visual/animation-play' }
          ]
        },
        {
          text: 'Transforms',
          collapsed: true,
          items: [
            { text: 'Transform', link: '/reference/visual/transform' },
            { text: '3D Transform', link: '/reference/visual/transform-3d' }
          ]
        },
        {
          text: 'Interactivity',
          collapsed: true,
          items: [
            { text: 'State Prefixes', link: '/reference/visual/state-prefixes' }
          ]
        }
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
        { text: 'Preflight', link: '/ms/guide/preflight' },
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
      text: 'Layout',
      link: '/ms/reference/layout',
      collapsed: false,
      items: [
        {
          text: 'Paparan & Flex',
          collapsed: true,
          items: [
            { text: 'Paparan', link: '/ms/reference/layout/display' },
            { text: 'Arah Flex', link: '/ms/reference/layout/flex-direction' },
            { text: 'Flex Wrap', link: '/ms/reference/layout/flex-wrap' },
            { text: 'Item Flex', link: '/ms/reference/layout/flex-items' },
            { text: 'Order', link: '/ms/reference/layout/order' }
          ]
        },
        {
          text: 'Penjajaran',
          collapsed: true,
          items: [
            { text: 'Justify Content', link: '/ms/reference/layout/justify-content' },
            { text: 'Justify Items', link: '/ms/reference/layout/justify-items' },
            { text: 'Justify Self', link: '/ms/reference/layout/justify-self' },
            { text: 'Align Content', link: '/ms/reference/layout/align-content' },
            { text: 'Align Items', link: '/ms/reference/layout/align-items' },
            { text: 'Align Self', link: '/ms/reference/layout/align-self' },
            { text: 'Place Content', link: '/ms/reference/layout/place-content' },
            { text: 'Place Items', link: '/ms/reference/layout/place-items' },
            { text: 'Place Self', link: '/ms/reference/layout/place-self' },
            { text: 'Ringkas', link: '/ms/reference/layout/shorthand-alignment' }
          ]
        },
        {
          text: 'Grid',
          collapsed: true,
          items: [
            { text: 'Grid Columns', link: '/ms/reference/layout/grid-columns' },
            { text: 'Grid Rows', link: '/ms/reference/layout/grid-rows' },
            { text: 'Column Span', link: '/ms/reference/layout/grid-column-span' },
            { text: 'Row Span', link: '/ms/reference/layout/grid-row-span' },
            { text: 'Auto Flow', link: '/ms/reference/layout/grid-auto-flow' },
            { text: 'Auto Sizing', link: '/ms/reference/layout/grid-auto-sizing' }
          ]
        },
        {
          text: 'Kedudukan',
          collapsed: true,
          items: [
            { text: 'Kedudukan', link: '/ms/reference/layout/position' },
            { text: 'Inset', link: '/ms/reference/layout/inset' },
            { text: 'Z-Index', link: '/ms/reference/layout/z-index' }
          ]
        },
        {
          text: 'Utiliti',
          collapsed: true,
          items: [
            { text: 'Keterlihatan', link: '/ms/reference/layout/visibility' },
            { text: 'Overflow', link: '/ms/reference/layout/overflow' },
            { text: 'Overscroll', link: '/ms/reference/layout/overscroll' },
            { text: 'Nisbah Aspek', link: '/ms/reference/layout/aspect-ratio' },
            { text: 'Columns', link: '/ms/reference/layout/columns' },
            { text: 'Object Fit', link: '/ms/reference/layout/object-fit' },
            { text: 'Object Position', link: '/ms/reference/layout/object-position' },
            { text: 'Float & Clear', link: '/ms/reference/layout/float-clear' },
            { text: 'Isolation', link: '/ms/reference/layout/isolation' },
            { text: 'Box Sizing', link: '/ms/reference/layout/box-sizing' }
          ]
        },
        {
          text: 'Jadual',
          collapsed: true,
          items: [
            { text: 'Runtuhan Sempadan', link: '/ms/reference/layout/border-collapse' },
            { text: 'Jarak Sempadan', link: '/ms/reference/layout/border-spacing' },
            { text: 'Susun Atur Jadual', link: '/ms/reference/layout/table-layout' },
            { text: 'Kedudukan Kapsyen', link: '/ms/reference/layout/caption-side' }
          ]
        }
      ]
    },
    {
      text: 'Space',
      link: '/ms/reference/space',
      collapsed: false,
      items: [
        {
          text: 'Jarak',
          collapsed: true,
          items: [
            { text: 'Padding', link: '/ms/reference/space/padding' },
            { text: 'Margin', link: '/ms/reference/space/margin' },
            { text: 'Gap', link: '/ms/reference/space/gap' }
          ]
        },
        {
          text: 'Dimensi',
          collapsed: true,
          items: [
            { text: 'Saiz', link: '/ms/reference/space/sizing' }
          ]
        },
        {
          text: 'Rujukan',
          collapsed: true,
          items: [
            { text: 'Nilai Arbitrari', link: '/ms/reference/space/arbitrary-values' },
            { text: 'Rujukan Skala', link: '/ms/reference/space/scale-reference' }
          ]
        }
      ]
    },
    {
      text: 'Visual',
      link: '/ms/reference/visual',
      collapsed: false,
      items: [
        {
          text: 'Warna',
          collapsed: true,
          items: [
            { text: 'Warna Latar Belakang', link: '/ms/reference/visual/background-color' },
            { text: 'Warna Teks', link: '/ms/reference/visual/text-color' }
          ]
        },
        {
          text: 'Latar Belakang',
          collapsed: true,
          items: [
            { text: 'Imej Latar Belakang', link: '/ms/reference/visual/background-image' },
            { text: 'Lampiran Latar Belakang', link: '/ms/reference/visual/background-attachment' },
            { text: 'Klip Latar Belakang', link: '/ms/reference/visual/background-clip' },
            { text: 'Asal Latar Belakang', link: '/ms/reference/visual/background-origin' },
            { text: 'Kedudukan Latar Belakang', link: '/ms/reference/visual/background-position' },
            { text: 'Ulangan Latar Belakang', link: '/ms/reference/visual/background-repeat' },
            { text: 'Saiz Latar Belakang', link: '/ms/reference/visual/background-size' },
            { text: 'Mod Campuran Latar Belakang', link: '/ms/reference/visual/background-blend-mode' }
          ]
        },
        {
          text: 'Tipografi',
          collapsed: true,
          items: [
            { text: 'Saiz Teks', link: '/ms/reference/visual/text-size' },
            { text: 'Keluarga Fon', link: '/ms/reference/visual/font-family' },
            { text: 'Berat Fon', link: '/ms/reference/visual/font-weight' },
            { text: 'Gaya Fon', link: '/ms/reference/visual/font-style' },
            { text: 'Smoothing Fon', link: '/ms/reference/visual/font-smoothing' },
            { text: 'Jarak Huruf', link: '/ms/reference/visual/letter-spacing' },
            { text: 'Ketinggian Baris', link: '/ms/reference/visual/line-height' },
            { text: 'Line Clamp', link: '/ms/reference/visual/line-clamp' }
          ]
        },
        {
          text: 'Pemformatan Teks',
          collapsed: true,
          items: [
            { text: 'Penjajaran Teks', link: '/ms/reference/visual/text-alignment' },
            { text: 'Transformasi Teks', link: '/ms/reference/visual/text-transform' },
            { text: 'Hiasan Teks', link: '/ms/reference/visual/text-decoration' },
            { text: 'Limpahan Teks', link: '/ms/reference/visual/text-overflow' },
            { text: 'Pembalutan Teks', link: '/ms/reference/visual/text-wrap' },
            { text: 'Whitespace', link: '/ms/reference/visual/whitespace' },
            { text: 'Word Break', link: '/ms/reference/visual/word-break' },
            { text: 'Hyphens', link: '/ms/reference/visual/hyphens' },
            { text: 'Inden Teks', link: '/ms/reference/visual/text-indent' },
            { text: 'Penjajaran Menegak', link: '/ms/reference/visual/vertical-align' }
          ]
        },
        {
          text: 'Senarai',
          collapsed: true,
          items: [
            { text: 'Gaya Senarai', link: '/ms/reference/visual/list-style' },
            { text: 'Varian Nombor Fon', link: '/ms/reference/visual/font-variant-numeric' }
          ]
        },
        {
          text: 'Sempadan & Kesan',
          collapsed: true,
          items: [
            { text: 'Radius Sempadan', link: '/ms/reference/visual/border-radius' },
            { text: 'Bayang Kotak', link: '/ms/reference/visual/box-shadow' },
            { text: 'Sempadan', link: '/ms/reference/visual/border' },
            { text: 'Garis Luar', link: '/ms/reference/visual/outline' },
            { text: 'Bayang Teks', link: '/ms/reference/visual/text-shadow' },
            { text: 'Kelegapan', link: '/ms/reference/visual/opacity' },
            { text: 'Mod Campuran', link: '/ms/reference/visual/blend-modes' },
            { text: 'Topeng', link: '/ms/reference/visual/mask' }
          ]
        },
        {
          text: 'Penapis',
          collapsed: true,
          items: [
            { text: 'Kabur', link: '/ms/reference/visual/filter-blur' },
            { text: 'Kecerahan', link: '/ms/reference/visual/filter-brightness' },
            { text: 'Kontras', link: '/ms/reference/visual/filter-contrast' },
            { text: 'Bayang Jatuh', link: '/ms/reference/visual/filter-drop-shadow' },
            { text: 'Skala Kelabu', link: '/ms/reference/visual/filter-grayscale' },
            { text: 'Putar Hue', link: '/ms/reference/visual/filter-hue-rotate' },
            { text: 'Songsang', link: '/ms/reference/visual/filter-invert' },
            { text: 'Ketepuan', link: '/ms/reference/visual/filter-saturate' },
            { text: 'Sepia', link: '/ms/reference/visual/filter-sepia' }
          ]
        },
        {
          text: 'Penapis Latar Belakang',
          collapsed: true,
          items: [
            { text: 'Kabur Latar', link: '/ms/reference/visual/backdrop-blur' },
            { text: 'Kecerahan Latar', link: '/ms/reference/visual/backdrop-brightness' },
            { text: 'Kontras Latar', link: '/ms/reference/visual/backdrop-contrast' },
            { text: 'Skala Kelabu Latar', link: '/ms/reference/visual/backdrop-grayscale' },
            { text: 'Putar Hue Latar', link: '/ms/reference/visual/backdrop-hue-rotate' },
            { text: 'Songsang Latar', link: '/ms/reference/visual/backdrop-invert' },
            { text: 'Kelegapan Latar', link: '/ms/reference/visual/backdrop-opacity' },
            { text: 'Ketepuan Latar', link: '/ms/reference/visual/backdrop-saturate' },
            { text: 'Sepia Latar', link: '/ms/reference/visual/backdrop-sepia' }
          ]
        },
        {
          text: 'Peralihan',
          collapsed: true,
          items: [
            { text: 'Sifat', link: '/ms/reference/visual/transition-property' },
            { text: 'Tempoh', link: '/ms/reference/visual/transition-duration' },
            { text: 'Fungsi Masa', link: '/ms/reference/visual/transition-timing' },
            { text: 'Kelewatan', link: '/ms/reference/visual/transition-delay' }
          ]
        },
        {
          text: 'Animasi',
          collapsed: true,
          items: [
            { text: 'Terbina Dalam', link: '/ms/reference/visual/animation-builtin' },
            { text: 'Tempoh', link: '/ms/reference/visual/animation-duration' },
            { text: 'Kelewatan', link: '/ms/reference/visual/animation-delay' },
            { text: 'Iterasi', link: '/ms/reference/visual/animation-iteration' },
            { text: 'Arah', link: '/ms/reference/visual/animation-direction' },
            { text: 'Mod Isi', link: '/ms/reference/visual/animation-fill' },
            { text: 'Status Main', link: '/ms/reference/visual/animation-play' }
          ]
        },
        {
          text: 'Transform',
          collapsed: true,
          items: [
            { text: 'Transform', link: '/ms/reference/visual/transform' },
            { text: 'Transform 3D', link: '/ms/reference/visual/transform-3d' }
          ]
        },
        {
          text: 'Interaktiviti',
          collapsed: true,
          items: [
            { text: 'Prefiks Keadaan', link: '/ms/reference/visual/state-prefixes' }
          ]
        }
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

  // Search configuration (must be at root level)
  themeConfig: {
    search: {
      provider: 'local'
    }
  },

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
            text: `v${pkg.version}`,
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
            text: `v${pkg.version}`,
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
