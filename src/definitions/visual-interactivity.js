/**
 * SenangStart CSS - Interactivity Utility Definitions
 * Scroll, resize, touch, and other interactive utilities
 */

// ======================
// SCROLL BEHAVIOR
// ======================

export const scrollBehavior = {
  name: 'scroll-behavior',
  property: 'visual',
  syntax: 'visual="scroll-behavior:[value]"',
  description: 'Set scroll behavior',
  descriptionMs: 'Tetapkan kelakuan skrol',
  category: 'visual',
  values: [
    { value: 'auto', css: 'scroll-behavior: auto;', description: 'Instant scroll', descriptionMs: 'Skrol serta-merta' },
    { value: 'smooth', css: 'scroll-behavior: smooth;', description: 'Smooth scroll', descriptionMs: 'Skrol lancar' }
  ],
  examples: [
    { code: '<html visual="scroll-behavior:smooth">Smooth scrolling</html>', description: 'Smooth scroll' }
  ],
  preview: [
    {
      title: 'Scroll Behavior',
      titleMs: 'Kelakuan Skrol',
      description: 'Smooth or instant scrolling',
      descriptionMs: 'Skrol lancar atau serta-merta',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">smooth</div>
</div>`,
      highlightValue: 'scroll-behavior:smooth'
    }
  ]
};

// ======================
// SCROLL MARGIN
// ======================

export const scrollMargin = {
  name: 'scroll-margin',
  property: 'visual',
  syntax: 'visual="scroll-m:[value]"',
  description: 'Set scroll margin for snap',
  descriptionMs: 'Tetapkan margin skrol untuk snap',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: 'scroll-m', css: 'scroll-margin: {value};', description: 'All sides', descriptionMs: 'Semua sisi' },
    { value: 'scroll-m-t', css: 'scroll-margin-top: {value};', description: 'Top margin', descriptionMs: 'Margin atas' },
    { value: 'scroll-m-r', css: 'scroll-margin-right: {value};', description: 'Right margin', descriptionMs: 'Margin kanan' },
    { value: 'scroll-m-b', css: 'scroll-margin-bottom: {value};', description: 'Bottom margin', descriptionMs: 'Margin bawah' },
    { value: 'scroll-m-l', css: 'scroll-margin-left: {value};', description: 'Left margin', descriptionMs: 'Margin kiri' }
  ],
  examples: [
    { code: '<div visual="scroll-m:medium">Scroll margin</div>', description: 'Scroll margin' }
  ],
  preview: [
    {
      title: 'Scroll Margin',
      titleMs: 'Margin Skrol',
      description: 'Offset for scroll snap',
      descriptionMs: 'Offset untuk snap skrol',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-m:medium</div>
</div>`,
      highlightValue: 'scroll-m:medium'
    }
  ]
};

// ======================
// SCROLL PADDING
// ======================

