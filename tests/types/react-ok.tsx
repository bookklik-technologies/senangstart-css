/**
 * Fixture: the README example and multi-token attribute strings must compile
 * under --strict with the React augmentation active.
 */
import '@bookklik/senangstart-css/react';
import { ss } from '@bookklik/senangstart-css/typed';
import type { LayoutAttr, SpaceAttr, VisualAttr, SenangAttributes } from '@bookklik/senangstart-css';

// README example (this used to fail with TS2322 under the single-token union)
export const ReadmeExample = () => (
  <div layout="flex col center" space="p:big m-t:small" visual="bg:primary text:white rounded:big hover:bg:blue-500">
    <h1 visual="text-size:big font:bold">Title</h1>
  </div>
);

// Multi-token strings with variants, arbitrary values, opacity and negatives
export const Variants = () => (
  <div
    layout="grid grid-cols:3 tab:grid-cols:1 z:top"
    space="p:medium tab:p:big m-t:-small w:[320px] g:small hover:p:big"
    visual="bg:red-500/50 dark:bg:black tab:hover:bg:blue-500 shadow:medium rounded-tl:small"
    interact="card"
    listens="card"
  >
    <span visual="uppercase truncate">x</span>
    <svg visual="fill:primary" />
  </div>
);

// Single known tokens still work and are what editors autocomplete
export const single = <p space="p:big" />;

// Strict helpers accept valid literals and preserve the literal type
const s1 = ss.space('p:big m-t:small');
const s2 = ss.visual('bg:primary text:white rounded:big hover:bg:blue-500 bg:red-500/50');
const s3 = ss.layout('flex col center tab:row grid-cols:3');
const s4 = ss.space('w:[100px] m-x:auto m-t:-small');
const s5 = ss.attr('visual', 'dark:hover:bg:black tab-lap:bg:white max-tab:shadow:none print:shadow:none');
const s6 = ss.space('');
const s7 = ss.layout('flex  col'); // double space tolerated
type AssertLiteral = [
  typeof s1 extends 'p:big m-t:small' ? true : never,
  typeof s2 extends string ? true : never,
  typeof s3 extends 'flex col center tab:row grid-cols:3' ? true : never
];
export const _assert: AssertLiteral = [true, true, true];
export const _unused = [s4, s5, s6, s7];

export const Strict = () => <div space={ss.space('p:big m-t:small')} visual={ss.visual('bg:primary')} />;

// Prop types are usable standalone (e.g. component props)
export function Card(props: SenangAttributes & { title: string }) {
  const layout: LayoutAttr = props.layout ?? 'flex col';
  const space: SpaceAttr = 'p:medium g:small';
  const visual: VisualAttr = `bg:white ${props.visual ?? ''}`; // dynamic strings are fine
  return <div layout={layout} space={space} visual={visual}>{props.title}</div>;
}
