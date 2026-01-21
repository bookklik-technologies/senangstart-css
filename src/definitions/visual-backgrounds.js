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
  ],
  preview: [
    {
      title: 'Background Gradient',
      titleMs: 'Gradien Latar',
      description: 'Apply gradient backgrounds',
      descriptionMs: 'Terapkan latar gradien',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 text:white rounded:small">gradient-to-r</div>
  <div space="p:medium" visual="bg-image:gradient-to-b from:emerald-500 to:blue-500 text:white rounded:small">gradient-to-b</div>
</div>`,
      highlightValue: 'bg-image:gradient-to-r'
    }
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
  ],
  preview: [
    {
      title: 'Background Attachment',
      titleMs: 'Lampiran Latar',
      description: 'Control how background scrolls',
      descriptionMs: 'Kawal cara latar skrol',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll</div>
</div>`,
      highlightValue: 'bg-attachment:fixed'
    }
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
  ],
  preview: [
    {
      title: 'Background Clip',
      titleMs: 'Keratan Latar',
      description: 'Clip background to text for gradient text effect',
      descriptionMs: 'Keratan latar kepada teks untuk kesan teks gradien',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span text="size:large weight:bold" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 bg-clip:text text:transparent">Gradient Text</span>
</div>`,
      highlightValue: 'bg-clip:text'
    }
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
  ],
  preview: [
    {
      title: 'Background Origin',
      titleMs: 'Asal Latar',
      description: 'Set background positioning origin',
      descriptionMs: 'Tetapkan asal kedudukan latar',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">border</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">padding</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>`,
      highlightValue: 'bg-origin:content'
    }
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
  ],
  preview: [
    {
      title: 'Background Position',
      titleMs: 'Kedudukan Latar',
      description: 'Position background image',
      descriptionMs: 'Kedudukkan imej latar',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>`,
      highlightValue: 'bg-pos:center'
    }
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
  ],
  preview: [
    {
      title: 'Background Repeat',
      titleMs: 'Ulangan Latar',
      description: 'Control background tiling',
      descriptionMs: 'Kawal jubin latar',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">no-repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat-x</div>
</div>`,
      highlightValue: 'bg-repeat:no-repeat'
    }
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
  ],
  preview: [
    {
      title: 'Background Size',
      titleMs: 'Saiz Latar',
      description: 'Scale background image',
      descriptionMs: 'Skala imej latar',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">cover</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">contain</div>
</div>`,
      highlightValue: 'bg-size:cover'
    }
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
  ],
  preview: [
    {
      title: 'Background Blend Mode',
      titleMs: 'Mod Campuran Latar',
      description: 'Blend backgrounds together',
      descriptionMs: 'Campurkan latar bersama',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">multiply</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">screen</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">overlay</div>
</div>`,
      highlightValue: 'bg-blend:multiply'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Blur',
      titleMs: 'Kabur Latar Belakang',
      description: 'Creates a frosted glass effect on content behind the element',
      descriptionMs: 'Mencipta kesan kaca beku pada kandungan di belakang elemen',
      html: `<div layout="flex:center" space="p:large" visual="bg-image:gradient-to-br from:blue-500 to:violet-500 rounded:medium">
  <div space="p:medium" visual="backdrop-blur:medium bg:[rgba(255,255,255,0.2)] rounded:small">
    <span visual="text:white">Frosted Glass</span>
  </div>
</div>`,
      highlightValue: 'backdrop-blur:medium'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Brightness',
      titleMs: 'Kecerahan Latar Belakang',
      description: 'Dim or brighten the backdrop behind an overlay',
      descriptionMs: 'Redupkan atau cerahkan latar belakang di sebalik tindanan',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg-image:gradient-to-br from:orange-500 to:red-500 rounded:medium">
  <div space="p:small" visual="backdrop-brightness:dim rounded:small text:white">dim (50%)</div>
  <div space="p:small" visual="backdrop-brightness:normal rounded:small text:white">normal</div>
  <div space="p:small" visual="backdrop-brightness:vivid rounded:small text:white">bright (150%)</div>
</div>`,
      highlightValue: 'backdrop-brightness:dark'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Contrast',
      titleMs: 'Kontras Latar Belakang',
      description: 'Adjust contrast behind element',
      descriptionMs: 'Laraskan kontras di belakang elemen',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">high</div>
</div>`,
      highlightValue: 'backdrop-contrast:high'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Grayscale',
      titleMs: 'Skala Kelabu Latar Belakang',
      description: 'Remove color from backdrop, creating a desaturated effect',
      descriptionMs: 'Alih keluar warna dari latar belakang, mencipta kesan tidak tepu',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-grayscale:full rounded:small text:white">Grayscale</div>
</div>`,
      highlightValue: 'backdrop-grayscale:full'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Hue Rotate',
      titleMs: 'Putaran Rona Latar Belakang',
      description: 'Rotate colors behind element',
      descriptionMs: 'Putar warna di belakang elemen',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">180°</div>
</div>`,
      highlightValue: 'backdrop-hue-rotate:90'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Invert',
      titleMs: 'Songsang Latar Belakang',
      description: 'Invert colors behind element',
      descriptionMs: 'Songsangkan warna di belakang elemen',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">full</div>
</div>`,
      highlightValue: 'backdrop-invert:full'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Opacity',
      titleMs: 'Kelegapan Latar Belakang',
      description: 'Control backdrop transparency',
      descriptionMs: 'Kawal ketelusan latar belakang',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">50</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100</div>
</div>`,
      highlightValue: 'backdrop-opacity:50'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Saturate',
      titleMs: 'Ketepuan Latar Belakang',
      description: 'Adjust saturation behind element',
      descriptionMs: 'Laraskan ketepuan di belakang elemen',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">vivid</div>
</div>`,
      highlightValue: 'backdrop-saturate:vivid'
    }
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
  ],
  preview: [
    {
      title: 'Backdrop Sepia',
      titleMs: 'Sepia Latar Belakang',
      description: 'Apply vintage sepia tone to the backdrop',
      descriptionMs: 'Terapkan ton sepia vintaj pada latar belakang',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-sepia:full rounded:small text:white">Sepia</div>
</div>`,
      highlightValue: 'backdrop-sepia:full'
    }
  ]
};

