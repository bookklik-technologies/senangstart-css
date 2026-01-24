/**
 * SenangStart CSS - Divide Utility Definitions
 * Adds borders between child elements
 */

// ======================
// DIVIDE COLOR (ALL DIRECTIONS)
// ======================

export const divideColor = {
  name: 'divide',
  property: 'visual',
  syntax: 'visual="divide:[color]" | visual="divide-{x|y}:[color]" | visual="divide-{x|y}:reverse"',
  description: 'Add borders between child elements',
  descriptionMs: 'Tambah sempadan antara elemen anak',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'primary', css: 'border-color: var(--c-primary); border-style: solid;', description: 'Primary color divider', descriptionMs: 'Pemisah warna utama' },
    { value: 'gray-300', css: 'border-color: var(--c-gray-300); border-style: solid;', description: 'Light gray divider', descriptionMs: 'Pemisah kelabu cerah' },
    { value: 'danger', css: 'border-color: var(--c-danger); border-style: solid;', description: 'Danger/error divider', descriptionMs: 'Pemisah bahaya/ralat' }
  ],
  examples: [
    { code: '<div visual="divide:primary divide-w:thin">', description: 'Divide with primary color' },
    { code: '<div visual="divide-y:gray-300 divide-y-w:regular">', description: 'Vertical dividers only' },
    { code: '<div visual="divide-x:danger divide-x-w:thin">', description: 'Horizontal dividers only' },
    { code: '<div layout="flex flex-row-reverse" visual="divide-x:primary divide-x-w:thin divide-x:reverse">', description: 'Reverse dividers for flex-reverse' }
  ],
  preview: [
    {
      title: 'Divide Colors',
      titleMs: 'Warna Pemisah',
      description: 'Add dividers between flex/grid items',
      descriptionMs: 'Tambah pemisah antara item flex/grid',
      html: `<div layout="flex col" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide-y-w:thin divide:primary">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
<div layout="flex" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide:red-500 divide-x-w:thin">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>`,
      highlightValue: 'divide:primary'
    },
    {
      title: 'Directional Divides',
      titleMs: 'Pemisah Arah',
      description: 'Divide on specific axes',
      descriptionMs: 'Pemisah pada paksi tertentu',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-y:gray-300 divide-y-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-x:primary divide-x-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
</div>`,
      highlightValue: 'divide-y:gray-300'
    }
  ]
};

// ======================
// DIVIDE WIDTH (ALL DIRECTIONS)
// ======================

export const divideWidth = {
  name: 'divide-width',
  property: 'visual',
  syntax: 'visual="divide-w:[value]" | visual="divide-{x|y}-w:[value]"',
  description: 'Set divider width',
  descriptionMs: 'Tetapkan lebar pemisah',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'border-width: var(--s-none);', description: 'No divider (0px)', descriptionMs: 'Tiada pemisah (0px)' },
    { value: 'thin', css: 'border-width: var(--s-thin);', description: 'Thin divider (1px)', descriptionMs: 'Pemisah nipis (1px)' },
    { value: 'regular', css: 'border-width: var(--s-regular);', description: 'Standard divider (2px)', descriptionMs: 'Pemisah standard (2px)' },
    { value: 'thick', css: 'border-width: var(--s-thick);', description: 'Thick divider (3px)', descriptionMs: 'Pemisah tebal (3px)' }
  ],
  examples: [
    { code: '<div visual="divide:gray-300 divide-w:thin">', description: 'Thin dividers (1px)' },
    { code: '<div visual="divide:gray-300 divide-w:regular">', description: 'Regular dividers (2px)' },
    { code: '<div visual="divide:gray-300 divide-w:thick">', description: 'Thick dividers (3px)' },
    { code: '<div visual="divide-y:primary divide-y-w:regular">', description: 'Vertical dividers with width' },
    { code: '<div visual="divide-x:primary divide-x-w:thin">', description: 'Horizontal dividers with width' }
  ],
  preview: [
    {
      title: 'Divide Widths',
      titleMs: 'Lebar Pemisah',
      description: 'Different divider width options',
      descriptionMs: 'Pilihan lebar pemisah berbeza',
      html: `<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thin">
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thick">
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
  </div>
</div>`,
      highlightValue: 'divide-w:regular'
    }
  ]
};

// ======================
// DIVIDE REVERSE
// ======================

export const divideReverse = {
  name: 'divide-reverse',
  property: 'visual',
  syntax: 'visual="divide-{x|y}:reverse"',
  description: 'Reverse border side for flex-reverse',
  descriptionMs: 'Songsangkan sisi sempadan untuk flex-reverse',
  category: 'visual',
  values: [
    { value: 'divide-x:reverse', css: '--ss-divide-x-reverse: 1;', description: 'Reverse X-axis divider', descriptionMs: 'Songsangkan pemisah paksi-X' },
    { value: 'divide-y:reverse', css: '--ss-divide-y-reverse: 1;', description: 'Reverse Y-axis divider', descriptionMs: 'Songsangkan pemisah paksi-Y' }
  ],
  examples: [
    { code: '<div layout="flex flex-row-reverse" visual="divide-x:gray-300 divide-x-w:thin divide-x:reverse">', description: 'Reverse X divider' },
    { code: '<div layout="flex flex-col-reverse" visual="divide-y:gray-300 divide-y-w:thin divide-y:reverse">', description: 'Reverse Y divider' }
  ],
  preview: [
    {
      title: 'Reverse vs Normal',
      titleMs: 'Songsang vs Biasa',
      description: 'Comparison of normal flow vs reverse flow dividers',
      descriptionMs: 'Perbandingan pemisah aliran biasa vs songsang',
      html: `<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:small">1</div>
    <div space="p:small">2</div>
    <div space="p:small">3</div>
  </div>
  <div layout="flex row-reverse" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-x:reverse">
    <div space="p:small">1(R)</div>
    <div space="p:small">2(R)</div>
    <div space="p:small">3(R)</div>
  </div>
</div>`,
      highlightValue: 'divide-x:reverse'
    }
  ]
};

// ======================
// DIVIDE STYLE
// ======================

export const divideStyle = {
  name: 'divide-style',
  property: 'visual',
  syntax: 'visual="divide-style:[value]"',
  description: 'Set divider style',
  descriptionMs: 'Tetapkan gaya pemisah',
  category: 'visual',
  values: [
    { value: 'solid', css: 'border-style: solid;', description: 'Solid divider', descriptionMs: 'Pemisah pepejal' },
    { value: 'dashed', css: 'border-style: dashed;', description: 'Dashed divider', descriptionMs: 'Pemisah putus-putus' },
    { value: 'dotted', css: 'border-style: dotted;', description: 'Dotted divider', descriptionMs: 'Pemisah bertitik' },
    { value: 'double', css: 'border-style: double;', description: 'Double divider', descriptionMs: 'Pemisah berganda' },
    { value: 'none', css: 'border-style: none;', description: 'No divider', descriptionMs: 'Tiada pemisah' }
  ],
  examples: [
    { code: '<div visual="divide:gray-300 divide-style:dashed">', description: 'Dashed dividers' },
    { code: '<div visual="divide:gray-300 divide-style:dotted">', description: 'Dotted dividers' },
    { code: '<div visual="divide:gray-300 divide-style:double">', description: 'Double dividers' }
  ],
  preview: [
    {
      title: 'Divide Styles',
      titleMs: 'Gaya Pemisah',
      description: 'Different divider style options',
      descriptionMs: 'Pilihan gaya pemisah berbeza',
      html: `<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:solid border:neutral-500 border-w:regular border-style:solid">
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dashed border:neutral-500 border-w:regular border-style:dashed">
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dotted border:neutral-500 border-w:regular border-style:dotted">
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
  </div>
</div>`,
      highlightValue: 'divide-style:dashed'
    }
  ]
};

// Export all divide definitions
export const divideDefinitions = {
  divideColor,
  divideWidth,
  divideStyle,
  divideReverse
};

export default divideDefinitions;
