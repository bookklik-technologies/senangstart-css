/**
 * SenangStart CSS - Border & Outline Utility Definitions
 * Border color, width, style, outline
 */

// ======================
// BORDER COLOR
// ======================

export const borderColor = {
  name: 'border',
  property: 'visual',
  syntax: 'visual="border:[color]"',
  description: 'Set border color',
  descriptionMs: 'Tetapkan warna sempadan',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<div visual="border:primary border-w:small">Bordered element</div>', description: 'Primary border' }
  ]
};

// ======================
// BORDER WIDTH
// ======================

export const borderWidth = {
  name: 'border-width',
  property: 'visual',
  syntax: 'visual="border-w:[value]"',
  description: 'Set border width',
  descriptionMs: 'Tetapkan lebar sempadan',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  values: [
    { value: 'tiny', css: 'border-width: var(--s-tiny); border-style: solid;', description: 'Tiny border', descriptionMs: 'Sempadan kecil' },
    { value: 'small', css: 'border-width: var(--s-small); border-style: solid;', description: 'Small border', descriptionMs: 'Sempadan kecil' }
  ],
  examples: [
    { code: '<div visual="border:gray-300 border-w:small">Thin border</div>', description: 'Thin border' }
  ]
};

// ======================
// BORDER STYLE
// ======================

export const borderStyle = {
  name: 'border-style',
  property: 'visual',
  syntax: 'visual="border-style:[value]"',
  description: 'Set border style',
  descriptionMs: 'Tetapkan gaya sempadan',
  category: 'visual',
  values: [
    { value: 'solid', css: 'border-style: solid;', description: 'Solid border', descriptionMs: 'Sempadan pepejal' },
    { value: 'dashed', css: 'border-style: dashed;', description: 'Dashed border', descriptionMs: 'Sempadan putus-putus' },
    { value: 'dotted', css: 'border-style: dotted;', description: 'Dotted border', descriptionMs: 'Sempadan bertitik' },
    { value: 'double', css: 'border-style: double;', description: 'Double border', descriptionMs: 'Sempadan berganda' },
    { value: 'none', css: 'border-style: none;', description: 'No border', descriptionMs: 'Tiada sempadan' }
  ],
  examples: [
    { code: '<div visual="border:gray-300 border-style:dashed">Dashed border</div>', description: 'Dashed border' }
  ]
};

// ======================
// OUTLINE
// ======================

export const outlineColor = {
  name: 'outline',
  property: 'visual',
  syntax: 'visual="outline:[color]"',
  description: 'Set outline color',
  descriptionMs: 'Tetapkan warna garis luar',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<button visual="focus:outline:primary">Focus outline</button>', description: 'Focus outline' }
  ]
};

// Export all border definitions
export const borderDefinitions = {
  borderColor,
  borderWidth,
  borderStyle,
  outlineColor
};

export default borderDefinitions;
