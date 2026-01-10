/**
 * SenangStart CSS - Extended Visual Utility Definitions
 * Filters, Transforms, Transitions, Animations, Borders, Interactivity, SVG
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

// ======================
// BACKDROP BLUR
// ======================

export const backdropBlur = {
  name: 'backdrop-blur',
  property: 'visual',
  syntax: 'visual="backdrop-blur:[value]"',
  description: 'Blur backdrop',
  descriptionMs: 'Kaburkan latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'backdrop-filter: blur(0);', description: 'No blur', descriptionMs: 'Tiada kabur' },
    { value: 'tiny', css: 'backdrop-filter: blur(2px);', description: 'Tiny blur', descriptionMs: 'Kabur kecil' },
    { value: 'small', css: 'backdrop-filter: blur(4px);', description: 'Small blur', descriptionMs: 'Kabur kecil' },
    { value: 'medium', css: 'backdrop-filter: blur(8px);', description: 'Medium blur', descriptionMs: 'Kabur sederhana' },
    { value: 'big', css: 'backdrop-filter: blur(12px);', description: 'Large blur', descriptionMs: 'Kabur besar' },
    { value: 'giant', css: 'backdrop-filter: blur(24px);', description: 'Giant blur', descriptionMs: 'Kabur gergasi' },
    { value: 'vast', css: 'backdrop-filter: blur(48px);', description: 'Vast blur', descriptionMs: 'Kabur luas' }
  ],
  examples: [
    { code: '<div visual="backdrop-blur:medium bg:[rgba(255,255,255,0.5)]">Frosted glass</div>', description: 'Glassmorphism effect' }
  ]
};

// ======================
// BACKDROP BRIGHTNESS
// ======================

export const backdropBrightness = {
  name: 'backdrop-brightness',
  property: 'visual',
  syntax: 'visual="backdrop-brightness:[value]"',
  description: 'Adjust backdrop brightness',
  descriptionMs: 'Laraskan kecerahan latar belakang',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'dim', css: 'backdrop-filter: brightness(0.5);', description: '50% brightness', descriptionMs: '50% kecerahan' },
    { value: 'dark', css: 'backdrop-filter: brightness(0.75);', description: '75% brightness', descriptionMs: '75% kecerahan' },
    { value: 'normal', css: 'backdrop-filter: brightness(1);', description: 'Normal brightness', descriptionMs: 'Kecerahan normal' },
    { value: 'bright', css: 'backdrop-filter: brightness(1.25);', description: '125% brightness', descriptionMs: '125% kecerahan' },
    { value: 'vivid', css: 'backdrop-filter: brightness(1.5);', description: '150% brightness', descriptionMs: '150% kecerahan' }
  ],
  examples: [
    { code: '<div visual="backdrop-brightness:dark">Darkened backdrop</div>', description: 'Darken backdrop' }
  ]
};

// ======================
// TRANSITION PROPERTY
// ======================

export const transitionProperty = {
  name: 'transition-property',
  property: 'visual',
  syntax: 'visual="transition:[value]"',
  description: 'Set transition properties',
  descriptionMs: 'Tetapkan harta peralihan',
  category: 'visual',
  values: [
    { value: 'none', css: 'transition-property: none;', description: 'No transition', descriptionMs: 'Tiada peralihan' },
    { value: 'all', css: 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'All properties', descriptionMs: 'Semua harta' },
    { value: 'colors', css: 'transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Color properties', descriptionMs: 'Harta warna' },
    { value: 'opacity', css: 'transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Opacity only', descriptionMs: 'Kelegapan sahaja' },
    { value: 'shadow', css: 'transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Shadow only', descriptionMs: 'Bayang sahaja' },
    { value: 'transform', css: 'transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Transform only', descriptionMs: 'Transformasi sahaja' }
  ],
  examples: [
    { code: '<button visual="transition:all hover:bg:primary">Smooth hover</button>', description: 'Smooth transition' }
  ]
};

// ======================
// TRANSITION DURATION
// ======================

export const transitionDuration = {
  name: 'transition-duration',
  property: 'visual',
  syntax: 'visual="duration:[value]"',
  description: 'Set transition duration',
  descriptionMs: 'Tetapkan tempoh peralihan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'transition-duration: 75ms;', description: '75ms', descriptionMs: '75ms' },
    { value: 'quick', css: 'transition-duration: 100ms;', description: '100ms', descriptionMs: '100ms' },
    { value: 'fast', css: 'transition-duration: 150ms;', description: '150ms', descriptionMs: '150ms' },
    { value: 'normal', css: 'transition-duration: 200ms;', description: '200ms', descriptionMs: '200ms' },
    { value: 'slow', css: 'transition-duration: 300ms;', description: '300ms', descriptionMs: '300ms' },
    { value: 'slower', css: 'transition-duration: 500ms;', description: '500ms', descriptionMs: '500ms' },
    { value: 'lazy', css: 'transition-duration: 700ms;', description: '700ms', descriptionMs: '700ms' }
  ],
  examples: [
    { code: '<div visual="transition:all duration:slow">Slow transition</div>', description: 'Slow duration' }
  ]
};

// ======================
// TRANSITION TIMING
// ======================

export const transitionTiming = {
  name: 'transition-timing',
  property: 'visual',
  syntax: 'visual="ease:[value]"',
  description: 'Set transition timing function',
  descriptionMs: 'Tetapkan fungsi masa peralihan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'linear', css: 'transition-timing-function: linear;', description: 'Linear timing', descriptionMs: 'Masa linear' },
    { value: 'in', css: 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);', description: 'Ease in', descriptionMs: 'Memasuki mudah' },
    { value: 'out', css: 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);', description: 'Ease out', descriptionMs: 'Keluar mudah' },
    { value: 'in-out', css: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);', description: 'Ease in-out', descriptionMs: 'Masuk-keluar mudah' }
  ],
  examples: [
    { code: '<div visual="transition:all ease:out">Ease out effect</div>', description: 'Ease out timing' }
  ]
};

// ======================
// TRANSITION DELAY
// ======================

export const transitionDelay = {
  name: 'transition-delay',
  property: 'visual',
  syntax: 'visual="delay:[value]"',
  description: 'Set transition delay',
  descriptionMs: 'Tetapkan kelewatan peralihan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'transition-delay: 75ms;', description: '75ms delay', descriptionMs: 'Kelewatan 75ms' },
    { value: 'quick', css: 'transition-delay: 100ms;', description: '100ms delay', descriptionMs: 'Kelewatan 100ms' },
    { value: 'fast', css: 'transition-delay: 150ms;', description: '150ms delay', descriptionMs: 'Kelewatan 150ms' },
    { value: 'normal', css: 'transition-delay: 200ms;', description: '200ms delay', descriptionMs: 'Kelewatan 200ms' },
    { value: 'slow', css: 'transition-delay: 300ms;', description: '300ms delay', descriptionMs: 'Kelewatan 300ms' }
  ],
  examples: [
    { code: '<div visual="transition:all delay:slow">Delayed transition</div>', description: 'Delayed start' }
  ]
};

// ======================
// ANIMATION
// ======================

export const animation = {
  name: 'animation-builtin',
  property: 'visual',
  syntax: 'visual="animate:[value]"',
  description: 'Apply built-in animations',
  descriptionMs: 'Terapkan animasi terbina dalam',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'animation: none;', description: 'No animation', descriptionMs: 'Tiada animasi' },
    { value: 'spin', css: 'animation: spin 1s linear infinite;', description: 'Spinning', descriptionMs: 'Berpusing' },
    { value: 'ping', css: 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;', description: 'Ping effect', descriptionMs: 'Kesan ping' },
    { value: 'pulse', css: 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;', description: 'Pulsing', descriptionMs: 'Berdenyut' },
    { value: 'bounce', css: 'animation: bounce 1s infinite;', description: 'Bouncing', descriptionMs: 'Melantun' }
  ],
  examples: [
    { code: '<div visual="animate:spin">Loading...</div>', description: 'Spinning loader' }
  ]
};

// ======================
// ANIMATION DURATION
// ======================

export const animationDuration = {
  name: 'animation-duration',
  property: 'visual',
  syntax: 'visual="animation-duration:[value]"',
  description: 'Set animation duration',
  descriptionMs: 'Tetapkan tempoh animasi',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'animation-duration: 75ms;', description: '75ms', descriptionMs: '75ms' },
    { value: 'quick', css: 'animation-duration: 100ms;', description: '100ms', descriptionMs: '100ms' },
    { value: 'fast', css: 'animation-duration: 150ms;', description: '150ms', descriptionMs: '150ms' },
    { value: 'normal', css: 'animation-duration: 200ms;', description: '200ms', descriptionMs: '200ms' },
    { value: 'slow', css: 'animation-duration: 300ms;', description: '300ms', descriptionMs: '300ms' },
    { value: 'slower', css: 'animation-duration: 500ms;', description: '500ms', descriptionMs: '500ms' },
    { value: 'lazy', css: 'animation-duration: 700ms;', description: '700ms', descriptionMs: '700ms' }
  ],
  examples: [
    { code: '<div visual="animate:spin animation-duration:slow">Slow spin</div>', description: 'Slow animation' }
  ]
};

// ======================
// ANIMATION DELAY
// ======================

export const animationDelay = {
  name: 'animation-delay',
  property: 'visual',
  syntax: 'visual="animation-delay:[value]"',
  description: 'Set animation delay',
  descriptionMs: 'Tetapkan kelewatan animasi',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'animation-delay: 75ms;', description: '75ms delay', descriptionMs: 'Kelewatan 75ms' },
    { value: 'quick', css: 'animation-delay: 100ms;', description: '100ms delay', descriptionMs: 'Kelewatan 100ms' },
    { value: 'fast', css: 'animation-delay: 150ms;', description: '150ms delay', descriptionMs: 'Kelewatan 150ms' },
    { value: 'normal', css: 'animation-delay: 200ms;', description: '200ms delay', descriptionMs: 'Kelewatan 200ms' },
    { value: 'slow', css: 'animation-delay: 300ms;', description: '300ms delay', descriptionMs: 'Kelewatan 300ms' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-delay:slow">Delayed bounce</div>', description: 'Delayed animation' }
  ]
};

// ======================
// ANIMATION ITERATION
// ======================

export const animationIteration = {
  name: 'animation-iteration',
  property: 'visual',
  syntax: 'visual="animation-iteration:[value]"',
  description: 'Set animation iteration count',
  descriptionMs: 'Tetapkan bilangan ulangan animasi',
  category: 'visual',
  dynamic: true,
  values: [
    { value: '1', css: 'animation-iteration-count: 1;', description: 'Once', descriptionMs: 'Sekali' },
    { value: 'infinite', css: 'animation-iteration-count: infinite;', description: 'Forever', descriptionMs: 'Selamanya' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-iteration:1">Bounce once</div>', description: 'Single iteration' }
  ]
};

// ======================
// ANIMATION DIRECTION
// ======================

export const animationDirection = {
  name: 'animation-direction',
  property: 'visual',
  syntax: 'visual="animation-direction:[value]"',
  description: 'Set animation direction',
  descriptionMs: 'Tetapkan arah animasi',
  category: 'visual',
  values: [
    { value: 'normal', css: 'animation-direction: normal;', description: 'Normal direction', descriptionMs: 'Arah normal' },
    { value: 'reverse', css: 'animation-direction: reverse;', description: 'Reverse direction', descriptionMs: 'Arah terbalik' },
    { value: 'alternate', css: 'animation-direction: alternate;', description: 'Alternate direction', descriptionMs: 'Arah berselang' },
    { value: 'alternate-reverse', css: 'animation-direction: alternate-reverse;', description: 'Alternate reverse', descriptionMs: 'Berselang terbalik' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-direction:alternate">Alternating</div>', description: 'Alternate direction' }
  ]
};

// ======================
// ANIMATION FILL MODE
// ======================

export const animationFill = {
  name: 'animation-fill',
  property: 'visual',
  syntax: 'visual="animation-fill:[value]"',
  description: 'Set animation fill mode',
  descriptionMs: 'Tetapkan mod pengisian animasi',
  category: 'visual',
  values: [
    { value: 'none', css: 'animation-fill-mode: none;', description: 'No fill', descriptionMs: 'Tiada pengisian' },
    { value: 'forwards', css: 'animation-fill-mode: forwards;', description: 'Keep end state', descriptionMs: 'Kekalkan keadaan akhir' },
    { value: 'backwards', css: 'animation-fill-mode: backwards;', description: 'Apply start state', descriptionMs: 'Terapkan keadaan mula' },
    { value: 'both', css: 'animation-fill-mode: both;', description: 'Both directions', descriptionMs: 'Kedua-dua arah' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-fill:forwards">Stays at end</div>', description: 'Keep final position' }
  ]
};

// ======================
// ANIMATION PLAY STATE
// ======================

export const animationPlay = {
  name: 'animation-play',
  property: 'visual',
  syntax: 'visual="animation-play:[value]"',
  description: 'Control animation play state',
  descriptionMs: 'Kawal keadaan main animasi',
  category: 'visual',
  values: [
    { value: 'running', css: 'animation-play-state: running;', description: 'Animation running', descriptionMs: 'Animasi berjalan' },
    { value: 'paused', css: 'animation-play-state: paused;', description: 'Animation paused', descriptionMs: 'Animasi dijeda' }
  ],
  examples: [
    { code: '<div visual="animate:spin hover:animation-play:paused">Pause on hover</div>', description: 'Pause on hover' }
  ]
};

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
  ]
};

// ======================
// TRANSFORM - TRANSLATE
// ======================

export const transformTranslate = {
  name: 'transform-translate',
  property: 'visual',
  syntax: 'visual="translate-x:[value]" or visual="translate-y:[value]"',
  description: 'Translate element position',
  descriptionMs: 'Alihkan kedudukan elemen',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'transform: translateX(0);', description: 'No translation', descriptionMs: 'Tiada alihan' },
    { value: 'full', css: 'transform: translateX(100%);', description: 'Full width', descriptionMs: 'Lebar penuh' },
    { value: '1/2', css: 'transform: translateX(50%);', description: 'Half width', descriptionMs: 'Separuh lebar' }
  ],
  examples: [
    { code: '<div visual="translate-x:full">Moved right</div>', description: 'Translate right' }
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
  ]
};

// ======================
// BORDER COLOR
// ======================

export const borderColor = {
  name: 'border',
  property: 'visual',
  syntax: 'visual="border:[color]"',
  description: 'Set border color',
  descriptionMs: 'Tetapkan warna sempadan',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<div visual="border:primary border-w:small">Bordered element</div>', description: 'Primary border' }
  ]
};

// ======================
// BORDER WIDTH
// ======================

export const borderWidth = {
  name: 'border-width',
  property: 'visual',
  syntax: 'visual="border-w:[value]"',
  description: 'Set border width',
  descriptionMs: 'Tetapkan lebar sempadan',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  values: [
    { value: 'tiny', css: 'border-width: var(--s-tiny); border-style: solid;', description: 'Tiny border', descriptionMs: 'Sempadan kecil' },
    { value: 'small', css: 'border-width: var(--s-small); border-style: solid;', description: 'Small border', descriptionMs: 'Sempadan kecil' }
  ],
  examples: [
    { code: '<div visual="border:gray-300 border-w:small">Thin border</div>', description: 'Thin border' }
  ]
};

// ======================
// BORDER STYLE
// ======================

export const borderStyle = {
  name: 'border-style',
  property: 'visual',
  syntax: 'visual="border-style:[value]"',
  description: 'Set border style',
  descriptionMs: 'Tetapkan gaya sempadan',
  category: 'visual',
  values: [
    { value: 'solid', css: 'border-style: solid;', description: 'Solid border', descriptionMs: 'Sempadan pepejal' },
    { value: 'dashed', css: 'border-style: dashed;', description: 'Dashed border', descriptionMs: 'Sempadan putus-putus' },
    { value: 'dotted', css: 'border-style: dotted;', description: 'Dotted border', descriptionMs: 'Sempadan bertitik' },
    { value: 'double', css: 'border-style: double;', description: 'Double border', descriptionMs: 'Sempadan berganda' },
    { value: 'none', css: 'border-style: none;', description: 'No border', descriptionMs: 'Tiada sempadan' }
  ],
  examples: [
    { code: '<div visual="border:gray-300 border-style:dashed">Dashed border</div>', description: 'Dashed border' }
  ]
};

// ======================
// OUTLINE
// ======================

export const outlineColor = {
  name: 'outline',
  property: 'visual',
  syntax: 'visual="outline:[color]"',
  description: 'Set outline color',
  descriptionMs: 'Tetapkan warna garis luar',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<button visual="focus:outline:primary">Focus outline</button>', description: 'Focus outline' }
  ]
};

// ======================
// CURSOR
// ======================

export const cursor = {
  name: 'cursor',
  property: 'visual',
  syntax: 'visual="cursor:[value]"',
  description: 'Set cursor style',
  descriptionMs: 'Tetapkan gaya kursor',
  category: 'visual',
  values: [
    { value: 'auto', css: 'cursor: auto;', description: 'Auto cursor', descriptionMs: 'Kursor automatik' },
    { value: 'default', css: 'cursor: default;', description: 'Default cursor', descriptionMs: 'Kursor lalai' },
    { value: 'pointer', css: 'cursor: pointer;', description: 'Pointer cursor', descriptionMs: 'Kursor penunjuk' },
    { value: 'wait', css: 'cursor: wait;', description: 'Wait cursor', descriptionMs: 'Kursor tunggu' },
    { value: 'text', css: 'cursor: text;', description: 'Text cursor', descriptionMs: 'Kursor teks' },
    { value: 'move', css: 'cursor: move;', description: 'Move cursor', descriptionMs: 'Kursor alih' },
    { value: 'not-allowed', css: 'cursor: not-allowed;', description: 'Not allowed', descriptionMs: 'Tidak dibenarkan' },
    { value: 'grab', css: 'cursor: grab;', description: 'Grab cursor', descriptionMs: 'Kursor genggam' },
    { value: 'grabbing', css: 'cursor: grabbing;', description: 'Grabbing cursor', descriptionMs: 'Kursor menggenggam' }
  ],
  examples: [
    { code: '<button visual="cursor:pointer">Clickable</button>', description: 'Pointer cursor' }
  ]
};

// ======================
// USER SELECT
// ======================

export const userSelect = {
  name: 'user-select',
  property: 'visual',
  syntax: 'visual="select:[value]"',
  description: 'Control text selection',
  descriptionMs: 'Kawal pemilihan teks',
  category: 'visual',
  values: [
    { value: 'none', css: 'user-select: none;', description: 'Prevent selection', descriptionMs: 'Halang pemilihan' },
    { value: 'text', css: 'user-select: text;', description: 'Allow text selection', descriptionMs: 'Benarkan pemilihan teks' },
    { value: 'all', css: 'user-select: all;', description: 'Select all on click', descriptionMs: 'Pilih semua pada klik' },
    { value: 'auto', css: 'user-select: auto;', description: 'Default behavior', descriptionMs: 'Kelakuan lalai' }
  ],
  examples: [
    { code: '<div visual="select:none">Cannot select this text</div>', description: 'Prevent selection' }
  ]
};

// ======================
// POINTER EVENTS
// ======================

export const pointerEvents = {
  name: 'pointer-events',
  property: 'visual',
  syntax: 'visual="pointer-events:[value]"',
  description: 'Control pointer events',
  descriptionMs: 'Kawal peristiwa penunjuk',
  category: 'visual',
  values: [
    { value: 'none', css: 'pointer-events: none;', description: 'Ignore pointer events', descriptionMs: 'Abaikan peristiwa penunjuk' },
    { value: 'auto', css: 'pointer-events: auto;', description: 'Normal pointer events', descriptionMs: 'Peristiwa penunjuk normal' }
  ],
  examples: [
    { code: '<div visual="pointer-events:none">Click through</div>', description: 'Click through element' }
  ]
};

// ======================
// SVG FILL
// ======================

export const svgFill = {
  name: 'fill',
  property: 'visual',
  syntax: 'visual="fill:[color]"',
  description: 'Set SVG fill color',
  descriptionMs: 'Tetapkan warna pengisian SVG',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'fill: none;', description: 'No fill', descriptionMs: 'Tiada pengisian' },
    { value: 'current', css: 'fill: currentColor;', description: 'Current color', descriptionMs: 'Warna semasa' }
  ],
  examples: [
    { code: '<svg visual="fill:primary">...</svg>', description: 'Primary fill' }
  ]
};

// ======================
// SVG STROKE
// ======================

export const svgStroke = {
  name: 'stroke',
  property: 'visual',
  syntax: 'visual="stroke:[color]"',
  description: 'Set SVG stroke color',
  descriptionMs: 'Tetapkan warna gurisan SVG',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'stroke: none;', description: 'No stroke', descriptionMs: 'Tiada gurisan' },
    { value: 'current', css: 'stroke: currentColor;', description: 'Current color', descriptionMs: 'Warna semasa' }
  ],
  examples: [
    { code: '<svg visual="stroke:primary stroke-w:2">...</svg>', description: 'Primary stroke' }
  ]
};

// ======================
// SVG STROKE WIDTH
// ======================

export const svgStrokeWidth = {
  name: 'stroke-width',
  property: 'visual',
  syntax: 'visual="stroke-w:[value]"',
  description: 'Set SVG stroke width',
  descriptionMs: 'Tetapkan lebar gurisan SVG',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'stroke-width: 0;', description: 'No stroke', descriptionMs: 'Tiada gurisan' },
    { value: '1', css: 'stroke-width: 1px;', description: '1px stroke', descriptionMs: 'Gurisan 1px' },
    { value: '2', css: 'stroke-width: 2px;', description: '2px stroke', descriptionMs: 'Gurisan 2px' }
  ],
  examples: [
    { code: '<svg visual="stroke:black stroke-w:2">...</svg>', description: '2px stroke' }
  ]
};

// ======================
// MIX BLEND MODE
// ======================

export const mixBlendMode = {
  name: 'blend-modes',
  property: 'visual',
  syntax: 'visual="mix-blend:[value]"',
  description: 'Set mix blend mode',
  descriptionMs: 'Tetapkan mod campuran',
  category: 'visual',
  values: [
    { value: 'normal', css: 'mix-blend-mode: normal;', description: 'Normal blend', descriptionMs: 'Campuran normal' },
    { value: 'multiply', css: 'mix-blend-mode: multiply;', description: 'Multiply blend', descriptionMs: 'Campuran darab' },
    { value: 'screen', css: 'mix-blend-mode: screen;', description: 'Screen blend', descriptionMs: 'Campuran skrin' },
    { value: 'overlay', css: 'mix-blend-mode: overlay;', description: 'Overlay blend', descriptionMs: 'Campuran tindanan' },
    { value: 'darken', css: 'mix-blend-mode: darken;', description: 'Darken blend', descriptionMs: 'Campuran gelap' },
    { value: 'lighten', css: 'mix-blend-mode: lighten;', description: 'Lighten blend', descriptionMs: 'Campuran cerah' }
  ],
  examples: [
    { code: '<div visual="mix-blend:multiply">Multiply blend</div>', description: 'Multiply blend mode' }
  ]
};

// ======================
// ACCENT COLOR
// ======================

export const accentColor = {
  name: 'accent-color',
  property: 'visual',
  syntax: 'visual="accent:[color]"',
  description: 'Set accent color for form controls',
  descriptionMs: 'Tetapkan warna aksen untuk kawalan borang',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<input type="checkbox" visual="accent:primary">', description: 'Primary accent' }
  ]
};

// ======================
// CARET COLOR
// ======================

export const caretColor = {
  name: 'caret-color',
  property: 'visual',
  syntax: 'visual="caret:[color]"',
  description: 'Set text input caret color',
  descriptionMs: 'Tetapkan warna karet input teks',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<input visual="caret:primary">', description: 'Primary caret' }
  ]
};

// ======================
// APPEARANCE
// ======================

export const appearance = {
  name: 'appearance',
  property: 'visual',
  syntax: 'visual="appearance:[value]"',
  description: 'Control native appearance',
  descriptionMs: 'Kawal penampilan asli',
  category: 'visual',
  values: [
    { value: 'none', css: 'appearance: none;', description: 'Remove native styling', descriptionMs: 'Buang gaya asli' },
    { value: 'auto', css: 'appearance: auto;', description: 'Default appearance', descriptionMs: 'Penampilan lalai' }
  ],
  examples: [
    { code: '<select visual="appearance:none">Custom select</select>', description: 'Remove native styling' }
  ]
};

// Export all extended visual definitions
export const extendedVisualDefinitions = {
  filterBrightness,
  filterContrast,
  filterGrayscale,
  filterHueRotate,
  filterInvert,
  filterSaturate,
  filterSepia,
  filterDropShadow,
  backdropBlur,
  backdropBrightness,
  transitionProperty,
  transitionDuration,
  transitionTiming,
  transitionDelay,
  animation,
  animationDuration,
  animationDelay,
  animationIteration,
  animationDirection,
  animationFill,
  animationPlay,
  transformScale,
  transformRotate,
  transformTranslate,
  transformSkew,
  transformOrigin,
  borderColor,
  borderWidth,
  borderStyle,
  outlineColor,
  cursor,
  userSelect,
  pointerEvents,
  svgFill,
  svgStroke,
  svgStrokeWidth,
  mixBlendMode,
  accentColor,
  caretColor,
  appearance
};

export default extendedVisualDefinitions;
