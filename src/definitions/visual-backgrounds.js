/**
 * SenangStart CSS - Background & Backdrop Utility Definitions
 * Background images, backdrop filters, and related utilities
 */

// ======================
// BACKGROUND IMAGE
// ======================

export const backgroundImage = {
  name: 'background-image',
  property: 'visual',
  syntax: 'visual="bg-image:[value]"',
  description: 'Set background image or gradient',
  descriptionMs: 'Tetapkan imej latar atau gradien',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'background-image: none;', description: 'No background image', descriptionMs: 'Tiada imej latar' },
    { value: 'gradient-to-t', css: 'background-image: linear-gradient(to top, var(--tw-gradient-stops));', description: 'Gradient to top', descriptionMs: 'Gradien ke atas' },
    { value: 'gradient-to-b', css: 'background-image: linear-gradient(to bottom, var(--tw-gradient-stops));', description: 'Gradient to bottom', descriptionMs: 'Gradien ke bawah' },
    { value: 'gradient-to-l', css: 'background-image: linear-gradient(to left, var(--tw-gradient-stops));', description: 'Gradient to left', descriptionMs: 'Gradien ke kiri' },
    { value: 'gradient-to-r', css: 'background-image: linear-gradient(to right, var(--tw-gradient-stops));', description: 'Gradient to right', descriptionMs: 'Gradien ke kanan' }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r">Gradient background</div>', description: 'Right gradient' }
  ]
};

// ======================
// BACKGROUND ATTACHMENT
// ======================

export const backgroundAttachment = {
  name: 'background-attachment',
  property: 'visual',
  syntax: 'visual="bg-attachment:[value]"',
  description: 'Set background attachment behavior',
  descriptionMs: 'Tetapkan kelakuan lampiran latar',
  category: 'visual',
  values: [
    { value: 'fixed', css: 'background-attachment: fixed;', description: 'Fixed background', descriptionMs: 'Latar tetap' },
    { value: 'local', css: 'background-attachment: local;', description: 'Local scroll', descriptionMs: 'Skrol tempatan' },
    { value: 'scroll', css: 'background-attachment: scroll;', description: 'Scroll with page', descriptionMs: 'Skrol dengan halaman' }
  ],
  examples: [
    { code: '<div visual="bg-attachment:fixed">Parallax effect</div>', description: 'Fixed background' }
  ]
};

// ======================
// BACKGROUND CLIP
// ======================

export const backgroundClip = {
  name: 'background-clip',
  property: 'visual',
  syntax: 'visual="bg-clip:[value]"',
  description: 'Set background clipping area',
  descriptionMs: 'Tetapkan kawasan keratan latar',
  category: 'visual',
  values: [
    { value: 'border', css: 'background-clip: border-box;', description: 'Clip to border', descriptionMs: 'Keratan ke sempadan' },
    { value: 'padding', css: 'background-clip: padding-box;', description: 'Clip to padding', descriptionMs: 'Keratan ke padding' },
    { value: 'content', css: 'background-clip: content-box;', description: 'Clip to content', descriptionMs: 'Keratan ke kandungan' },
    { value: 'text', css: 'background-clip: text; -webkit-background-clip: text;', description: 'Clip to text', descriptionMs: 'Keratan ke teks' }
  ],
  examples: [
    { code: '<div visual="bg-clip:text text:transparent bg:gradient">Gradient text</div>', description: 'Gradient text effect' }
  ]
};

// ======================
// BACKGROUND ORIGIN
// ======================

export const backgroundOrigin = {
  name: 'background-origin',
  property: 'visual',
  syntax: 'visual="bg-origin:[value]"',
  description: 'Set background positioning origin',
  descriptionMs: 'Tetapkan asal kedudukan latar',
  category: 'visual',
  values: [
    { value: 'border', css: 'background-origin: border-box;', description: 'Origin at border', descriptionMs: 'Asal di sempadan' },
    { value: 'padding', css: 'background-origin: padding-box;', description: 'Origin at padding', descriptionMs: 'Asal di padding' },
    { value: 'content', css: 'background-origin: content-box;', description: 'Origin at content', descriptionMs: 'Asal di kandungan' }
  ],
  examples: [
    { code: '<div visual="bg-origin:content">Content origin</div>', description: 'Content box origin' }
  ]
};

