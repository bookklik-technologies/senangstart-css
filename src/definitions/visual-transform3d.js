/**
 * SenangStart CSS - 3D Transform Utility Definitions
 * Perspective, backface, and 3D transform utilities
 */

// ======================
// PERSPECTIVE
// ======================

export const perspective = {
  name: 'transform-perspective',
  property: 'visual',
  syntax: 'visual="perspective:[value]"',
  description: 'Set 3D perspective',
  descriptionMs: 'Tetapkan perspektif 3D',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'perspective: none;', description: 'No perspective', descriptionMs: 'Tiada perspektif' },
    { value: 'dramatic', css: 'perspective: 100px;', description: 'Dramatic perspective', descriptionMs: 'Perspektif dramatik' },
    { value: 'near', css: 'perspective: 300px;', description: 'Near perspective', descriptionMs: 'Perspektif dekat' },
    { value: 'normal', css: 'perspective: 500px;', description: 'Normal perspective', descriptionMs: 'Perspektif normal' },
    { value: 'midrange', css: 'perspective: 800px;', description: 'Midrange perspective', descriptionMs: 'Perspektif pertengahan' },
    { value: 'far', css: 'perspective: 1000px;', description: 'Far perspective', descriptionMs: 'Perspektif jauh' },
    { value: 'distant', css: 'perspective: 1200px;', description: 'Distant perspective', descriptionMs: 'Perspektif jauh sekali' }
  ],
  examples: [
    { code: '<div visual="perspective:normal">3D container</div>', description: 'Normal perspective' }
  ],
  preview: [
    {
      title: '3D Perspective',
      titleMs: 'Perspektif 3D',
      description: 'Control 3D depth perception',
      descriptionMs: 'Kawal persepsi kedalaman 3D',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">perspective</div>
</div>`,
      highlightValue: 'perspective:normal'
    }
  ]
};

// ======================
// PERSPECTIVE ORIGIN
// ======================

export const perspectiveOrigin = {
  name: 'transform-perspective-origin',
  property: 'visual',
  syntax: 'visual="perspective-origin:[value]"',
  description: 'Set perspective origin point',
  descriptionMs: 'Tetapkan titik asal perspektif',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'center', css: 'perspective-origin: center;', description: 'Center origin', descriptionMs: 'Asal tengah' },
    { value: 'top', css: 'perspective-origin: top;', description: 'Top origin', descriptionMs: 'Asal atas' },
    { value: 'bottom', css: 'perspective-origin: bottom;', description: 'Bottom origin', descriptionMs: 'Asal bawah' },
    { value: 'left', css: 'perspective-origin: left;', description: 'Left origin', descriptionMs: 'Asal kiri' },
    { value: 'right', css: 'perspective-origin: right;', description: 'Right origin', descriptionMs: 'Asal kanan' },
    { value: 'top-left', css: 'perspective-origin: top left;', description: 'Top left', descriptionMs: 'Atas kiri' },
    { value: 'top-right', css: 'perspective-origin: top right;', description: 'Top right', descriptionMs: 'Atas kanan' },
    { value: 'bottom-left', css: 'perspective-origin: bottom left;', description: 'Bottom left', descriptionMs: 'Bawah kiri' },
    { value: 'bottom-right', css: 'perspective-origin: bottom right;', description: 'Bottom right', descriptionMs: 'Bawah kanan' }
  ],
  examples: [
    { code: '<div visual="perspective-origin:top">Top origin</div>', description: 'Top origin' }
  ],
  preview: [
    {
      title: 'Perspective Origin',
      titleMs: 'Asal Perspektif',
      description: 'Set vanishing point location',
      descriptionMs: 'Tetapkan lokasi titik lenyap',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">origin:center</div>
</div>`,
      highlightValue: 'perspective-origin:center'
    }
  ]
};

// ======================
// TRANSFORM STYLE
// ======================

