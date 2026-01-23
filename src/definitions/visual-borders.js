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
  <button space="p:small" visual="outline:primary bg:white dark:bg:neutral-800 rounded:small">outline:primary</button>
</div>`,
      highlightValue: 'outline:primary'
    }
  ]
};

// ======================
// RING (Focus Ring)
// ======================

export const ring = {
  name: 'ring',
  property: 'visual',
  syntax: 'visual="ring:[size]"',
  description: 'Add focus ring around element using box-shadow',
  descriptionMs: 'Tambah cincin fokus pada elemen menggunakan box-shadow',
  category: 'visual',
  usesScale: 'ring',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'box-shadow: 0 0 0 0 transparent;', description: 'No ring', descriptionMs: 'Tiada cincin' },
    { value: 'thin', css: 'box-shadow: 0 0 0 1px var(--ring-color);', description: 'Thin ring (1px)', descriptionMs: 'Cincin nipis (1px)' },
    { value: 'regular', css: 'box-shadow: 0 0 0 2px var(--ring-color);', description: 'Regular ring (2px)', descriptionMs: 'Cincin biasa (2px)' },
    { value: 'small', css: 'box-shadow: 0 0 0 4px var(--ring-color);', description: 'Small ring (4px)', descriptionMs: 'Cincin kecil (4px)' },
    { value: 'medium', css: 'box-shadow: 0 0 0 6px var(--ring-color);', description: 'Medium ring (6px)', descriptionMs: 'Cincin sederhana (6px)' },
    { value: 'big', css: 'box-shadow: 0 0 0 8px var(--ring-color);', description: 'Big ring (8px)', descriptionMs: 'Cincin besar (8px)' }
  ],
  examples: [
    { code: '<button visual="focus-visible:ring:small ring-color:primary">Focus me</button>', description: 'Focus ring on keyboard focus' },
    { code: '<input visual="focus:ring:regular ring-color:blue-500">', description: 'Input with focus ring' }
  ],
  preview: [
    {
      title: 'Focus Ring',
      titleMs: 'Cincin Fokus',
      description: 'Ring appears on keyboard focus (try Tab key)',
      descriptionMs: 'Cincin muncul pada fokus papan kekunci (cuba kekunci Tab)',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="bg:primary text:white rounded:small focus-visible:ring:small ring-color:blue-300">Tab to me</button>
  <button space="p:small p-x:medium" visual="bg:white dark:bg:neutral-800 border:neutral-300 border-w:thin rounded:small focus-visible:ring:small ring-color:primary">Or me</button>
</div>`,
      highlightValue: 'focus-visible:ring:small'
    }
  ]
};

export const ringColor = {
  name: 'ring-color',
  property: 'visual',
  syntax: 'visual="ring-color:[color]"',
  description: 'Set ring color',
  descriptionMs: 'Tetapkan warna cincin',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'primary', css: '--ring-color: var(--c-primary);', description: 'Primary ring color', descriptionMs: 'Warna cincin utama' },
    { value: 'blue-500', css: '--ring-color: var(--c-blue-500);', description: 'Blue ring color', descriptionMs: 'Warna cincin biru' }
  ],
  examples: [
    { code: '<button visual="ring:small ring-color:primary">Colored ring</button>', description: 'Ring with custom color' }
  ]
};

export const ringOffset = {
  name: 'ring-offset',
  property: 'visual',
  syntax: 'visual="ring-offset:[size]"',
  description: 'Add gap between ring and element',
  descriptionMs: 'Tambah ruang antara cincin dan elemen',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: '0', css: '--ring-offset: 0px;', description: 'No offset', descriptionMs: 'Tiada ruang' },
    { value: '2', css: '--ring-offset: 2px;', description: '2px offset', descriptionMs: 'Ruang 2px' },
    { value: '4', css: '--ring-offset: 4px;', description: '4px offset', descriptionMs: 'Ruang 4px' }
  ],
  examples: [
    { code: '<button visual="ring:small ring-offset:2 ring-color:primary">With offset</button>', description: 'Ring with offset' }
  ]
};

// Export all border definitions
export const borderDefinitions = {
  borderColor,
  borderWidth,
  borderStyle,
  outlineColor,
  ring,
  ringColor,
  ringOffset
};

export default borderDefinitions;
