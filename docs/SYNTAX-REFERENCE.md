# SenangStart CSS - Syntax Reference

> Auto-generated on 2026-01-11
> Total definitions: 147

This document provides a complete reference of all utility syntax patterns in SenangStart CSS.

---

## Summary

| Category | Count |
|----------|-------|
| Layout | 41 |
| Space | 5 |
| Visual | 101 |
| **Total** | **147** |

---

## Layout Utilities

| Name | Syntax | Description |
|------|--------|-------------|
| align-content | `content:[value]` | Align content rows in multi-line flex container |
| align-items | `items:[value]` | Align items along the cross axis |
| align-self | `self:[value]` | Override alignment for a single item |
| aspect-ratio | `aspect:[value]` | Set element aspect ratio |
| border-collapse | `border:[value]` | Control table border collapse |
| border-spacing | `border-spacing:[value]` | Control spacing between table borders |
| box-sizing | `box:[value]` | Control how width and height are calculated |
| caption-side | `caption:[value]` | Control table caption position |
| columns | `cols:[value]` | Create multi-column layouts |
| container | `container` | Create a centered container with max-width |
| display | `[display-value]` | Control the display type of elements |
| flex | `flex:[value]` | Flex shorthand property |
| flex-basis | `basis:[value]` | Set initial size of flex item |
| flex-direction | `[direction]` | Set the direction of flex items |
| flex-items | `[flex-item-value]` | Control flex grow and shrink behavior |
| flex-wrap | `[wrap-value]` | Control how flex items wrap |
| float-clear | `float:[value]` or `clear:[value]` | Control element floating and clearing |
| grid-auto-flow | `grid-flow:[value]` | Control how auto-placed items flow in grid |
| grid-auto-sizing | `auto-cols:[value]` or `auto-rows:[value]` | Control size of auto-generated grid tracks |
| grid-column-span | `col-span:[value]` | Span across grid columns |
| grid-columns | `grid-cols:[value]` | Define grid template columns |
| grid-row-span | `row-span:[value]` | Span across grid rows |
| grid-rows | `grid-rows:[value]` | Define grid template rows |
| inset | `inset:[value]` or `top:[value]` | Control positioning offsets |
| isolation | `isolation:[value]` | Create new stacking context |
| justify-content | `justify:[value]` | Align items along the main axis |
| justify-items | `justify-items:[value]` | Align grid items on inline axis |
| justify-self | `justify-self:[value]` | Align single grid item on inline axis |
| object-fit | `object:[value]` | Control how media content fits its container |
| object-position | `object-pos:[value]` | Position replaced element content within container |
| order | `order:[value]` | Control flex/grid item order |
| overflow | `overflow:[value]` | Control content overflow behavior |
| overscroll | `overscroll:[value]` | Control scroll chaining behavior |
| place-content | `place-content:[value]` | Shorthand for align-content and justify-content |
| place-items | `place-items:[value]` | Shorthand for align-items and justify-items |
| place-self | `place-self:[value]` | Shorthand for align-self and justify-self |
| position | `[position-value]` | Set the positioning method |
| shorthand-alignment | `[alignment]` | Quick alignment shortcuts |
| table-layout | `table:[value]` | Control table layout algorithm |
| visibility | `[visibility-value]` | Control element visibility |
| z-index | `z:[value]` | Control stacking order |

---

## Space Utilities

| Name | Syntax | Description |
|------|--------|-------------|
| gap | `g:[value]` or `g-{axis}:[value]` | Add gap between flex/grid items |
| height | `h:[value]` | Set element height |
| margin | `m:[value]` or `m-{side}:[value]` | Add margin to elements |
| padding | `p:[value]` or `p-{side}:[value]` | Add padding to elements |
| width | `w:[value]` | Set element width |

---

## Visual Utilities

