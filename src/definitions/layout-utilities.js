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
  ],
  preview: [
    {
      title: 'Visible vs Invisible',
      titleMs: 'Kelihatan vs Tidak Kelihatan',
      description: 'Invisible elements still take up space',
      descriptionMs: 'Elemen tidak kelihatan masih mengambil ruang',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
  <span layout="invisible" space="p:small" visual="bg:neutral-300 rounded:small">Invisible</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
</div>`,
      highlightValue: 'invisible'
    }
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
  ],
  preview: [
    {
      title: 'Overflow Hidden',
      titleMs: 'Limpahan Tersembunyi',
      description: 'Content clipped at container edge',
      descriptionMs: 'Kandungan dipotong di tepi bekas',
      html: `<div layout="overflow:hidden" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will be clipped because overflow is hidden.</p>
</div>`,
      highlightValue: 'overflow:hidden'
    },
    {
      title: 'Overflow Auto',
      titleMs: 'Limpahan Auto',
      description: 'Scrollbar appears when content overflows',
      descriptionMs: 'Bar skrol muncul apabila kandungan melimpah',
      html: `<div layout="overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will show a scrollbar because overflow is auto.</p>
</div>`,
      highlightValue: 'overflow:auto'
    }
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
  ],
  preview: [
    {
      title: 'Border Box',
      titleMs: 'Kotak Sempadan',
      description: 'Padding and border included in width',
      descriptionMs: 'Padding dan sempadan termasuk dalam lebar',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="box:border" space="p:medium" visual="bg:primary text:white border:4 border:white rounded:small" style="width: 100px;">box:border<br>100px</div>
</div>`,
      highlightValue: 'box:border'
    }
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
  ],
  preview: [
    {
      title: 'Float Left',
      titleMs: 'Apung Kiri',
      description: 'Element floats to the left of content',
      descriptionMs: 'Elemen mengapung ke kiri kandungan',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="float:left" space="p:small m-r:small m-b:small" visual="bg:primary text:white rounded:small">Float</div>
  <p visual="text:neutral-800 dark:text:neutral-200">Text wraps around the floated element naturally.</p>
</div>`,
      highlightValue: 'float:left'
    }
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
  ],
  preview: [
    {
      title: 'Aspect Ratio Square',
      titleMs: 'Nisbah Aspek Segi Empat',
      description: '1:1 aspect ratio',
      descriptionMs: 'Nisbah aspek 1:1',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="aspect:square flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">1:1</div>
  <div layout="aspect:video flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">16:9</div>
</div>`,
      highlightValue: 'aspect:square'
    }
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
  ],
  preview: [
    {
      title: 'Object Fit Cover',
      titleMs: 'Objek Muat Tutup',
      description: 'Image covers container, may crop',
      descriptionMs: 'Imej menutup bekas, mungkin dipotong',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="overflow:hidden">
    <div layout="object:cover" style="width: 100%; height: 100%;" visual="bg:primary"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:cover</span>
</div>`,
      highlightValue: 'object:cover'
    },
    {
      title: 'Object Fit Contain',
      titleMs: 'Objek Muat Kandung',
      description: 'Image fits inside, preserves ratio',
      descriptionMs: 'Imej muat di dalam, kekalkan nisbah',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="flex center">
    <div layout="object:contain" style="width: 60%; height: 60%;" visual="bg:primary rounded:small"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:contain</span>
</div>`,
      highlightValue: 'object:contain'
    }
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
  ],
  preview: [
    {
      title: 'Object Position',
      titleMs: 'Kedudukan Objek',
      description: 'Control where media is positioned within container',
      descriptionMs: 'Kawal di mana media diletakkan dalam bekas',
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:start justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">top</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex center"><span space="p:tiny" visual="bg:primary text:white rounded:small">center</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:end justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">bottom</span></div>
</div>`,
      highlightValue: 'object-pos:center'
    }
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
  ],
  preview: [
    {
      title: 'Container',
      titleMs: 'Bekas',
      description: 'Centered container with max-width',
      descriptionMs: 'Bekas berpusat dengan lebar maksimum',
      html: `<div visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" space="p:small">
  <div layout="container" space="p:medium" visual="bg:primary text:white rounded:small" layout="text:center">Centered Container</div>
</div>`,
      highlightValue: 'container'
    }
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
  ],
  preview: [
    {
      title: 'Isolation',
      titleMs: 'Pengasingan',
      description: 'Create new stacking context',
      descriptionMs: 'Cipta konteks tindanan baharu',
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="isolation:isolate" space="p:small" visual="bg:primary text:white rounded:small">isolation:isolate</div>
</div>`,
      highlightValue: 'isolation:isolate'
    }
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
  ],
  preview: [
    {
      title: 'Overscroll Contain',
      titleMs: 'Kandungan Overscroll',
      description: 'Prevent scroll from affecting parent',
      descriptionMs: 'Halang skrol daripada mempengaruhi induk',
      html: `<div layout="overscroll:contain overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px;">
  <p visual="text:neutral-800 dark:text:neutral-200">Scroll here won't chain to parent. Content continues for demo purposes to show scrolling behavior.</p>
</div>`,
      highlightValue: 'overscroll:contain'
    }
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
  ],
  preview: [
    {
      title: 'Multi-Column Layout',
      titleMs: 'Susun Atur Berbilang Lajur',
      description: 'Text flows into multiple columns',
      descriptionMs: 'Teks mengalir ke berbilang lajur',
      html: `<div layout="cols:2" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text:neutral-800 dark:text:neutral-200">This text will automatically flow into two columns. Great for newspaper-style layouts and improving readability of long text content.</p>
</div>`,
      highlightValue: 'cols:2'
    }
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