export const scrollPadding = {
  name: 'scroll-padding',
  property: 'visual',
  syntax: 'visual="scroll-p:[value]"',
  description: 'Set scroll padding for snap',
  descriptionMs: 'Tetapkan padding skrol untuk snap',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: 'scroll-p', css: 'scroll-padding: {value};', description: 'All sides', descriptionMs: 'Semua sisi' },
    { value: 'scroll-p-t', css: 'scroll-padding-top: {value};', description: 'Top padding', descriptionMs: 'Padding atas' },
    { value: 'scroll-p-r', css: 'scroll-padding-right: {value};', description: 'Right padding', descriptionMs: 'Padding kanan' },
    { value: 'scroll-p-b', css: 'scroll-padding-bottom: {value};', description: 'Bottom padding', descriptionMs: 'Padding bawah' },
    { value: 'scroll-p-l', css: 'scroll-padding-left: {value};', description: 'Left padding', descriptionMs: 'Padding kiri' }
  ],
  examples: [
    { code: '<div visual="scroll-p:big">Scroll padding</div>', description: 'Scroll padding' }
  ],
  preview: [
    {
      title: 'Scroll Padding',
      titleMs: 'Padding Skrol',
      description: 'Padding for scroll snap container',
      descriptionMs: 'Padding untuk bekas snap skrol',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-p:big</div>
</div>`,
      highlightValue: 'scroll-p:big'
    }
  ]
};

// ======================
// SCROLL SNAP ALIGN
// ======================

export const scrollSnapAlign = {
  name: 'scroll-snap-align',
  property: 'visual',
  syntax: 'visual="snap-align:[value]"',
  description: 'Set scroll snap alignment',
  descriptionMs: 'Tetapkan penjajaran snap skrol',
  category: 'visual',
  values: [
    { value: 'start', css: 'scroll-snap-align: start;', description: 'Snap to start', descriptionMs: 'Snap ke permulaan' },
    { value: 'end', css: 'scroll-snap-align: end;', description: 'Snap to end', descriptionMs: 'Snap ke hujung' },
    { value: 'center', css: 'scroll-snap-align: center;', description: 'Snap to center', descriptionMs: 'Snap ke tengah' },
    { value: 'none', css: 'scroll-snap-align: none;', description: 'No snap', descriptionMs: 'Tiada snap' }
  ],
  examples: [
    { code: '<div visual="snap-align:start">Snap to start</div>', description: 'Start alignment' }
  ],
  preview: [
    {
      title: 'Snap Alignment',
      titleMs: 'Penjajaran Snap',
      description: 'Where to snap within container',
      descriptionMs: 'Tempat untuk snap dalam bekas',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">start</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">end</div>
</div>`,
      highlightValue: 'snap-align:start'
    }
  ]
};

// ======================
// SCROLL SNAP STOP
// ======================

export const scrollSnapStop = {
  name: 'scroll-snap-stop',
  property: 'visual',
  syntax: 'visual="snap-stop:[value]"',
  description: 'Control scroll snap stop behavior',
  descriptionMs: 'Kawal kelakuan hentian snap skrol',
  category: 'visual',
  values: [
    { value: 'normal', css: 'scroll-snap-stop: normal;', description: 'Normal stop', descriptionMs: 'Hentian biasa' },
    { value: 'always', css: 'scroll-snap-stop: always;', description: 'Always stop', descriptionMs: 'Sentiasa berhenti' }
  ],
  examples: [
    { code: '<div visual="snap-stop:always">Always stop here</div>', description: 'Force stop' }
  ],
  preview: [
    {
      title: 'Snap Stop',
      titleMs: 'Hentian Snap',
      description: 'Control whether to stop at snap point',
      descriptionMs: 'Kawal sama ada berhenti di titik snap',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">always</div>
</div>`,
      highlightValue: 'snap-stop:always'
    }
  ]
};

// ======================
// SCROLL SNAP TYPE
// ======================

export const scrollSnapType = {
  name: 'scroll-snap-type',
  property: 'visual',
  syntax: 'visual="snap-type:[value]"',
  description: 'Set scroll snap type',
  descriptionMs: 'Tetapkan jenis snap skrol',
  category: 'visual',
  values: [
    { value: 'none', css: 'scroll-snap-type: none;', description: 'No snapping', descriptionMs: 'Tiada snapping' },
    { value: 'x', css: 'scroll-snap-type: x mandatory;', description: 'Horizontal snap', descriptionMs: 'Snap mendatar' },
    { value: 'y', css: 'scroll-snap-type: y mandatory;', description: 'Vertical snap', descriptionMs: 'Snap menegak' },
    { value: 'both', css: 'scroll-snap-type: both mandatory;', description: 'Both axes', descriptionMs: 'Kedua-dua paksi' },
    { value: 'x-proximity', css: 'scroll-snap-type: x proximity;', description: 'Horizontal proximity', descriptionMs: 'Kedekatan mendatar' },
    { value: 'y-proximity', css: 'scroll-snap-type: y proximity;', description: 'Vertical proximity', descriptionMs: 'Kedekatan menegak' }
  ],
  examples: [
    { code: '<div visual="snap-type:x">Horizontal snap container</div>', description: 'Horizontal snap' }
  ],
  preview: [
    {
      title: 'Snap Type',
      titleMs: 'Jenis Snap',
      description: 'Enable scroll snapping',
      descriptionMs: 'Dayakan snapping skrol',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>`,
      highlightValue: 'snap-type:x'
    }
  ]
};