// ======================
// BACKGROUND POSITION
// ======================

export const backgroundPosition = {
  name: 'background-position',
  property: 'visual',
  syntax: 'visual="bg-pos:[value]"',
  description: 'Set background position',
  descriptionMs: 'Tetapkan kedudukan latar',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'center', css: 'background-position: center;', description: 'Center position', descriptionMs: 'Kedudukan tengah' },
    { value: 'top', css: 'background-position: top;', description: 'Top position', descriptionMs: 'Kedudukan atas' },
    { value: 'bottom', css: 'background-position: bottom;', description: 'Bottom position', descriptionMs: 'Kedudukan bawah' },
    { value: 'left', css: 'background-position: left;', description: 'Left position', descriptionMs: 'Kedudukan kiri' },
    { value: 'right', css: 'background-position: right;', description: 'Right position', descriptionMs: 'Kedudukan kanan' },
    { value: 'top-left', css: 'background-position: top left;', description: 'Top left', descriptionMs: 'Atas kiri' },
    { value: 'top-right', css: 'background-position: top right;', description: 'Top right', descriptionMs: 'Atas kanan' },
    { value: 'bottom-left', css: 'background-position: bottom left;', description: 'Bottom left', descriptionMs: 'Bawah kiri' },
    { value: 'bottom-right', css: 'background-position: bottom right;', description: 'Bottom right', descriptionMs: 'Bawah kanan' }
  ],
  examples: [
    { code: '<div visual="bg-pos:center">Centered background</div>', description: 'Center position' }
  ]
};

// ======================
// BACKGROUND REPEAT
// ======================

export const backgroundRepeat = {
  name: 'background-repeat',
  property: 'visual',
  syntax: 'visual="bg-repeat:[value]"',
  description: 'Set background repeat behavior',
  descriptionMs: 'Tetapkan kelakuan ulangan latar',
  category: 'visual',
  values: [
    { value: 'repeat', css: 'background-repeat: repeat;', description: 'Repeat both axes', descriptionMs: 'Ulang kedua-dua paksi' },
    { value: 'no-repeat', css: 'background-repeat: no-repeat;', description: 'No repeat', descriptionMs: 'Tiada ulangan' },
    { value: 'repeat-x', css: 'background-repeat: repeat-x;', description: 'Repeat horizontally', descriptionMs: 'Ulang mendatar' },
    { value: 'repeat-y', css: 'background-repeat: repeat-y;', description: 'Repeat vertically', descriptionMs: 'Ulang menegak' },
    { value: 'round', css: 'background-repeat: round;', description: 'Round repeat', descriptionMs: 'Ulang bulat' },
    { value: 'space', css: 'background-repeat: space;', description: 'Spaced repeat', descriptionMs: 'Ulang berjarakd' }
  ],
  examples: [
    { code: '<div visual="bg-repeat:no-repeat">Single background</div>', description: 'No repeat' }
  ]
};

// ======================
// BACKGROUND SIZE
// ======================

export const backgroundSize = {
  name: 'background-size',
  property: 'visual',
  syntax: 'visual="bg-size:[value]"',
  description: 'Set background size',
  descriptionMs: 'Tetapkan saiz latar',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'auto', css: 'background-size: auto;', description: 'Original size', descriptionMs: 'Saiz asal' },
    { value: 'cover', css: 'background-size: cover;', description: 'Cover container', descriptionMs: 'Tutup bekas' },
    { value: 'contain', css: 'background-size: contain;', description: 'Contain in container', descriptionMs: 'Kandung dalam bekas' }
  ],
  examples: [
    { code: '<div visual="bg-size:cover">Full coverage background</div>', description: 'Cover background' }
  ]
};

// ======================
// BACKGROUND BLEND MODE
// ======================

