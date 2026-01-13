/**
 * SenangStart CSS - Typography Extended Definitions
 * Text formatting, decoration, and advanced typography utilities
 */

// ======================
// TEXT ALIGNMENT
// ======================

export const textAlignment = {
  name: 'text-alignment',
  property: 'visual',
  syntax: 'visual="text:[alignment]"',
  description: 'Set text alignment',
  descriptionMs: 'Tetapkan penjajaran teks',
  category: 'visual',
  values: [
    { value: 'left', css: 'text-align: left;', description: 'Left align', descriptionMs: 'Jajar kiri' },
    { value: 'center', css: 'text-align: center;', description: 'Center align', descriptionMs: 'Jajar tengah' },
    { value: 'right', css: 'text-align: right;', description: 'Right align', descriptionMs: 'Jajar kanan' },
    { value: 'justify', css: 'text-align: justify;', description: 'Justify', descriptionMs: 'Justify' }
  ],
  examples: [
    { code: '<p visual="text:center">Centered text</p>', description: 'Center text' }
  ],
  preview: [
    {
      title: 'Text Alignment',
      titleMs: 'Penjajaran Teks',
      description: 'Align text within container',
      descriptionMs: 'Jajarkan teks dalam bekas',
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div visual="text:left bg:primary text:white rounded:small" space="p:small">left</div>
  <div visual="text:center bg:primary text:white rounded:small" space="p:small">center</div>
  <div visual="text:right bg:primary text:white rounded:small" space="p:small">right</div>
</div>`,
      highlightValue: 'text:center'
    }
  ]
};

// ======================
// TEXT TRANSFORM
// ======================

export const textTransform = {
  name: 'text-transform',
  property: 'visual',
  syntax: 'visual="[transform-value]"',
  description: 'Transform text case',
  descriptionMs: 'Ubah kes teks',
  category: 'visual',
  values: [
    { value: 'uppercase', css: 'text-transform: uppercase;', description: 'All uppercase', descriptionMs: 'Semua huruf besar' },
    { value: 'lowercase', css: 'text-transform: lowercase;', description: 'All lowercase', descriptionMs: 'Semua huruf kecil' },
    { value: 'capitalize', css: 'text-transform: capitalize;', description: 'Capitalize words', descriptionMs: 'Huruf besar awal perkataan' },
    { value: 'normal-case', css: 'text-transform: none;', description: 'Normal case', descriptionMs: 'Kes normal' }
  ],
  examples: [
    { code: '<span visual="uppercase">Uppercase text</span>', description: 'Uppercase' }
  ],
  preview: [
    {
      title: 'Text Transform',
      titleMs: 'Ubah Kes Teks',
      description: 'Change text case',
      descriptionMs: 'Ubah kes teks',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: uppercase;">upper</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: lowercase;">LOWER</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-transform: capitalize;">capitalize</span>
</div>`,
      highlightValue: 'uppercase'
    }
  ]
};

// ======================
// TEXT DECORATION
// ======================

export const textDecoration = {
  name: 'text-decoration',
  property: 'visual',
  syntax: 'visual="[decoration-value]"',
  description: 'Set text decoration',
  descriptionMs: 'Tetapkan hiasan teks',
  category: 'visual',
  values: [
    { value: 'underline', css: 'text-decoration-line: underline;', description: 'Underline', descriptionMs: 'Garis bawah' },
    { value: 'overline', css: 'text-decoration-line: overline;', description: 'Overline', descriptionMs: 'Garis atas' },
    { value: 'line-through', css: 'text-decoration-line: line-through;', description: 'Strikethrough', descriptionMs: 'Garis potong' },
    { value: 'no-underline', css: 'text-decoration-line: none;', description: 'No decoration', descriptionMs: 'Tiada hiasan' }
  ],
  examples: [
    { code: '<a visual="no-underline">No underline link</a>', description: 'Remove underline' }
  ],
  preview: [
    {
      title: 'Text Decoration',
      titleMs: 'Hiasan Teks',
      description: 'Add lines to text',
      descriptionMs: 'Tambah garis pada teks',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-decoration: underline;">underline</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" style="text-decoration: line-through;">line-through</span>
</div>`,
      highlightValue: 'underline'
    }
  ]
};

// ======================
// TEXT OVERFLOW
// ======================

export const textOverflow = {
  name: 'text-overflow',
  property: 'visual',
  syntax: 'visual="[overflow-value]"',
  description: 'Handle text overflow',
  descriptionMs: 'Kendalikan limpahan teks',
  category: 'visual',
  values: [
    { value: 'truncate', css: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;', description: 'Truncate with ellipsis', descriptionMs: 'Potong dengan elipsis' },
    { value: 'text-ellipsis', css: 'text-overflow: ellipsis;', description: 'Ellipsis overflow', descriptionMs: 'Limpahan elipsis' },
    { value: 'text-clip', css: 'text-overflow: clip;', description: 'Clip overflow', descriptionMs: 'Limpahan potong' }
  ],
  examples: [
    { code: '<div visual="truncate">Very long text that gets truncated...</div>', description: 'Truncate text' }
  ],
  preview: [
    {
      title: 'Text Overflow',
      titleMs: 'Limpahan Teks',
      description: 'Handle overflowing text',
      descriptionMs: 'Kendalikan teks yang melimpah',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">This is truncated text...</div>
</div>`,
      highlightValue: 'truncate'
    }
  ]
};

