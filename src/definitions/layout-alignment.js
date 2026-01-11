/**
 * SenangStart CSS - Layout Alignment Definitions
 * Alignment utility definitions for flex and grid
 */

// ======================
// JUSTIFY CONTENT
// ======================

export const justifyContent = {
  name: 'justify-content',
  property: 'layout',
  syntax: 'layout="justify:[value]"',
  description: 'Align items along the main axis',
  descriptionMs: 'Jajarkan item sepanjang paksi utama',
  category: 'layout',
  values: [
    { value: 'start', css: 'justify-content: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'justify-content: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'justify-content: center;', description: 'Center items', descriptionMs: 'Tengahkan item' },
    { value: 'between', css: 'justify-content: space-between;', description: 'Space between items', descriptionMs: 'Ruang antara item' },
    { value: 'around', css: 'justify-content: space-around;', description: 'Space around items', descriptionMs: 'Ruang sekeliling item' },
    { value: 'evenly', css: 'justify-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' },
    { value: 'stretch', css: 'justify-content: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="flex justify:center">Centered</div>', description: 'Center items' },
    { code: '<div layout="flex justify:between">Spaced</div>', description: 'Space between' }
  ]
};

// ======================
// ALIGN ITEMS
// ======================

export const alignItems = {
  name: 'align-items',
  property: 'layout',
  syntax: 'layout="items:[value]"',
  description: 'Align items along the cross axis',
  descriptionMs: 'Jajarkan item sepanjang paksi silang',
  category: 'layout',
  values: [
    { value: 'start', css: 'align-items: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'align-items: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'align-items: center;', description: 'Center items', descriptionMs: 'Tengahkan item' },
    { value: 'baseline', css: 'align-items: baseline;', description: 'Align to baseline', descriptionMs: 'Jajar ke garis asas' },
    { value: 'stretch', css: 'align-items: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="flex items:center">Centered</div>', description: 'Center vertically' }
  ]
};

// ======================
// ALIGN SELF
// ======================

