/**
 * SenangStart CSS - Visual Utility Definitions
 * Single source of truth for visual utilities (colors, typography, effects)
 */

// ======================
// BACKGROUND COLOR
// ======================

export const backgroundColor = {
  name: 'background-color',
  property: 'visual',
  syntax: 'visual="bg:[color]"',
  description: 'Set background color',
  descriptionMs: 'Tetapkan warna latar belakang',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [],  // Uses color scale dynamically
  examples: [
    { code: '<div visual="bg:primary">Primary background</div>', description: 'Theme color' },
    { code: '<div visual="bg:blue-500">Blue background</div>', description: 'Palette color' },
    { code: '<div visual="bg:[#FF5733]">Custom color</div>', description: 'Arbitrary color' }
  ],
  preview: [
    {
      title: 'Background Color',
      titleMs: 'Warna Latar Belakang',
      description: 'Apply solid background colors from theme or palette',
      descriptionMs: 'Terapkan warna latar pepejal dari tema atau palet',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">primary</div>
  <div space="p:small" visual="bg:secondary text:white rounded:small">secondary</div>
  <div space="p:small" visual="bg:success text:white rounded:small">success</div>
  <div space="p:small" visual="bg:warning text:black rounded:small">warning</div>
  <div space="p:small" visual="bg:danger text:white rounded:small">danger</div>
</div>`,
      highlightValue: 'bg:primary'
    }
  ]
};

// ======================
// TEXT COLOR
// ======================

export const textColor = {
  name: 'text-color',
  property: 'visual',
  syntax: 'visual="text:[color]"',
  description: 'Set text color',
  descriptionMs: 'Tetapkan warna teks',
  category: 'visual',
  usesScale: 'colors',
  supportsArbitrary: true,
  values: [
    { value: 'left', css: 'text-align: left;', description: 'Align left', descriptionMs: 'Jajar kiri' },
    { value: 'center', css: 'text-align: center;', description: 'Align center', descriptionMs: 'Jajar tengah' },
    { value: 'right', css: 'text-align: right;', description: 'Align right', descriptionMs: 'Jajar kanan' },
    { value: 'justify', css: 'text-align: justify;', description: 'Justify text', descriptionMs: 'Jajar sepenuh' }
  ],
  examples: [
    { code: '<div visual="text:white">White text</div>', description: 'Theme color' },
    { code: '<div visual="text:center">Centered text</div>', description: 'Text alignment' }
  ],
  preview: [
    {
      title: 'Text Color',
      titleMs: 'Warna Teks',
      description: 'Set text color from theme or palette',
      descriptionMs: 'Tetapkan warna teks dari tema atau palet',
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text:primary">Primary</span>
  <span visual="text:secondary">Secondary</span>
  <span visual="text:success">Success</span>
  <span visual="text:danger">Danger</span>
</div>`,
      highlightValue: 'text:primary'
    }
  ]
};

// ======================
// FONT SIZE
// ======================