// ======================
// TEXT WRAP
// ======================

export const textWrap = {
  name: 'text-wrap',
  property: 'visual',
  syntax: 'visual="[wrap-value]"',
  description: 'Control text wrapping',
  descriptionMs: 'Kawal pembalutan teks',
  category: 'visual',
  values: [
    { value: 'text-wrap', css: 'text-wrap: wrap;', description: 'Wrap text', descriptionMs: 'Balut teks' },
    { value: 'text-nowrap', css: 'text-wrap: nowrap;', description: 'No wrap', descriptionMs: 'Tiada balutan' },
    { value: 'text-balance', css: 'text-wrap: balance;', description: 'Balanced wrap', descriptionMs: 'Balutan seimbang' },
    { value: 'text-pretty', css: 'text-wrap: pretty;', description: 'Pretty wrap', descriptionMs: 'Balutan cantik' }
  ],
  examples: [
    { code: '<h1 visual="text-balance">Balanced heading</h1>', description: 'Balanced text' }
  ],
  preview: [
    {
      title: 'Text Wrap',
      titleMs: 'Pembalutan Teks',
      description: 'Control line wrapping',
      descriptionMs: 'Kawal pembalutan baris',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">wrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">balance</div>
</div>`,
      highlightValue: 'text-balance'
    }
  ]
};

// ======================
// WHITESPACE
// ======================

export const whitespace = {
  name: 'whitespace',
  property: 'visual',
  syntax: 'visual="whitespace:[value]"',
  description: 'Control whitespace handling',
  descriptionMs: 'Kawal pengendalian ruang putih',
  category: 'visual',
  values: [
    { value: 'normal', css: 'white-space: normal;', description: 'Normal whitespace', descriptionMs: 'Ruang putih normal' },
    { value: 'nowrap', css: 'white-space: nowrap;', description: 'No wrap', descriptionMs: 'Tiada balutan' },
    { value: 'pre', css: 'white-space: pre;', description: 'Preserve whitespace', descriptionMs: 'Kekalkan ruang putih' },
    { value: 'pre-line', css: 'white-space: pre-line;', description: 'Pre-line', descriptionMs: 'Pra-baris' },
    { value: 'pre-wrap', css: 'white-space: pre-wrap;', description: 'Pre-wrap', descriptionMs: 'Pra-balut' },
    { value: 'break-spaces', css: 'white-space: break-spaces;', description: 'Break spaces', descriptionMs: 'Pecah ruang' }
  ],
  examples: [
    { code: '<pre visual="whitespace:pre">Preserved whitespace</pre>', description: 'Preserve whitespace' }
  ],
  preview: [
    {
      title: 'Whitespace',
      titleMs: 'Ruang Putih',
      description: 'Control whitespace handling',
      descriptionMs: 'Kawal pengendalian ruang putih',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pre</div>
</div>`,
      highlightValue: 'whitespace:pre'
    }
  ]
};

// ======================
// WORD BREAK
// ======================

