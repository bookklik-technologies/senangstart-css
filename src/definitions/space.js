/**
 * SenangStart CSS - Space Utility Definitions
 * Single source of truth for spacing utilities (padding, margin, gap, sizing)
 */

// ======================
// PADDING
// ======================

export const padding = {
  name: 'padding',
  property: 'space',
  syntax: 'space="p:[value]" or space="p-{side}:[value]"',
  description: 'Add padding to elements',
  descriptionMs: 'Tambah padding pada elemen',
  category: 'space',
  usesScale: 'spacing',
  values: [
    { property: 'p', css: 'padding: var(--s-{value});', description: 'All sides', descriptionMs: 'Semua sisi' },
    { property: 'p-t', css: 'padding-top: var(--s-{value});', description: 'Top', descriptionMs: 'Atas' },
    { property: 'p-r', css: 'padding-right: var(--s-{value});', description: 'Right', descriptionMs: 'Kanan' },
    { property: 'p-b', css: 'padding-bottom: var(--s-{value});', description: 'Bottom', descriptionMs: 'Bawah' },
    { property: 'p-l', css: 'padding-left: var(--s-{value});', description: 'Left', descriptionMs: 'Kiri' },
    { property: 'p-x', css: 'padding-left: var(--s-{value}); padding-right: var(--s-{value});', description: 'Horizontal', descriptionMs: 'Mendatar' },
    { property: 'p-y', css: 'padding-top: var(--s-{value}); padding-bottom: var(--s-{value});', description: 'Vertical', descriptionMs: 'Menegak' }
  ],
  scaleValues: [
    'none', 'thin', 'regular', 'thick', 'tiny', 'tiny-2x', 
    'small', 'small-2x', 'small-3x', 'small-4x',
    'medium', 'medium-2x', 'medium-3x', 'medium-4x',
    'large', 'large-2x', 'large-3x', 'large-4x',
    'big', 'big-2x', 'big-3x', 'big-4x',
    'giant', 'giant-2x', 'giant-3x', 'giant-4x',
    'vast', 'vast-2x', 'vast-3x', 'vast-4x', 'vast-5x', 'vast-6x', 'vast-7x', 'vast-8x', 'vast-9x', 'vast-10x'
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="p:medium">Padding all sides</div>', description: 'Medium padding' },
    { code: '<div space="p-x:big p-y:small">Different padding</div>', description: 'Axis padding' },
    { code: '<div space="p:[20px]">Custom padding</div>', description: 'Arbitrary value' }
  ],
  preview: [
    {
      title: 'Padding Scale',
      titleMs: 'Skala Padding',
      description: 'Different padding sizes from the scale',
      descriptionMs: 'Saiz padding berbeza dari skala',
      html: `<div layout="flex" space="g:small">
  <div space="p:tiny" visual="bg:primary text:white rounded:small">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small">medium</div>
  <div space="p:big" visual="bg:primary text:white rounded:small">big</div>
</div>`,
      highlightValue: 'p:medium'
    },
    {
      title: 'Directional Padding',
      titleMs: 'Padding Arah',
      description: 'Apply padding to specific sides',
      descriptionMs: 'Padamkan padding pada sisi tertentu',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p-x:big p-y:small" visual="bg:primary text:white rounded:small">p-x:big p-y:small</div>
  <div space="p-t:big" visual="bg:primary text:white rounded:small">p-t:big</div>
</div>`,
      highlightValue: 'p-x:big'
    }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind numeric scale: `p:tw-4` (1rem), `p:tw-8` (2rem)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `p:tw-4` (1rem), `p:tw-8` (2rem)',
      link: 'https://tailwindcss.com/docs/padding'
    }
  ]
};

// ======================
// MARGIN
// ======================

export const margin = {
  name: 'margin',
  property: 'space',
  syntax: 'space="m:[value]" or space="m-{side}:[value]"',
  description: 'Add margin to elements',
  descriptionMs: 'Tambah margin pada elemen',
  category: 'space',
  usesScale: 'spacing',
  values: [
    { property: 'm', css: 'margin: var(--s-{value});', description: 'All sides', descriptionMs: 'Semua sisi' },
    { property: 'm-t', css: 'margin-top: var(--s-{value});', description: 'Top', descriptionMs: 'Atas' },
    { property: 'm-r', css: 'margin-right: var(--s-{value});', description: 'Right', descriptionMs: 'Kanan' },
    { property: 'm-b', css: 'margin-bottom: var(--s-{value});', description: 'Bottom', descriptionMs: 'Bawah' },
    { property: 'm-l', css: 'margin-left: var(--s-{value});', description: 'Left', descriptionMs: 'Kiri' },
    { property: 'm-x', css: 'margin-left: var(--s-{value}); margin-right: var(--s-{value});', description: 'Horizontal', descriptionMs: 'Mendatar' },
    { property: 'm-y', css: 'margin-top: var(--s-{value}); margin-bottom: var(--s-{value});', description: 'Vertical', descriptionMs: 'Menegak' }
  ],
  scaleValues: [
    'none', 'thin', 'regular', 'thick', 'tiny', 'tiny-2x', 
    'small', 'small-2x', 'small-3x', 'small-4x',
    'medium', 'medium-2x', 'medium-3x', 'medium-4x',
    'large', 'large-2x', 'large-3x', 'large-4x',
    'big', 'big-2x', 'big-3x', 'big-4x',
    'giant', 'giant-2x', 'giant-3x', 'giant-4x',
    'vast', 'vast-2x', 'vast-3x', 'vast-4x', 'vast-5x', 'vast-6x', 'vast-7x', 'vast-8x', 'vast-9x', 'vast-10x',
    'auto'
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="m:medium">Margin all sides</div>', description: 'Medium margin' },
    { code: '<div space="m-x:auto">Centered horizontally</div>', description: 'Auto centering' },
    { code: '<div space="m-t:big">Top margin</div>', description: 'Top margin only' }
  ],
  preview: [
    {
      title: 'Margin Scale',
      titleMs: 'Skala Margin',
      description: 'Different margin sizes from the scale',
      descriptionMs: 'Saiz margin berbeza dari skala',
      html: `<div layout="flex col" space="g:tiny p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m:tiny" visual="bg:primary text:white rounded:small">m:tiny</div>
  <div space="m:small" visual="bg:primary text:white rounded:small">m:small</div>
  <div space="m:medium" visual="bg:primary text:white rounded:small">m:medium</div>
</div>`,
      highlightValue: 'm:medium'
    },
    {
      title: 'Auto Centering',
      titleMs: 'Tengah Automatik',
      description: 'Use m-x:auto to center horizontally',
      descriptionMs: 'Guna m-x:auto untuk tengahkan mendatar',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m-x:auto p:small" visual="bg:primary text:white rounded:small" style="width: fit-content;">m-x:auto</div>
</div>`,
      highlightValue: 'm-x:auto'
    }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind numeric scale: `m:tw-4` (1rem), `m-t:tw-8` (2rem)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `m:tw-4` (1rem), `m-t:tw-8` (2rem)',
      link: 'https://tailwindcss.com/docs/margin'
    }
  ]
};

