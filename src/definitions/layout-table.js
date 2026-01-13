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
  ],
  preview: [
    {
      title: 'Border Collapse',
      titleMs: 'Runtuh Sempadan',
      description: 'Table borders collapse into single lines',
      descriptionMs: 'Sempadan jadual runtuh menjadi satu baris',
      html: `<table layout="border:collapse" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B2</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: 'border:collapse'
    },
    {
      title: 'Border Separate',
      titleMs: 'Asingkan Sempadan',
      description: 'Table borders are separate (default)',
      descriptionMs: 'Sempadan jadual diasingkan (lalai)',
      html: `<table layout="border:separate" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%; border-spacing: 4px;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: 'border:separate'
    }
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
  ],
  preview: [
    {
      title: 'Border Spacing',
      titleMs: 'Jarak Sempadan',
      description: 'Space between table cell borders',
      descriptionMs: 'Jarak antara sempadan sel jadual',
      html: `<table layout="border:separate" style="width: 100%; border-spacing: 8px;">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: 'border-spacing:small'
    }
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
  ],
  preview: [
    {
      title: 'Fixed Table Layout',
      titleMs: 'Susun Atur Jadual Tetap',
      description: 'Columns have fixed equal widths',
      descriptionMs: 'Lajur mempunyai lebar tetap sama',
      html: `<table layout="table:fixed" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Fixed</td>
      <td space="p:small" visual="bg:primary text:white">Column</td>
      <td space="p:small" visual="bg:primary text:white">Widths</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: 'table:fixed'
    },
    {
      title: 'Auto Table Layout',
      titleMs: 'Susun Atur Jadual Auto',
      description: 'Columns adjust to content width',
      descriptionMs: 'Lajur menyesuaikan dengan lebar kandungan',
      html: `<table layout="table:auto" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Short</td>
      <td space="p:small" visual="bg:primary text:white">Much Longer Content Here</td>
      <td space="p:small" visual="bg:primary text:white">Med</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: 'table:auto'
    }
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
  ],
  preview: [
    {
      title: 'Caption Top',
      titleMs: 'Kapsyen Atas',
      description: 'Table caption at the top',
      descriptionMs: 'Kapsyen jadual di atas',
      html: `<table style="width: 100%;">
  <caption layout="caption:top" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Top)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: 'caption:top'
    },
    {
      title: 'Caption Bottom',
      titleMs: 'Kapsyen Bawah',
      description: 'Table caption at the bottom',
      descriptionMs: 'Kapsyen jadual di bawah',
      html: `<table style="width: 100%;">
  <caption layout="caption:bottom" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Bottom)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: 'caption:bottom'
    }
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