| Name | Syntax | Description |
|------|--------|-------------|
| accent-color | `accent:[color]` | Set accent color for form controls |
| animation-builtin | `animate:[value]` | Apply built-in animations |
| animation-delay | `animation-delay:[value]` | Set animation delay |
| animation-direction | `animation-direction:[value]` | Set animation direction |
| animation-duration | `animation-duration:[value]` | Set animation duration |
| animation-fill | `animation-fill:[value]` | Set animation fill mode |
| animation-iteration | `animation-iteration:[value]` | Set animation iteration count |
| animation-play | `animation-play:[value]` | Control animation play state |
| appearance | `appearance:[value]` | Control native appearance |
| backdrop-blur | `backdrop-blur:[value]` | Blur backdrop |
| backdrop-brightness | `backdrop-brightness:[value]` | Adjust backdrop brightness |
| backdrop-contrast | `backdrop-contrast:[value]` | Adjust backdrop contrast |
| backdrop-grayscale | `backdrop-grayscale:[value]` | Apply grayscale to backdrop |
| backdrop-hue-rotate | `backdrop-hue-rotate:[degrees]` | Rotate backdrop hue |
| backdrop-invert | `backdrop-invert:[value]` | Invert backdrop colors |
| backdrop-opacity | `backdrop-opacity:[value]` | Set backdrop opacity |
| backdrop-saturate | `backdrop-saturate:[value]` | Adjust backdrop saturation |
| backdrop-sepia | `backdrop-sepia:[value]` | Apply sepia to backdrop |
| background-attachment | `bg-attachment:[value]` | Set background attachment behavior |
| background-blend-mode | `bg-blend:[value]` | Set background blend mode |
| background-clip | `bg-clip:[value]` | Set background clipping area |
| background-color | `bg:[color]` | Set background color |
| background-image | `bg-image:[value]` | Set background image or gradient |
| background-origin | `bg-origin:[value]` | Set background positioning origin |
| background-position | `bg-pos:[value]` | Set background position |
| background-repeat | `bg-repeat:[value]` | Set background repeat behavior |
| background-size | `bg-size:[value]` | Set background size |
| blend-modes | `mix-blend:[value]` | Set mix blend mode |
| border | `border:[color]` | Set border color |
| border-radius | `rounded:[value]` | Set border radius |
| border-style | `border-style:[value]` | Set border style |
| border-width | `border-w:[value]` | Set border width |
| box-shadow | `shadow:[value]` | Add box shadow |
| caret-color | `caret:[color]` | Set text input caret color |
| color-scheme | `color-scheme:[value]` | Set preferred color scheme |
| cursor | `cursor:[value]` | Set cursor style |
| field-sizing | `field-sizing:[value]` | Control form field sizing |
| fill | `fill:[color]` | Set SVG fill color |
| filter-blur | `blur:[value]` | Apply blur filter |
| filter-brightness | `brightness:[value]` | Adjust brightness |
| filter-contrast | `contrast:[value]` | Adjust contrast |
| filter-drop-shadow | `drop-shadow:[value]` | Add drop shadow |
| filter-grayscale | `grayscale:[value]` | Apply grayscale filter |
| filter-hue-rotate | `hue-rotate:[degrees]` | Rotate hue colors |
| filter-invert | `invert:[value]` | Invert colors |
| filter-saturate | `saturate:[value]` | Adjust saturation |
| filter-sepia | `sepia:[value]` | Apply sepia filter |
| font-family | `font:[family]` | Set font family |
| font-smoothing | `[smoothing-value]` | Control font smoothing |
| font-style | `[style-value]` | Set font style |
| font-variant-numeric | `[variant-value]` | Control numeric font variants |
| font-weight | `font:[weight]` | Set font weight |
| forced-color-adjust | `forced-color:[value]` | Control forced colors mode behavior |
| hyphens | `hyphens:[value]` | Control hyphenation |
| letter-spacing | `tracking:[value]` | Set letter spacing |
| line-clamp | `line-clamp:[value]` | Limit text to specific lines |
| line-height | `leading:[value]` | Set line height |
| list-style | `list:[value]` | Set list style |
| mask | `mask:[value]` | Apply mask to element |
| opacity | `opacity:[value]` | Set element opacity (0-100) |
| outline | `outline:[color]` | Set outline color |
| pointer-events | `pointer-events:[value]` | Control pointer events |
| resize | `resize:[value]` | Control element resizing |
| scroll-behavior | `scroll-behavior:[value]` | Set scroll behavior |
| scroll-margin | `scroll-m:[value]` | Set scroll margin for snap |
| scroll-padding | `scroll-p:[value]` | Set scroll padding for snap |
| scroll-snap-align | `snap-align:[value]` | Set scroll snap alignment |
| scroll-snap-stop | `snap-stop:[value]` | Control scroll snap stop behavior |
| scroll-snap-type | `snap-type:[value]` | Set scroll snap type |
| state-prefixes | `hover:... focus:... active:...` | Apply styles on specific states |
| stroke | `stroke:[color]` | Set SVG stroke color |
| stroke-width | `stroke-w:[value]` | Set SVG stroke width |
| text-alignment | `text:[alignment]` | Set text alignment |
| text-color | `text:[color]` | Set text color |
| text-decoration | `[decoration-value]` | Set text decoration |
| text-indent | `indent:[value]` | Set text indentation |
| text-overflow | `[overflow-value]` | Handle text overflow |
| text-shadow | `text-shadow:[value]` | Add text shadow |
| text-size | `text-size:[value]` | Set font size |
| text-transform | `[transform-value]` | Transform text case |
| text-wrap | `[wrap-value]` | Control text wrapping |
| touch-action | `touch:[value]` | Control touch interactions |
| transform-backface | `backface:[value]` | Control backface visibility |
| transform-origin | `origin:[value]` | Set transform origin point |
| transform-perspective | `perspective:[value]` | Set 3D perspective |
| transform-perspective-origin | `perspective-origin:[value]` | Set perspective origin point |
| transform-rotate | `rotate:[degrees]` | Rotate element |
| transform-scale | `scale:[value]` | Scale element |
| transform-skew | `skew-x:[degrees]` or `skew-y:[degrees]` | Skew element |
| transform-style | `transform-style:[value]` | Set 3D transform style |
| transform-translate | `translate-x:[value]` or `translate-y:[value]` | Translate element position |
| transition-delay | `delay:[value]` | Set transition delay |
| transition-duration | `duration:[value]` | Set transition duration |
| transition-property | `transition:[value]` | Set transition properties |
| transition-timing | `ease:[value]` | Set transition timing function |
| typography-keywords | `[keyword]` | Typography utility keywords |
| user-select | `select:[value]` | Control text selection |
| vertical-align | `align:[value]` | Set vertical alignment |
| whitespace | `whitespace:[value]` | Control whitespace handling |
| will-change | `will-change:[value]` | Hint browser about upcoming changes |
| word-break | `[break-value]` | Control word breaking |

---

## Detailed Values

### Layout Values

#### align-content

| Value | CSS Output |
|-------|------------|
| `start` | `align-content: flex-start;` |
| `end` | `align-content: flex-end;` |
| `center` | `align-content: center;` |
| `between` | `align-content: space-between;` |
| `around` | `align-content: space-around;` |
| `evenly` | `align-content: space-evenly;` |
| `stretch` | `align-content: stretch;` |

#### align-items

| Value | CSS Output |
|-------|------------|
| `start` | `align-items: flex-start;` |
| `end` | `align-items: flex-end;` |
| `center` | `align-items: center;` |
| `baseline` | `align-items: baseline;` |
| `stretch` | `align-items: stretch;` |

#### align-self

| Value | CSS Output |
|-------|------------|
| `auto` | `align-self: auto;` |
| `start` | `align-self: flex-start;` |
| `end` | `align-self: flex-end;` |
| `center` | `align-self: center;` |
| `baseline` | `align-self: baseline;` |
| `stretch` | `align-self: stretch;` |

#### aspect-ratio

| Value | CSS Output |
|-------|------------|
| `auto` | `aspect-ratio: auto;` |
| `square` | `aspect-ratio: 1 / 1;` |
| `video` | `aspect-ratio: 16 / 9;` |

#### border-collapse

| Value | CSS Output |
|-------|------------|
| `collapse` | `border-collapse: collapse;` |
| `separate` | `border-collapse: separate;` |

#### border-spacing

| Value | CSS Output |
|-------|------------|
| `border-spacing` | `border-spacing: {value};` |
| `border-spacing-x` | `border-spacing: {value} 0;` |
| `border-spacing-y` | `border-spacing: 0 {value};` |

#### box-sizing

| Value | CSS Output |
|-------|------------|
| `border` | `box-sizing: border-box;` |
| `content` | `box-sizing: content-box;` |

#### caption-side

| Value | CSS Output |
|-------|------------|
| `top` | `caption-side: top;` |
| `bottom` | `caption-side: bottom;` |

#### columns

| Value | CSS Output |
|-------|------------|
| `1-12` | `columns: {n};` |
| `auto` | `columns: auto;` |

#### container

| Value | CSS Output |
|-------|------------|
| `container` | `width: 100%; margin-left: auto; margin-right: auto;` |

#### display

| Value | CSS Output |
|-------|------------|
| `flex` | `display: flex;` |
| `inline-flex` | `display: inline-flex;` |
| `grid` | `display: grid;` |
| `inline-grid` | `display: inline-grid;` |
| `block` | `display: block;` |
| `inline` | `display: inline-block;` |
| `hidden` | `display: none;` |