export const transformStyle = {
  name: 'transform-style',
  property: 'visual',
  syntax: 'visual="transform-style:[value]"',
  description: 'Set 3D transform style',
  descriptionMs: 'Tetapkan gaya transform 3D',
  category: 'visual',
  values: [
    { value: 'flat', css: 'transform-style: flat;', description: 'Flat rendering', descriptionMs: 'Persembahan rata' },
    { value: 'preserve-3d', css: 'transform-style: preserve-3d;', description: 'Preserve 3D', descriptionMs: 'Kekalkan 3D' }
  ],
  examples: [
    { code: '<div visual="transform-style:preserve-3d">3D space</div>', description: 'Preserve 3D' }
  ],
  preview: [
    {
      title: 'Transform Style',
      titleMs: 'Gaya Transformasi',
      description: 'Flat or preserve 3D rendering',
      descriptionMs: 'Persembahan rata atau kekalkan 3D',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">flat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">preserve-3d</div>
</div>`,
      highlightValue: 'transform-style:preserve-3d'
    }
  ]
};

// ======================
// BACKFACE VISIBILITY
// ======================

export const backfaceVisibility = {
  name: 'transform-backface',
  property: 'visual',
  syntax: 'visual="backface:[value]"',
  description: 'Control backface visibility',
  descriptionMs: 'Kawal keterlihatan belakang',
  category: 'visual',
  values: [
    { value: 'visible', css: 'backface-visibility: visible;', description: 'Backface visible', descriptionMs: 'Belakang kelihatan' },
    { value: 'hidden', css: 'backface-visibility: hidden;', description: 'Backface hidden', descriptionMs: 'Belakang tersembunyi' }
  ],
  examples: [
    { code: '<div visual="backface:hidden">Hidden when rotated</div>', description: 'Hide backface' }
  ],
  preview: [
    {
      title: 'Backface Visibility',
      titleMs: 'Keterlihatan Belakang',
      description: 'Show or hide element back side',
      descriptionMs: 'Tunjukkan atau sembunyikan bahagian belakang',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">visible</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">hidden</div>
</div>`,
      highlightValue: 'backface:hidden'
    }
  ]
};

// ======================
// MASK
// ======================

export const mask = {
  name: 'mask',
  property: 'visual',
  syntax: 'visual="mask:[value]"',
  description: 'Apply mask to element',
  descriptionMs: 'Terapkan topeng pada elemen',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'mask-image: none;', description: 'No mask', descriptionMs: 'Tiada topeng' },
    { value: 'fade-y', css: 'mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);', description: 'Vertical fade', descriptionMs: 'Pudar menegak' },
    { value: 'fade-x', css: 'mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);', description: 'Horizontal fade', descriptionMs: 'Pudar mendatar' }
  ],
  examples: [
    { code: '<div visual="mask:fade-y">Faded edges</div>', description: 'Vertical fade mask' }
  ],
  preview: [
    {
      title: 'Mask',
      titleMs: 'Topeng',
      description: 'Apply gradient mask to edges',
      descriptionMs: 'Terapkan topeng kecerunan pada tepi',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg:primary text:white rounded:small">mask:fade-y</div>
</div>`,
      highlightValue: 'mask:fade-y'
    }
  ]
};

// ======================
// STATE PREFIXES
// ======================

export const statePrefixes = {
  name: 'state-prefixes',
  property: 'visual',
  syntax: 'visual="hover:... focus:... active:..."',
  description: 'Apply styles on specific states',
  descriptionMs: 'Terapkan gaya pada keadaan tertentu',
  category: 'visual',
  values: [
    { value: 'hover:', css: ':hover', description: 'On hover', descriptionMs: 'Pada hover' },
    { value: 'focus:', css: ':focus', description: 'On focus', descriptionMs: 'Pada fokus' },
    { value: 'active:', css: ':active', description: 'On active', descriptionMs: 'Pada aktif' },
    { value: 'disabled:', css: ':disabled', description: 'When disabled', descriptionMs: 'Apabila dilumpuhkan' },
    { value: 'visited:', css: ':visited', description: 'When visited', descriptionMs: 'Apabila dilawati' },
    { value: 'first:', css: ':first-child', description: 'First child', descriptionMs: 'Anak pertama' },
    { value: 'last:', css: ':last-child', description: 'Last child', descriptionMs: 'Anak terakhir' },
    { value: 'odd:', css: ':nth-child(odd)', description: 'Odd children', descriptionMs: 'Anak ganjil' },
    { value: 'even:', css: ':nth-child(even)', description: 'Even children', descriptionMs: 'Anak genap' }
  ],
  examples: [
    { code: '<button visual="hover:bg:primary focus:outline:primary">Interactive button</button>', description: 'State prefixes' }
  ],
  preview: [
    {
      title: 'State Prefixes',
      titleMs: 'Awalan Keadaan',
      description: 'Apply styles on hover, focus, etc.',
      descriptionMs: 'Terapkan gaya pada hover, fokus, dll.',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all hover:bg:primary-dark">hover:bg:primary-dark</button>
</div>`,
      highlightValue: 'hover:bg:primary'
    }
  ]
};

// Export all 3D transform definitions
export const transform3dDefinitions = {
  perspective,
  perspectiveOrigin,
  transformStyle,
  backfaceVisibility,
  mask,
  statePrefixes
};

export default transform3dDefinitions;