// ======================
// TOUCH ACTION
// ======================

export const touchAction = {
  name: 'touch-action',
  property: 'visual',
  syntax: 'visual="touch:[value]"',
  description: 'Control touch interactions',
  descriptionMs: 'Kawal interaksi sentuh',
  category: 'visual',
  values: [
    { value: 'auto', css: 'touch-action: auto;', description: 'Default touch', descriptionMs: 'Sentuh lalai' },
    { value: 'none', css: 'touch-action: none;', description: 'Disable touch', descriptionMs: 'Lumpuhkan sentuh' },
    { value: 'pan-x', css: 'touch-action: pan-x;', description: 'Pan horizontally', descriptionMs: 'Pan mendatar' },
    { value: 'pan-y', css: 'touch-action: pan-y;', description: 'Pan vertically', descriptionMs: 'Pan menegak' },
    { value: 'pan-left', css: 'touch-action: pan-left;', description: 'Pan left', descriptionMs: 'Pan kiri' },
    { value: 'pan-right', css: 'touch-action: pan-right;', description: 'Pan right', descriptionMs: 'Pan kanan' },
    { value: 'pinch-zoom', css: 'touch-action: pinch-zoom;', description: 'Pinch to zoom', descriptionMs: 'Cubit untuk zum' },
    { value: 'manipulation', css: 'touch-action: manipulation;', description: 'Pan and pinch only', descriptionMs: 'Pan dan cubit sahaja' }
  ],
  examples: [
    { code: '<div visual="touch:manipulation">Touch optimized</div>', description: 'Optimized touch' }
  ],
  preview: [
    {
      title: 'Touch Action',
      titleMs: 'Tindakan Sentuh',
      description: 'Control touch gestures',
      descriptionMs: 'Kawal gerak isyarat sentuh',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manipulation</div>
</div>`,
      highlightValue: 'touch:manipulation'
    }
  ]
};

// ======================
// RESIZE
// ======================

export const resize = {
  name: 'resize',
  property: 'visual',
  syntax: 'visual="resize:[value]"',
  description: 'Control element resizing',
  descriptionMs: 'Kawal saiz semula elemen',
  category: 'visual',
  values: [
    { value: 'none', css: 'resize: none;', description: 'No resize', descriptionMs: 'Tiada saiz semula' },
    { value: 'both', css: 'resize: both;', description: 'Resize both', descriptionMs: 'Saiz semula kedua-dua' },
    { value: 'x', css: 'resize: horizontal;', description: 'Resize horizontal', descriptionMs: 'Saiz semula mendatar' },
    { value: 'y', css: 'resize: vertical;', description: 'Resize vertical', descriptionMs: 'Saiz semula menegak' }
  ],
  examples: [
    { code: '<textarea visual="resize:y">Vertical resize only</textarea>', description: 'Vertical resize' }
  ],
  preview: [
    {
      title: 'Resize',
      titleMs: 'Saiz Semula',
      description: 'Allow element resizing',
      descriptionMs: 'Benarkan saiz semula elemen',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>`,
      highlightValue: 'resize:y'
    }
  ]
};

// ======================
// WILL CHANGE
// ======================