#### flex

| Value | CSS Output |
|-------|------------|
| `1` | `flex: 1 1 0%;` |
| `auto` | `flex: 1 1 auto;` |
| `initial` | `flex: 0 1 auto;` |
| `none` | `flex: none;` |

#### flex-basis

| Value | CSS Output |
|-------|------------|
| `auto` | `flex-basis: auto;` |
| `0` | `flex-basis: 0;` |

#### flex-direction

| Value | CSS Output |
|-------|------------|
| `row` | `flex-direction: row;` |
| `col` | `flex-direction: column;` |
| `row-reverse` | `flex-direction: row-reverse;` |
| `col-reverse` | `flex-direction: column-reverse;` |

#### flex-items

| Value | CSS Output |
|-------|------------|
| `grow` | `flex-grow: 1;` |
| `grow-0` | `flex-grow: 0;` |
| `shrink` | `flex-shrink: 1;` |
| `shrink-0` | `flex-shrink: 0;` |

#### flex-wrap

| Value | CSS Output |
|-------|------------|
| `wrap` | `flex-wrap: wrap;` |
| `nowrap` | `flex-wrap: nowrap;` |
| `wrap-reverse` | `flex-wrap: wrap-reverse;` |

#### float-clear

| Value | CSS Output |
|-------|------------|
| `left` | `float: left;` |
| `right` | `float: right;` |
| `none` | `float: none;` |

#### grid-auto-flow

| Value | CSS Output |
|-------|------------|
| `row` | `grid-auto-flow: row;` |
| `col` | `grid-auto-flow: column;` |
| `dense` | `grid-auto-flow: dense;` |
| `row-dense` | `grid-auto-flow: row dense;` |
| `col-dense` | `grid-auto-flow: column dense;` |

#### grid-auto-sizing

| Value | CSS Output |
|-------|------------|
| `auto` | `auto` |
| `min` | `min-content` |
| `max` | `max-content` |
| `fr` | `minmax(0, 1fr)` |

#### grid-column-span

| Value | CSS Output |
|-------|------------|
| `1-12` | `grid-column: span {n} / span {n};` |
| `full` | `grid-column: 1 / -1;` |

#### grid-columns

| Value | CSS Output |
|-------|------------|
| `1-12` | `grid-template-columns: repeat({n}, minmax(0, 1fr));` |
| `none` | `grid-template-columns: none;` |
| `subgrid` | `grid-template-columns: subgrid;` |

#### grid-row-span

| Value | CSS Output |
|-------|------------|
| `1-12` | `grid-row: span {n} / span {n};` |
| `full` | `grid-row: 1 / -1;` |

#### grid-rows

| Value | CSS Output |
|-------|------------|
| `1-12` | `grid-template-rows: repeat({n}, minmax(0, 1fr));` |
| `none` | `grid-template-rows: none;` |
| `subgrid` | `grid-template-rows: subgrid;` |

#### inset

| Value | CSS Output |
|-------|------------|
| `inset` | `inset: {value};` |
| `inset-x` | `left: {value}; right: {value};` |
| `inset-y` | `top: {value}; bottom: {value};` |
| `top` | `top: {value};` |
| `right` | `right: {value};` |
| `bottom` | `bottom: {value};` |
| `left` | `left: {value};` |

#### isolation

| Value | CSS Output |
|-------|------------|
| `isolate` | `isolation: isolate;` |
| `auto` | `isolation: auto;` |

#### justify-content

| Value | CSS Output |
|-------|------------|
| `start` | `justify-content: flex-start;` |
| `end` | `justify-content: flex-end;` |
| `center` | `justify-content: center;` |
| `between` | `justify-content: space-between;` |
| `around` | `justify-content: space-around;` |
| `evenly` | `justify-content: space-evenly;` |
| `stretch` | `justify-content: stretch;` |

#### justify-items

| Value | CSS Output |
|-------|------------|
| `start` | `justify-items: start;` |
| `end` | `justify-items: end;` |
| `center` | `justify-items: center;` |
| `stretch` | `justify-items: stretch;` |

#### justify-self

| Value | CSS Output |
|-------|------------|
| `auto` | `justify-self: auto;` |
| `start` | `justify-self: start;` |
| `end` | `justify-self: end;` |
| `center` | `justify-self: center;` |
| `stretch` | `justify-self: stretch;` |

#### object-fit

| Value | CSS Output |
|-------|------------|
| `contain` | `object-fit: contain;` |
| `cover` | `object-fit: cover;` |
| `fill` | `object-fit: fill;` |
| `none` | `object-fit: none;` |
| `scale-down` | `object-fit: scale-down;` |

#### object-position

| Value | CSS Output |
|-------|------------|
| `center` | `object-position: center;` |
| `top` | `object-position: top;` |
| `bottom` | `object-position: bottom;` |
| `left` | `object-position: left;` |
| `right` | `object-position: right;` |
| `top-left` | `object-position: top left;` |
| `top-right` | `object-position: top right;` |
| `bottom-left` | `object-position: bottom left;` |
| `bottom-right` | `object-position: bottom right;` |

#### order

| Value | CSS Output |
|-------|------------|
| `first` | `order: -9999;` |
| `last` | `order: 9999;` |
| `none` | `order: 0;` |
| `1-12` | `order: {n};` |

#### overflow

| Value | CSS Output |
|-------|------------|
| `auto` | `overflow: auto;` |
| `hidden` | `overflow: hidden;` |
| `visible` | `overflow: visible;` |
| `scroll` | `overflow: scroll;` |
| `clip` | `overflow: clip;` |

#### overscroll

| Value | CSS Output |
|-------|------------|
| `auto` | `overscroll-behavior: auto;` |
| `contain` | `overscroll-behavior: contain;` |
| `none` | `overscroll-behavior: none;` |

#### place-content

| Value | CSS Output |
|-------|------------|
| `start` | `place-content: start;` |
| `end` | `place-content: end;` |
| `center` | `place-content: center;` |
| `between` | `place-content: space-between;` |
| `around` | `place-content: space-around;` |
| `evenly` | `place-content: space-evenly;` |
| `stretch` | `place-content: stretch;` |

#### place-items

| Value | CSS Output |
|-------|------------|
| `start` | `place-items: start;` |
| `end` | `place-items: end;` |
| `center` | `place-items: center;` |
| `stretch` | `place-items: stretch;` |

#### place-self

| Value | CSS Output |
|-------|------------|
| `auto` | `place-self: auto;` |
| `start` | `place-self: start;` |
| `end` | `place-self: end;` |
| `center` | `place-self: center;` |
| `stretch` | `place-self: stretch;` |

#### position

