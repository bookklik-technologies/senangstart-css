/**
 * SenangStart CSS - Performance Utility Definitions
 * Content visibility, contain, and other performance optimizations
 */

// ======================
// CONTENT VISIBILITY
// ======================

export const contentVisibility = {
  name: 'content-visibility',
  property: 'visual',
  syntax: 'visual="content-visibility:[value]"',
  description: 'Optimize rendering by skipping off-screen content',
  descriptionMs: 'Optimumkan rendering dengan melangkau kandungan luar skrin',
  category: 'visual',
  values: [
    { value: 'visible', css: 'content-visibility: visible;', description: 'Render all content', descriptionMs: 'Render semua kandungan' },
    { value: 'auto', css: 'content-visibility: auto;', description: 'Skip when off-screen', descriptionMs: 'Langkau bila luar skrin' },
    { value: 'hidden', css: 'content-visibility: hidden;', description: 'Never render off-screen', descriptionMs: 'Jangan render luar skrin' }
  ],
  examples: [
    { code: '<section visual="content-visibility:auto">Large list</section>', description: 'Auto-optimize large content' },
    { code: '<div visual="content-visibility:hidden">Hidden until needed</div>', description: 'Hide until revealed' }
  ],
  preview: [
    {
      title: 'Content Visibility',
      titleMs: 'Ketampakan Kandungan',
      description: 'Performance optimization for off-screen content',
      descriptionMs: 'Pengoptimuman prestasi untuk kandungan luar skrin',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">visible</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">hidden</div>
 </div>`,
      highlightValue: 'content-visibility:auto'
    }
  ]
};

// ======================
// CONTAIN
// ======================

export const contain = {
  name: 'contain',
  property: 'visual',
  syntax: 'visual="contain:[value]"',
  description: 'Isolate element rendering for performance',
  descriptionMs: 'Pencil rendering elemen untuk prestasi',
  category: 'visual',
  values: [
    { value: 'none', css: 'contain: none;', description: 'No containment', descriptionMs: 'Tiada pengandungan' },
    { value: 'strict', css: 'contain: strict;', description: 'Full containment', descriptionMs: 'Pengandungan penuh' },
    { value: 'content', css: 'contain: content;', description: 'Content containment', descriptionMs: 'Pengandungan kandungan' },
    { value: 'size', css: 'contain: size;', description: 'Size containment', descriptionMs: 'Pengandungan saiz' },
    { value: 'layout', css: 'contain: layout;', description: 'Layout containment', descriptionMs: 'Pengandungan susun atur' },
    { value: 'style', css: 'contain: style;', description: 'Style containment', descriptionMs: 'Pengandungan gaya' },
    { value: 'paint', css: 'contain: paint;', description: 'Paint containment', descriptionMs: 'Pengandungan lukis' }
  ],
  examples: [
    { code: '<div visual="contain:strict">Isolated rendering</div>', description: 'Full containment' },
    { code: '<div visual="contain:content">Content isolation</div>', description: 'Content only' }
  ],
  preview: [
    {
      title: 'Contain',
      titleMs: 'Mengandung',
      description: 'Isolate element from rest of page for performance',
      descriptionMs: 'Pencil elemen dari halaman lain untuk prestasi',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">strict</div>
 </div>`,
      highlightValue: 'contain:strict'
    }
  ]
};

// ======================
// WRITING MODE
// ======================

export const writingMode = {
  name: 'writing-mode',
  property: 'visual',
  syntax: 'visual="writing-mode:[value]"',
  description: 'Set writing direction for RTL/vertical text',
  descriptionMs: 'Tetapkan arah penulisan untuk teks RTL/menegak',
  category: 'visual',
  values: [
    { value: 'horizontal-tb', css: 'writing-mode: horizontal-tb;', description: 'Left to right', descriptionMs: 'Kiri ke kanan' },
    { value: 'vertical-rl', css: 'writing-mode: vertical-rl;', description: 'Top to bottom RTL', descriptionMs: 'Atas ke bawah RTL' },
    { value: 'vertical-lr', css: 'writing-mode: vertical-lr;', description: 'Top to bottom LTR', descriptionMs: 'Atas ke bawah LTR' },
    { value: 'sideways-rl', css: 'writing-mode: sideways-rl;', description: 'Sideways RTL', descriptionMs: 'Menyerong RTL' },
    { value: 'sideways-lr', css: 'writing-mode: sideways-lr;', description: 'Sideways LTR', descriptionMs: 'Menyerong LTR' }
  ],
  examples: [
    { code: '<div visual="writing-mode:vertical-rl">Vertical text</div>', description: 'Vertical text RTL' },
    { code: '<div visual="writing-mode:horizontal-tb">Horizontal text</div>', description: 'Horizontal text LTR' }
  ],
  preview: [
    {
      title: 'Writing Mode',
      titleMs: 'Mod Penulisan',
      description: 'Control text direction and orientation',
      descriptionMs: 'Kawal arah dan orientasi teks',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">horizontal-tb</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">vertical-rl</div>
 </div>`,
      highlightValue: 'writing-mode:vertical-rl'
    }
  ]
};

// Export all performance definitions
export const performanceDefinitions = {
  contentVisibility,
  contain,
  writingMode
};

export default performanceDefinitions;