export const fontSize = {
  name: 'text-size',
  property: 'visual',
  syntax: 'visual="text-size:[value]"',
  description: 'Set font size',
  descriptionMs: 'Tetapkan saiz fon',
  category: 'visual',
  usesScale: 'fontSize',
  supportsArbitrary: true,
  examples: [
    { code: '<div visual="text-size:big">Large text</div>', description: 'Scale value' },
    { code: '<div visual="text-size:[24px]">24px text</div>', description: 'Arbitrary' }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind font scale: `text-size:tw-xl` (1.25rem), `text-size:tw-2xl` (1.5rem)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala fon Tailwind: `text-size:tw-xl` (1.25rem), `text-size:tw-2xl` (1.5rem)',
      link: 'https://tailwindcss.com/docs/font-size'
    }
  ],
  preview: [
    {
      title: 'Font Size',
      titleMs: 'Saiz Fon',
      description: 'Scale text size from tiny to giant',
      descriptionMs: 'Skala saiz teks dari kecil hingga gergasi',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="align-items: baseline;">
  <span style="font-size: 0.75rem;">tiny</span>
  <span style="font-size: 0.875rem;">small</span>
  <span style="font-size: 1rem;">medium</span>
  <span style="font-size: 1.25rem;">big</span>
  <span style="font-size: 1.5rem;">giant</span>
</div>`,
      highlightValue: 'text-size:big'
    }
  ]
};

// ======================
// FONT WEIGHT
// ======================

export const fontWeight = {
  name: 'font-weight',
  property: 'visual',
  syntax: 'visual="font:[weight]"',
  description: 'Set font weight',
  descriptionMs: 'Tetapkan berat fon',
  category: 'visual',
  usesScale: 'fontWeight',
  values: [
    { value: 'normal', css: 'font-weight: var(--fw-normal);', description: 'Normal weight', descriptionMs: 'Berat normal' },
    { value: 'medium', css: 'font-weight: var(--fw-medium);', description: 'Medium weight', descriptionMs: 'Berat sederhana' },
    { value: 'bold', css: 'font-weight: var(--fw-bold);', description: 'Bold weight', descriptionMs: 'Berat tebal' }
  ],
  examples: [
    { code: '<div visual="font:bold">Bold text</div>', description: 'Bold weight' },
    { code: '<div visual="font:tw-semibold">Semibold text</div>', description: 'Tailwind semibold' }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind font weight scale: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala berat fon Tailwind: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)',
      link: 'https://tailwindcss.com/docs/font-weight'
    }
  ],
  preview: [
    {
      title: 'Font Weight',
      titleMs: 'Berat Fon',
      description: 'Control text thickness',
      descriptionMs: 'Kawal ketebalan teks',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="font-weight: 400;">normal</span>
  <span style="font-weight: 500;">medium</span>
  <span style="font-weight: 700;">bold</span>
</div>`,
      highlightValue: 'font:bold'
    }
  ]
};

// ======================
// FONT FAMILY
// ======================