// ======================
// GAP
// ======================

export const gap = {
  name: 'gap',
  property: 'space',
  syntax: 'space="g:[value]" or space="g-{axis}:[value]"',
  description: 'Add gap between flex/grid items',
  descriptionMs: 'Tambah ruang antara item flex/grid',
  category: 'space',
  usesScale: 'spacing',
  values: [
    { property: 'g', css: 'gap: var(--s-{value});', description: 'All gaps', descriptionMs: 'Semua ruang' },
    { property: 'g-x', css: 'column-gap: var(--s-{value});', description: 'Column gap', descriptionMs: 'Ruang lajur' },
    { property: 'g-y', css: 'row-gap: var(--s-{value});', description: 'Row gap', descriptionMs: 'Ruang baris' }
  ],
  scaleValues: [
    'none', 'thin', 'regular', 'thick', 'tiny', 'tiny-2x', 
    'small', 'small-2x', 'small-3x', 'small-4x',
    'medium', 'medium-2x', 'medium-3x', 'medium-4x',
    'large', 'large-2x', 'large-3x', 'large-4x',
    'big', 'big-2x', 'big-3x', 'big-4x',
    'giant', 'giant-2x', 'giant-3x', 'giant-4x',
    'vast', 'vast-2x', 'vast-3x', 'vast-4x', 'vast-5x', 'vast-6x', 'vast-7x', 'vast-8x', 'vast-9x', 'vast-10x'
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div layout="flex" space="g:medium">Gap between items</div>', description: 'Flex gap' },
    { code: '<div layout="grid" space="g-x:big g-y:small">Grid gaps</div>', description: 'Different axis gaps' }
  ],
  preview: [
    {
      title: 'Flex Gap',
      titleMs: 'Gap Flex',
      description: 'Space between flex items',
      descriptionMs: 'Ruang antara item flex',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: 'g:medium'
    },
    {
      title: 'Grid Gap',
      titleMs: 'Gap Grid',
      description: 'Space between grid items',
      descriptionMs: 'Ruang antara item grid',
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: 'g:small'
    }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind numeric scale: `g:tw-4` (1rem), `g:tw-8` (2rem)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `g:tw-4` (1rem), `g:tw-8` (2rem)',
      link: 'https://tailwindcss.com/docs/gap'
    }
  ]
};