| Value | CSS Output |
|-------|------------|
| `static` | `position: static;` |
| `relative` | `position: relative;` |
| `absolute` | `position: absolute;` |
| `fixed` | `position: fixed;` |
| `sticky` | `position: sticky;` |

#### shorthand-alignment

| Value | CSS Output |
|-------|------------|
| `center` | `justify-content: center; align-items: center;` |
| `start` | `justify-content: flex-start; align-items: flex-start;` |
| `end` | `justify-content: flex-end; align-items: flex-end;` |
| `between` | `justify-content: space-between;` |
| `around` | `justify-content: space-around;` |
| `evenly` | `justify-content: space-evenly;` |

#### table-layout

| Value | CSS Output |
|-------|------------|
| `auto` | `table-layout: auto;` |
| `fixed` | `table-layout: fixed;` |

#### visibility

| Value | CSS Output |
|-------|------------|
| `visible` | `visibility: visible;` |
| `invisible` | `visibility: hidden;` |

#### z-index

| Value | CSS Output |
|-------|------------|
| `base` | `z-index: var(--z-base);` |
| `low` | `z-index: var(--z-low);` |
| `mid` | `z-index: var(--z-mid);` |
| `high` | `z-index: var(--z-high);` |
| `top` | `z-index: var(--z-top);` |

### Space Values

#### gap

| Value | CSS Output |
|-------|------------|
| `undefined` | `gap: var(--s-{value});` |
| `undefined` | `column-gap: var(--s-{value});` |
| `undefined` | `row-gap: var(--s-{value});` |

#### height

| Value | CSS Output |
|-------|------------|
| `undefined` | `height: var(--s-{value});` |
| `undefined` | `min-height: var(--s-{value});` |
| `undefined` | `max-height: var(--s-{value});` |

#### margin

| Value | CSS Output |
|-------|------------|
| `undefined` | `margin: var(--s-{value});` |
| `undefined` | `margin-top: var(--s-{value});` |
| `undefined` | `margin-right: var(--s-{value});` |
| `undefined` | `margin-bottom: var(--s-{value});` |
| `undefined` | `margin-left: var(--s-{value});` |
| `undefined` | `margin-left: var(--s-{value}); margin-right: var(--s-{value});` |
| `undefined` | `margin-top: var(--s-{value}); margin-bottom: var(--s-{value});` |

#### padding

| Value | CSS Output |
|-------|------------|
| `undefined` | `padding: var(--s-{value});` |
| `undefined` | `padding-top: var(--s-{value});` |
| `undefined` | `padding-right: var(--s-{value});` |
| `undefined` | `padding-bottom: var(--s-{value});` |
| `undefined` | `padding-left: var(--s-{value});` |
| `undefined` | `padding-left: var(--s-{value}); padding-right: var(--s-{value});` |
| `undefined` | `padding-top: var(--s-{value}); padding-bottom: var(--s-{value});` |

#### width

| Value | CSS Output |
|-------|------------|
| `undefined` | `width: var(--s-{value});` |
| `undefined` | `min-width: var(--s-{value});` |
| `undefined` | `max-width: var(--s-{value});` |

### Visual Values

#### animation-builtin

| Value | CSS Output |
|-------|------------|
| `none` | `animation: none;` |
| `spin` | `animation: spin 1s linear infinite;` |
| `ping` | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;` |
| `pulse` | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;` |
| `bounce` | `animation: bounce 1s infinite;` |

#### animation-delay

| Value | CSS Output |
|-------|------------|
| `instant` | `animation-delay: 75ms;` |
| `quick` | `animation-delay: 100ms;` |
| `fast` | `animation-delay: 150ms;` |
| `normal` | `animation-delay: 200ms;` |
| `slow` | `animation-delay: 300ms;` |

#### animation-direction

| Value | CSS Output |
|-------|------------|
| `normal` | `animation-direction: normal;` |
| `reverse` | `animation-direction: reverse;` |
| `alternate` | `animation-direction: alternate;` |
| `alternate-reverse` | `animation-direction: alternate-reverse;` |

#### animation-duration

| Value | CSS Output |
|-------|------------|
| `instant` | `animation-duration: 75ms;` |
| `quick` | `animation-duration: 100ms;` |
| `fast` | `animation-duration: 150ms;` |
| `normal` | `animation-duration: 200ms;` |
| `slow` | `animation-duration: 300ms;` |
| `slower` | `animation-duration: 500ms;` |
| `lazy` | `animation-duration: 700ms;` |

#### animation-fill

| Value | CSS Output |
|-------|------------|
| `none` | `animation-fill-mode: none;` |
| `forwards` | `animation-fill-mode: forwards;` |
| `backwards` | `animation-fill-mode: backwards;` |
| `both` | `animation-fill-mode: both;` |

#### animation-iteration

| Value | CSS Output |
|-------|------------|
| `1` | `animation-iteration-count: 1;` |
| `infinite` | `animation-iteration-count: infinite;` |

#### animation-play

| Value | CSS Output |
|-------|------------|
| `running` | `animation-play-state: running;` |
| `paused` | `animation-play-state: paused;` |

#### appearance

| Value | CSS Output |
|-------|------------|
| `none` | `appearance: none;` |
| `auto` | `appearance: auto;` |

#### backdrop-blur

| Value | CSS Output |
|-------|------------|
| `none` | `backdrop-filter: blur(0);` |
| `tiny` | `backdrop-filter: blur(2px);` |
| `small` | `backdrop-filter: blur(4px);` |
| `medium` | `backdrop-filter: blur(8px);` |
| `big` | `backdrop-filter: blur(12px);` |
| `giant` | `backdrop-filter: blur(24px);` |
| `vast` | `backdrop-filter: blur(48px);` |

#### backdrop-brightness

| Value | CSS Output |
|-------|------------|
| `dim` | `backdrop-filter: brightness(0.5);` |
| `dark` | `backdrop-filter: brightness(0.75);` |
| `normal` | `backdrop-filter: brightness(1);` |
| `bright` | `backdrop-filter: brightness(1.25);` |
| `vivid` | `backdrop-filter: brightness(1.5);` |

#### backdrop-contrast

| Value | CSS Output |
|-------|------------|
| `low` | `backdrop-filter: contrast(0.5);` |
| `reduced` | `backdrop-filter: contrast(0.75);` |
| `normal` | `backdrop-filter: contrast(1);` |
| `high` | `backdrop-filter: contrast(1.25);` |
| `max` | `backdrop-filter: contrast(1.5);` |

#### backdrop-grayscale

| Value | CSS Output |
|-------|------------|
| `none` | `backdrop-filter: grayscale(0%);` |
| `partial` | `backdrop-filter: grayscale(50%);` |
| `full` | `backdrop-filter: grayscale(100%);` |