export const backgroundBlendMode = {
  name: 'background-blend-mode',
  property: 'visual',
  syntax: 'visual="bg-blend:[value]"',
  description: 'Set background blend mode',
  descriptionMs: 'Tetapkan mod campuran latar',
  category: 'visual',
  values: [
    { value: 'normal', css: 'background-blend-mode: normal;', description: 'Normal blend', descriptionMs: 'Campuran normal' },
    { value: 'multiply', css: 'background-blend-mode: multiply;', description: 'Multiply blend', descriptionMs: 'Campuran darab' },
    { value: 'screen', css: 'background-blend-mode: screen;', description: 'Screen blend', descriptionMs: 'Campuran skrin' },
    { value: 'overlay', css: 'background-blend-mode: overlay;', description: 'Overlay blend', descriptionMs: 'Campuran tindanan' },
    { value: 'darken', css: 'background-blend-mode: darken;', description: 'Darken blend', descriptionMs: 'Campuran gelap' },
    { value: 'lighten', css: 'background-blend-mode: lighten;', description: 'Lighten blend', descriptionMs: 'Campuran cerah' }
  ],
  examples: [
    { code: '<div visual="bg-blend:multiply">Multiplied background</div>', description: 'Multiply blend' }
  ]
};

// ======================
// BACKDROP CONTRAST
// ======================

export const backdropContrast = {
  name: 'backdrop-contrast',
  property: 'visual',
  syntax: 'visual="backdrop-contrast:[value]"',
  description: 'Adjust backdrop contrast',
  descriptionMs: 'Laraskan kontras latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'low', css: 'backdrop-filter: contrast(0.5);', description: 'Low contrast', descriptionMs: 'Kontras rendah' },
    { value: 'reduced', css: 'backdrop-filter: contrast(0.75);', description: 'Reduced contrast', descriptionMs: 'Kontras dikurangkan' },
    { value: 'normal', css: 'backdrop-filter: contrast(1);', description: 'Normal contrast', descriptionMs: 'Kontras normal' },
    { value: 'high', css: 'backdrop-filter: contrast(1.25);', description: 'High contrast', descriptionMs: 'Kontras tinggi' },
    { value: 'max', css: 'backdrop-filter: contrast(1.5);', description: 'Maximum contrast', descriptionMs: 'Kontras maksimum' }
  ],
  examples: [
    { code: '<div visual="backdrop-contrast:high">High contrast backdrop</div>', description: 'High contrast' }
  ]
};

// ======================
// BACKDROP GRAYSCALE
// ======================

export const backdropGrayscale = {
  name: 'backdrop-grayscale',
  property: 'visual',
  syntax: 'visual="backdrop-grayscale:[value]"',
  description: 'Apply grayscale to backdrop',
  descriptionMs: 'Terapkan skala kelabu pada latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'backdrop-filter: grayscale(0%);', description: 'No grayscale', descriptionMs: 'Tiada skala kelabu' },
    { value: 'partial', css: 'backdrop-filter: grayscale(50%);', description: '50% grayscale', descriptionMs: '50% skala kelabu' },
    { value: 'full', css: 'backdrop-filter: grayscale(100%);', description: 'Full grayscale', descriptionMs: 'Skala kelabu penuh' }
  ],
  examples: [
    { code: '<div visual="backdrop-grayscale:full">Grayscale backdrop</div>', description: 'Full grayscale' }
  ]
};

// ======================
// BACKDROP HUE ROTATE
// ======================

export const backdropHueRotate = {
  name: 'backdrop-hue-rotate',
  property: 'visual',
  syntax: 'visual="backdrop-hue-rotate:[degrees]"',
  description: 'Rotate backdrop hue',
  descriptionMs: 'Putar rona latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'backdrop-filter: hue-rotate(0deg);', description: 'No rotation', descriptionMs: 'Tiada putaran' },
    { value: '90', css: 'backdrop-filter: hue-rotate(90deg);', description: '90° rotation', descriptionMs: 'Putaran 90°' },
    { value: '180', css: 'backdrop-filter: hue-rotate(180deg);', description: '180° rotation', descriptionMs: 'Putaran 180°' }
  ],
  examples: [
    { code: '<div visual="backdrop-hue-rotate:90">Rotated hue backdrop</div>', description: 'Rotate 90 degrees' }
  ]
};