export const fontFamily = {
  name: 'font-family',
  property: 'visual',
  syntax: 'visual="font:[family]"',
  description: 'Set font family',
  descriptionMs: 'Tetapkan keluarga fon',
  category: 'visual',
  values: [
    { value: 'sans', css: 'font-family: ui-sans-serif, system-ui, sans-serif;', description: 'Sans-serif', descriptionMs: 'Sans-serif' },
    { value: 'serif', css: 'font-family: ui-serif, Georgia, serif;', description: 'Serif', descriptionMs: 'Serif' },
    { value: 'mono', css: 'font-family: ui-monospace, monospace;', description: 'Monospace', descriptionMs: 'Monospace' }
  ],
  examples: [
    { code: '<div visual="font:mono">Monospace text</div>', description: 'Monospace font' }
  ],
  preview: [
    {
      title: 'Font Family',
      titleMs: 'Keluarga Fon',
      description: 'Choose between sans, serif, or mono',
      descriptionMs: 'Pilih antara sans, serif, atau mono',
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="font-family: ui-sans-serif, system-ui, sans-serif;">Sans-serif font</span>
  <span style="font-family: ui-serif, Georgia, serif;">Serif font</span>
  <span style="font-family: ui-monospace, monospace;">Monospace font</span>
</div>`,
      highlightValue: 'font:sans'
    }
  ]
};

// ======================
// TYPOGRAPHY KEYWORDS
// ======================

export const typographyKeywords = {
  name: 'typography-keywords',
  property: 'visual',
  syntax: 'visual="[keyword]"',
  description: 'Typography utility keywords',
  descriptionMs: 'Kata kunci utiliti tipografi',
  category: 'visual',
  values: [
    // Font Style
    { value: 'italic', css: 'font-style: italic;', description: 'Italic text', descriptionMs: 'Teks italic' },
    { value: 'not-italic', css: 'font-style: normal;', description: 'Normal style', descriptionMs: 'Gaya normal' },
    
    // Font Smoothing
    { value: 'antialiased', css: '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;', description: 'Antialiased text', descriptionMs: 'Teks antialias' },
    { value: 'subpixel-antialiased', css: '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;', description: 'Subpixel antialiasing', descriptionMs: 'Antialias subpiksel' },
    
    // Text Transform
    { value: 'uppercase', css: 'text-transform: uppercase;', description: 'Uppercase text', descriptionMs: 'Teks huruf besar' },
    { value: 'lowercase', css: 'text-transform: lowercase;', description: 'Lowercase text', descriptionMs: 'Teks huruf kecil' },
    { value: 'capitalize', css: 'text-transform: capitalize;', description: 'Capitalize words', descriptionMs: 'Huruf besar awal perkataan' },
    { value: 'normal-case', css: 'text-transform: none;', description: 'Normal case', descriptionMs: 'Kes normal' },
    
    // Text Decoration
    { value: 'underline', css: 'text-decoration-line: underline;', description: 'Underline text', descriptionMs: 'Garis bawah teks' },
    { value: 'overline', css: 'text-decoration-line: overline;', description: 'Overline text', descriptionMs: 'Garis atas teks' },
    { value: 'line-through', css: 'text-decoration-line: line-through;', description: 'Strikethrough', descriptionMs: 'Garis potong' },
    { value: 'no-underline', css: 'text-decoration-line: none;', description: 'No decoration', descriptionMs: 'Tiada hiasan' },
    
    // Text Decoration Style
    { value: 'decoration-solid', css: 'text-decoration-style: solid;', description: 'Solid line', descriptionMs: 'Garisan pepejal' },
    { value: 'decoration-double', css: 'text-decoration-style: double;', description: 'Double line', descriptionMs: 'Garisan berganda' },
    { value: 'decoration-dotted', css: 'text-decoration-style: dotted;', description: 'Dotted line', descriptionMs: 'Garisan bertitik' },
    { value: 'decoration-dashed', css: 'text-decoration-style: dashed;', description: 'Dashed line', descriptionMs: 'Garisan putus-putus' },
    { value: 'decoration-wavy', css: 'text-decoration-style: wavy;', description: 'Wavy line', descriptionMs: 'Garisan bergelombang' },
    
    // Text Overflow
    { value: 'truncate', css: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;', description: 'Truncate with ellipsis', descriptionMs: 'Potong dengan elipsis' },
    { value: 'text-ellipsis', css: 'text-overflow: ellipsis;', description: 'Ellipsis overflow', descriptionMs: 'Limpahan elipsis' },
    { value: 'text-clip', css: 'text-overflow: clip;', description: 'Clip overflow', descriptionMs: 'Limpahan potong' },
    
    // Text Wrap
    { value: 'text-wrap', css: 'text-wrap: wrap;', description: 'Wrap text', descriptionMs: 'Bungkus teks' },
    { value: 'text-nowrap', css: 'text-wrap: nowrap;', description: 'No wrap', descriptionMs: 'Tiada bungkusan' },
    { value: 'text-balance', css: 'text-wrap: balance;', description: 'Balanced wrapping', descriptionMs: 'Bungkusan seimbang' },
    { value: 'text-pretty', css: 'text-wrap: pretty;', description: 'Pretty wrapping', descriptionMs: 'Bungkusan cantik' },
    
    // Whitespace
    { value: 'whitespace-normal', css: 'white-space: normal;', description: 'Normal whitespace', descriptionMs: 'Ruang putih normal' },
    { value: 'whitespace-nowrap', css: 'white-space: nowrap;', description: 'No wrap whitespace', descriptionMs: 'Tiada bungkusan ruang putih' },
    { value: 'whitespace-pre', css: 'white-space: pre;', description: 'Preserve whitespace', descriptionMs: 'Kekalkan ruang putih' },
    { value: 'whitespace-pre-line', css: 'white-space: pre-line;', description: 'Pre-line whitespace', descriptionMs: 'Ruang putih pra-baris' },
    { value: 'whitespace-pre-wrap', css: 'white-space: pre-wrap;', description: 'Pre-wrap whitespace', descriptionMs: 'Ruang putih pra-bungkus' },
    { value: 'whitespace-break-spaces', css: 'white-space: break-spaces;', description: 'Break spaces', descriptionMs: 'Ruang putih pecah' },
    
    // Word Break
    { value: 'break-normal', css: 'overflow-wrap: normal; word-break: normal;', description: 'Normal word break', descriptionMs: 'Pemecahan perkataan normal' },
    { value: 'break-words', css: 'overflow-wrap: break-word;', description: 'Break words', descriptionMs: 'Pecahkan perkataan' },
    { value: 'break-all', css: 'word-break: break-all;', description: 'Break all', descriptionMs: 'Pecahkan semua' },
    { value: 'break-keep', css: 'word-break: keep-all;', description: 'Keep all', descriptionMs: 'Kekalkan semua' },
    
    // Hyphens
    { value: 'hyphens-none', css: 'hyphens: none;', description: 'No hyphens', descriptionMs: 'Tiada tanda sempang' },
    { value: 'hyphens-manual', css: 'hyphens: manual;', description: 'Manual hyphens', descriptionMs: 'Tanda sempang manual' },
    { value: 'hyphens-auto', css: 'hyphens: auto;', description: 'Auto hyphens', descriptionMs: 'Tanda sempang automatik' },
    
    // Vertical Align
    { value: 'align-baseline', css: 'vertical-align: baseline;', description: 'Baseline align', descriptionMs: 'Jajar garis asas' },
    { value: 'align-top', css: 'vertical-align: top;', description: 'Top align', descriptionMs: 'Jajar atas' },
    { value: 'align-middle', css: 'vertical-align: middle;', description: 'Middle align', descriptionMs: 'Jajar tengah' },
    { value: 'align-bottom', css: 'vertical-align: bottom;', description: 'Bottom align', descriptionMs: 'Jajar bawah' },
    { value: 'align-text-top', css: 'vertical-align: text-top;', description: 'Text top align', descriptionMs: 'Jajar atas teks' },
    { value: 'align-text-bottom', css: 'vertical-align: text-bottom;', description: 'Text bottom align', descriptionMs: 'Jajar bawah teks' },
    { value: 'align-sub', css: 'vertical-align: sub;', description: 'Subscript align', descriptionMs: 'Jajar subskrip' },
    { value: 'align-super', css: 'vertical-align: super;', description: 'Superscript align', descriptionMs: 'Jajar superskrip' },
    
    // List Style
    { value: 'list-none', css: 'list-style-type: none;', description: 'No list style', descriptionMs: 'Tiada gaya senarai' },
    { value: 'list-disc', css: 'list-style-type: disc;', description: 'Disc bullets', descriptionMs: 'Bullet bulat' },
    { value: 'list-decimal', css: 'list-style-type: decimal;', description: 'Decimal numbers', descriptionMs: 'Nombor perpuluhan' },
    { value: 'list-square', css: 'list-style-type: square;', description: 'Square bullets', descriptionMs: 'Bullet segi empat' },
    { value: 'list-inside', css: 'list-style-position: inside;', description: 'Inside position', descriptionMs: 'Kedudukan dalam' },
    { value: 'list-outside', css: 'list-style-position: outside;', description: 'Outside position', descriptionMs: 'Kedudukan luar' }
  ],
  examples: [
    { code: '<span visual="italic">Italic text</span>', description: 'Italic' },
    { code: '<span visual="uppercase">Uppercase</span>', description: 'Uppercase' },
    { code: '<span visual="truncate">Truncated text...</span>', description: 'Truncate' }
  ],
  preview: [
    {
      title: 'Typography Keywords',
      titleMs: 'Kata Kunci Tipografi',
      description: 'Quick typography utilities without value syntax',
      descriptionMs: 'Utiliti tipografi pantas tanpa sintaks nilai',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="font-style: italic;">italic</span>
  <span style="text-transform: uppercase;">upper</span>
  <span style="text-decoration: underline;">underline</span>
  <span style="text-decoration: line-through;">strike</span>
</div>`,
      highlightValue: 'italic'
    }
  ]
};

