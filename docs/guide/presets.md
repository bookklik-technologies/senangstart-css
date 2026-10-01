# Presets: prose & forms

Presets are **opt-in** component styles that live in the `senangstart.components`
cascade layer, below utilities, so any utility on the same element still wins.

```js
// senangstart.config.mjs
export default {
  presets: ['prose', 'forms']
  // or with options:
  // presets: { prose: { maxWidth: '70ch' }, forms: { accent: 'var(--c-primary)', border: 'var(--c-gray-300)', radius: '0.5rem' } }
};
```

## prose — long-form typography

Readable defaults for rendered Markdown or CMS content: headings, paragraphs, links,
lists, blockquotes, code, tables, images and horizontal rules, all driven by theme tokens.

```html
<article visual="prose">…rendered markdown…</article>
<article visual="prose prose-lg">larger body text</article>
<article visual="prose prose-sm">smaller</article>
<article visual="prose prose-invert" dark:bg:gray-900>on dark backgrounds</article>
```

Element rules use `:where()`, so they have zero specificity: a utility on a child
(`<h2 visual="text:primary">`) always overrides the preset. The default measure is
`65ch` (`maxWidth` option). Colours come from `--prose-*` custom properties set on the
container, which you can override in your own CSS.

Using `prose` without enabling the preset produces an error with the fix.

## forms — form control defaults

Element-level styling for `input`, `textarea`, `select`, checkboxes and radios, in the
spirit of `@tailwindcss/forms` (base strategy): borders, padding, a focus ring in the
accent colour, a custom select arrow and accent-coloured native-looking checkboxes/radios.

Options: `accent`, `border`, `radius` (any CSS value; defaults use theme tokens).

## Converting from Tailwind

`prose`, `prose-sm`, `prose-lg`, `prose-xl`, `prose-invert` convert to the preset
keywords; enable the preset in your config.
