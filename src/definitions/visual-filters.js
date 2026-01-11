/**
 * SenangStart CSS - Filter Utility Definitions
 * Brightness, contrast, grayscale, hue-rotate, invert, saturate, sepia, drop-shadow
 */

// ======================
// FILTER - BRIGHTNESS
// ======================

export const filterBrightness = {
  name: 'filter-brightness',
  property: 'visual',
  syntax: 'visual="brightness:[value]"',
  description: 'Adjust brightness',
  descriptionMs: 'Laraskan kecerahan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'dim', css: 'filter: brightness(0.5);', description: '50% brightness', descriptionMs: '50% kecerahan' },
    { value: 'dark', css: 'filter: brightness(0.75);', description: '75% brightness', descriptionMs: '75% kecerahan' },
    { value: 'normal', css: 'filter: brightness(1);', description: 'Normal brightness', descriptionMs: 'Kecerahan normal' },
    { value: 'bright', css: 'filter: brightness(1.25);', description: '125% brightness', descriptionMs: '125% kecerahan' },
    { value: 'vivid', css: 'filter: brightness(1.5);', description: '150% brightness', descriptionMs: '150% kecerahan' }
  ],
  examples: [
    { code: '<img visual="brightness:bright">Brighter image</img>', description: 'Increase brightness' }
  ]
};

// ======================
// FILTER - CONTRAST
// ======================

export const filterContrast = {
  name: 'filter-contrast',
  property: 'visual',
  syntax: 'visual="contrast:[value]"',
  description: 'Adjust contrast',
  descriptionMs: 'Laraskan kontras',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'low', css: 'filter: contrast(0.5);', description: 'Low contrast', descriptionMs: 'Kontras rendah' },
    { value: 'reduced', css: 'filter: contrast(0.75);', description: 'Reduced contrast', descriptionMs: 'Kontras dikurangkan' },
    { value: 'normal', css: 'filter: contrast(1);', description: 'Normal contrast', descriptionMs: 'Kontras normal' },
    { value: 'high', css: 'filter: contrast(1.25);', description: 'High contrast', descriptionMs: 'Kontras tinggi' },
    { value: 'max', css: 'filter: contrast(1.5);', description: 'Maximum contrast', descriptionMs: 'Kontras maksimum' }
  ],
  examples: [
    { code: '<img visual="contrast:high">High contrast</img>', description: 'Increase contrast' }
  ]
};

// ======================
// FILTER - GRAYSCALE
// ======================

export const filterGrayscale = {
  name: 'filter-grayscale',
  property: 'visual',
  syntax: 'visual="grayscale:[value]"',
  description: 'Apply grayscale filter',
  descriptionMs: 'Terapkan penapis skala kelabu',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'filter: grayscale(0%);', description: 'No grayscale', descriptionMs: 'Tiada skala kelabu' },
    { value: 'partial', css: 'filter: grayscale(50%);', description: '50% grayscale', descriptionMs: '50% skala kelabu' },
    { value: 'full', css: 'filter: grayscale(100%);', description: 'Full grayscale', descriptionMs: 'Skala kelabu penuh' }
  ],
  examples: [
    { code: '<img visual="grayscale:full">Black and white</img>', description: 'Full grayscale' }
  ]
};

// ======================
// FILTER - HUE ROTATE
// ======================

export const filterHueRotate = {
  name: 'filter-hue-rotate',
  property: 'visual',
  syntax: 'visual="hue-rotate:[degrees]"',
  description: 'Rotate hue colors',
  descriptionMs: 'Putar warna rona',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'filter: hue-rotate(0deg);', description: 'No rotation', descriptionMs: 'Tiada putaran' },
    { value: '90', css: 'filter: hue-rotate(90deg);', description: '90° rotation', descriptionMs: 'Putaran 90°' },
    { value: '180', css: 'filter: hue-rotate(180deg);', description: '180° rotation', descriptionMs: 'Putaran 180°' }
  ],
  examples: [
    { code: '<img visual="hue-rotate:90">Shifted hue</img>', description: 'Rotate hue 90 degrees' }
  ]
};

