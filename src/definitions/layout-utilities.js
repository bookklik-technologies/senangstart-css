/**
 * SenangStart CSS - Layout Utilities Definitions
 * Miscellaneous layout utility definitions
 */

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

// Export utilities definitions
export const utilitiesDefinitions = {
  visibility,
  overflow,
  boxSizing,
  floatClear,
  aspectRatio,
  objectFit,
  objectPosition,
  container,
  isolation,
  overscroll,
  columns
};

export default utilitiesDefinitions;
