/**
 * SenangStart CSS - Layout Flex Definitions
 * Flexbox-related utility definitions
 */

// ======================
// DISPLAY UTILITIES
// ======================

export const display = {
  name: 'display',
  property: 'layout',
  syntax: 'layout="[display-value]"',
  description: 'Control the display type of elements',
  descriptionMs: 'Kawal jenis paparan elemen',
  category: 'layout',
  values: [
    { value: 'flex', css: 'display: flex;', description: 'Flexbox container', descriptionMs: 'Bekas flexbox' },
    { value: 'inline-flex', css: 'display: inline-flex;', description: 'Inline flexbox container', descriptionMs: 'Bekas flexbox sebaris' },
    { value: 'grid', css: 'display: grid;', description: 'Grid container', descriptionMs: 'Bekas grid' },
    { value: 'inline-grid', css: 'display: inline-grid;', description: 'Inline grid container', descriptionMs: 'Bekas grid sebaris' },
    { value: 'block', css: 'display: block;', description: 'Block element', descriptionMs: 'Elemen blok' },
    { value: 'inline', css: 'display: inline-block;', description: 'Inline block element', descriptionMs: 'Elemen blok sebaris' },
    { value: 'hidden', css: 'display: none;', description: 'Hidden element', descriptionMs: 'Elemen tersembunyi' }
  ],
  examples: [
    { code: '<div layout="flex">Flexbox container</div>', description: 'Create a flex container' },
    { code: '<div layout="grid">Grid container</div>', description: 'Create a grid container' },
    { code: '<div layout="hidden">Hidden element</div>', description: 'Hide an element' }
  ],
  preview: [
    {
      title: 'Flexbox Container',
      titleMs: 'Bekas Flexbox',
      description: 'Items arranged horizontally',
      descriptionMs: 'Item disusun secara mendatar',
      html: `<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>`,
      highlightValue: 'flex'
    },
    {
      title: 'Grid Container',
      titleMs: 'Bekas Grid',
      description: 'Items in a grid layout',
      descriptionMs: 'Item dalam susun atur grid',
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: 'grid'
    }
  ]
};

// ======================
// FLEX DIRECTION
// ======================

export const flexDirection = {
  name: 'flex-direction',
  property: 'layout',
  syntax: 'layout="[direction]"',
  description: 'Set the direction of flex items',
  descriptionMs: 'Tetapkan arah item flex',
  category: 'layout',
  values: [
    { value: 'row', css: 'flex-direction: row;', description: 'Horizontal (default)', descriptionMs: 'Mendatar (lalai)' },
    { value: 'col', css: 'flex-direction: column;', description: 'Vertical', descriptionMs: 'Menegak' },
    { value: 'row-reverse', css: 'flex-direction: row-reverse;', description: 'Horizontal reversed', descriptionMs: 'Mendatar terbalik' },
    { value: 'col-reverse', css: 'flex-direction: column-reverse;', description: 'Vertical reversed', descriptionMs: 'Menegak terbalik' }
  ],
  examples: [
    { code: '<div layout="flex row">Row direction</div>', description: 'Flex row' },
    { code: '<div layout="flex col">Column direction</div>', description: 'Flex column' }
  ]
};

// ======================
// FLEX WRAP
// ======================

export const flexWrap = {
  name: 'flex-wrap',
  property: 'layout',
  syntax: 'layout="[wrap-value]"',
  description: 'Control how flex items wrap',
  descriptionMs: 'Kawal bagaimana item flex membungkus',
  category: 'layout',
  values: [
    { value: 'wrap', css: 'flex-wrap: wrap;', description: 'Allow wrapping', descriptionMs: 'Benarkan pembungkusan' },
    { value: 'nowrap', css: 'flex-wrap: nowrap;', description: 'Prevent wrapping', descriptionMs: 'Halang pembungkusan' },
    { value: 'wrap-reverse', css: 'flex-wrap: wrap-reverse;', description: 'Wrap in reverse', descriptionMs: 'Bungkus terbalik' }
  ],
  examples: [
    { code: '<div layout="flex wrap">Wrapping flex</div>', description: 'Allow items to wrap' }
  ]
};

