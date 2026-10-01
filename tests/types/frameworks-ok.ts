/**
 * Fixture: Solid, Preact and Astro augmentations (declaration-level).
 */
import '@bookklik/senangstart-css/solid';
import '@bookklik/senangstart-css/preact';
import '@bookklik/senangstart-css/astro';
import type { JSX as SolidJSX } from 'solid-js';
import type { JSX as PreactJSX } from 'preact';

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes { class?: string }
    interface SVGAttributes { class?: string }
  }
}

const solid: SolidJSX.HTMLAttributes<HTMLDivElement> = { layout: 'flex col', space: 'p:big m-t:small' };
const preact: PreactJSX.HTMLAttributes<HTMLDivElement> = { visual: 'bg:primary hover:bg:blue-500' };
const preactSvg: PreactJSX.SVGAttributes = { visual: 'fill:primary' };
const astro: astroHTML.JSX.HTMLAttributes = { layout: 'grid grid-cols:3', visual: 'rounded:big shadow:medium' };

export { solid, preact, preactSvg, astro };