#### backdrop-hue-rotate

| Value | CSS Output |
|-------|------------|
| `0` | `backdrop-filter: hue-rotate(0deg);` |
| `90` | `backdrop-filter: hue-rotate(90deg);` |
| `180` | `backdrop-filter: hue-rotate(180deg);` |

#### backdrop-invert

| Value | CSS Output |
|-------|------------|
| `none` | `backdrop-filter: invert(0%);` |
| `partial` | `backdrop-filter: invert(50%);` |
| `full` | `backdrop-filter: invert(100%);` |

#### backdrop-opacity

| Value | CSS Output |
|-------|------------|
| `0` | `backdrop-filter: opacity(0);` |
| `50` | `backdrop-filter: opacity(0.5);` |
| `100` | `backdrop-filter: opacity(1);` |

#### backdrop-saturate

| Value | CSS Output |
|-------|------------|
| `none` | `backdrop-filter: saturate(0);` |
| `low` | `backdrop-filter: saturate(0.5);` |
| `normal` | `backdrop-filter: saturate(1);` |
| `high` | `backdrop-filter: saturate(1.5);` |
| `vivid` | `backdrop-filter: saturate(2);` |

#### backdrop-sepia

| Value | CSS Output |
|-------|------------|
| `none` | `backdrop-filter: sepia(0%);` |
| `partial` | `backdrop-filter: sepia(50%);` |
| `full` | `backdrop-filter: sepia(100%);` |

#### background-attachment

| Value | CSS Output |
|-------|------------|
| `fixed` | `background-attachment: fixed;` |
| `local` | `background-attachment: local;` |
| `scroll` | `background-attachment: scroll;` |

#### background-blend-mode

| Value | CSS Output |
|-------|------------|
| `normal` | `background-blend-mode: normal;` |
| `multiply` | `background-blend-mode: multiply;` |
| `screen` | `background-blend-mode: screen;` |
| `overlay` | `background-blend-mode: overlay;` |
| `darken` | `background-blend-mode: darken;` |
| `lighten` | `background-blend-mode: lighten;` |

#### background-clip

| Value | CSS Output |
|-------|------------|
| `border` | `background-clip: border-box;` |
| `padding` | `background-clip: padding-box;` |
| `content` | `background-clip: content-box;` |
| `text` | `background-clip: text; -webkit-background-clip: text;` |

#### background-image

| Value | CSS Output |
|-------|------------|
| `none` | `background-image: none;` |
| `gradient-to-t` | `background-image: linear-gradient(to top, var(--tw-gradient-stops));` |
| `gradient-to-b` | `background-image: linear-gradient(to bottom, var(--tw-gradient-stops));` |
| `gradient-to-l` | `background-image: linear-gradient(to left, var(--tw-gradient-stops));` |
| `gradient-to-r` | `background-image: linear-gradient(to right, var(--tw-gradient-stops));` |

#### background-origin

| Value | CSS Output |
|-------|------------|
| `border` | `background-origin: border-box;` |
| `padding` | `background-origin: padding-box;` |
| `content` | `background-origin: content-box;` |

#### background-position

| Value | CSS Output |
|-------|------------|
| `center` | `background-position: center;` |
| `top` | `background-position: top;` |
| `bottom` | `background-position: bottom;` |
| `left` | `background-position: left;` |
| `right` | `background-position: right;` |
| `top-left` | `background-position: top left;` |
| `top-right` | `background-position: top right;` |
| `bottom-left` | `background-position: bottom left;` |
| `bottom-right` | `background-position: bottom right;` |

#### background-repeat

| Value | CSS Output |
|-------|------------|
| `repeat` | `background-repeat: repeat;` |
| `no-repeat` | `background-repeat: no-repeat;` |
| `repeat-x` | `background-repeat: repeat-x;` |
| `repeat-y` | `background-repeat: repeat-y;` |
| `round` | `background-repeat: round;` |
| `space` | `background-repeat: space;` |

#### background-size

| Value | CSS Output |
|-------|------------|
| `auto` | `background-size: auto;` |
| `cover` | `background-size: cover;` |
| `contain` | `background-size: contain;` |

#### blend-modes

| Value | CSS Output |
|-------|------------|
| `normal` | `mix-blend-mode: normal;` |
| `multiply` | `mix-blend-mode: multiply;` |
| `screen` | `mix-blend-mode: screen;` |
| `overlay` | `mix-blend-mode: overlay;` |
| `darken` | `mix-blend-mode: darken;` |
| `lighten` | `mix-blend-mode: lighten;` |

#### border-radius

| Value | CSS Output |
|-------|------------|
| `none` | `border-radius: var(--r-none);` |
| `small` | `border-radius: var(--r-small);` |
| `medium` | `border-radius: var(--r-medium);` |
| `big` | `border-radius: var(--r-big);` |
| `round` | `border-radius: var(--r-round);` |

#### border-style

| Value | CSS Output |
|-------|------------|
| `solid` | `border-style: solid;` |
| `dashed` | `border-style: dashed;` |
| `dotted` | `border-style: dotted;` |
| `double` | `border-style: double;` |
| `none` | `border-style: none;` |

#### border-width

| Value | CSS Output |
|-------|------------|
| `tiny` | `border-width: var(--s-tiny); border-style: solid;` |
| `small` | `border-width: var(--s-small); border-style: solid;` |

#### box-shadow

| Value | CSS Output |
|-------|------------|
| `none` | `box-shadow: var(--shadow-none);` |
| `small` | `box-shadow: var(--shadow-small);` |
| `medium` | `box-shadow: var(--shadow-medium);` |
| `big` | `box-shadow: var(--shadow-big);` |
| `giant` | `box-shadow: var(--shadow-giant);` |

#### color-scheme

| Value | CSS Output |
|-------|------------|
| `light` | `color-scheme: light;` |
| `dark` | `color-scheme: dark;` |
| `normal` | `color-scheme: normal;` |

#### cursor

| Value | CSS Output |
|-------|------------|
| `auto` | `cursor: auto;` |
| `default` | `cursor: default;` |
| `pointer` | `cursor: pointer;` |
| `wait` | `cursor: wait;` |
| `text` | `cursor: text;` |
| `move` | `cursor: move;` |
| `not-allowed` | `cursor: not-allowed;` |
| `grab` | `cursor: grab;` |
| `grabbing` | `cursor: grabbing;` |

#### field-sizing

| Value | CSS Output |
|-------|------------|
| `fixed` | `field-sizing: fixed;` |
| `content` | `field-sizing: content;` |

#### fill

| Value | CSS Output |
|-------|------------|
| `none` | `fill: none;` |
| `current` | `fill: currentColor;` |