// ======================
// WIDTH
// ======================

export const width = {
  name: 'width',
  property: 'space',
  syntax: 'space="w:[value]"',
  description: 'Set element width',
  descriptionMs: 'Tetapkan lebar elemen',
  category: 'space',
  usesScale: 'spacing',
  values: [
    { property: 'w', css: 'width: var(--s-{value});', description: 'Width', descriptionMs: 'Lebar' },
    { property: 'min-w', css: 'min-width: var(--s-{value});', description: 'Minimum width', descriptionMs: 'Lebar minimum' },
    { property: 'max-w', css: 'max-width: var(--s-{value});', description: 'Maximum width', descriptionMs: 'Lebar maksimum' }
  ],
  scaleValues: [
    'none', 'thin', 'regular', 'thick', 'tiny', 'tiny-2x', 
    'small', 'small-2x', 'small-3x', 'small-4x',
    'medium', 'medium-2x', 'medium-3x', 'medium-4x',
    'large', 'large-2x', 'large-3x', 'large-4x',
    'big', 'big-2x', 'big-3x', 'big-4x',
    'giant', 'giant-2x', 'giant-3x', 'giant-4x',
    'vast', 'vast-2x', 'vast-3x', 'vast-4x', 'vast-5x', 'vast-6x', 'vast-7x', 'vast-8x', 'vast-9x', 'vast-10x',
    'min', 'max', 'fit',
    // Percentage adjectives
    'full', 'half', 'third', 'third-2x', 'quarter', 'quarter-2x', 'quarter-3x',
    // Fractional values (backwards compatibility)
    '1/1', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4'
  ],
  percentageAdjectives: [
    { name: 'full', value: '100%', description: 'Full width (100%)', descriptionMs: 'Lebar penuh (100%)' },
    { name: 'half', value: '50%', description: 'Half width (50%)', descriptionMs: 'Separuh lebar (50%)' },
    { name: 'third', value: '33.333333%', description: 'One third width (33%)', descriptionMs: 'Satu pertiga lebar (33%)' },
    { name: 'third-2x', value: '66.666667%', description: 'Two thirds width (66%)', descriptionMs: 'Dua pertiga lebar (66%)' },
    { name: 'quarter', value: '25%', description: 'One quarter width (25%)', descriptionMs: 'Satu perempat lebar (25%)' },
    { name: 'quarter-2x', value: '50%', description: 'Two quarters width (50%)', descriptionMs: 'Dua perempat lebar (50%)' },
    { name: 'quarter-3x', value: '75%', description: 'Three quarters width (75%)', descriptionMs: 'Tiga perempat lebar (75%)' }
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="w:full">Full width</div>', description: 'Full width' },
    { code: '<div space="w:half">Half width</div>', description: 'Half width (50%)' },
    { code: '<div space="w:third">Third width</div>', description: 'One third width (33%)' },
    { code: '<div space="w:quarter-3x">Three quarters</div>', description: 'Three quarters width (75%)' },
    { code: '<div space="max-w:[1200px]">Max width container</div>', description: 'Max width' },
    { code: '<div space="w:max">Content width</div>', description: 'Width based on content (max-content)' }
  ],
  preview: [
    {
      title: 'Width Control',
      titleMs: 'Kawal Lebar',
      description: 'Set fixed or percentage widths',
      descriptionMs: 'Tetapkan lebar tetap atau peratusan',
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:full p:small" visual="bg:primary text:white rounded:small">w:full</div>
  <div space="w:quarter-3x p:small" visual="bg:primary text:white rounded:small">w:quarter-3x</div>
  <div space="w:half p:small" visual="bg:primary text:white rounded:small">w:half</div>
</div>`,
      highlightValue: 'w:full'
    },
    {
      title: 'Content-Based Sizing',
      titleMs: 'Saiz Berdasarkan Kandungan',
      description: 'Use min, max, or fit for content-based sizing',
      descriptionMs: 'Guna min, max, atau fit untuk saiz berdasarkan kandungan',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:min p:small m-b:small" visual="bg:primary text:white rounded:small">w:min shrinks to minimum</div>
  <div space="w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">w:max expands to fit all content without wrapping</div>
  <div space="w:fit p:small" visual="bg:green-600 text:white rounded:small">w:fit adapts to available space while respecting content</div>
</div>`,
      highlightValue: 'w:max'
    },
    {
      title: 'Max Width with Content Values',
      titleMs: 'Lebar Maksimum dengan Nilai Kandungan',
      description: 'Constrain maximum width using content values',
      descriptionMs: 'Hadkan lebar maksimum menggunakan nilai kandungan',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:min p:small m-b:small" visual="bg:primary text:white rounded:small">max-w:min - Text will wrap to minimum width needed</div>
  <div space="max-w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">max-w:max - Expands to content</div>
  <div space="max-w:[200px] p:small" visual="bg:green-600 text:white rounded:small">max-w:[200px] - Fixed max</div>
</div>`,
      highlightValue: 'max-w:min'
    }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind numeric scale: `w:tw-64` (16rem), `max-w:tw-96` (24rem)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `w:tw-64` (16rem), `max-w:tw-96` (24rem)',
      link: 'https://tailwindcss.com/docs/width'
    }
  ]
};

// ======================
// HEIGHT
// ======================

export const height = {
  name: 'height',
  property: 'space',
  syntax: 'space="h:[value]"',
  description: 'Set element height',
  descriptionMs: 'Tetapkan tinggi elemen',
  category: 'space',
  usesScale: 'spacing',
  values: [
    { property: 'h', css: 'height: var(--s-{value});', description: 'Height', descriptionMs: 'Tinggi' },
    { property: 'min-h', css: 'min-height: var(--s-{value});', description: 'Minimum height', descriptionMs: 'Tinggi minimum' },
    { property: 'max-h', css: 'max-height: var(--s-{value});', description: 'Maximum height', descriptionMs: 'Tinggi maksimum' }
  ],
  scaleValues: [
    'none', 'thin', 'regular', 'thick', 'tiny', 'tiny-2x', 
    'small', 'small-2x', 'small-3x', 'small-4x',
    'medium', 'medium-2x', 'medium-3x', 'medium-4x',
    'large', 'large-2x', 'large-3x', 'large-4x',
    'big', 'big-2x', 'big-3x', 'big-4x',
    'giant', 'giant-2x', 'giant-3x', 'giant-4x',
    'vast', 'vast-2x', 'vast-3x', 'vast-4x', 'vast-5x', 'vast-6x', 'vast-7x', 'vast-8x', 'vast-9x', 'vast-10x',
    'min', 'max', 'fit',
    // Percentage adjectives
    'full', 'half', 'third', 'third-2x', 'quarter', 'quarter-2x', 'quarter-3x',
    // Fractional values (backwards compatibility)
    '1/1', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4'
  ],
  percentageAdjectives: [
    { name: 'full', value: '100%', description: 'Full height (100%)', descriptionMs: 'Tinggi penuh (100%)' },
    { name: 'half', value: '50%', description: 'Half height (50%)', descriptionMs: 'Separuh tinggi (50%)' },
    { name: 'third', value: '33.333333%', description: 'One third height (33%)', descriptionMs: 'Satu pertiga tinggi (33%)' },
    { name: 'third-2x', value: '66.666667%', description: 'Two thirds height (66%)', descriptionMs: 'Dua pertiga tinggi (66%)' },
    { name: 'quarter', value: '25%', description: 'One quarter height (25%)', descriptionMs: 'Satu perempat tinggi (25%)' },
    { name: 'quarter-2x', value: '50%', description: 'Two quarters height (50%)', descriptionMs: 'Dua perempat tinggi (50%)' },
    { name: 'quarter-3x', value: '75%', description: 'Three quarters height (75%)', descriptionMs: 'Tiga perempat tinggi (75%)' }
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="h:full">Full height</div>', description: 'Full height' },
    { code: '<div space="h:half">Half height</div>', description: 'Half height (50%)' },
    { code: '<div space="h:[100vh]">Full viewport height</div>', description: 'Full viewport height' },
    { code: '<div space="min-h:[400px]">Min height</div>', description: 'Minimum height' },
    { code: '<div space="h:max">Content height</div>', description: 'Height based on content (max-content)' }
  ],
  preview: [
    {
      title: 'Height Control',
      titleMs: 'Kawal Tinggi',
      description: 'Set fixed heights',
      descriptionMs: 'Tetapkan tinggi tetap',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:full p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:full</div>
  <div space="h:third-2x p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:third-2x</div>
  <div space="h:half p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:half</div>
</div>`,
      highlightValue: 'h:full'
    },
    {
      title: 'Content-Based Height',
      titleMs: 'Tinggi Berdasarkan Kandungan',
      description: 'Use min, max, or fit for content-based height',
      descriptionMs: 'Guna min, max, atau fit untuk tinggi berdasarkan kandungan',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="h:min p:small" visual="bg:primary text:white rounded:small">h:min</div>
  <div space="h:max p:small" visual="bg:pink-600 text:white rounded:small">h:max<br>Multi<br>Line</div>
  <div space="h:fit p:small" visual="bg:amber-600 text:white rounded:small">h:fit</div>
</div>`,
      highlightValue: 'h:max'
    },
    {
      title: 'Min/Max Height with Content Values',
      titleMs: 'Tinggi Min/Max dengan Nilai Kandungan',
      description: 'Constrain height using content values',
      descriptionMs: 'Hadkan tinggi menggunakan nilai kandungan',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:min p:small" visual="bg:primary text:white rounded:small">min-h:min</div>
  <div space="max-h:max p:small" visual="bg:pink-600 text:white rounded:small">max-h:max</div>
  <div space="min-h:[80px] p:small" visual="bg:amber-600 text:white rounded:small" layout="flex center">min-h:[80px]</div>
</div>`,
      highlightValue: 'min-h:min'
    }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind numeric scale: `h:tw-64` (16rem), `min-h:tw-96` (24rem)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `h:tw-64` (16rem), `min-h:tw-96` (24rem)',
      link: 'https://tailwindcss.com/docs/height'
    }
  ]
};

// Export all space definitions
export const spaceDefinitions = {
  padding,
  margin,
  gap,
  width,
  height
};

// Build property map for CSS generator
export function buildSpacePropertyMap() {
  const map = {};
  
  for (const def of Object.values(spaceDefinitions)) {
    for (const v of def.values) {
      map[v.property] = v.css;
    }
  }
  
  return map;
}

export default spaceDefinitions;