// ======================
// BACKDROP INVERT
// ======================

export const backdropInvert = {
  name: 'backdrop-invert',
  property: 'visual',
  syntax: 'visual="backdrop-invert:[value]"',
  description: 'Invert backdrop colors',
  descriptionMs: 'Songsangkan warna latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'backdrop-filter: invert(0%);', description: 'No inversion', descriptionMs: 'Tiada penyongsangan' },
    { value: 'partial', css: 'backdrop-filter: invert(50%);', description: '50% inversion', descriptionMs: '50% penyongsangan' },
    { value: 'full', css: 'backdrop-filter: invert(100%);', description: 'Full inversion', descriptionMs: 'Penyongsangan penuh' }
  ],
  examples: [
    { code: '<div visual="backdrop-invert:full">Inverted backdrop</div>', description: 'Full inversion' }
  ]
};

// ======================
// BACKDROP OPACITY
// ======================

export const backdropOpacity = {
  name: 'backdrop-opacity',
  property: 'visual',
  syntax: 'visual="backdrop-opacity:[value]"',
  description: 'Set backdrop opacity',
  descriptionMs: 'Tetapkan kelegapan latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'backdrop-filter: opacity(0);', description: 'Transparent', descriptionMs: 'Lutsinar' },
    { value: '50', css: 'backdrop-filter: opacity(0.5);', description: '50% opacity', descriptionMs: '50% kelegapan' },
    { value: '100', css: 'backdrop-filter: opacity(1);', description: 'Fully opaque', descriptionMs: 'Sepenuhnya legap' }
  ],
  examples: [
    { code: '<div visual="backdrop-opacity:50">Semi-transparent backdrop</div>', description: '50% opacity' }
  ]
};

// ======================
// BACKDROP SATURATE
// ======================

export const backdropSaturate = {
  name: 'backdrop-saturate',
  property: 'visual',
  syntax: 'visual="backdrop-saturate:[value]"',
  description: 'Adjust backdrop saturation',
  descriptionMs: 'Laraskan ketepuan latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'backdrop-filter: saturate(0);', description: 'Desaturated', descriptionMs: 'Tidak tepu' },
    { value: 'low', css: 'backdrop-filter: saturate(0.5);', description: 'Low saturation', descriptionMs: 'Ketepuan rendah' },
    { value: 'normal', css: 'backdrop-filter: saturate(1);', description: 'Normal saturation', descriptionMs: 'Ketepuan normal' },
    { value: 'high', css: 'backdrop-filter: saturate(1.5);', description: 'High saturation', descriptionMs: 'Ketepuan tinggi' },
    { value: 'vivid', css: 'backdrop-filter: saturate(2);', description: 'Very saturated', descriptionMs: 'Sangat tepu' }
  ],
  examples: [
    { code: '<div visual="backdrop-saturate:vivid">Vivid backdrop</div>', description: 'High saturation' }
  ]
};

// ======================
// BACKDROP SEPIA
// ======================

export const backdropSepia = {
  name: 'backdrop-sepia',
  property: 'visual',
  syntax: 'visual="backdrop-sepia:[value]"',
  description: 'Apply sepia to backdrop',
  descriptionMs: 'Terapkan sepia pada latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'backdrop-filter: sepia(0%);', description: 'No sepia', descriptionMs: 'Tiada sepia' },
    { value: 'partial', css: 'backdrop-filter: sepia(50%);', description: '50% sepia', descriptionMs: '50% sepia' },
    { value: 'full', css: 'backdrop-filter: sepia(100%);', description: 'Full sepia', descriptionMs: 'Sepia penuh' }
  ],
  examples: [
    { code: '<div visual="backdrop-sepia:full">Vintage backdrop</div>', description: 'Full sepia' }
  ]
};

// Export all background/backdrop definitions
export const backgroundDefinitions = {
  backgroundImage,
  backgroundAttachment,
  backgroundClip,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  backgroundBlendMode,
  backdropContrast,
  backdropGrayscale,
  backdropHueRotate,
  backdropInvert,
  backdropOpacity,
  backdropSaturate,
  backdropSepia
};

export default backgroundDefinitions;