#### filter-blur

| Value | CSS Output |
|-------|------------|
| `none` | `filter: blur(0);` |
| `tiny` | `filter: blur(2px);` |
| `small` | `filter: blur(4px);` |
| `medium` | `filter: blur(8px);` |
| `big` | `filter: blur(12px);` |
| `giant` | `filter: blur(24px);` |
| `vast` | `filter: blur(48px);` |

#### filter-brightness

| Value | CSS Output |
|-------|------------|
| `dim` | `filter: brightness(0.5);` |
| `dark` | `filter: brightness(0.75);` |
| `normal` | `filter: brightness(1);` |
| `bright` | `filter: brightness(1.25);` |
| `vivid` | `filter: brightness(1.5);` |

#### filter-contrast

| Value | CSS Output |
|-------|------------|
| `low` | `filter: contrast(0.5);` |
| `reduced` | `filter: contrast(0.75);` |
| `normal` | `filter: contrast(1);` |
| `high` | `filter: contrast(1.25);` |
| `max` | `filter: contrast(1.5);` |

#### filter-drop-shadow

| Value | CSS Output |
|-------|------------|
| `none` | `filter: drop-shadow(none);` |
| `tiny` | `filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05));` |
| `small` | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));` |
| `medium` | `filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07));` |
| `big` | `filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04));` |
| `giant` | `filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03));` |

#### filter-grayscale

| Value | CSS Output |
|-------|------------|
| `none` | `filter: grayscale(0%);` |
| `partial` | `filter: grayscale(50%);` |
| `full` | `filter: grayscale(100%);` |

#### filter-hue-rotate

| Value | CSS Output |
|-------|------------|
| `0` | `filter: hue-rotate(0deg);` |
| `90` | `filter: hue-rotate(90deg);` |
| `180` | `filter: hue-rotate(180deg);` |

#### filter-invert

| Value | CSS Output |
|-------|------------|
| `none` | `filter: invert(0%);` |
| `partial` | `filter: invert(50%);` |
| `full` | `filter: invert(100%);` |

#### filter-saturate

| Value | CSS Output |
|-------|------------|
| `none` | `filter: saturate(0);` |
| `low` | `filter: saturate(0.5);` |
| `normal` | `filter: saturate(1);` |
| `high` | `filter: saturate(1.5);` |
| `vivid` | `filter: saturate(2);` |

#### filter-sepia

| Value | CSS Output |
|-------|------------|
| `none` | `filter: sepia(0%);` |
| `partial` | `filter: sepia(50%);` |
| `full` | `filter: sepia(100%);` |

#### font-family

| Value | CSS Output |
|-------|------------|
| `sans` | `font-family: ui-sans-serif, system-ui, sans-serif;` |
| `serif` | `font-family: ui-serif, Georgia, serif;` |
| `mono` | `font-family: ui-monospace, monospace;` |

#### font-smoothing

| Value | CSS Output |
|-------|------------|
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;` |

#### font-style

| Value | CSS Output |
|-------|------------|
| `italic` | `font-style: italic;` |
| `not-italic` | `font-style: normal;` |

#### font-variant-numeric

| Value | CSS Output |
|-------|------------|
| `normal-nums` | `font-variant-numeric: normal;` |
| `ordinal` | `font-variant-numeric: ordinal;` |
| `slashed-zero` | `font-variant-numeric: slashed-zero;` |
| `lining-nums` | `font-variant-numeric: lining-nums;` |
| `oldstyle-nums` | `font-variant-numeric: oldstyle-nums;` |
| `proportional-nums` | `font-variant-numeric: proportional-nums;` |
| `tabular-nums` | `font-variant-numeric: tabular-nums;` |

#### font-weight

| Value | CSS Output |
|-------|------------|
| `normal` | `font-weight: var(--fw-normal);` |
| `medium` | `font-weight: var(--fw-medium);` |
| `bold` | `font-weight: var(--fw-bold);` |

#### forced-color-adjust

| Value | CSS Output |
|-------|------------|
| `auto` | `forced-color-adjust: auto;` |
| `none` | `forced-color-adjust: none;` |

#### hyphens

| Value | CSS Output |
|-------|------------|
| `none` | `hyphens: none;` |
| `manual` | `hyphens: manual;` |
| `auto` | `hyphens: auto;` |

#### letter-spacing

| Value | CSS Output |
|-------|------------|
| `tighter` | `letter-spacing: -0.05em;` |
| `tight` | `letter-spacing: -0.025em;` |
| `normal` | `letter-spacing: 0;` |
| `wide` | `letter-spacing: 0.025em;` |
| `wider` | `letter-spacing: 0.05em;` |
| `widest` | `letter-spacing: 0.1em;` |

#### line-clamp

