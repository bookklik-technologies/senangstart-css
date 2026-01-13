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
  ],
  preview: [
    {
      title: 'Row Direction',
      titleMs: 'Arah Baris',
      description: 'Items arranged horizontally from left to right',
      descriptionMs: 'Item disusun secara mendatar dari kiri ke kanan',
      html: `<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: 'row'
    },
    {
      title: 'Column Direction',
      titleMs: 'Arah Lajur',
      description: 'Items stacked vertically from top to bottom',
      descriptionMs: 'Item disusun secara menegak dari atas ke bawah',
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: 'col'
    },
    {
      title: 'Row Reverse',
      titleMs: 'Baris Terbalik',
      description: 'Items arranged horizontally from right to left',
      descriptionMs: 'Item disusun secara mendatar dari kanan ke kiri',
      html: `<div layout="flex row-reverse" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: 'row-reverse'
    }
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
  ],
  preview: [
    {
      title: 'Wrap Enabled',
      titleMs: 'Bungkus Diaktifkan',
      description: 'Items wrap to next line when container is full',
      descriptionMs: 'Item membungkus ke baris seterusnya apabila bekas penuh',
      html: `<div layout="flex wrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 4</span>
</div>`,
      highlightValue: 'wrap'
    },
    {
      title: 'No Wrap',
      titleMs: 'Tiada Bungkusan',
      description: 'Items stay on single line (may overflow)',
      descriptionMs: 'Item kekal pada satu baris (mungkin melimpah)',
      html: `<div layout="flex nowrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px; overflow: hidden;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>`,
      highlightValue: 'nowrap'
    }
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
  ],
  preview: [
    {
      title: 'Flex Grow',
      titleMs: 'Kembang Flex',
      description: 'Middle item grows to fill available space',
      descriptionMs: 'Item tengah berkembang untuk mengisi ruang kosong',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
  <span layout="grow text:center" space="p:small" visual="bg:primary text:white rounded:small">Grows</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
</div>`,
      highlightValue: 'grow'
    },
    {
      title: 'Flex Shrink',
      titleMs: 'Kecil Flex',
      description: 'Item shrinks when space is limited',
      descriptionMs: 'Item mengecil apabila ruang terhad',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 250px;">
  <span layout="shrink-0" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">No Shrink</span>
  <span layout="shrink" space="p:small" visual="bg:primary text:white rounded:small">Can Shrink</span>
</div>`,
      highlightValue: 'shrink'
    }
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
  ],
  preview: [
    {
      title: 'Flex 1',
      titleMs: 'Flex 1',
      description: 'Equal distribution of space among items',
      descriptionMs: 'Pengagihan ruang yang sama antara item',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
</div>`,
      highlightValue: 'flex:1'
    },
    {
      title: 'Flex Auto vs None',
      titleMs: 'Flex Auto vs Tiada',
      description: 'Different flex behaviors compared',
      descriptionMs: 'Perbandingan kelakuan flex berbeza',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:auto" space="p:small" visual="bg:primary text:white rounded:small">auto</span>
  <span layout="flex:none" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">none</span>
</div>`,
      highlightValue: 'flex:auto'
    }
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
  ],
  preview: [
    {
      title: 'Fixed Basis',
      titleMs: 'Asas Tetap',
      description: 'Items with different basis sizes',
      descriptionMs: 'Item dengan saiz asas berbeza',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="basis:[100px] text:center" space="p:small" visual="bg:primary text:white rounded:small">100px</span>
  <span layout="basis:[150px] text:center" space="p:small" visual="bg:primary text:white rounded:small">150px</span>
  <span layout="basis:auto" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">auto</span>
</div>`,
      highlightValue: 'basis:[100px]'
    }
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
  ],
  preview: [
    {
      title: 'Reorder Items',
      titleMs: 'Susun Semula Item',
      description: 'Change visual order of flex items',
      descriptionMs: 'Ubah susunan visual item flex',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:3" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">A (order:3)</span>
  <span layout="order:1" space="p:small" visual="bg:primary text:white rounded:small">B (order:1)</span>
  <span layout="order:2" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">C (order:2)</span>
</div>`,
      highlightValue: 'order:1'
    },
    {
      title: 'First and Last',
      titleMs: 'Pertama dan Terakhir',
      description: 'Move items to start or end',
      descriptionMs: 'Pindahkan item ke permulaan atau hujung',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:last" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">First in DOM (order:last)</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Middle</span>
  <span layout="order:first" space="p:small" visual="bg:primary text:white rounded:small">Last in DOM (order:first)</span>
</div>`,
      highlightValue: 'order:first'
    }
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
