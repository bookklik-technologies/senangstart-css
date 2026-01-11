/**
 * SenangStart CSS - Layout Utility Definitions
 * Single source of truth for layout utilities
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
// JUSTIFY CONTENT
// ======================

export const justifyContent = {
  name: 'justify-content',
  property: 'layout',
  syntax: 'layout="justify:[value]"',
  description: 'Align items along the main axis',
  descriptionMs: 'Jajarkan item sepanjang paksi utama',
  category: 'layout',
  values: [
    { value: 'start', css: 'justify-content: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'justify-content: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'justify-content: center;', description: 'Center items', descriptionMs: 'Tengahkan item' },
    { value: 'between', css: 'justify-content: space-between;', description: 'Space between items', descriptionMs: 'Ruang antara item' },
    { value: 'around', css: 'justify-content: space-around;', description: 'Space around items', descriptionMs: 'Ruang sekeliling item' },
    { value: 'evenly', css: 'justify-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' },
    { value: 'stretch', css: 'justify-content: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="flex justify:center">Centered</div>', description: 'Center items' },
    { code: '<div layout="flex justify:between">Spaced</div>', description: 'Space between' }
  ]
};

// ======================
// ALIGN ITEMS
// ======================

export const alignItems = {
  name: 'align-items',
  property: 'layout',
  syntax: 'layout="items:[value]"',
  description: 'Align items along the cross axis',
  descriptionMs: 'Jajarkan item sepanjang paksi silang',
  category: 'layout',
  values: [
    { value: 'start', css: 'align-items: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'align-items: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'align-items: center;', description: 'Center items', descriptionMs: 'Tengahkan item' },
    { value: 'baseline', css: 'align-items: baseline;', description: 'Align to baseline', descriptionMs: 'Jajar ke garis asas' },
    { value: 'stretch', css: 'align-items: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="flex items:center">Centered</div>', description: 'Center vertically' }
  ]
};

// ======================
// ALIGN SELF
// ======================

export const alignSelf = {
  name: 'align-self',
  property: 'layout',
  syntax: 'layout="self:[value]"',
  description: 'Override alignment for a single item',
  descriptionMs: 'Ganti penjajaran untuk satu item',
  category: 'layout',
  values: [
    { value: 'auto', css: 'align-self: auto;', description: 'Use parent alignment', descriptionMs: 'Guna penjajaran induk' },
    { value: 'start', css: 'align-self: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'align-self: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'align-self: center;', description: 'Center item', descriptionMs: 'Tengahkan item' },
    { value: 'baseline', css: 'align-self: baseline;', description: 'Align to baseline', descriptionMs: 'Jajar ke garis asas' },
    { value: 'stretch', css: 'align-self: stretch;', description: 'Stretch item', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="self:center">Centered item</div>', description: 'Center single item' }
  ]
};

// ======================
// ALIGN CONTENT
// ======================

export const alignContent = {
  name: 'align-content',
  property: 'layout',
  syntax: 'layout="content:[value]"',
  description: 'Align content rows in multi-line flex container',
  descriptionMs: 'Jajarkan baris kandungan dalam bekas flex berbilang baris',
  category: 'layout',
  values: [
    { value: 'start', css: 'align-content: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'align-content: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'align-content: center;', description: 'Center content', descriptionMs: 'Tengahkan kandungan' },
    { value: 'between', css: 'align-content: space-between;', description: 'Space between rows', descriptionMs: 'Ruang antara baris' },
    { value: 'around', css: 'align-content: space-around;', description: 'Space around rows', descriptionMs: 'Ruang sekeliling baris' },
    { value: 'evenly', css: 'align-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' },
    { value: 'stretch', css: 'align-content: stretch;', description: 'Stretch rows', descriptionMs: 'Regangkan baris' }
  ],
  examples: [
    { code: '<div layout="flex wrap content:center">Centered rows</div>', description: 'Center wrapped rows' }
  ]
};

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
// VISIBILITY
// ======================

export const visibility = {
  name: 'visibility',
  property: 'layout',
  syntax: 'layout="[visibility-value]"',
  description: 'Control element visibility',
  descriptionMs: 'Kawal ketampakan elemen',
  category: 'layout',
  values: [
    { value: 'visible', css: 'visibility: visible;', description: 'Element is visible', descriptionMs: 'Elemen kelihatan' },
    { value: 'invisible', css: 'visibility: hidden;', description: 'Element is invisible but takes space', descriptionMs: 'Elemen tidak kelihatan tetapi mengambil ruang' }
  ],
  examples: [
    { code: '<div layout="invisible">Invisible but present</div>', description: 'Hide visually' }
  ]
};

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
// OVERFLOW
// ======================

export const overflow = {
  name: 'overflow',
  property: 'layout',
  syntax: 'layout="overflow:[value]"',
  description: 'Control content overflow behavior',
  descriptionMs: 'Kawal kelakuan limpahan kandungan',
  category: 'layout',
  values: [
    { value: 'auto', css: 'overflow: auto;', description: 'Scrollbar when needed', descriptionMs: 'Bar skrol bila perlu' },
    { value: 'hidden', css: 'overflow: hidden;', description: 'Hide overflow', descriptionMs: 'Sembunyikan limpahan' },
    { value: 'visible', css: 'overflow: visible;', description: 'Show overflow', descriptionMs: 'Tunjukkan limpahan' },
    { value: 'scroll', css: 'overflow: scroll;', description: 'Always show scrollbar', descriptionMs: 'Sentiasa tunjuk bar skrol' },
    { value: 'clip', css: 'overflow: clip;', description: 'Clip overflow', descriptionMs: 'Potong limpahan' }
  ],
  examples: [
    { code: '<div layout="overflow:hidden">Clipped content</div>', description: 'Hide overflow' },
    { code: '<div layout="overflow:auto">Scrollable</div>', description: 'Auto scrollbar' }
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

// ======================
// SHORTHAND ALIGNMENT
// ======================

export const shorthandAlignment = {
  name: 'shorthand-alignment',
  property: 'layout',
  syntax: 'layout="[alignment]"',
  description: 'Quick alignment shortcuts',
  descriptionMs: 'Pintasan penjajaran pantas',
  category: 'layout',
  values: [
    { value: 'center', css: 'justify-content: center; align-items: center;', description: 'Center both axes', descriptionMs: 'Tengahkan kedua-dua paksi' },
    { value: 'start', css: 'justify-content: flex-start; align-items: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'justify-content: flex-end; align-items: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'between', css: 'justify-content: space-between;', description: 'Space between', descriptionMs: 'Ruang antara' },
    { value: 'around', css: 'justify-content: space-around;', description: 'Space around', descriptionMs: 'Ruang sekeliling' },
    { value: 'evenly', css: 'justify-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' }
  ],
  examples: [
    { code: '<div layout="flex center">Centered content</div>', description: 'Center on both axes' }
  ]
};

// ======================
// BOX SIZING
// ======================

export const boxSizing = {
  name: 'box-sizing',
  property: 'layout',
  syntax: 'layout="box:[value]"',
  description: 'Control how width and height are calculated',
  descriptionMs: 'Kawal cara lebar dan tinggi dikira',
  category: 'layout',
  values: [
    { value: 'border', css: 'box-sizing: border-box;', description: 'Include padding and border in size', descriptionMs: 'Termasuk padding dan sempadan dalam saiz' },
    { value: 'content', css: 'box-sizing: content-box;', description: 'Exclude padding and border', descriptionMs: 'Tidak termasuk padding dan sempadan' }
  ],
  examples: [
    { code: '<div layout="box:border">Border box</div>', description: 'Include border in width' }
  ]
};

// ======================
// FLOAT & CLEAR
// ======================

export const floatClear = {
  name: 'float-clear',
  property: 'layout',
  syntax: 'layout="float:[value]" or layout="clear:[value]"',
  description: 'Control element floating and clearing',
  descriptionMs: 'Kawal pengapungan dan pembersihan elemen',
  category: 'layout',
  values: [
    { value: 'left', css: 'float: left;', description: 'Float left', descriptionMs: 'Apung kiri' },
    { value: 'right', css: 'float: right;', description: 'Float right', descriptionMs: 'Apung kanan' },
    { value: 'none', css: 'float: none;', description: 'No float', descriptionMs: 'Tiada pengapungan' }
  ],
  examples: [
    { code: '<img layout="float:left">Float left</img>', description: 'Float image left' },
    { code: '<div layout="clear:both">Clear floats</div>', description: 'Clear all floats' }
  ]
};

// ======================
// ASPECT RATIO
// ======================

export const aspectRatio = {
  name: 'aspect-ratio',
  property: 'layout',
  syntax: 'layout="aspect:[value]"',
  description: 'Set element aspect ratio',
  descriptionMs: 'Tetapkan nisbah aspek elemen',
  category: 'layout',
  supportsArbitrary: true,
  values: [
    { value: 'auto', css: 'aspect-ratio: auto;', description: 'Natural aspect ratio', descriptionMs: 'Nisbah aspek semula jadi' },
    { value: 'square', css: 'aspect-ratio: 1 / 1;', description: '1:1 square', descriptionMs: 'Segi empat sama 1:1' },
    { value: 'video', css: 'aspect-ratio: 16 / 9;', description: '16:9 video', descriptionMs: 'Video 16:9' }
  ],
  examples: [
    { code: '<div layout="aspect:square">Square</div>', description: 'Square aspect ratio' },
    { code: '<div layout="aspect:[4/3]">4:3</div>', description: 'Custom ratio' }
  ]
};

// ======================
// OBJECT FIT
// ======================

export const objectFit = {
  name: 'object-fit',
  property: 'layout',
  syntax: 'layout="object:[value]"',
  description: 'Control how media content fits its container',
  descriptionMs: 'Kawal bagaimana kandungan media muat dalam bekasnya',
  category: 'layout',
  values: [
    { value: 'contain', css: 'object-fit: contain;', description: 'Scale to fit, preserve ratio', descriptionMs: 'Skala untuk muat, kekalkan nisbah' },
    { value: 'cover', css: 'object-fit: cover;', description: 'Cover container, may crop', descriptionMs: 'Tutup bekas, mungkin dipotong' },
    { value: 'fill', css: 'object-fit: fill;', description: 'Stretch to fill', descriptionMs: 'Regang untuk mengisi' },
    { value: 'none', css: 'object-fit: none;', description: 'No scaling', descriptionMs: 'Tiada penskalaan' },
    { value: 'scale-down', css: 'object-fit: scale-down;', description: 'Smaller of none or contain', descriptionMs: 'Lebih kecil antara tiada atau kandung' }
  ],
  examples: [
    { code: '<img layout="object:cover">Cover image</img>', description: 'Cover fit' }
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

// ======================
// CONTAINER
// ======================

export const container = {
  name: 'container',
  property: 'layout',
  syntax: 'layout="container"',
  description: 'Create a centered container with max-width',
  descriptionMs: 'Cipta bekas berpusat dengan lebar maksimum',
  category: 'layout',
  values: [
    { value: 'container', css: 'width: 100%; margin-left: auto; margin-right: auto;', description: 'Centered container', descriptionMs: 'Bekas berpusat' }
  ],
  examples: [
    { code: '<div layout="container">Centered content</div>', description: 'Container' }
  ]
};

// ======================
// ISOLATION
// ======================

export const isolation = {
  name: 'isolation',
  property: 'layout',
  syntax: 'layout="isolation:[value]"',
  description: 'Create new stacking context',
  descriptionMs: 'Cipta konteks tindanan baharu',
  category: 'layout',
  values: [
    { value: 'isolate', css: 'isolation: isolate;', description: 'Create stacking context', descriptionMs: 'Cipta konteks tindanan' },
    { value: 'auto', css: 'isolation: auto;', description: 'Auto isolation', descriptionMs: 'Pengasingan automatik' }
  ],
  examples: [
    { code: '<div layout="isolation:isolate">Isolated</div>', description: 'Create stacking context' }
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
// OVERSCROLL
// ======================

export const overscroll = {
  name: 'overscroll',
  property: 'layout',
  syntax: 'layout="overscroll:[value]"',
  description: 'Control scroll chaining behavior',
  descriptionMs: 'Kawal kelakuan rantaian skrol',
  category: 'layout',
  values: [
    { value: 'auto', css: 'overscroll-behavior: auto;', description: 'Default behavior', descriptionMs: 'Kelakuan lalai' },
    { value: 'contain', css: 'overscroll-behavior: contain;', description: 'Contain scroll', descriptionMs: 'Kandung skrol' },
    { value: 'none', css: 'overscroll-behavior: none;', description: 'No scroll chaining', descriptionMs: 'Tiada rantaian skrol' }
  ],
  examples: [
    { code: '<div layout="overscroll:contain">Contained scroll</div>', description: 'Prevent scroll chaining' }
  ]
};

// ======================
// COLUMNS
// ======================

export const columns = {
  name: 'columns',
  property: 'layout',
  syntax: 'layout="cols:[value]"',
  description: 'Create multi-column layouts',
  descriptionMs: 'Cipta susun atur berbilang lajur',
  category: 'layout',
  dynamic: true,
  values: [
    { value: '1-12', css: 'columns: {n};', description: 'N columns', descriptionMs: 'N lajur' },
    { value: 'auto', css: 'columns: auto;', description: 'Auto columns', descriptionMs: 'Lajur automatik' }
  ],
  examples: [
    { code: '<div layout="cols:3">Three columns</div>', description: 'Three column text' }
  ]
};

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

// ======================
// JUSTIFY ITEMS
// ======================

export const justifyItems = {
  name: 'justify-items',
  property: 'layout',
  syntax: 'layout="justify-items:[value]"',
  description: 'Align grid items on inline axis',
  descriptionMs: 'Jajarkan item grid pada paksi sebaris',
  category: 'layout',
  values: [
    { value: 'start', css: 'justify-items: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'justify-items: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'justify-items: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'justify-items: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="grid justify-items:center">Centered items</div>', description: 'Center grid items' }
  ]
};

// ======================
// JUSTIFY SELF
// ======================

export const justifySelf = {
  name: 'justify-self',
  property: 'layout',
  syntax: 'layout="justify-self:[value]"',
  description: 'Align single grid item on inline axis',
  descriptionMs: 'Jajarkan satu item grid pada paksi sebaris',
  category: 'layout',
  values: [
    { value: 'auto', css: 'justify-self: auto;', description: 'Auto alignment', descriptionMs: 'Jajar automatik' },
    { value: 'start', css: 'justify-self: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'justify-self: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'justify-self: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'justify-self: stretch;', description: 'Stretch item', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="justify-self:end">End aligned</div>', description: 'Align item to end' }
  ]
};

// ======================
// PLACE CONTENT
// ======================

export const placeContent = {
  name: 'place-content',
  property: 'layout',
  syntax: 'layout="place-content:[value]"',
  description: 'Shorthand for align-content and justify-content',
  descriptionMs: 'Pintasan untuk align-content dan justify-content',
  category: 'layout',
  values: [
    { value: 'start', css: 'place-content: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'place-content: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'place-content: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'between', css: 'place-content: space-between;', description: 'Space between', descriptionMs: 'Ruang antara' },
    { value: 'around', css: 'place-content: space-around;', description: 'Space around', descriptionMs: 'Ruang sekeliling' },
    { value: 'evenly', css: 'place-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' },
    { value: 'stretch', css: 'place-content: stretch;', description: 'Stretch content', descriptionMs: 'Regangkan kandungan' }
  ],
  examples: [
    { code: '<div layout="grid place-content:center">Centered content</div>', description: 'Center both axes' }
  ]
};

// ======================
// PLACE ITEMS
// ======================

export const placeItems = {
  name: 'place-items',
  property: 'layout',
  syntax: 'layout="place-items:[value]"',
  description: 'Shorthand for align-items and justify-items',
  descriptionMs: 'Pintasan untuk align-items dan justify-items',
  category: 'layout',
  values: [
    { value: 'start', css: 'place-items: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'place-items: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'place-items: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'place-items: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="grid place-items:center">Centered items</div>', description: 'Center all items' }
  ]
};

// ======================
// PLACE SELF
// ======================

export const placeSelf = {
  name: 'place-self',
  property: 'layout',
  syntax: 'layout="place-self:[value]"',
  description: 'Shorthand for align-self and justify-self',
  descriptionMs: 'Pintasan untuk align-self dan justify-self',
  category: 'layout',
  values: [
    { value: 'auto', css: 'place-self: auto;', description: 'Auto alignment', descriptionMs: 'Jajar automatik' },
    { value: 'start', css: 'place-self: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'place-self: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'place-self: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'place-self: stretch;', description: 'Stretch item', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="place-self:center">Centered item</div>', description: 'Center single item' }
  ]
};

// ======================
// OBJECT POSITION
// ======================

export const objectPosition = {
  name: 'object-position',
  property: 'layout',
  syntax: 'layout="object-pos:[value]"',
  description: 'Position replaced element content within container',
  descriptionMs: 'Letakkan kandungan elemen diganti dalam bekas',
  category: 'layout',
  supportsArbitrary: true,
  values: [
    { value: 'center', css: 'object-position: center;', description: 'Center position', descriptionMs: 'Kedudukan tengah' },
    { value: 'top', css: 'object-position: top;', description: 'Top position', descriptionMs: 'Kedudukan atas' },
    { value: 'bottom', css: 'object-position: bottom;', description: 'Bottom position', descriptionMs: 'Kedudukan bawah' },
    { value: 'left', css: 'object-position: left;', description: 'Left position', descriptionMs: 'Kedudukan kiri' },
    { value: 'right', css: 'object-position: right;', description: 'Right position', descriptionMs: 'Kedudukan kanan' },
    { value: 'top-left', css: 'object-position: top left;', description: 'Top left', descriptionMs: 'Atas kiri' },
    { value: 'top-right', css: 'object-position: top right;', description: 'Top right', descriptionMs: 'Atas kanan' },
    { value: 'bottom-left', css: 'object-position: bottom left;', description: 'Bottom left', descriptionMs: 'Bawah kiri' },
    { value: 'bottom-right', css: 'object-position: bottom right;', description: 'Bottom right', descriptionMs: 'Bawah kanan' }
  ],
  examples: [
    { code: '<img layout="object:cover object-pos:top">Top positioned</img>', description: 'Top position' }
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

// Export all layout definitions
export const layoutDefinitions = {
  display,
  flexDirection,
  flexWrap,
  flexItems,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  position,
  visibility,
  gridColumns,
  gridRows,
  gridColSpan,
  gridRowSpan,
  gridAutoFlow,
  gridAutoSizing,
  overflow,
  zIndex,
  shorthandAlignment,
  boxSizing,
  floatClear,
  aspectRatio,
  objectFit,
  objectPosition,
  order,
  container,
  isolation,
  inset,
  overscroll,
  columns,
  borderCollapse,
  borderSpacing,
  tableLayout,
  captionSide,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  placeSelf,
  flexShorthand,
  flexBasis
}

// Build flat value map for CSS generator
export function buildLayoutMap() {
  const map = {};
  
  // Add all simple keyword values from definitions
  for (const def of Object.values(layoutDefinitions)) {
    if (def.dynamic) continue; // Skip dynamic properties that need special handling
    
    for (const v of def.values) {
      // Skip range values like '1-12' that need special handling
      if (v.value.match(/^\d+-\d+$/)) continue;
      
      map[v.value] = v.css;
    }
  }
  
  return map;
}

export default layoutDefinitions;