// ======================
// FLEX ITEMS
// ======================

export const flexItems = {
  name: 'flex-items',
  property: 'layout',
  syntax: 'layout="[flex-item-value]"',
  description: 'Control flex grow and shrink behavior',
  descriptionMs: 'Kawal kelakuan kembang dan kecil flex',
  category: 'layout',
  values: [
    { value: 'grow', css: 'flex-grow: 1;', description: 'Allow item to grow', descriptionMs: 'Benarkan item berkembang' },
    { value: 'grow-0', css: 'flex-grow: 0;', description: 'Prevent growing', descriptionMs: 'Halang perkembangan' },
    { value: 'shrink', css: 'flex-shrink: 1;', description: 'Allow item to shrink', descriptionMs: 'Benarkan item mengecil' },
    { value: 'shrink-0', css: 'flex-shrink: 0;', description: 'Prevent shrinking', descriptionMs: 'Halang pengecilan' }
  ],
  examples: [
    { code: '<div layout="grow">Growing item</div>', description: 'Allow item to grow' }
  ]
};

// ======================
// FLEX SHORTHAND
// ======================

export const flexShorthand = {
  name: 'flex',
  property: 'layout',
  syntax: 'layout="flex:[value]"',
  description: 'Flex shorthand property',
  descriptionMs: 'Properti pintasan flex',
  category: 'layout',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '1', css: 'flex: 1 1 0%;', description: 'Flex 1', descriptionMs: 'Flex 1' },
    { value: 'auto', css: 'flex: 1 1 auto;', description: 'Flex auto', descriptionMs: 'Flex auto' },
    { value: 'initial', css: 'flex: 0 1 auto;', description: 'Initial flex', descriptionMs: 'Flex awal' },
    { value: 'none', css: 'flex: none;', description: 'No flex', descriptionMs: 'Tiada flex' }
  ],
  examples: [
    { code: '<div layout="flex:1">Flexible item</div>', description: 'Flex grow and shrink' }
  ]
};

// ======================
// FLEX BASIS
// ======================

export const flexBasis = {
  name: 'flex-basis',
  property: 'layout',
  syntax: 'layout="basis:[value]"',
  description: 'Set initial size of flex item',
  descriptionMs: 'Tetapkan saiz awal item flex',
  category: 'layout',
  usesScale: 'spacing',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: 'auto', css: 'flex-basis: auto;', description: 'Auto basis', descriptionMs: 'Asas automatik' },
    { value: '0', css: 'flex-basis: 0;', description: 'Zero basis', descriptionMs: 'Asas sifar' }
  ],
  examples: [
    { code: '<div layout="basis:[200px]">200px basis</div>', description: 'Fixed basis' }
  ]
};

// ======================
// ORDER
// ======================

export const order = {
  name: 'order',
  property: 'layout',
  syntax: 'layout="order:[value]"',
  description: 'Control flex/grid item order',
  descriptionMs: 'Kawal susunan item flex/grid',
  category: 'layout',
  dynamic: true,
  values: [
    { value: 'first', css: 'order: -9999;', description: 'Move to first', descriptionMs: 'Pindah ke pertama' },
    { value: 'last', css: 'order: 9999;', description: 'Move to last', descriptionMs: 'Pindah ke terakhir' },
    { value: 'none', css: 'order: 0;', description: 'Default order', descriptionMs: 'Susunan lalai' },
    { value: '1-12', css: 'order: {n};', description: 'Specific order', descriptionMs: 'Susunan tertentu' }
  ],
  examples: [
    { code: '<div layout="order:first">First item</div>', description: 'Move to first' }
  ]
};

// Export flex definitions
export const flexDefinitions = {
  display,
  flexDirection,
  flexWrap,
  flexItems,
  flexShorthand,
  flexBasis,
  order
};

export default flexDefinitions;
