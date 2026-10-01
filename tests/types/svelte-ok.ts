/**
 * Fixture: Svelte augmentation — the global `svelteHTML.HTMLAttributes`
 * interface gains the SenangStart attributes.
 */
import '@bookklik/senangstart-css/svelte';

// svelte-check declares this namespace itself; we declare the base here so the
// augmentation in types/svelte.d.ts has something to merge into.
declare global {
  namespace svelteHTML {
    interface HTMLAttributes<T> { class?: string }
    interface SVGAttributes<T> { class?: string }
  }
}

const attrs: svelteHTML.HTMLAttributes<HTMLDivElement> = {
  class: 'x',
  layout: 'flex col center',
  space: 'p:big m-t:small',
  visual: 'bg:primary text:white rounded:big hover:bg:blue-500'
};

const svg: svelteHTML.SVGAttributes<SVGElement> = { visual: 'fill:primary' };

export { attrs, svg };