// ======================
// LETTER SPACING
// ======================

export const letterSpacing = {
  name: 'letter-spacing',
  property: 'visual',
  syntax: 'visual="tracking:[value]"',
  description: 'Set letter spacing',
  descriptionMs: 'Tetapkan jarak huruf',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'tighter', css: 'letter-spacing: -0.05em;', description: 'Tighter spacing', descriptionMs: 'Jarak lebih ketat' },
    { value: 'tight', css: 'letter-spacing: -0.025em;', description: 'Tight spacing', descriptionMs: 'Jarak ketat' },
    { value: 'normal', css: 'letter-spacing: 0;', description: 'Normal spacing', descriptionMs: 'Jarak normal' },
    { value: 'wide', css: 'letter-spacing: 0.025em;', description: 'Wide spacing', descriptionMs: 'Jarak luas' },
    { value: 'wider', css: 'letter-spacing: 0.05em;', description: 'Wider spacing', descriptionMs: 'Jarak lebih luas' },
    { value: 'widest', css: 'letter-spacing: 0.1em;', description: 'Widest spacing', descriptionMs: 'Jarak paling luas' }
  ],
  examples: [
    { code: '<div visual="tracking:wide">Wide tracking</div>', description: 'Wide' }
  ],
  preview: [
    {
      title: 'Letter Spacing',
      titleMs: 'Jarak Huruf',
      description: 'Adjust spacing between characters',
      descriptionMs: 'Laraskan jarak antara aksara',
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span style="letter-spacing: -0.05em;">tighter spacing</span>
  <span style="letter-spacing: 0;">normal spacing</span>
  <span style="letter-spacing: 0.1em;">widest spacing</span>
</div>`,
      highlightValue: 'tracking:wide'
    }
  ]
};

// ======================
// LINE HEIGHT
// ======================

export const lineHeight = {
  name: 'line-height',
  property: 'visual',
  syntax: 'visual="leading:[value]"',
  description: 'Set line height',
  descriptionMs: 'Tetapkan ketinggian baris',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'line-height: 1;', description: 'No extra height', descriptionMs: 'Tiada ketinggian tambahan' },
    { value: 'tight', css: 'line-height: 1.25;', description: 'Tight leading', descriptionMs: 'Peneraju ketat' },
    { value: 'snug', css: 'line-height: 1.375;', description: 'Snug leading', descriptionMs: 'Peneraju ketat' },
    { value: 'normal', css: 'line-height: 1.5;', description: 'Normal leading', descriptionMs: 'Peneraju normal' },
    { value: 'relaxed', css: 'line-height: 1.625;', description: 'Relaxed leading', descriptionMs: 'Peneraju santai' },
    { value: 'loose', css: 'line-height: 2;', description: 'Loose leading', descriptionMs: 'Peneraju longgar' }
  ],
  examples: [
    { code: '<div visual="leading:relaxed">Relaxed line height</div>', description: 'Relaxed' }
  ],
  preview: [
    {
      title: 'Line Height',
      titleMs: 'Ketinggian Baris',
      description: 'Control vertical spacing between lines',
      descriptionMs: 'Kawal jarak menegak antara baris',
      html: `<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p style="line-height: 1; margin: 0;">Tight leading<br>for headings</p>
  <p style="line-height: 1.5; margin: 0;">Normal leading<br>for body text</p>
  <p style="line-height: 2; margin: 0;">Loose leading<br>for readability</p>
</div>`,
      highlightValue: 'leading:relaxed'
    }
  ]
};

// ======================
// BORDER RADIUS
// ======================

export const borderRadius = {
  name: 'border-radius',
  property: 'visual',
  syntax: 'visual="rounded:[value]"',
  description: 'Set border radius',
  descriptionMs: 'Tetapkan jejari sempadan',
  category: 'visual',
  usesScale: 'radius',
  values: [
    { value: 'none', css: 'border-radius: var(--r-none);', description: 'No rounding', descriptionMs: 'Tiada pembulatan' },
    { value: 'small', css: 'border-radius: var(--r-small);', description: 'Small radius', descriptionMs: 'Jejari kecil' },
    { value: 'medium', css: 'border-radius: var(--r-medium);', description: 'Medium radius', descriptionMs: 'Jejari sederhana' },
    { value: 'big', css: 'border-radius: var(--r-big);', description: 'Large radius', descriptionMs: 'Jejari besar' },
    { value: 'round', css: 'border-radius: var(--r-round);', description: 'Fully round', descriptionMs: 'Sepenuhnya bulat' }
  ],
  examples: [
    { code: '<div visual="rounded:medium">Rounded corners</div>', description: 'Medium radius' },
    { code: '<div visual="rounded:round">Pill shape</div>', description: 'Pill' }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind radius scale: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala jejari Tailwind: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)',
      link: 'https://tailwindcss.com/docs/border-radius'
    }
  ],
  preview: [
    {
      title: 'Border Radius',
      titleMs: 'Jejari Sempadan',
      description: 'Round element corners from subtle to pill-shaped',
      descriptionMs: 'Bulatkan sudut elemen dari halus hingga berbentuk pil',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0;">none</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.25rem;">small</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.5rem;">medium</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 9999px;">round</div>
</div>`,
      highlightValue: 'rounded:medium'
    }
  ]
};

