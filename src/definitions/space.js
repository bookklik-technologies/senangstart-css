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
  scaleValues: ['none', 'tiny', 'small', 'medium', 'big', 'giant', 'vast'],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="p:medium">Padding all sides</div>', description: 'Medium padding' },
    { code: '<div space="p-x:big p-y:small">Different padding</div>', description: 'Axis padding' },
    { code: '<div space="p:[20px]">Custom padding</div>', description: 'Arbitrary value' }
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
  scaleValues: ['none', 'tiny', 'small', 'medium', 'big', 'giant', 'vast', 'auto'],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="m:medium">Margin all sides</div>', description: 'Medium margin' },
    { code: '<div space="m-x:auto">Centered horizontally</div>', description: 'Auto centering' },
    { code: '<div space="m-t:big">Top margin</div>', description: 'Top margin only' }
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
  scaleValues: ['none', 'tiny', 'small', 'medium', 'big', 'giant', 'vast'],
  supportsArbitrary: true,
  examples: [
    { code: '<div layout="flex" space="g:medium">Gap between items</div>', description: 'Flex gap' },
    { code: '<div layout="grid" space="g-x:big g-y:small">Grid gaps</div>', description: 'Different axis gaps' }
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
  scaleValues: ['none', 'tiny', 'small', 'medium', 'big', 'giant', 'vast'],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="w:[100%]">Full width</div>', description: 'Full width' },
    { code: '<div space="max-w:[1200px]">Max width container</div>', description: 'Max width' },
    { code: '<div space="min-w:[300px]">Min width</div>', description: 'Minimum width' }
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
  scaleValues: ['none', 'tiny', 'small', 'medium', 'big', 'giant', 'vast'],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="h:[100vh]">Full viewport height</div>', description: 'Full height' },
    { code: '<div space="min-h:[400px]">Min height</div>', description: 'Minimum height' }
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
