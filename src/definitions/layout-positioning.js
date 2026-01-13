/**
 * SenangStart CSS - Layout Positioning Definitions
 * Position, inset, and z-index utility definitions
 */

// ======================
// POSITION
// ======================

export const position = {
  name: 'position',
  property: 'layout',
  syntax: 'layout="[position-value]"',
  description: 'Set the positioning method',
  descriptionMs: 'Tetapkan kaedah kedudukan',
  category: 'layout',
  values: [
    { value: 'static', css: 'position: static;', description: 'Default positioning', descriptionMs: 'Kedudukan lalai' },
    { value: 'relative', css: 'position: relative;', description: 'Relative to normal position', descriptionMs: 'Relatif kepada kedudukan normal' },
    { value: 'absolute', css: 'position: absolute;', description: 'Absolute within container', descriptionMs: 'Mutlak dalam bekas' },
    { value: 'fixed', css: 'position: fixed;', description: 'Fixed to viewport', descriptionMs: 'Tetap pada port pandangan' },
    { value: 'sticky', css: 'position: sticky;', description: 'Sticky positioning', descriptionMs: 'Kedudukan melekit' }
  ],
  examples: [
    { code: '<div layout="absolute">Absolute positioned</div>', description: 'Absolute position' },
    { code: '<div layout="fixed">Fixed to viewport</div>', description: 'Fixed position' }
  ],
  preview: [
    {
      title: 'Relative Position',
      titleMs: 'Kedudukan Relatif',
      description: 'Element positioned relative to normal flow',
      descriptionMs: 'Elemen diletakkan relatif kepada aliran normal',
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Relative Container</span>
  <span layout="absolute" style="top: 0; right: 0;" space="p:tiny" visual="bg:danger text:white rounded:small">Abs</span>
</div>`,
      highlightValue: 'relative'
    },
    {
      title: 'Sticky Position',
      titleMs: 'Kedudukan Melekit',
      description: 'Element sticks when scrolling past it',
      descriptionMs: 'Elemen melekat apabila skrol melepasi',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="sticky" style="top: 0;" space="p:small" visual="bg:primary text:white rounded:small">Sticky Header</span>
</div>`,
      highlightValue: 'sticky'
    }
  ]
};

// ======================
// INSET (POSITIONING)
// ======================

export const inset = {
  name: 'inset',
  property: 'layout',
  syntax: 'layout="inset:[value]" or layout="top:[value]"',
  description: 'Control positioning offsets',
  descriptionMs: 'Kawal ofset kedudukan',
  category: 'layout',
  usesScale: 'spacing',
  supportsArbitrary: true,
  values: [
    { value: 'inset', css: 'inset: {value};', description: 'All sides', descriptionMs: 'Semua sisi' },
    { value: 'inset-x', css: 'left: {value}; right: {value};', description: 'Left and right', descriptionMs: 'Kiri dan kanan' },
    { value: 'inset-y', css: 'top: {value}; bottom: {value};', description: 'Top and bottom', descriptionMs: 'Atas dan bawah' },
    { value: 'top', css: 'top: {value};', description: 'Top offset', descriptionMs: 'Ofset atas' },
    { value: 'right', css: 'right: {value};', description: 'Right offset', descriptionMs: 'Ofset kanan' },
    { value: 'bottom', css: 'bottom: {value};', description: 'Bottom offset', descriptionMs: 'Ofset bawah' },
    { value: 'left', css: 'left: {value};', description: 'Left offset', descriptionMs: 'Ofset kiri' }
  ],
  examples: [
    { code: '<div layout="absolute inset:0">Full coverage</div>', description: 'Cover parent' },
    { code: '<div layout="absolute top:medium left:medium">Offset</div>', description: 'Offset positioning' }
  ],
  preview: [
    {
      title: 'Inset Zero',
      titleMs: 'Inset Sifar',
      description: 'Cover entire parent with inset:0',
      descriptionMs: 'Tutup keseluruhan induk dengan inset:0',
      html: `<div layout="relative" space="p:large" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Parent</span>
  <span layout="absolute inset:0 flex center" visual="bg:primary/50 text:white rounded:medium">inset:0</span>
</div>`,
      highlightValue: 'inset:0'
    },
    {
      title: 'Directional Insets',
      titleMs: 'Inset Arah',
      description: 'Position with top, right, bottom, left',
      descriptionMs: 'Kedudukan dengan atas, kanan, bawah, kiri',
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute top:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">TL</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">TR</span>
  <span layout="absolute bottom:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">BL</span>
  <span layout="absolute bottom:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">BR</span>
</div>`,
      highlightValue: 'top:0'
    }
  ]
};

// ======================
// Z-INDEX
// ======================

export const zIndex = {
  name: 'z-index',
  property: 'layout',
  syntax: 'layout="z:[value]"',
  description: 'Control stacking order',
  descriptionMs: 'Kawal susunan tindanan',
  category: 'layout',
  usesScale: 'zIndex',
  values: [
    { value: 'base', css: 'z-index: var(--z-base);', description: 'Base layer (0)', descriptionMs: 'Lapisan asas (0)' },
    { value: 'low', css: 'z-index: var(--z-low);', description: 'Low layer (10)', descriptionMs: 'Lapisan rendah (10)' },
    { value: 'mid', css: 'z-index: var(--z-mid);', description: 'Middle layer (50)', descriptionMs: 'Lapisan tengah (50)' },
    { value: 'high', css: 'z-index: var(--z-high);', description: 'High layer (100)', descriptionMs: 'Lapisan tinggi (100)' },
    { value: 'top', css: 'z-index: var(--z-top);', description: 'Top layer (9999)', descriptionMs: 'Lapisan teratas (9999)' }
  ],
  examples: [
    { code: '<div layout="z:top">On top</div>', description: 'Highest z-index' }
  ],
  preview: [
    {
      title: 'Z-Index Layers',
      titleMs: 'Lapisan Z-Index',
      description: 'Control stacking order of positioned elements',
      descriptionMs: 'Kawal susunan tindanan elemen yang diletakkan',
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute z:base" style="left: 0; top: 10px;" space="p:small" visual="bg:neutral-400 text:white rounded:small">z:base</span>
  <span layout="absolute z:low" style="left: 30px; top: 20px;" space="p:small" visual="bg:neutral-500 text:white rounded:small">z:low</span>
  <span layout="absolute z:mid" style="left: 60px; top: 30px;" space="p:small" visual="bg:neutral-600 text:white rounded:small">z:mid</span>
  <span layout="absolute z:high" style="left: 90px; top: 40px;" space="p:small" visual="bg:primary text:white rounded:small">z:high</span>
</div>`,
      highlightValue: 'z:high'
    }
  ]
};

// Export positioning definitions
export const positioningDefinitions = {
  position,
  inset,
  zIndex
};

export default positioningDefinitions;