// ======================
// BOX SHADOW
// ======================

export const boxShadow = {
  name: 'box-shadow',
  property: 'visual',
  syntax: 'visual="shadow:[value]"',
  description: 'Add box shadow',
  descriptionMs: 'Tambah bayang kotak',
  category: 'visual',
  usesScale: 'shadow',
  values: [
    { value: 'none', css: 'box-shadow: var(--shadow-none);', description: 'No shadow', descriptionMs: 'Tiada bayang' },
    { value: 'small', css: 'box-shadow: var(--shadow-small);', description: 'Small shadow', descriptionMs: 'Bayang kecil' },
    { value: 'medium', css: 'box-shadow: var(--shadow-medium);', description: 'Medium shadow', descriptionMs: 'Bayang sederhana' },
    { value: 'big', css: 'box-shadow: var(--shadow-big);', description: 'Large shadow', descriptionMs: 'Bayang besar' },
    { value: 'giant', css: 'box-shadow: var(--shadow-giant);', description: 'Giant shadow', descriptionMs: 'Bayang gergasi' }
  ],
  examples: [
    { code: '<div visual="shadow:medium">Card with shadow</div>', description: 'Medium shadow' }
  ],
  footnotes: [
    {
      title: 'Tailwind Scale Support',
      titleMs: 'Sokongan Skala Tailwind',
      content: 'Use `tw-` prefix to access Tailwind shadow scale: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`',
      contentMs: 'Gunakan awalan `tw-` untuk mengakses skala bayang Tailwind: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`',
      link: 'https://tailwindcss.com/docs/box-shadow'
    }
  ],
  preview: [
    {
      title: 'Box Shadow',
      titleMs: 'Bayang Kotak',
      description: 'Add elevation with shadows from subtle to dramatic',
      descriptionMs: 'Tambah ketinggian dengan bayang dari halus hingga dramatik',
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small" style="box-shadow: 0 1px 2px rgba(0,0,0,0.1);">small</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small" style="box-shadow: 0 4px 6px rgba(0,0,0,0.1);">medium</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small" style="box-shadow: 0 10px 15px rgba(0,0,0,0.15);">big</div>
</div>`,
      highlightValue: 'shadow:medium'
    }
  ]
};

// ======================
// OPACITY
// ======================

export const opacity = {
  name: 'opacity',
  property: 'visual',
  syntax: 'visual="opacity:[value]"',
  description: 'Set element opacity (0-100)',
  descriptionMs: 'Tetapkan kelegapan elemen (0-100)',
  category: 'visual',
  dynamic: true,
  values: [
    { value: '0', css: 'opacity: 0;', description: 'Invisible', descriptionMs: 'Tidak kelihatan' },
    { value: '25', css: 'opacity: 0.25;', description: '25% visible', descriptionMs: '25% kelihatan' },
    { value: '50', css: 'opacity: 0.5;', description: '50% visible', descriptionMs: '50% kelihatan' },
    { value: '75', css: 'opacity: 0.75;', description: '75% visible', descriptionMs: '75% kelihatan' },
    { value: '100', css: 'opacity: 1;', description: 'Fully visible', descriptionMs: 'Sepenuhnya kelihatan' }
  ],
  examples: [
    { code: '<div visual="opacity:50">Half visible</div>', description: '50% opacity' }
  ],
  preview: [
    {
      title: 'Opacity',
      titleMs: 'Kelegapan',
      description: 'Control element transparency from invisible to fully visible',
      descriptionMs: 'Kawal ketelusan elemen dari tidak kelihatan hingga sepenuhnya kelihatan',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.25;">25%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.5;">50%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 0.75;">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="opacity: 1;">100%</div>
</div>`,
      highlightValue: 'opacity:50'
    }
  ]
};