export const wordBreak = {
  name: 'word-break',
  property: 'visual',
  syntax: 'visual="[break-value]"',
  description: 'Control word breaking',
  descriptionMs: 'Kawal pemecahan perkataan',
  category: 'visual',
  values: [
    { value: 'break-normal', css: 'overflow-wrap: normal; word-break: normal;', description: 'Normal break', descriptionMs: 'Pemecahan normal' },
    { value: 'break-words', css: 'overflow-wrap: break-word;', description: 'Break words', descriptionMs: 'Pecah perkataan' },
    { value: 'break-all', css: 'word-break: break-all;', description: 'Break all', descriptionMs: 'Pecah semua' },
    { value: 'break-keep', css: 'word-break: keep-all;', description: 'Keep all', descriptionMs: 'Kekalkan semua' }
  ],
  examples: [
    { code: '<div visual="break-words">Long words break properly</div>', description: 'Break long words' }
  ],
  preview: [
    {
      title: 'Word Break',
      titleMs: 'Pemecahan Perkataan',
      description: 'Control word breaking',
      descriptionMs: 'Kawal pemecahan perkataan',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">break-words</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">break-all</div>
</div>`,
      highlightValue: 'break-words'
    }
  ]
};

// ======================
// HYPHENS
// ======================

export const hyphens = {
  name: 'hyphens',
  property: 'visual',
  syntax: 'visual="hyphens:[value]"',
  description: 'Control hyphenation',
  descriptionMs: 'Kawal tanda sempang',
  category: 'visual',
  values: [
    { value: 'none', css: 'hyphens: none;', description: 'No hyphens', descriptionMs: 'Tiada sempang' },
    { value: 'manual', css: 'hyphens: manual;', description: 'Manual hyphens', descriptionMs: 'Sempang manual' },
    { value: 'auto', css: 'hyphens: auto;', description: 'Auto hyphens', descriptionMs: 'Sempang automatik' }
  ],
  examples: [
    { code: '<p visual="hyphens:auto">Automatic hyphenation</p>', description: 'Auto hyphens' }
  ],
  preview: [
    {
      title: 'Hyphens',
      titleMs: 'Sempang',
      description: 'Control automatic hyphenation',
      descriptionMs: 'Kawal sempang automatik',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manual</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
</div>`,
      highlightValue: 'hyphens:auto'
    }
  ]
};

// ======================
// TEXT INDENT
// ======================

export const textIndent = {
  name: 'text-indent',
  property: 'visual',
  syntax: 'visual="indent:[value]"',
  description: 'Set text indentation',
  descriptionMs: 'Tetapkan inden teks',
  category: 'visual',
  usesScale: 'spacing',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '0', css: 'text-indent: 0;', description: 'No indent', descriptionMs: 'Tiada inden' }
  ],
  examples: [
    { code: '<p visual="indent:medium">Indented paragraph</p>', description: 'Indented text' }
  ],
  preview: [
    {
      title: 'Text Indent',
      titleMs: 'Inden Teks',
      description: 'Indent first line of text',
      descriptionMs: 'Inden baris pertama teks',
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="bg:primary text:white rounded:small" space="p:small" style="text-indent: 2rem;">Indented text example...</p>
</div>`,
      highlightValue: 'indent:medium'
    }
  ]
};

// ======================
// VERTICAL ALIGN
// ======================

export const verticalAlign = {
  name: 'vertical-align',
  property: 'visual',
  syntax: 'visual="align:[value]"',
  description: 'Set vertical alignment',
  descriptionMs: 'Tetapkan penjajaran menegak',
  category: 'visual',
  values: [
    { value: 'baseline', css: 'vertical-align: baseline;', description: 'Baseline', descriptionMs: 'Garis asas' },
    { value: 'top', css: 'vertical-align: top;', description: 'Top', descriptionMs: 'Atas' },
    { value: 'middle', css: 'vertical-align: middle;', description: 'Middle', descriptionMs: 'Tengah' },
    { value: 'bottom', css: 'vertical-align: bottom;', description: 'Bottom', descriptionMs: 'Bawah' },
    { value: 'text-top', css: 'vertical-align: text-top;', description: 'Text top', descriptionMs: 'Atas teks' },
    { value: 'text-bottom', css: 'vertical-align: text-bottom;', description: 'Text bottom', descriptionMs: 'Bawah teks' },
    { value: 'sub', css: 'vertical-align: sub;', description: 'Subscript', descriptionMs: 'Subskrip' },
    { value: 'super', css: 'vertical-align: super;', description: 'Superscript', descriptionMs: 'Superskrip' }
  ],
  examples: [
    { code: '<img visual="align:middle">Vertically centered</img>', description: 'Middle alignment' }
  ],
  preview: [
    {
      title: 'Vertical Align',
      titleMs: 'Penjajaran Menegak',
      description: 'Align inline elements',
      descriptionMs: 'Jajarkan elemen sebaris',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">middle</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>`,
      highlightValue: 'align:middle'
    }
  ]
};

