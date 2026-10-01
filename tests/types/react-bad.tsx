/**
 * Fixture: the strict `ss.*` helpers must REJECT unknown tokens.
 * Every error line is guarded with @ts-expect-error — if the helper ever
 * stops rejecting, tsc fails with "Unused '@ts-expect-error' directive".
 */
import '@bookklik/senangstart-css/react';
import { ss, space, visual, layout } from '@bookklik/senangstart-css/typed';

// @ts-expect-error unknown scale value
ss.space('p:bogus');

// @ts-expect-error one bad token inside an otherwise valid list
ss.space('p:big m-t:nope g:small');

// @ts-expect-error space token in the visual attribute
ss.visual('p:big');

// @ts-expect-error unknown layout keyword
ss.layout('flex centre');

// @ts-expect-error unknown colour family
visual('bg:magenta-500');

// @ts-expect-error unknown state prefix
space('hovered:p:big');

// @ts-expect-error unknown breakpoint in a range variant
layout('tab-huge:flex');

// @ts-expect-error trailing separator without a value
space('p:');

// @ts-expect-error a variant prefix alone is not a token
space('tab:');

// @ts-expect-error non-literal strings cannot be validated
space(String(Math.random()));

// The permissive attribute type still accepts anything — that is by design.
export const stillFine = <div space="p:bogus" />;
