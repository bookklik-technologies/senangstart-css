/**
 * Fixture: Vue augmentation — declaration-level check that HTMLAttributes
 * from @vue/runtime-dom gains the SenangStart attributes.
 */
import '@bookklik/senangstart-css/vue';
import type { HTMLAttributes, SVGAttributes } from '@vue/runtime-dom';

const attrs: HTMLAttributes = {
  class: 'x',
  layout: 'flex col center',
  space: 'p:big m-t:small',
  visual: 'bg:primary text:white rounded:big hover:bg:blue-500',
  interact: 'card',
  listens: 'card'
};

const svg: SVGAttributes = { visual: 'fill:primary stroke:none' };

// Known tokens are assignable to the narrow prop type and stay string-typed
type SpaceProp = NonNullable<HTMLAttributes['space']>;
const known: SpaceProp = 'p:medium';
const multi: SpaceProp = 'p:medium g:small';
const dynamic: SpaceProp = `p:${'big' as string}`;

export { attrs, svg, known, multi, dynamic };
