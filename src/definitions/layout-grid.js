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
