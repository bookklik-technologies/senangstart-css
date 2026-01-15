/**
 * SenangStart CSS - 3D Transform Utility Definitions
 * Perspective, backface, 3D rotation, translate-z, and 3D transform utilities
 */

// ======================
// PERSPECTIVE
// ======================

export const perspective = {
  name: 'transform-perspective',
  property: 'visual',
  syntax: 'visual="perspective:[value]"',
  description: 'Set 3D perspective on container (apply to parent of transformed elements)',
  descriptionMs: 'Tetapkan perspektif 3D pada bekas (terapkan pada induk elemen transformasi)',
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
    { code: '<div visual="perspective:normal"><div visual="rotate-y:45">3D rotated</div></div>', description: 'Parent perspective for 3D child' }
  ],
  preview: [
    {
      title: '3D Perspective',
      titleMs: 'Perspektif 3D',
      description: 'Control 3D depth perception - apply to parent, transform children',
      descriptionMs: 'Kawal persepsi kedalaman 3D - terapkan pada induk, transformasi anak',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">dramatic</span>
    <div space="p:medium" visual="perspective:dramatic">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">normal</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">far</span>
    <div space="p:medium" visual="perspective:far">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:45">3D</div>
    </div>
  </div>
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
  description: 'Set perspective vanishing point location',
  descriptionMs: 'Tetapkan lokasi titik lenyap perspektif',
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
    { code: '<div visual="perspective:normal perspective-origin:top">Top origin</div>', description: 'Top vanishing point' }
  ],
  preview: [
    {
      title: 'Perspective Origin',
      titleMs: 'Asal Perspektif',
      description: 'Set vanishing point location for 3D transforms',
      descriptionMs: 'Tetapkan lokasi titik lenyap untuk transformasi 3D',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">left</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:left">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">center</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:center">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">right</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:right">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:30">3D</div>
    </div>
  </div>
</div>`,
      highlightValue: 'perspective-origin:center'
    }
  ]
};

// ======================
// 3D ROTATION
// ======================

export const rotate3d = {
  name: 'transform-rotate-3d',
  property: 'visual',
  syntax: 'visual="rotate-x:[degrees]" or visual="rotate-y:[degrees]" or visual="rotate-z:[degrees]"',
  description: 'Rotate element in 3D space along X, Y, or Z axis',
  descriptionMs: 'Putar elemen dalam ruang 3D sepanjang paksi X, Y, atau Z',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'transform: rotateX(0deg);', description: 'No rotation', descriptionMs: 'Tiada putaran' },
    { value: '45', css: 'transform: rotateX(45deg);', description: '45° rotation', descriptionMs: 'Putaran 45°' },
    { value: '90', css: 'transform: rotateX(90deg);', description: '90° rotation', descriptionMs: 'Putaran 90°' },
    { value: '180', css: 'transform: rotateX(180deg);', description: '180° rotation', descriptionMs: 'Putaran 180°' }
  ],
  examples: [
    { code: '<div visual="perspective:normal"><div visual="rotate-x:45">Tilted forward</div></div>', description: 'X-axis rotation' },
    { code: '<div visual="perspective:normal"><div visual="rotate-y:45">Turned sideways</div></div>', description: 'Y-axis rotation' },
    { code: '<div visual="rotate-z:45">Spun flat</div>', description: 'Z-axis rotation (same as rotate)' }
  ],
  preview: [
    {
      title: '3D Rotation',
      titleMs: 'Putaran 3D',
      description: 'Rotate elements along X, Y, or Z axis in 3D space',
      descriptionMs: 'Putar elemen sepanjang paksi X, Y, atau Z dalam ruang 3D',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-x:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-x:45">X</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-y:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">Y</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-z:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-z:45">Z</div>
    </div>
  </div>
</div>`,
      highlightValue: 'rotate-y:45'
    }
  ]
};

// ======================
// TRANSLATE Z (3D)
// ======================

