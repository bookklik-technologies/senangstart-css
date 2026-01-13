/**
 * SenangStart CSS - Layout Grid Definitions
 * CSS Grid utility definitions
 */

// ======================
// GRID TEMPLATE COLUMNS
// ======================

export const gridColumns = {
  name: 'grid-columns',
  property: 'layout',
  syntax: 'layout="grid-cols:[value]"',
  description: 'Define grid template columns',
  descriptionMs: 'Tentukan templat lajur grid',
  category: 'layout',
  dynamic: true,
  values: [
    { value: '1-12', css: 'grid-template-columns: repeat({n}, minmax(0, 1fr));', description: 'N equal columns', descriptionMs: 'N lajur sama' },
    { value: 'none', css: 'grid-template-columns: none;', description: 'No columns defined', descriptionMs: 'Tiada lajur ditakrifkan' },
    { value: 'subgrid', css: 'grid-template-columns: subgrid;', description: 'Use parent grid', descriptionMs: 'Guna grid induk' }
  ],
  examples: [
    { code: '<div layout="grid grid-cols:3">3 columns</div>', description: 'Three column grid' },
    { code: '<div layout="grid grid-cols:12">12 columns</div>', description: 'Twelve column grid' }
  ],
  preview: [
    {
      title: '3 Column Grid',
      titleMs: 'Grid 3 Lajur',
      description: 'Equal width columns with grid-cols:3',
      descriptionMs: 'Lajur lebar sama dengan grid-cols:3',
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: 'grid-cols:3'
    },
    {
      title: '4 Column Grid',
      titleMs: 'Grid 4 Lajur',
      description: 'Four equal columns layout',
      descriptionMs: 'Susun atur empat lajur sama',
      html: `<div layout="grid grid-cols:4" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: 'grid-cols:4'
    }
  ]
};

// ======================
// GRID TEMPLATE ROWS
// ======================

export const gridRows = {
  name: 'grid-rows',
  property: 'layout',
  syntax: 'layout="grid-rows:[value]"',
  description: 'Define grid template rows',
  descriptionMs: 'Tentukan templat baris grid',
  category: 'layout',
  dynamic: true,
  values: [
    { value: '1-12', css: 'grid-template-rows: repeat({n}, minmax(0, 1fr));', description: 'N equal rows', descriptionMs: 'N baris sama' },
    { value: 'none', css: 'grid-template-rows: none;', description: 'No rows defined', descriptionMs: 'Tiada baris ditakrifkan' },
    { value: 'subgrid', css: 'grid-template-rows: subgrid;', description: 'Use parent grid', descriptionMs: 'Guna grid induk' }
  ],
  examples: [
    { code: '<div layout="grid grid-rows:3">3 rows</div>', description: 'Three row grid' }
  ],
  preview: [
    {
      title: 'Grid Rows',
      titleMs: 'Baris Grid',
      description: 'Define explicit row tracks in a grid',
      descriptionMs: 'Tentukan trek baris eksplisit dalam grid',
      html: `<div layout="grid grid-rows:3 grid-cols:2" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: 'grid-rows:3'
    }
  ]
};

// ======================
// GRID COLUMN SPAN
// ======================

export const gridColSpan = {
  name: 'grid-column-span',
  property: 'layout',
  syntax: 'layout="col-span:[value]"',
  description: 'Span across grid columns',
  descriptionMs: 'Merentangi lajur grid',
  category: 'layout',
  dynamic: true,
  values: [
    { value: '1-12', css: 'grid-column: span {n} / span {n};', description: 'Span N columns', descriptionMs: 'Merentangi N lajur' },
    { value: 'full', css: 'grid-column: 1 / -1;', description: 'Span all columns', descriptionMs: 'Merentangi semua lajur' }
  ],
  examples: [
    { code: '<div layout="col-span:2">Spans 2 columns</div>', description: 'Span two columns' },
    { code: '<div layout="col-span:full">Full width</div>', description: 'Span all columns' }
  ],
  preview: [
    {
      title: 'Column Span',
      titleMs: 'Rentang Lajur',
      description: 'Item spanning multiple columns',
      descriptionMs: 'Item merentangi berbilang lajur',
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="col-span:2 text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
</div>`,
      highlightValue: 'col-span:2'
    },
    {
      title: 'Full Width Span',
      titleMs: 'Rentang Lebar Penuh',
      description: 'Item spanning all columns',
      descriptionMs: 'Item merentangi semua lajur',
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span layout="col-span:full text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:full</span>
</div>`,
      highlightValue: 'col-span:full'
    }
  ]
};

// ======================
// GRID ROW SPAN
// ======================