| Value | CSS Output |
|-------|------------|
| `1` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;` |
| `2` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;` |
| `3` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;` |
| `none` | `overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;` |

#### line-height

| Value | CSS Output |
|-------|------------|
| `none` | `line-height: 1;` |
| `tight` | `line-height: 1.25;` |
| `snug` | `line-height: 1.375;` |
| `normal` | `line-height: 1.5;` |
| `relaxed` | `line-height: 1.625;` |
| `loose` | `line-height: 2;` |

#### list-style

| Value | CSS Output |
|-------|------------|
| `none` | `list-style-type: none;` |
| `disc` | `list-style-type: disc;` |
| `decimal` | `list-style-type: decimal;` |
| `square` | `list-style-type: square;` |
| `inside` | `list-style-position: inside;` |
| `outside` | `list-style-position: outside;` |

#### mask

| Value | CSS Output |
|-------|------------|
| `none` | `mask-image: none;` |
| `fade-y` | `mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);` |
| `fade-x` | `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);` |

#### opacity

| Value | CSS Output |
|-------|------------|
| `0` | `opacity: 0;` |
| `25` | `opacity: 0.25;` |
| `50` | `opacity: 0.5;` |
| `75` | `opacity: 0.75;` |
| `100` | `opacity: 1;` |

#### pointer-events

| Value | CSS Output |
|-------|------------|
| `none` | `pointer-events: none;` |
| `auto` | `pointer-events: auto;` |

#### resize

| Value | CSS Output |
|-------|------------|
| `none` | `resize: none;` |
| `both` | `resize: both;` |
| `x` | `resize: horizontal;` |
| `y` | `resize: vertical;` |

#### scroll-behavior

| Value | CSS Output |
|-------|------------|
| `auto` | `scroll-behavior: auto;` |
| `smooth` | `scroll-behavior: smooth;` |

#### scroll-margin

| Value | CSS Output |
|-------|------------|
| `scroll-m` | `scroll-margin: {value};` |
| `scroll-m-t` | `scroll-margin-top: {value};` |
| `scroll-m-r` | `scroll-margin-right: {value};` |
| `scroll-m-b` | `scroll-margin-bottom: {value};` |
| `scroll-m-l` | `scroll-margin-left: {value};` |

#### scroll-padding

| Value | CSS Output |
|-------|------------|
| `scroll-p` | `scroll-padding: {value};` |
| `scroll-p-t` | `scroll-padding-top: {value};` |
| `scroll-p-r` | `scroll-padding-right: {value};` |
| `scroll-p-b` | `scroll-padding-bottom: {value};` |
| `scroll-p-l` | `scroll-padding-left: {value};` |

#### scroll-snap-align

| Value | CSS Output |
|-------|------------|
| `start` | `scroll-snap-align: start;` |
| `end` | `scroll-snap-align: end;` |
| `center` | `scroll-snap-align: center;` |
| `none` | `scroll-snap-align: none;` |

#### scroll-snap-stop

| Value | CSS Output |
|-------|------------|
| `normal` | `scroll-snap-stop: normal;` |
| `always` | `scroll-snap-stop: always;` |

#### scroll-snap-type

| Value | CSS Output |
|-------|------------|
| `none` | `scroll-snap-type: none;` |
| `x` | `scroll-snap-type: x mandatory;` |
| `y` | `scroll-snap-type: y mandatory;` |
| `both` | `scroll-snap-type: both mandatory;` |
| `x-proximity` | `scroll-snap-type: x proximity;` |
| `y-proximity` | `scroll-snap-type: y proximity;` |

#### state-prefixes

| Value | CSS Output |
|-------|------------|
| `hover:` | `:hover` |
| `focus:` | `:focus` |
| `active:` | `:active` |
| `disabled:` | `:disabled` |
| `visited:` | `:visited` |
| `first:` | `:first-child` |
| `last:` | `:last-child` |
| `odd:` | `:nth-child(odd)` |
| `even:` | `:nth-child(even)` |

#### stroke

| Value | CSS Output |
|-------|------------|
| `none` | `stroke: none;` |
| `current` | `stroke: currentColor;` |

#### stroke-width

| Value | CSS Output |
|-------|------------|
| `0` | `stroke-width: 0;` |
| `1` | `stroke-width: 1px;` |
| `2` | `stroke-width: 2px;` |

#### text-alignment

| Value | CSS Output |
|-------|------------|
| `left` | `text-align: left;` |
| `center` | `text-align: center;` |
| `right` | `text-align: right;` |
| `justify` | `text-align: justify;` |

#### text-color

| Value | CSS Output |
|-------|------------|
| `left` | `text-align: left;` |
| `center` | `text-align: center;` |
| `right` | `text-align: right;` |
| `justify` | `text-align: justify;` |

#### text-decoration

| Value | CSS Output |
|-------|------------|
| `underline` | `text-decoration-line: underline;` |
| `overline` | `text-decoration-line: overline;` |
| `line-through` | `text-decoration-line: line-through;` |
| `no-underline` | `text-decoration-line: none;` |

#### text-indent

| Value | CSS Output |
|-------|------------|
| `0` | `text-indent: 0;` |

#### text-overflow

| Value | CSS Output |
|-------|------------|
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |
| `text-ellipsis` | `text-overflow: ellipsis;` |
| `text-clip` | `text-overflow: clip;` |

#### text-shadow

| Value | CSS Output |
|-------|------------|
| `none` | `text-shadow: none;` |
| `small` | `text-shadow: 0 1px 2px rgba(0,0,0,0.1);` |
| `medium` | `text-shadow: 0 2px 4px rgba(0,0,0,0.1);` |
| `big` | `text-shadow: 0 4px 8px rgba(0,0,0,0.1);` |

#### text-transform

| Value | CSS Output |
|-------|------------|
| `uppercase` | `text-transform: uppercase;` |
| `lowercase` | `text-transform: lowercase;` |
| `capitalize` | `text-transform: capitalize;` |
| `normal-case` | `text-transform: none;` |

#### text-wrap

| Value | CSS Output |
|-------|------------|
| `text-wrap` | `text-wrap: wrap;` |
| `text-nowrap` | `text-wrap: nowrap;` |
| `text-balance` | `text-wrap: balance;` |
| `text-pretty` | `text-wrap: pretty;` |

#### touch-action

| Value | CSS Output |
|-------|------------|
| `auto` | `touch-action: auto;` |
| `none` | `touch-action: none;` |
| `pan-x` | `touch-action: pan-x;` |
| `pan-y` | `touch-action: pan-y;` |
| `pan-left` | `touch-action: pan-left;` |
| `pan-right` | `touch-action: pan-right;` |
| `pinch-zoom` | `touch-action: pinch-zoom;` |
| `manipulation` | `touch-action: manipulation;` |

#### transform-backface

| Value | CSS Output |
|-------|------------|
| `visible` | `backface-visibility: visible;` |
| `hidden` | `backface-visibility: hidden;` |

#### transform-origin

| Value | CSS Output |
|-------|------------|
| `center` | `transform-origin: center;` |
| `top` | `transform-origin: top;` |
| `top-right` | `transform-origin: top right;` |
| `right` | `transform-origin: right;` |
| `bottom-right` | `transform-origin: bottom right;` |
| `bottom` | `transform-origin: bottom;` |
| `bottom-left` | `transform-origin: bottom left;` |
| `left` | `transform-origin: left;` |
| `top-left` | `transform-origin: top left;` |

#### transform-perspective

| Value | CSS Output |
|-------|------------|
| `none` | `perspective: none;` |
| `dramatic` | `perspective: 100px;` |
| `near` | `perspective: 300px;` |
| `normal` | `perspective: 500px;` |
| `midrange` | `perspective: 800px;` |
| `far` | `perspective: 1000px;` |
| `distant` | `perspective: 1200px;` |

#### transform-perspective-origin

| Value | CSS Output |
|-------|------------|
| `center` | `perspective-origin: center;` |
| `top` | `perspective-origin: top;` |
| `bottom` | `perspective-origin: bottom;` |
| `left` | `perspective-origin: left;` |
| `right` | `perspective-origin: right;` |
| `top-left` | `perspective-origin: top left;` |
| `top-right` | `perspective-origin: top right;` |
| `bottom-left` | `perspective-origin: bottom left;` |
| `bottom-right` | `perspective-origin: bottom right;` |

#### transform-rotate

| Value | CSS Output |
|-------|------------|
| `0` | `transform: rotate(0deg);` |
| `45` | `transform: rotate(45deg);` |
| `90` | `transform: rotate(90deg);` |
| `180` | `transform: rotate(180deg);` |

#### transform-scale

| Value | CSS Output |
|-------|------------|
| `0` | `transform: scale(0);` |
| `50` | `transform: scale(0.5);` |
| `75` | `transform: scale(0.75);` |
| `100` | `transform: scale(1);` |
| `110` | `transform: scale(1.1);` |
| `125` | `transform: scale(1.25);` |
| `150` | `transform: scale(1.5);` |

#### transform-skew

| Value | CSS Output |
|-------|------------|
| `0` | `transform: skewX(0deg);` |
| `3` | `transform: skewX(3deg);` |
| `6` | `transform: skewX(6deg);` |
| `12` | `transform: skewX(12deg);` |

#### transform-style

| Value | CSS Output |
|-------|------------|
| `flat` | `transform-style: flat;` |
| `preserve-3d` | `transform-style: preserve-3d;` |

#### transform-translate

| Value | CSS Output |
|-------|------------|
| `0` | `transform: translateX(0);` |
| `full` | `transform: translateX(100%);` |
| `1/2` | `transform: translateX(50%);` |

#### transition-delay

| Value | CSS Output |
|-------|------------|
| `instant` | `transition-delay: 75ms;` |
| `quick` | `transition-delay: 100ms;` |
| `fast` | `transition-delay: 150ms;` |
| `normal` | `transition-delay: 200ms;` |
| `slow` | `transition-delay: 300ms;` |

#### transition-duration

| Value | CSS Output |
|-------|------------|
| `instant` | `transition-duration: 75ms;` |
| `quick` | `transition-duration: 100ms;` |
| `fast` | `transition-duration: 150ms;` |
| `normal` | `transition-duration: 200ms;` |
| `slow` | `transition-duration: 300ms;` |
| `slower` | `transition-duration: 500ms;` |
| `lazy` | `transition-duration: 700ms;` |

#### transition-property

| Value | CSS Output |
|-------|------------|
| `none` | `transition-property: none;` |
| `all` | `transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `colors` | `transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `opacity` | `transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `shadow` | `transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transform` | `transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |

#### transition-timing

| Value | CSS Output |
|-------|------------|
| `linear` | `transition-timing-function: linear;` |
| `in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1);` |
| `out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1);` |
| `in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);` |

#### typography-keywords

| Value | CSS Output |
|-------|------------|
| `italic` | `font-style: italic;` |
| `not-italic` | `font-style: normal;` |
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;` |
| `uppercase` | `text-transform: uppercase;` |
| `lowercase` | `text-transform: lowercase;` |
| `capitalize` | `text-transform: capitalize;` |
| `normal-case` | `text-transform: none;` |
| `underline` | `text-decoration-line: underline;` |
| `overline` | `text-decoration-line: overline;` |
| `line-through` | `text-decoration-line: line-through;` |
| `no-underline` | `text-decoration-line: none;` |
| `decoration-solid` | `text-decoration-style: solid;` |
| `decoration-double` | `text-decoration-style: double;` |
| `decoration-dotted` | `text-decoration-style: dotted;` |
| `decoration-dashed` | `text-decoration-style: dashed;` |
| `decoration-wavy` | `text-decoration-style: wavy;` |
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |
| `text-ellipsis` | `text-overflow: ellipsis;` |
| `text-clip` | `text-overflow: clip;` |
| `text-wrap` | `text-wrap: wrap;` |
| `text-nowrap` | `text-wrap: nowrap;` |
| `text-balance` | `text-wrap: balance;` |
| `text-pretty` | `text-wrap: pretty;` |
| `whitespace-normal` | `white-space: normal;` |
| `whitespace-nowrap` | `white-space: nowrap;` |
| `whitespace-pre` | `white-space: pre;` |
| `whitespace-pre-line` | `white-space: pre-line;` |
| `whitespace-pre-wrap` | `white-space: pre-wrap;` |
| `whitespace-break-spaces` | `white-space: break-spaces;` |
| `break-normal` | `overflow-wrap: normal; word-break: normal;` |
| `break-words` | `overflow-wrap: break-word;` |
| `break-all` | `word-break: break-all;` |
| `break-keep` | `word-break: keep-all;` |
| `hyphens-none` | `hyphens: none;` |
| `hyphens-manual` | `hyphens: manual;` |
| `hyphens-auto` | `hyphens: auto;` |
| `align-baseline` | `vertical-align: baseline;` |
| `align-top` | `vertical-align: top;` |
| `align-middle` | `vertical-align: middle;` |
| `align-bottom` | `vertical-align: bottom;` |
| `align-text-top` | `vertical-align: text-top;` |
| `align-text-bottom` | `vertical-align: text-bottom;` |
| `align-sub` | `vertical-align: sub;` |
| `align-super` | `vertical-align: super;` |
| `list-none` | `list-style-type: none;` |
| `list-disc` | `list-style-type: disc;` |
| `list-decimal` | `list-style-type: decimal;` |
| `list-square` | `list-style-type: square;` |
| `list-inside` | `list-style-position: inside;` |
| `list-outside` | `list-style-position: outside;` |

