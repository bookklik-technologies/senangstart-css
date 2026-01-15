/**
 * SenangStart CSS - Transform Utility Definitions
 * Scale, rotate, translate, skew, origin
 */

// ======================
// TRANSFORM - SCALE
// ======================

export const transformScale = {
  name: 'transform-scale',
  property: 'visual',
  syntax: 'visual="scale:[value]"',
  description: 'Scale element',
  descriptionMs: 'Skala elemen',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'transform: scale(0);', description: 'Scale to 0', descriptionMs: 'Skala ke 0' },
    { value: '50', css: 'transform: scale(0.5);', description: 'Scale to 50%', descriptionMs: 'Skala ke 50%' },
    { value: '75', css: 'transform: scale(0.75);', description: 'Scale to 75%', descriptionMs: 'Skala ke 75%' },
    { value: '100', css: 'transform: scale(1);', description: 'Normal scale', descriptionMs: 'Skala normal' },
    { value: '110', css: 'transform: scale(1.1);', description: 'Scale to 110%', descriptionMs: 'Skala ke 110%' },
    { value: '125', css: 'transform: scale(1.25);', description: 'Scale to 125%', descriptionMs: 'Skala ke 125%' },
    { value: '150', css: 'transform: scale(1.5);', description: 'Scale to 150%', descriptionMs: 'Skala ke 150%' }
  ],
  examples: [
    { code: '<div visual="transition:transform hover:scale:110">Hover to grow</div>', description: 'Scale on hover' }
  ],
  preview: [
    {
      title: 'Scale Transform',
      titleMs: 'Transformasi Skala',
      description: 'Scale elements up or down',
      descriptionMs: 'Skala elemen ke atas atau ke bawah',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small scale:75">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:100">100%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:125">125%</div>
</div>`,
      highlightValue: 'scale:75'
    }
  ]
};

// ======================
// TRANSFORM - ROTATE
// ======================

export const transformRotate = {
  name: 'transform-rotate',
  property: 'visual',
  syntax: 'visual="rotate:[degrees]"',
  description: 'Rotate element',
  descriptionMs: 'Putar elemen',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'transform: rotate(0deg);', description: 'No rotation', descriptionMs: 'Tiada putaran' },
    { value: '45', css: 'transform: rotate(45deg);', description: '45° rotation', descriptionMs: 'Putaran 45°' },
    { value: '90', css: 'transform: rotate(90deg);', description: '90° rotation', descriptionMs: 'Putaran 90°' },
    { value: '180', css: 'transform: rotate(180deg);', description: '180° rotation', descriptionMs: 'Putaran 180°' }
  ],
  examples: [
    { code: '<div visual="rotate:45">Rotated 45 degrees</div>', description: '45 degree rotation' }
  ],
  preview: [
    {
      title: 'Rotate Transform',
      titleMs: 'Transformasi Putaran',
      description: 'Rotate elements by degrees',
      descriptionMs: 'Putar elemen mengikut darjah',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:0">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:45">45°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:90">90°</div>
</div>`,
      highlightValue: 'rotate:45'
    }
  ]
};

// ======================
// TRANSFORM - TRANSLATE
// ======================

export const transformTranslate = {
  name: 'transform-translate',
  property: 'visual',
  syntax: 'visual="translate-x:[value]" or visual="translate-y:[value]" or visual="translate-z:[value]"',
  description: 'Translate element position along X, Y, or Z axis',
  descriptionMs: 'Alihkan kedudukan elemen sepanjang paksi X, Y, atau Z',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'transform: translateX(0);', description: 'No translation', descriptionMs: 'Tiada alihan' },
    { value: 'tiny', css: 'transform: translateX(var(--sp-tiny));', description: 'Tiny offset', descriptionMs: 'Alihan kecil' },
    { value: 'small', css: 'transform: translateX(var(--sp-small));', description: 'Small offset', descriptionMs: 'Alihan kecil' },
    { value: 'medium', css: 'transform: translateX(var(--sp-medium));', description: 'Medium offset', descriptionMs: 'Alihan sederhana' },
    { value: 'big', css: 'transform: translateX(var(--sp-big));', description: 'Big offset', descriptionMs: 'Alihan besar' },
    { value: 'full', css: 'transform: translateX(100%);', description: 'Full width/height', descriptionMs: 'Lebar/ketinggian penuh' },
    { value: '1/2', css: 'transform: translateX(50%);', description: 'Half width/height', descriptionMs: 'Separuh lebar/ketinggian' },
    { value: '-full', css: 'transform: translateX(-100%);', description: 'Negative full', descriptionMs: 'Negatif penuh' },
    { value: '-1/2', css: 'transform: translateX(-50%);', description: 'Negative half', descriptionMs: 'Negatif separuh' }
  ],
  examples: [
    { code: '<div visual="translate-x:medium">Moved right</div>', description: 'Translate X' },
    { code: '<div visual="translate-y:small">Moved down</div>', description: 'Translate Y' },
    { code: '<div visual="translate-z:[50px]">Moved forward in 3D</div>', description: 'Translate Z (3D)' }
  ],
  preview: [
    {
      title: 'Translate Transform',
      titleMs: 'Transformasi Alih',
      description: 'Move elements along X, Y, or Z axis',
      descriptionMs: 'Alihkan elemen sepanjang paksi X, Y, atau Z',
      html: `<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">X axis:</span>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:0">0</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:small">small</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:medium">medium</div>
  </div>
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">Y axis:</span>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:0">0</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:small">small</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:medium">medium</div>
  </div>
</div>`,
      highlightValue: 'translate-x:medium'
    }
  ]
};

