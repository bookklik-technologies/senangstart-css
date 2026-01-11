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
  ]
};

// Export positioning definitions
export const positioningDefinitions = {
  position,
  inset,
  zIndex
};

export default positioningDefinitions;