// ======================
// BLUR
// ======================

export const blur = {
  name: 'filter-blur',
  property: 'visual',
  syntax: 'visual="blur:[value]"',
  description: 'Apply blur filter',
  descriptionMs: 'Terapkan penapis kabur',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'filter: blur(0);', description: 'No blur', descriptionMs: 'Tiada kabur' },
    { value: 'tiny', css: 'filter: blur(2px);', description: 'Tiny blur', descriptionMs: 'Kabur kecil' },
    { value: 'small', css: 'filter: blur(4px);', description: 'Small blur', descriptionMs: 'Kabur kecil' },
    { value: 'medium', css: 'filter: blur(8px);', description: 'Medium blur', descriptionMs: 'Kabur sederhana' },
    { value: 'big', css: 'filter: blur(12px);', description: 'Large blur', descriptionMs: 'Kabur besar' },
    { value: 'giant', css: 'filter: blur(24px);', description: 'Giant blur', descriptionMs: 'Kabur gergasi' },
    { value: 'vast', css: 'filter: blur(48px);', description: 'Vast blur', descriptionMs: 'Kabur luas' }
  ],
  examples: [
    { code: '<div visual="blur:medium">Blurred element</div>', description: 'Medium blur' }
  ],
  preview: [
    {
      title: 'Blur',
      titleMs: 'Kabur',
      description: 'Apply gaussian blur filter to an element',
      descriptionMs: 'Terapkan penapis kabur gaussian pada elemen',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: blur(2px);">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: blur(4px);">medium</div>
</div>`,
      highlightValue: 'blur:medium'
    }
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
  ],
  preview: [
    {
      title: 'Cursor',
      titleMs: 'Kursor',
      description: 'Change mouse cursor on hover',
      descriptionMs: 'Tukar kursor tetikus semasa hover',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: pointer;">pointer</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: wait;">wait</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="cursor: not-allowed;">not-allowed</div>
</div>`,
      highlightValue: 'cursor:pointer'
    }
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
  ],
  preview: [
    {
      title: 'User Select',
      titleMs: 'Pemilihan Pengguna',
      description: 'Control whether text can be selected',
      descriptionMs: 'Kawal sama ada teks boleh dipilih',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="user-select: none;">none (try select)</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="user-select: all;">all (click to select)</div>
</div>`,
      highlightValue: 'select:none'
    }
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
  ],
  preview: [
    {
      title: 'Pointer Events',
      titleMs: 'Peristiwa Penunjuk',
      description: 'Make elements click-through or interactive',
      descriptionMs: 'Jadikan elemen boleh klik tembus atau interaktif',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto (clickable)</div>
  <div space="p:small" visual="bg:neutral-400 text:white rounded:small">none (click-through)</div>
</div>`,
      highlightValue: 'pointer-events:none'
    }
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
  ],
  preview: [
    {
      title: 'Mix Blend Mode',
      titleMs: 'Mod Campuran',
      description: 'Blend element with content behind it',
      descriptionMs: 'Campurkan elemen dengan kandungan di belakangnya',
      html: `<div layout="flex" space="g:medium p:medium" visual="rounded:medium" style="background: linear-gradient(135deg, #ef4444, #f97316);">
  <div space="p:small" visual="text:white rounded:small" style="mix-blend-mode: multiply; background: #3b82f6;">multiply</div>
  <div space="p:small" visual="text:white rounded:small" style="mix-blend-mode: screen; background: #3b82f6;">screen</div>
</div>`,
      highlightValue: 'mix-blend:multiply'
    }
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
  ],
  preview: [
    {
      title: 'Accent Color',
      titleMs: 'Warna Aksen',
      description: 'Style native form controls (checkboxes, radios, range)',
      descriptionMs: 'Gaya kawalan borang asli (kotak semak, radio, julat)',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="checkbox" checked style="accent-color: #3b82f6; width: 20px; height: 20px;">
  <input type="radio" checked style="accent-color: #10b981; width: 20px; height: 20px;">
  <input type="range" style="accent-color: #8b5cf6; width: 100px;">
</div>`,
      highlightValue: 'accent:primary'
    }
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
  ],
  preview: [
    {
      title: 'Caret Color',
      titleMs: 'Warna Karet',
      description: 'Style the text cursor in input fields',
      descriptionMs: 'Gaya kursor teks dalam medan input',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Type here..." style="caret-color: #3b82f6; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.25rem;">
</div>`,
      highlightValue: 'caret:primary'
    }
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
  ],
  preview: [
    {
      title: 'Appearance',
      titleMs: 'Penampilan',
      description: 'Remove native browser styling from form elements',
      descriptionMs: 'Buang gaya pelayar asli dari elemen borang',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <select style="appearance: auto; padding: 0.25rem;"><option>Native</option></select>
  <select style="appearance: none; padding: 0.25rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.25rem;"><option>Custom</option></select>
</div>`,
      highlightValue: 'appearance:none'
    }
  ]
};

// Export all visual definitions
export const visualDefinitions = {
  backgroundColor,
  textColor,
  fontSize,
  fontWeight,
  fontFamily,
  typographyKeywords,
  letterSpacing,
  lineHeight,
  borderRadius,
  boxShadow,
  opacity,
  blur,
  cursor,
  userSelect,
  pointerEvents,
  mixBlendMode,
  accentColor,
  caretColor,
  appearance
};

// Build typography keywords map for CSS generator
export function buildTypographyKeywordsMap() {
  const map = {};
  
  for (const v of typographyKeywords.values) {
    map[v.value] = v.css;
  }
  
  return map;
}

export default visualDefinitions;