// ======================
// TRANSFORM - SKEW
// ======================

export const transformSkew = {
  name: 'transform-skew',
  property: 'visual',
  syntax: 'visual="skew-x:[degrees]" or visual="skew-y:[degrees]"',
  description: 'Skew element',
  descriptionMs: 'Condongkan elemen',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'transform: skewX(0deg);', description: 'No skew', descriptionMs: 'Tiada condong' },
    { value: '3', css: 'transform: skewX(3deg);', description: '3° skew', descriptionMs: 'Condong 3°' },
    { value: '6', css: 'transform: skewX(6deg);', description: '6° skew', descriptionMs: 'Condong 6°' },
    { value: '12', css: 'transform: skewX(12deg);', description: '12° skew', descriptionMs: 'Condong 12°' }
  ],
  examples: [
    { code: '<div visual="skew-x:6">Skewed element</div>', description: 'Skew 6 degrees' }
  ],
  preview: [
    {
      title: 'Skew Transform',
      titleMs: 'Transformasi Condong',
      description: 'Skew elements along axes',
      descriptionMs: 'Condongkan elemen sepanjang paksi',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:0">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:6">6°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:12">12°</div>
</div>`,
      highlightValue: 'skew-x:6'
    }
  ]
};

// ======================
// TRANSFORM ORIGIN
// ======================

export const transformOrigin = {
  name: 'transform-origin',
  property: 'visual',
  syntax: 'visual="origin:[value]"',
  description: 'Set transform origin point',
  descriptionMs: 'Tetapkan titik asal transformasi',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'center', css: 'transform-origin: center;', description: 'Center origin', descriptionMs: 'Asal tengah' },
    { value: 'top', css: 'transform-origin: top;', description: 'Top origin', descriptionMs: 'Asal atas' },
    { value: 'top-right', css: 'transform-origin: top right;', description: 'Top right', descriptionMs: 'Atas kanan' },
    { value: 'right', css: 'transform-origin: right;', description: 'Right origin', descriptionMs: 'Asal kanan' },
    { value: 'bottom-right', css: 'transform-origin: bottom right;', description: 'Bottom right', descriptionMs: 'Bawah kanan' },
    { value: 'bottom', css: 'transform-origin: bottom;', description: 'Bottom origin', descriptionMs: 'Asal bawah' },
    { value: 'bottom-left', css: 'transform-origin: bottom left;', description: 'Bottom left', descriptionMs: 'Bawah kiri' },
    { value: 'left', css: 'transform-origin: left;', description: 'Left origin', descriptionMs: 'Asal kiri' },
    { value: 'top-left', css: 'transform-origin: top left;', description: 'Top left', descriptionMs: 'Atas kiri' }
  ],
  examples: [
    { code: '<div visual="rotate:45 origin:top-left">Rotate from corner</div>', description: 'Rotate from corner' }
  ],
  preview: [
    {
      title: 'Transform Origin',
      titleMs: 'Asal Transformasi',
      description: 'Set the pivot point for transforms',
      descriptionMs: 'Tetapkan titik pangsi untuk transformasi',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:45 origin:center">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:45 origin:top-left">top-left</div>
</div>`,
      highlightValue: 'origin:center'
    }
  ]
};

// Export all transform definitions
export const transformDefinitions = {
  transformScale,
  transformRotate,
  transformTranslate,
  transformSkew,
  transformOrigin
};

export default transformDefinitions;