// ======================
// FONT STYLE
// ======================

export const fontStyle = {
  name: 'font-style',
  property: 'visual',
  syntax: 'visual="[style-value]"',
  description: 'Set font style',
  descriptionMs: 'Tetapkan gaya fon',
  category: 'visual',
  values: [
    { value: 'italic', css: 'font-style: italic;', description: 'Italic text', descriptionMs: 'Teks italic' },
    { value: 'not-italic', css: 'font-style: normal;', description: 'Normal style', descriptionMs: 'Gaya normal' }
  ],
  examples: [
    { code: '<em visual="not-italic">Normal style emphasis</em>', description: 'Remove italic' }
  ],
  preview: [
    {
      title: 'Font Style',
      titleMs: 'Gaya Fon',
      description: 'Italic or normal text',
      descriptionMs: 'Teks italic atau normal',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" style="font-style: italic;">italic</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">normal</span>
</div>`,
      highlightValue: 'italic'
    }
  ]
};

// ======================
// FONT SMOOTHING
// ======================

export const fontSmoothing = {
  name: 'font-smoothing',
  property: 'visual',
  syntax: 'visual="[smoothing-value]"',
  description: 'Control font smoothing',
  descriptionMs: 'Kawal penghalusan fon',
  category: 'visual',
  values: [
    { value: 'antialiased', css: '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;', description: 'Antialiased', descriptionMs: 'Antialias' },
    { value: 'subpixel-antialiased', css: '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;', description: 'Subpixel antialiased', descriptionMs: 'Subpixel antialias' }
  ],
  examples: [
    { code: '<body visual="antialiased">Smooth fonts</body>', description: 'Antialiased text' }
  ],
  preview: [
    {
      title: 'Font Smoothing',
      titleMs: 'Penghalusan Fon',
      description: 'Control text rendering',
      descriptionMs: 'Kawal persembahan teks',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">antialiased</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">subpixel</div>
</div>`,
      highlightValue: 'antialiased'
    }
  ]
};

// ======================
// LINE CLAMP
// ======================

