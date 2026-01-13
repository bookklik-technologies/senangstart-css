/**
 * SenangStart CSS - Border & Outline Utility Definitions
 * Border color, width, style, outline (including directional variants)
 */

// ======================
// BORDER COLOR (ALL DIRECTIONS)
// ======================

export const borderColor = {
  name: 'border',
  property: 'visual',
  syntax: 'visual="border:[color]" | visual="border-{t|b|l|r|x|y}:[color]"',
  description: 'Set border color for all sides or specific sides',
  descriptionMs: 'Tetapkan warna sempadan untuk semua sisi atau sisi tertentu',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'primary', css: 'border-color: var(--c-primary); border-style: solid;', description: 'Primary color border', descriptionMs: 'Sempadan warna utama' },
    { value: 'gray-300', css: 'border-color: var(--c-gray-300); border-style: solid;', description: 'Light gray border', descriptionMs: 'Sempadan kelabu cerah' },
    { value: 'danger', css: 'border-color: var(--c-danger); border-style: solid;', description: 'Danger/error border', descriptionMs: 'Sempadan bahaya/ralat' }
  ],
  examples: [
    { code: '<div visual="border:primary border-w:thin">Primary border</div>', description: 'Border on all sides' },
    { code: '<div visual="border-t:primary border-t-w:regular">Top only</div>', description: 'Top border only' },
    { code: '<div visual="border-b:gray-300 border-b-w:thin">Bottom only</div>', description: 'Bottom border only' },
    { code: '<div visual="border-x:primary border-x-w:regular">Left & right</div>', description: 'Horizontal borders' },
    { code: '<div visual="border-y:gray-300 border-y-w:thin">Top & bottom</div>', description: 'Vertical borders' }
  ],
  preview: [
    {
      title: 'Border Colors',
      titleMs: 'Warna Sempadan',
      description: 'Apply border with color on all sides',
      descriptionMs: 'Terapkan sempadan dengan warna pada semua sisi',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:primary border-w:regular rounded:small">primary</div>
  <div space="p:medium" visual="border:danger border-w:regular rounded:small">danger</div>
  <div space="p:medium" visual="border:neutral-400 border-w:regular rounded:small">neutral</div>
</div>`,
      highlightValue: 'border:primary'
    },
    {
      title: 'Directional Borders',
      titleMs: 'Sempadan Arah',
      description: 'Apply borders to specific sides',
      descriptionMs: 'Terapkan sempadan pada sisi tertentu',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border-t:primary border-t-w:regular bg:white dark:bg:neutral-800 rounded:small">top</div>
  <div space="p:medium" visual="border-b:primary border-b-w:regular bg:white dark:bg:neutral-800 rounded:small">bottom</div>
  <div space="p:medium" visual="border-l:primary border-l-w:regular bg:white dark:bg:neutral-800 rounded:small">left</div>
</div>`,
      highlightValue: 'border-t:primary'
    }
  ]
};

// ======================
// BORDER WIDTH (ALL DIRECTIONS)
// ======================

export const borderWidth = {
  name: 'border-width',
  property: 'visual',
  syntax: 'visual="border-w:[value]" | visual="border-{t|b|l|r|x|y}-w:[value]"',
  description: 'Set border width for all sides or specific sides',
  descriptionMs: 'Tetapkan lebar sempadan untuk semua sisi atau sisi tertentu',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'border-width: var(--s-none);', description: 'No border (0px)', descriptionMs: 'Tiada sempadan (0px)' },
    { value: 'thin', css: 'border-width: var(--s-thin);', description: 'Thin border (1px)', descriptionMs: 'Sempadan nipis (1px)' },
    { value: 'regular', css: 'border-width: var(--s-regular);', description: 'Standard border (2px)', descriptionMs: 'Sempadan standard (2px)' },
    { value: 'thick', css: 'border-width: var(--s-thick);', description: 'Thick border (3px)', descriptionMs: 'Sempadan tebal (3px)' }
  ],
  examples: [
    { code: '<div visual="border:gray-300 border-w:thin">Thin 1px border</div>', description: 'Thin border (1px)' },
    { code: '<div visual="border:gray-300 border-w:regular">Standard 2px border</div>', description: 'Regular border (2px)' },
    { code: '<div visual="border:gray-300 border-w:thick">Thick 3px border</div>', description: 'Thick border (3px)' },
    { code: '<div visual="border-b:primary border-b-w:regular">Bottom border only</div>', description: 'Bottom border width' },
    { code: '<div visual="border-x:primary border-x-w:thin">Horizontal borders</div>', description: 'Horizontal border width' }
  ],
  preview: [
    {
      title: 'Border Widths',
      titleMs: 'Lebar Sempadan',
      description: 'Different border width options',
      descriptionMs: 'Pilihan lebar sempadan berbeza',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:thin rounded:small bg:white dark:bg:neutral-800">thin</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular rounded:small bg:white dark:bg:neutral-800">regular</div>
  <div space="p:medium" visual="border:neutral-500 border-w:thick rounded:small bg:white dark:bg:neutral-800">thick</div>
</div>`,
      highlightValue: 'border-w:regular'
    }
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
  ],
  preview: [
    {
      title: 'Border Styles',
      titleMs: 'Gaya Sempadan',
      description: 'Different border style options',
      descriptionMs: 'Pilihan gaya sempadan berbeza',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:solid rounded:small bg:white dark:bg:neutral-800">solid</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dashed rounded:small bg:white dark:bg:neutral-800">dashed</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dotted rounded:small bg:white dark:bg:neutral-800">dotted</div>
</div>`,
      highlightValue: 'border-style:dashed'
    }
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
  ],
  preview: [
    {
      title: 'Outline',
      titleMs: 'Garis Luar',
      description: 'Outline does not affect layout',
      descriptionMs: 'Garis luar tidak mempengaruhi susun atur',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="outline:primary bg:white dark:bg:neutral-800 rounded:small" style="outline-width: 2px; outline-style: solid;">outline:primary</button>
</div>`,
      highlightValue: 'outline:primary'
    }
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