// ======================
// FILTER - INVERT
// ======================

export const filterInvert = {
  name: 'filter-invert',
  property: 'visual',
  syntax: 'visual="invert:[value]"',
  description: 'Invert colors',
  descriptionMs: 'Songsangkan warna',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'filter: invert(0%);', description: 'No inversion', descriptionMs: 'Tiada penyongsangan' },
    { value: 'partial', css: 'filter: invert(50%);', description: '50% inversion', descriptionMs: '50% penyongsangan' },
    { value: 'full', css: 'filter: invert(100%);', description: 'Full inversion', descriptionMs: 'Penyongsangan penuh' }
  ],
  examples: [
    { code: '<img visual="invert:full">Inverted colors</img>', description: 'Invert all colors' }
  ]
};

// ======================
// FILTER - SATURATE
// ======================

export const filterSaturate = {
  name: 'filter-saturate',
  property: 'visual',
  syntax: 'visual="saturate:[value]"',
  description: 'Adjust saturation',
  descriptionMs: 'Laraskan ketepuan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'filter: saturate(0);', description: 'Desaturated', descriptionMs: 'Tidak tepu' },
    { value: 'low', css: 'filter: saturate(0.5);', description: 'Low saturation', descriptionMs: 'Ketepuan rendah' },
    { value: 'normal', css: 'filter: saturate(1);', description: 'Normal saturation', descriptionMs: 'Ketepuan normal' },
    { value: 'high', css: 'filter: saturate(1.5);', description: 'High saturation', descriptionMs: 'Ketepuan tinggi' },
    { value: 'vivid', css: 'filter: saturate(2);', description: 'Very saturated', descriptionMs: 'Sangat tepu' }
  ],
  examples: [
    { code: '<img visual="saturate:vivid">Vivid colors</img>', description: 'Increase saturation' }
  ]
};

// ======================
// FILTER - SEPIA
// ======================

export const filterSepia = {
  name: 'filter-sepia',
  property: 'visual',
  syntax: 'visual="sepia:[value]"',
  description: 'Apply sepia filter',
  descriptionMs: 'Terapkan penapis sepia',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'filter: sepia(0%);', description: 'No sepia', descriptionMs: 'Tiada sepia' },
    { value: 'partial', css: 'filter: sepia(50%);', description: '50% sepia', descriptionMs: '50% sepia' },
    { value: 'full', css: 'filter: sepia(100%);', description: 'Full sepia', descriptionMs: 'Sepia penuh' }
  ],
  examples: [
    { code: '<img visual="sepia:full">Vintage look</img>', description: 'Full sepia effect' }
  ]
};

// ======================
// FILTER - DROP SHADOW
// ======================

export const filterDropShadow = {
  name: 'filter-drop-shadow',
  property: 'visual',
  syntax: 'visual="drop-shadow:[value]"',
  description: 'Add drop shadow',
  descriptionMs: 'Tambah bayang jatuh',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'filter: drop-shadow(none);', description: 'No shadow', descriptionMs: 'Tiada bayang' },
    { value: 'tiny', css: 'filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05));', description: 'Tiny shadow', descriptionMs: 'Bayang kecil' },
    { value: 'small', css: 'filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));', description: 'Small shadow', descriptionMs: 'Bayang kecil' },
    { value: 'medium', css: 'filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07));', description: 'Medium shadow', descriptionMs: 'Bayang sederhana' },
    { value: 'big', css: 'filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04));', description: 'Large shadow', descriptionMs: 'Bayang besar' },
    { value: 'giant', css: 'filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03));', description: 'Giant shadow', descriptionMs: 'Bayang gergasi' }
  ],
  examples: [
    { code: '<img visual="drop-shadow:medium">Shadow on image</img>', description: 'Drop shadow on irregular shapes' }
  ]
};

// Export all filter definitions
export const filterDefinitions = {
  filterBrightness,
  filterContrast,
  filterGrayscale,
  filterHueRotate,
  filterInvert,
  filterSaturate,
  filterSepia,
  filterDropShadow
};

export default filterDefinitions;