export const translateZ = {
  name: 'transform-translate-z',
  property: 'visual',
  syntax: 'visual="translate-z:[value]"',
  description: 'Translate element along Z axis (depth) in 3D space',
  descriptionMs: 'Alihkan elemen sepanjang paksi Z (kedalaman) dalam ruang 3D',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'transform: translateZ(0);', description: 'No Z translation', descriptionMs: 'Tiada alihan Z' },
    { value: 'near', css: 'transform: translateZ(50px);', description: 'Move near (forward)', descriptionMs: 'Alih dekat (ke hadapan)' },
    { value: 'far', css: 'transform: translateZ(-50px);', description: 'Move far (backward)', descriptionMs: 'Alih jauh (ke belakang)' }
  ],
  examples: [
    { code: '<div visual="perspective:normal"><div visual="translate-z:near">Closer</div></div>', description: 'Move forward in 3D' }
  ],
  preview: [
    {
      title: 'Translate Z (3D Depth)',
      titleMs: 'Alih Z (Kedalaman 3D)',
      description: 'Move elements forward or backward in 3D space',
      descriptionMs: 'Alihkan elemen ke hadapan atau belakang dalam ruang 3D',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:far</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:primary text:white rounded:small translate-z:far">far</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:0</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:success text:white rounded:small translate-z:0">0</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:near</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:warning text:black rounded:small translate-z:near">near</div>
    </div>
  </div>
</div>`,
      highlightValue: 'translate-z:near'
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
  description: 'Preserve 3D space for nested transformed elements',
  descriptionMs: 'Kekalkan ruang 3D untuk elemen transformasi bersarang',
  category: 'visual',
  values: [
    { value: 'flat', css: 'transform-style: flat;', description: 'Flatten 3D children', descriptionMs: 'Ratakan anak 3D' },
    { value: 'preserve-3d', css: 'transform-style: preserve-3d;', description: 'Preserve 3D depth', descriptionMs: 'Kekalkan kedalaman 3D' }
  ],
  examples: [
    { code: '<div visual="transform-style:preserve-3d">Nested 3D transforms preserved</div>', description: 'Preserve 3D' }
  ],
  preview: [
    {
      title: 'Transform Style',
      titleMs: 'Gaya Transformasi',
      description: 'Flat or preserve 3D for nested transforms',
      descriptionMs: 'Rata atau kekalkan 3D untuk transformasi bersarang',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">flat</span>
    <div space="p:medium" visual="perspective:normal transform-style:flat rotate-x:20">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">flat</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">preserve-3d</span>
    <div space="p:medium" visual="perspective:normal transform-style:preserve-3d rotate-x:20">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
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
  description: 'Control visibility of element back side when rotated in 3D',
  descriptionMs: 'Kawal keterlihatan bahagian belakang elemen apabila diputar dalam 3D',
  category: 'visual',
  values: [
    { value: 'visible', css: 'backface-visibility: visible;', description: 'Backface visible', descriptionMs: 'Belakang kelihatan' },
    { value: 'hidden', css: 'backface-visibility: hidden;', description: 'Backface hidden', descriptionMs: 'Belakang tersembunyi' }
  ],
  examples: [
    { code: '<div visual="backface:hidden rotate-y:180">Hidden when flipped</div>', description: 'Hide backface for card flip' }
  ],
  preview: [
    {
      title: 'Backface Visibility',
      titleMs: 'Keterlihatan Belakang',
      description: 'Show or hide backside when rotated 180°',
      descriptionMs: 'Tunjukkan atau sembunyikan bahagian belakang apabila diputar 180°',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">visible + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small backface:visible rotate-y:180">👀</div>
    </div>
  </div>
  <div layout="flex:col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">hidden + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:danger text:white rounded:small backface:hidden rotate-y:180">🙈</div>
    </div>
  </div>
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
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:none">none</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-y">fade-y</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-x">fade-x</div>
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
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all hover:scale:110">hover:scale:110</button>
  <button space="p:small" visual="bg:neutral-500 text:white rounded:small transition:all hover:bg:primary">hover:bg:primary</button>
</div>`,
      highlightValue: 'hover:scale:110'
    }
  ]
};

// Export all 3D transform definitions
export const transform3dDefinitions = {
  perspective,
  perspectiveOrigin,
  rotate3d,
  translateZ,
  transformStyle,
  backfaceVisibility,
  mask,
  statePrefixes
};

export default transform3dDefinitions;