export const alignSelf = {
  name: 'align-self',
  property: 'layout',
  syntax: 'layout="self:[value]"',
  description: 'Override alignment for a single item',
  descriptionMs: 'Ganti penjajaran untuk satu item',
  category: 'layout',
  values: [
    { value: 'auto', css: 'align-self: auto;', description: 'Use parent alignment', descriptionMs: 'Guna penjajaran induk' },
    { value: 'start', css: 'align-self: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'align-self: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'align-self: center;', description: 'Center item', descriptionMs: 'Tengahkan item' },
    { value: 'baseline', css: 'align-self: baseline;', description: 'Align to baseline', descriptionMs: 'Jajar ke garis asas' },
    { value: 'stretch', css: 'align-self: stretch;', description: 'Stretch item', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="self:center">Centered item</div>', description: 'Center single item' }
  ]
};

// ======================
// ALIGN CONTENT
// ======================

export const alignContent = {
  name: 'align-content',
  property: 'layout',
  syntax: 'layout="content:[value]"',
  description: 'Align content rows in multi-line flex container',
  descriptionMs: 'Jajarkan baris kandungan dalam bekas flex berbilang baris',
  category: 'layout',
  values: [
    { value: 'start', css: 'align-content: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'align-content: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'center', css: 'align-content: center;', description: 'Center content', descriptionMs: 'Tengahkan kandungan' },
    { value: 'between', css: 'align-content: space-between;', description: 'Space between rows', descriptionMs: 'Ruang antara baris' },
    { value: 'around', css: 'align-content: space-around;', description: 'Space around rows', descriptionMs: 'Ruang sekeliling baris' },
    { value: 'evenly', css: 'align-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' },
    { value: 'stretch', css: 'align-content: stretch;', description: 'Stretch rows', descriptionMs: 'Regangkan baris' }
  ],
  examples: [
    { code: '<div layout="flex wrap content:center">Centered rows</div>', description: 'Center wrapped rows' }
  ]
};

// ======================
// SHORTHAND ALIGNMENT
// ======================

export const shorthandAlignment = {
  name: 'shorthand-alignment',
  property: 'layout',
  syntax: 'layout="[alignment]"',
  description: 'Quick alignment shortcuts',
  descriptionMs: 'Pintasan penjajaran pantas',
  category: 'layout',
  values: [
    { value: 'center', css: 'justify-content: center; align-items: center;', description: 'Center both axes', descriptionMs: 'Tengahkan kedua-dua paksi' },
    { value: 'start', css: 'justify-content: flex-start; align-items: flex-start;', description: 'Align to start', descriptionMs: 'Jajar ke permulaan' },
    { value: 'end', css: 'justify-content: flex-end; align-items: flex-end;', description: 'Align to end', descriptionMs: 'Jajar ke hujung' },
    { value: 'between', css: 'justify-content: space-between;', description: 'Space between', descriptionMs: 'Ruang antara' },
    { value: 'around', css: 'justify-content: space-around;', description: 'Space around', descriptionMs: 'Ruang sekeliling' },
    { value: 'evenly', css: 'justify-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' }
  ],
  examples: [
    { code: '<div layout="flex center">Centered content</div>', description: 'Center on both axes' }
  ]
};

// ======================
// JUSTIFY ITEMS
// ======================

export const justifyItems = {
  name: 'justify-items',
  property: 'layout',
  syntax: 'layout="justify-items:[value]"',
  description: 'Align grid items on inline axis',
  descriptionMs: 'Jajarkan item grid pada paksi sebaris',
  category: 'layout',
  values: [
    { value: 'start', css: 'justify-items: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'justify-items: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'justify-items: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'justify-items: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="grid justify-items:center">Centered items</div>', description: 'Center grid items' }
  ]
};

// ======================
// JUSTIFY SELF
// ======================

export const justifySelf = {
  name: 'justify-self',
  property: 'layout',
  syntax: 'layout="justify-self:[value]"',
  description: 'Align single grid item on inline axis',
  descriptionMs: 'Jajarkan satu item grid pada paksi sebaris',
  category: 'layout',
  values: [
    { value: 'auto', css: 'justify-self: auto;', description: 'Auto alignment', descriptionMs: 'Jajar automatik' },
    { value: 'start', css: 'justify-self: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'justify-self: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'justify-self: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'justify-self: stretch;', description: 'Stretch item', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="justify-self:end">End aligned</div>', description: 'Align item to end' }
  ]
};

// ======================
// PLACE CONTENT
// ======================

export const placeContent = {
  name: 'place-content',
  property: 'layout',
  syntax: 'layout="place-content:[value]"',
  description: 'Shorthand for align-content and justify-content',
  descriptionMs: 'Pintasan untuk align-content dan justify-content',
  category: 'layout',
  values: [
    { value: 'start', css: 'place-content: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'place-content: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'place-content: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'between', css: 'place-content: space-between;', description: 'Space between', descriptionMs: 'Ruang antara' },
    { value: 'around', css: 'place-content: space-around;', description: 'Space around', descriptionMs: 'Ruang sekeliling' },
    { value: 'evenly', css: 'place-content: space-evenly;', description: 'Even spacing', descriptionMs: 'Ruang sekata' },
    { value: 'stretch', css: 'place-content: stretch;', description: 'Stretch content', descriptionMs: 'Regangkan kandungan' }
  ],
  examples: [
    { code: '<div layout="grid place-content:center">Centered content</div>', description: 'Center both axes' }
  ]
};

// ======================
// PLACE ITEMS
// ======================

export const placeItems = {
  name: 'place-items',
  property: 'layout',
  syntax: 'layout="place-items:[value]"',
  description: 'Shorthand for align-items and justify-items',
  descriptionMs: 'Pintasan untuk align-items dan justify-items',
  category: 'layout',
  values: [
    { value: 'start', css: 'place-items: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'place-items: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'place-items: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'place-items: stretch;', description: 'Stretch items', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="grid place-items:center">Centered items</div>', description: 'Center all items' }
  ]
};

// ======================
// PLACE SELF
// ======================

export const placeSelf = {
  name: 'place-self',
  property: 'layout',
  syntax: 'layout="place-self:[value]"',
  description: 'Shorthand for align-self and justify-self',
  descriptionMs: 'Pintasan untuk align-self dan justify-self',
  category: 'layout',
  values: [
    { value: 'auto', css: 'place-self: auto;', description: 'Auto alignment', descriptionMs: 'Jajar automatik' },
    { value: 'start', css: 'place-self: start;', description: 'Start alignment', descriptionMs: 'Jajar permulaan' },
    { value: 'end', css: 'place-self: end;', description: 'End alignment', descriptionMs: 'Jajar hujung' },
    { value: 'center', css: 'place-self: center;', description: 'Center alignment', descriptionMs: 'Jajar tengah' },
    { value: 'stretch', css: 'place-self: stretch;', description: 'Stretch item', descriptionMs: 'Regangkan item' }
  ],
  examples: [
    { code: '<div layout="place-self:center">Centered item</div>', description: 'Center single item' }
  ]
};

// Export alignment definitions
export const alignmentDefinitions = {
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  shorthandAlignment,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  placeSelf
};

export default alignmentDefinitions;