export const lineClamp = {
  name: 'line-clamp',
  property: 'visual',
  syntax: 'visual="line-clamp:[value]"',
  description: 'Limit text to specific lines',
  descriptionMs: 'Hadkan teks kepada bilangan baris tertentu',
  category: 'visual',
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: '1', css: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;', description: 'Single line', descriptionMs: 'Satu baris' },
    { value: '2', css: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;', description: 'Two lines', descriptionMs: 'Dua baris' },
    { value: '3', css: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;', description: 'Three lines', descriptionMs: 'Tiga baris' },
    { value: 'none', css: 'overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;', description: 'No clamp', descriptionMs: 'Tiada had' }
  ],
  examples: [
    { code: '<p visual="line-clamp:3">Text limited to 3 lines...</p>', description: 'Clamp to 3 lines' }
  ],
  preview: [
    {
      title: 'Line Clamp',
      titleMs: 'Had Baris',
      description: 'Limit text to specific lines',
      descriptionMs: 'Hadkan teks kepada baris tertentu',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">1</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">2</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">3</div>
</div>`,
      highlightValue: 'line-clamp:3'
    }
  ]
};

// ======================
// LIST STYLE
// ======================

export const listStyle = {
  name: 'list-style',
  property: 'visual',
  syntax: 'visual="list:[value]"',
  description: 'Set list style',
  descriptionMs: 'Tetapkan gaya senarai',
  category: 'visual',
  values: [
    { value: 'none', css: 'list-style-type: none;', description: 'No bullets', descriptionMs: 'Tiada bullet' },
    { value: 'disc', css: 'list-style-type: disc;', description: 'Disc bullets', descriptionMs: 'Bullet bulat' },
    { value: 'decimal', css: 'list-style-type: decimal;', description: 'Numbers', descriptionMs: 'Nombor' },
    { value: 'square', css: 'list-style-type: square;', description: 'Square bullets', descriptionMs: 'Bullet segi empat' },
    { value: 'inside', css: 'list-style-position: inside;', description: 'Inside position', descriptionMs: 'Kedudukan dalam' },
    { value: 'outside', css: 'list-style-position: outside;', description: 'Outside position', descriptionMs: 'Kedudukan luar' }
  ],
  examples: [
    { code: '<ul visual="list:none">No bullets</ul>', description: 'Remove bullets' }
  ],
  preview: [
    {
      title: 'List Style',
      titleMs: 'Gaya Senarai',
      description: 'Control list markers',
      descriptionMs: 'Kawal penanda senarai',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">disc</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">decimal</div>
</div>`,
      highlightValue: 'list:none'
    }
  ]
};

// ======================
// TEXT SHADOW
// ======================

export const textShadow = {
  name: 'text-shadow',
  property: 'visual',
  syntax: 'visual="text-shadow:[value]"',
  description: 'Add text shadow',
  descriptionMs: 'Tambah bayang teks',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'text-shadow: none;', description: 'No shadow', descriptionMs: 'Tiada bayang' },
    { value: 'small', css: 'text-shadow: 0 1px 2px rgba(0,0,0,0.1);', description: 'Small shadow', descriptionMs: 'Bayang kecil' },
    { value: 'medium', css: 'text-shadow: 0 2px 4px rgba(0,0,0,0.1);', description: 'Medium shadow', descriptionMs: 'Bayang sederhana' },
    { value: 'big', css: 'text-shadow: 0 4px 8px rgba(0,0,0,0.1);', description: 'Large shadow', descriptionMs: 'Bayang besar' }
  ],
  examples: [
    { code: '<h1 visual="text-shadow:medium">Shadowed heading</h1>', description: 'Text shadow' }
  ],
  preview: [
    {
      title: 'Text Shadow',
      titleMs: 'Bayang Teks',
      description: 'Add shadow to text',
      descriptionMs: 'Tambah bayang pada teks',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">shadow</div>
</div>`,
      highlightValue: 'text-shadow:medium'
    }
  ]
};

// ======================
// FONT VARIANT NUMERIC
// ======================

export const fontVariantNumeric = {
  name: 'font-variant-numeric',
  property: 'visual',
  syntax: 'visual="[variant-value]"',
  description: 'Control numeric font variants',
  descriptionMs: 'Kawal varian nombor fon',
  category: 'visual',
  values: [
    { value: 'normal-nums', css: 'font-variant-numeric: normal;', description: 'Normal numbers', descriptionMs: 'Nombor biasa' },
    { value: 'ordinal', css: 'font-variant-numeric: ordinal;', description: 'Ordinal markers', descriptionMs: 'Penanda ordinal' },
    { value: 'slashed-zero', css: 'font-variant-numeric: slashed-zero;', description: 'Slashed zero', descriptionMs: 'Sifar bergaris' },
    { value: 'lining-nums', css: 'font-variant-numeric: lining-nums;', description: 'Lining numbers', descriptionMs: 'Nombor garis' },
    { value: 'oldstyle-nums', css: 'font-variant-numeric: oldstyle-nums;', description: 'Oldstyle numbers', descriptionMs: 'Nombor gaya lama' },
    { value: 'proportional-nums', css: 'font-variant-numeric: proportional-nums;', description: 'Proportional numbers', descriptionMs: 'Nombor proporsional' },
    { value: 'tabular-nums', css: 'font-variant-numeric: tabular-nums;', description: 'Tabular numbers', descriptionMs: 'Nombor tabular' }
  ],
  examples: [
    { code: '<span visual="tabular-nums">123,456.00</span>', description: 'Tabular numbers' }
  ],
  preview: [
    {
      title: 'Font Variant Numeric',
      titleMs: 'Varian Nombor Fon',
      description: 'Control number display',
      descriptionMs: 'Kawal paparan nombor',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">tabular-nums</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ordinal</div>
</div>`,
      highlightValue: 'tabular-nums'
    }
  ]
};

// Export all typography definitions
export const typographyDefinitions = {
  textAlignment,
  textTransform,
  textDecoration,
  textOverflow,
  textWrap,
  whitespace,
  wordBreak,
  hyphens,
  textIndent,
  verticalAlign,
  fontStyle,
  fontSmoothing,
  lineClamp,
  listStyle,
  textShadow,
  fontVariantNumeric
};

export default typographyDefinitions;
