# Typography Keywords

Typography utility keywords

## Syntax
```
visual="[keyword]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `italic` | `font-style: italic` | Italic text |
| `not-italic` | `font-style: normal` | Normal style |
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` | Antialiased text |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto` | Subpixel antialiasing |
| `uppercase` | `text-transform: uppercase` | Uppercase text |
| `lowercase` | `text-transform: lowercase` | Lowercase text |
| `capitalize` | `text-transform: capitalize` | Capitalize words |
| `normal-case` | `text-transform: none` | Normal case |
| `underline` | `text-decoration-line: underline` | Underline text |
| `overline` | `text-decoration-line: overline` | Overline text |
| `line-through` | `text-decoration-line: line-through` | Strikethrough |
| `no-underline` | `text-decoration-line: none` | No decoration |
| `decoration-solid` | `text-decoration-style: solid` | Solid line |
| `decoration-double` | `text-decoration-style: double` | Double line |
| `decoration-dotted` | `text-decoration-style: dotted` | Dotted line |
| `decoration-dashed` | `text-decoration-style: dashed` | Dashed line |
| `decoration-wavy` | `text-decoration-style: wavy` | Wavy line |
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` | Truncate with ellipsis |
| `text-ellipsis` | `text-overflow: ellipsis` | Ellipsis overflow |
| `text-clip` | `text-overflow: clip` | Clip overflow |
| `text-wrap` | `text-wrap: wrap` | Wrap text |
| `text-nowrap` | `text-wrap: nowrap` | No wrap |
| `text-balance` | `text-wrap: balance` | Balanced wrapping |
| `text-pretty` | `text-wrap: pretty` | Pretty wrapping |
| `whitespace-normal` | `white-space: normal` | Normal whitespace |
| `whitespace-nowrap` | `white-space: nowrap` | No wrap whitespace |
| `whitespace-pre` | `white-space: pre` | Preserve whitespace |
| `whitespace-pre-line` | `white-space: pre-line` | Pre-line whitespace |
| `whitespace-pre-wrap` | `white-space: pre-wrap` | Pre-wrap whitespace |
| `whitespace-break-spaces` | `white-space: break-spaces` | Break spaces |
| `break-normal` | `overflow-wrap: normal; word-break: normal` | Normal word break |
| `break-words` | `overflow-wrap: break-word` | Break words |
| `break-all` | `word-break: break-all` | Break all |
| `break-keep` | `word-break: keep-all` | Keep all |
| `hyphens-none` | `hyphens: none` | No hyphens |
| `hyphens-manual` | `hyphens: manual` | Manual hyphens |
| `hyphens-auto` | `hyphens: auto` | Auto hyphens |
| `align-baseline` | `vertical-align: baseline` | Baseline align |
| `align-top` | `vertical-align: top` | Top align |
| `align-middle` | `vertical-align: middle` | Middle align |
| `align-bottom` | `vertical-align: bottom` | Bottom align |
| `align-text-top` | `vertical-align: text-top` | Text top align |
| `align-text-bottom` | `vertical-align: text-bottom` | Text bottom align |
| `align-sub` | `vertical-align: sub` | Subscript align |
| `align-super` | `vertical-align: super` | Superscript align |
| `list-none` | `list-style-type: none` | No list style |
| `list-disc` | `list-style-type: disc` | Disc bullets |
| `list-decimal` | `list-style-type: decimal` | Decimal numbers |
| `list-square` | `list-style-type: square` | Square bullets |
| `list-inside` | `list-style-position: inside` | Inside position |
| `list-outside` | `list-style-position: outside` | Outside position |

## Examples

```html
<span visual="italic">Italic text</span>
<span visual="uppercase">Uppercase</span>
<span visual="truncate">Truncated text...</span>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