export const gridRowSpan = {
  name: 'grid-row-span',
  property: 'layout',
  syntax: 'layout="row-span:[value]"',
  description: 'Span across grid rows',
  descriptionMs: 'Merentangi baris grid',
  category: 'layout',
  dynamic: true,
  values: [
    { value: '1-12', css: 'grid-row: span {n} / span {n};', description: 'Span N rows', descriptionMs: 'Merentangi N baris' },
    { value: 'full', css: 'grid-row: 1 / -1;', description: 'Span all rows', descriptionMs: 'Merentangi semua baris' }
  ],
  examples: [
    { code: '<div layout="row-span:2">Spans 2 rows</div>', description: 'Span two rows' }
  ],
  preview: [
    {
      title: 'Row Span',
      titleMs: 'Rentang Baris',
      description: 'Item spanning multiple rows',
      descriptionMs: 'Item merentangi berbilang baris',
      html: `<div layout="grid grid-cols:3 grid-rows:2" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="row-span:2 flex center" space="p:small" visual="bg:primary text:white rounded:small">row-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: 'row-span:2'
    }
  ]
};

// ======================
// GRID AUTO FLOW
// ======================

export const gridAutoFlow = {
  name: 'grid-auto-flow',
  property: 'layout',
  syntax: 'layout="grid-flow:[value]"',
  description: 'Control how auto-placed items flow in grid',
  descriptionMs: 'Kawal bagaimana item diletakkan automatik dalam grid',
  category: 'layout',
  values: [
    { value: 'row', css: 'grid-auto-flow: row;', description: 'Place by row', descriptionMs: 'Letakkan mengikut baris' },
    { value: 'col', css: 'grid-auto-flow: column;', description: 'Place by column', descriptionMs: 'Letakkan mengikut lajur' },
    { value: 'dense', css: 'grid-auto-flow: dense;', description: 'Dense packing', descriptionMs: 'Pembungkusan padat' },
    { value: 'row-dense', css: 'grid-auto-flow: row dense;', description: 'Row with dense', descriptionMs: 'Baris dengan padat' },
    { value: 'col-dense', css: 'grid-auto-flow: column dense;', description: 'Column with dense', descriptionMs: 'Lajur dengan padat' }
  ],
  examples: [
    { code: '<div layout="grid grid-flow:col">Column flow</div>', description: 'Column-based flow' }
  ],
  preview: [
    {
      title: 'Row Flow',
      titleMs: 'Aliran Baris',
      description: 'Items flow by row (default)',
      descriptionMs: 'Item mengalir mengikut baris (lalai)',
      html: `<div layout="grid grid-cols:3 grid-flow:row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: 'grid-flow:row'
    },
    {
      title: 'Column Flow',
      titleMs: 'Aliran Lajur',
      description: 'Items flow by column',
      descriptionMs: 'Item mengalir mengikut lajur',
      html: `<div layout="grid grid-rows:2 grid-flow:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: 'grid-flow:col'
    }
  ]
};

// ======================
// GRID AUTO SIZING
// ======================

export const gridAutoSizing = {
  name: 'grid-auto-sizing',
  property: 'layout',
  syntax: 'layout="auto-cols:[value]" or layout="auto-rows:[value]"',
  description: 'Control size of auto-generated grid tracks',
  descriptionMs: 'Kawal saiz trek grid yang dijana automatik',
  category: 'layout',
  dynamic: true,
  values: [
    { value: 'auto', css: 'auto', description: 'Auto size', descriptionMs: 'Saiz automatik' },
    { value: 'min', css: 'min-content', description: 'Minimum content', descriptionMs: 'Kandungan minimum' },
    { value: 'max', css: 'max-content', description: 'Maximum content', descriptionMs: 'Kandungan maksimum' },
    { value: 'fr', css: 'minmax(0, 1fr)', description: 'Fractional unit', descriptionMs: 'Unit pecahan' }
  ],
  examples: [
    { code: '<div layout="grid auto-cols:min">Auto min columns</div>', description: 'Min-content columns' }
  ],
  preview: [
    {
      title: 'Auto Columns',
      titleMs: 'Lajur Automatik',
      description: 'Automatically sized column tracks',
      descriptionMs: 'Trek lajur bersaiz automatik',
      html: `<div layout="grid grid-flow:col auto-cols:fr" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 3</span>
</div>`,
      highlightValue: 'auto-cols:fr'
    }
  ]
};

// Export grid definitions
export const gridDefinitions = {
  gridColumns,
  gridRows,
  gridColSpan,
  gridRowSpan,
  gridAutoFlow,
  gridAutoSizing
};

export default gridDefinitions;
