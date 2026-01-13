/**
 * SenangStart CSS - SVG Utility Definitions
 * Fill, stroke, stroke-width for SVG elements
 */

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
  ],
  preview: [
    {
      title: 'SVG Fill',
      titleMs: 'Pengisian SVG',
      description: 'Fill SVG elements with color',
      descriptionMs: 'Isi elemen SVG dengan warna',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="fill:primary" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:danger" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:success" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>`,
      highlightValue: 'fill:primary'
    }
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
  ],
  preview: [
    {
      title: 'SVG Stroke',
      titleMs: 'Gurisan SVG',
      description: 'Stroke SVG elements with color',
      descriptionMs: 'Guris elemen SVG dengan warna',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:danger fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
</div>`,
      highlightValue: 'stroke:primary'
    }
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
  ],
  preview: [
    {
      title: 'Stroke Width',
      titleMs: 'Lebar Gurisan',
      description: 'Control SVG stroke thickness',
      descriptionMs: 'Kawal ketebalan gurisan SVG',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 1px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 2px;"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none" width="40" height="40" viewBox="0 0 24 24" style="stroke-width: 3px;"><circle cx="12" cy="12" r="10"/></svg>
</div>`,
      highlightValue: 'stroke-w:2'
    }
  ]
};

// Export all SVG definitions
export const svgDefinitions = {
  svgFill,
  svgStroke,
  svgStrokeWidth
};

export default svgDefinitions;