export const willChange = {
  name: 'will-change',
  property: 'visual',
  syntax: 'visual="will-change:[value]"',
  description: 'Hint browser about upcoming changes',
  descriptionMs: 'Beri petunjuk kepada pelayar tentang perubahan akan datang',
  category: 'visual',
  values: [
    { value: 'auto', css: 'will-change: auto;', description: 'Auto optimization', descriptionMs: 'Pengoptimuman automatik' },
    { value: 'scroll', css: 'will-change: scroll-position;', description: 'Scroll changes', descriptionMs: 'Perubahan skrol' },
    { value: 'contents', css: 'will-change: contents;', description: 'Content changes', descriptionMs: 'Perubahan kandungan' },
    { value: 'transform', css: 'will-change: transform;', description: 'Transform changes', descriptionMs: 'Perubahan transform' },
    { value: 'opacity', css: 'will-change: opacity;', description: 'Opacity changes', descriptionMs: 'Perubahan kelegapan' }
  ],
  examples: [
    { code: '<div visual="will-change:transform">Optimized for animation</div>', description: 'Transform optimization' }
  ],
  preview: [
    {
      title: 'Will Change',
      titleMs: 'Akan Berubah',
      description: 'Optimize for upcoming changes',
      descriptionMs: 'Optimumkan untuk perubahan akan datang',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">transform</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">opacity</div>
</div>`,
      highlightValue: 'will-change:transform'
    }
  ]
};

// ======================
// COLOR SCHEME
// ======================

export const colorScheme = {
  name: 'color-scheme',
  property: 'visual',
  syntax: 'visual="color-scheme:[value]"',
  description: 'Set preferred color scheme',
  descriptionMs: 'Tetapkan skema warna pilihan',
  category: 'visual',
  values: [
    { value: 'light', css: 'color-scheme: light;', description: 'Light mode', descriptionMs: 'Mod cerah' },
    { value: 'dark', css: 'color-scheme: dark;', description: 'Dark mode', descriptionMs: 'Mod gelap' },
    { value: 'normal', css: 'color-scheme: normal;', description: 'System default', descriptionMs: 'Lalai sistem' }
  ],
  examples: [
    { code: '<html visual="color-scheme:dark">Dark mode</html>', description: 'Dark mode' }
  ],
  preview: [
    {
      title: 'Color Scheme',
      titleMs: 'Skema Warna',
      description: 'Set preferred color mode',
      descriptionMs: 'Tetapkan mod warna pilihan',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">light</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">dark</div>
</div>`,
      highlightValue: 'color-scheme:dark'
    }
  ]
};

// ======================
// FIELD SIZING
// ======================

export const fieldSizing = {
  name: 'field-sizing',
  property: 'visual',
  syntax: 'visual="field-sizing:[value]"',
  description: 'Control form field sizing',
  descriptionMs: 'Kawal saiz medan borang',
  category: 'visual',
  values: [
    { value: 'fixed', css: 'field-sizing: fixed;', description: 'Fixed size', descriptionMs: 'Saiz tetap' },
    { value: 'content', css: 'field-sizing: content;', description: 'Size to content', descriptionMs: 'Saiz mengikut kandungan' }
  ],
  examples: [
    { code: '<textarea visual="field-sizing:content">Auto-grow textarea</textarea>', description: 'Auto-grow' }
  ],
  preview: [
    {
      title: 'Field Sizing',
      titleMs: 'Saiz Medan',
      description: 'Grow field with content',
      descriptionMs: 'Besarkan medan dengan kandungan',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>`,
      highlightValue: 'field-sizing:content'
    }
  ]
};

// ======================
// FORCED COLOR ADJUST
// ======================

export const forcedColorAdjust = {
  name: 'forced-color-adjust',
  property: 'visual',
  syntax: 'visual="forced-color:[value]"',
  description: 'Control forced colors mode behavior',
  descriptionMs: 'Kawal kelakuan mod warna paksa',
  category: 'visual',
  values: [
    { value: 'auto', css: 'forced-color-adjust: auto;', description: 'Auto adjust', descriptionMs: 'Penyesuaian automatik' },
    { value: 'none', css: 'forced-color-adjust: none;', description: 'No adjustment', descriptionMs: 'Tiada penyesuaian' }
  ],
  examples: [
    { code: '<div visual="forced-color:none">Preserve colors in high contrast</div>', description: 'Preserve colors' }
  ],
  preview: [
    {
      title: 'Forced Color Adjust',
      titleMs: 'Penyesuaian Warna Paksa',
      description: 'Control high contrast mode',
      descriptionMs: 'Kawal mod kontras tinggi',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
</div>`,
      highlightValue: 'forced-color:none'
    }
  ]
};

// Export all interactivity definitions
export const interactivityDefinitions = {
  scrollBehavior,
  scrollMargin,
  scrollPadding,
  scrollSnapAlign,
  scrollSnapStop,
  scrollSnapType,
  touchAction,
  resize,
  willChange,
  colorScheme,
  fieldSizing,
  forcedColorAdjust
};

export default interactivityDefinitions;
