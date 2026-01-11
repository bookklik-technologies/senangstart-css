/**
 * SenangStart CSS - Layout Table Definitions
 * Table-related layout utility definitions
 */

// ======================
// BORDER COLLAPSE
// ======================

export const borderCollapse = {
  name: 'border-collapse',
  property: 'layout',
  syntax: 'layout="border:[value]"',
  description: 'Control table border collapse',
  descriptionMs: 'Kawal runtuhan sempadan jadual',
  category: 'layout',
  values: [
    { value: 'collapse', css: 'border-collapse: collapse;', description: 'Collapse borders', descriptionMs: 'Runtuhkan sempadan' },
    { value: 'separate', css: 'border-collapse: separate;', description: 'Separate borders', descriptionMs: 'Asingkan sempadan' }
  ],
  examples: [
    { code: '<table layout="border:collapse">Collapsed table</table>', description: 'Collapse table borders' }
  ]
};

// ======================
// BORDER SPACING
// ======================

export const borderSpacing = {
  name: 'border-spacing',
  property: 'layout',
  syntax: 'layout="border-spacing:[value]"',
  description: 'Control spacing between table borders',
  descriptionMs: 'Kawal jarak antara sempadan jadual',
  category: 'layout',
  usesScale: 'spacing',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: 'border-spacing', css: 'border-spacing: {value};', description: 'All spacing', descriptionMs: 'Semua jarak' },
    { value: 'border-spacing-x', css: 'border-spacing: {value} 0;', description: 'Horizontal spacing', descriptionMs: 'Jarak mendatar' },
    { value: 'border-spacing-y', css: 'border-spacing: 0 {value};', description: 'Vertical spacing', descriptionMs: 'Jarak menegak' }
  ],
  examples: [
    { code: '<table layout="border-separate border-spacing:small">Spaced</table>', description: 'Spaced table borders' }
  ]
};

// ======================
// TABLE LAYOUT
// ======================

export const tableLayout = {
  name: 'table-layout',
  property: 'layout',
  syntax: 'layout="table:[value]"',
  description: 'Control table layout algorithm',
  descriptionMs: 'Kawal algoritma susun atur jadual',
  category: 'layout',
  values: [
    { value: 'auto', css: 'table-layout: auto;', description: 'Auto layout', descriptionMs: 'Susun atur automatik' },
    { value: 'fixed', css: 'table-layout: fixed;', description: 'Fixed layout', descriptionMs: 'Susun atur tetap' }
  ],
  examples: [
    { code: '<table layout="table:fixed">Fixed width columns</table>', description: 'Fixed column widths' }
  ]
};

// ======================
// CAPTION SIDE
// ======================

export const captionSide = {
  name: 'caption-side',
  property: 'layout',
  syntax: 'layout="caption:[value]"',
  description: 'Control table caption position',
  descriptionMs: 'Kawal kedudukan kapsyen jadual',
  category: 'layout',
  values: [
    { value: 'top', css: 'caption-side: top;', description: 'Caption on top', descriptionMs: 'Kapsyen di atas' },
    { value: 'bottom', css: 'caption-side: bottom;', description: 'Caption on bottom', descriptionMs: 'Kapsyen di bawah' }
  ],
  examples: [
    { code: '<caption layout="caption:bottom">Bottom caption</caption>', description: 'Bottom caption' }
  ]
};

// Export table definitions
export const tableDefinitions = {
  borderCollapse,
  borderSpacing,
  tableLayout,
  captionSide
};

export default tableDefinitions;