#### user-select

| Value | CSS Output |
|-------|------------|
| `none` | `user-select: none;` |
| `text` | `user-select: text;` |
| `all` | `user-select: all;` |
| `auto` | `user-select: auto;` |

#### vertical-align

| Value | CSS Output |
|-------|------------|
| `baseline` | `vertical-align: baseline;` |
| `top` | `vertical-align: top;` |
| `middle` | `vertical-align: middle;` |
| `bottom` | `vertical-align: bottom;` |
| `text-top` | `vertical-align: text-top;` |
| `text-bottom` | `vertical-align: text-bottom;` |
| `sub` | `vertical-align: sub;` |
| `super` | `vertical-align: super;` |

#### whitespace

| Value | CSS Output |
|-------|------------|
| `normal` | `white-space: normal;` |
| `nowrap` | `white-space: nowrap;` |
| `pre` | `white-space: pre;` |
| `pre-line` | `white-space: pre-line;` |
| `pre-wrap` | `white-space: pre-wrap;` |
| `break-spaces` | `white-space: break-spaces;` |

#### will-change

| Value | CSS Output |
|-------|------------|
| `auto` | `will-change: auto;` |
| `scroll` | `will-change: scroll-position;` |
| `contents` | `will-change: contents;` |
| `transform` | `will-change: transform;` |
| `opacity` | `will-change: opacity;` |

#### word-break

| Value | CSS Output |
|-------|------------|
| `break-normal` | `overflow-wrap: normal; word-break: normal;` |
| `break-words` | `overflow-wrap: break-word;` |
| `break-all` | `word-break: break-all;` |
| `break-keep` | `word-break: keep-all;` |