// ======================
// GRADIENT COLOR STOPS
// ======================

export const gradientFrom = {
  name: 'gradient-from',
  property: 'visual',
  syntax: 'visual="from:[color]"',
  description: 'Set gradient start color',
  descriptionMs: 'Tetapkan warna mula gradien',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'primary', css: '--tw-gradient-from: var(--c-primary); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);', description: 'Start from primary', descriptionMs: 'Mula dari utama' },
    { value: 'blue-500', css: '--tw-gradient-from: var(--c-blue-500); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);', description: 'Start from blue', descriptionMs: 'Mula dari biru' }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r from:blue-500 to:purple-500">Gradient</div>', description: 'Blue to purple gradient' }
  ],
  preview: [
    {
      title: 'Gradient From',
      titleMs: 'Mula Gradien',
      description: 'Set the starting color of a gradient',
      descriptionMs: 'Tetapkan warna permulaan gradien',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">from:blue-500 to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:emerald-500 to:blue-500 text:white rounded:small">from:emerald-500 to:blue-500</div>
</div>`,
      highlightValue: 'from:blue-500'
    }
  ]
};

export const gradientVia = {
  name: 'gradient-via',
  property: 'visual',
  syntax: 'visual="via:[color]"',
  description: 'Set gradient middle color',
  descriptionMs: 'Tetapkan warna tengah gradien',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'purple-500', css: '--tw-gradient-via: var(--c-purple-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to);', description: 'Via purple', descriptionMs: 'Melalui ungu' }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500">Three-color gradient</div>', description: 'Three-color gradient' }
  ],
  preview: [
    {
      title: 'Gradient Via',
      titleMs: 'Pertengahan Gradien',
      description: 'Add a middle color stop to gradients',
      descriptionMs: 'Tambah hentian warna tengah pada gradien',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500 text:white rounded:small">from:blue via:purple to:pink</div>
</div>`,
      highlightValue: 'via:purple-500'
    }
  ]
};

export const gradientTo = {
  name: 'gradient-to',
  property: 'visual',
  syntax: 'visual="to:[color]"',
  description: 'Set gradient end color',
  descriptionMs: 'Tetapkan warna akhir gradien',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'purple-500', css: '--tw-gradient-to: var(--c-purple-500);', description: 'End at purple', descriptionMs: 'Akhir di ungu' },
    { value: 'pink-500', css: '--tw-gradient-to: var(--c-pink-500);', description: 'End at pink', descriptionMs: 'Akhir di merah jambu' }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r from:blue-500 to:purple-500">Blue to purple</div>', description: 'End color' }
  ],
  preview: [
    {
      title: 'Gradient To',
      titleMs: 'Akhir Gradien',
      description: 'Set the ending color of a gradient',
      descriptionMs: 'Tetapkan warna pengakhiran gradien',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:pink-500 text:white rounded:small">to:pink-500</div>
</div>`,
      highlightValue: 'to:purple-500'
    }
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
  gradientFrom,
  gradientVia,
  gradientTo,
  backdropBlur,
  backdropBrightness,
  backdropContrast,
  backdropGrayscale,
  backdropHueRotate,
  backdropInvert,
  backdropOpacity,
  backdropSaturate,
  backdropSepia
};

export default backgroundDefinitions;
