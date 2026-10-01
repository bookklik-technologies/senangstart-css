/**
 * Tailwind variant prefixes → SenangStart variant prefixes.
 *
 * Any number of stacked variants is supported (`md:dark:hover:bg-red-500` →
 * `tw-md:dark:hover:bg:red-500`). Returns null for a variant SenangStart cannot
 * express, in which case the whole class stays in `class=""`.
 */

const SCREENS = new Set(['sm', 'md', 'lg', 'xl', '2xl']);
const CONTAINERS = new Set(['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl']);

/** Tailwind state names that exist in SenangStart under the same name. */
const SAME = new Set([
  'hover', 'focus', 'focus-visible', 'focus-within', 'active', 'visited', 'target', 'checked', 'indeterminate',
  'default', 'required', 'optional', 'valid', 'invalid', 'user-valid', 'user-invalid', 'in-range', 'out-of-range',
  'placeholder-shown', 'autofill', 'read-only', 'disabled', 'enabled', 'empty', 'open', 'first', 'last', 'only',
  'odd', 'even', 'first-of-type', 'last-of-type', 'before', 'after', 'first-letter', 'first-line', 'marker',
  'selection', 'file', 'backdrop', 'placeholder', 'dark', 'rtl', 'ltr', 'print', 'portrait', 'landscape',
  'motion-safe', 'motion-reduce', 'contrast-more', 'contrast-less', 'forced-colors', 'pointer-fine', 'pointer-coarse'
]);

const GROUP_STATES = { hover: 'hover', focus: 'focus', 'focus-visible': 'focus-visible', 'focus-within': 'focus-within', active: 'active', open: 'expanded', checked: 'checked' };

/**
 * @param {string} variant - without the trailing colon
 * @returns {{ prefix: string, extra?: {cat:string,val:string}, needsGroup?: boolean } | null}
 */
export function convertVariant(variant) {
  if (SAME.has(variant)) return { prefix: variant };

  // Responsive
  if (SCREENS.has(variant)) return { prefix: `tw-${variant}` };
  if (variant.startsWith('max-') && SCREENS.has(variant.slice(4))) return { prefix: `max-tw-${variant.slice(4)}` };
  if (variant.startsWith('min-') && SCREENS.has(variant.slice(4))) return { prefix: `tw-${variant.slice(4)}` };

  // Container queries: @md → @tw-md (sizes approximate Tailwind's container scale)
  if (variant.startsWith('@')) {
    const [size, name] = variant.slice(1).split('/');
    const isMax = size.startsWith('max-');
    const key = isMax ? size.slice(4) : size;
    if (!CONTAINERS.has(key) || !SCREENS.has(key)) return null; // only sizes we have screens for
    return { prefix: `@${isMax ? 'max-' : ''}tw-${key}${name ? `/${name}` : ''}` };
  }

  // group-* / peer-*
  const gm = /^(group|peer)-([a-z-]+?)(?:\/[\w-]+)?$/.exec(variant);
  if (gm) {
    const state = GROUP_STATES[gm[2]];
    if (!state) return null;
    if (gm[1] === 'group') return { prefix: state, needsGroup: true };
    return { prefix: state, extra: { cat: 'listens', val: 'peer' } };
  }

  // aria-*, data-*, has-[…], not-*, supports-[…] (unsupported), nth-*
  if (/^aria-(\[.+\]|[a-z]+)$/.test(variant)) return { prefix: variant };
  if (/^data-(\[.+\]|[a-z][a-z0-9-]*)$/.test(variant)) return { prefix: variant };
  if (/^has-\[.+\]$/.test(variant)) return { prefix: variant };
  if (variant.startsWith('not-')) {
    const inner = variant.slice(4);
    if (SAME.has(inner) || /^\[.+\]$/.test(inner)) return { prefix: variant };
    return null;
  }
  return null;
}

/**
 * Split a Tailwind class into [variants[], base, important] respecting brackets.
 * Handles `!p-4`, `p-4!`, `hover:!p-4`, `md:dark:hover:bg-red-500`, `data-[state=open]:p-4`.
 * @param {string} cls
 */
export function splitClass(cls) {
  const parts = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < cls.length; i++) {
    const ch = cls[i];
    if (ch === '[') depth++;
    else if (ch === ']') depth = Math.max(0, depth - 1);
    else if (ch === ':' && depth === 0) { parts.push(cls.slice(start, i)); start = i + 1; }
  }
  parts.push(cls.slice(start));
  let base = parts.pop();
  let important = false;
  if (base.startsWith('!')) { important = true; base = base.slice(1); }
  if (base.endsWith('!') && !base.endsWith(']!')) { important = true; base = base.slice(0, -1); }
  else if (base.endsWith(']!')) { important = true; base = base.slice(0, -1); }
  return { variants: parts, base, important };
}

export default { convertVariant, splitClass };
