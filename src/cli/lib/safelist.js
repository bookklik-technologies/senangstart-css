/**
 * SenangStart CSS - Safelist expansion
 *
 * `config.safelist` entries are either:
 *   - `'attr=token'`            explicit attribute, e.g. 'visual=bg:primary'
 *   - `'token'`                 attribute inferred (layout keyword → layout,
 *                               space property → space, otherwise visual)
 *   - `{ attr: 'space', tokens: ['p:medium', 'g:small'] }`
 *
 * Output has the same shape as parser.parseSource() so it can be merged into
 * the token set before tokenisation.
 */

import { BREAKPOINTS, STATES, LAYOUT_KEYWORDS, LAYOUT_MAP } from '../../core/constants.js';
import { buildSpacePropertyMap } from '../../definitions/index.js';

export const ATTR_TYPES = Object.freeze(['layout', 'space', 'visual', 'interact', 'listens']);

let spaceProps = null;
function getSpaceProps() {
  if (!spaceProps) {
    try {
      spaceProps = new Set(Object.keys(buildSpacePropertyMap()));
    } catch {
      spaceProps = new Set(['p', 'm', 'g', 'w', 'h', 'min-w', 'max-w', 'min-h', 'max-h', 'size']);
    }
  }
  return spaceProps;
}

/**
 * Guess the attribute type for a bare token.
 * @param {string} raw
 * @returns {'layout'|'space'|'visual'}
 */
export function inferAttrType(raw) {
  const segments = raw.split(':');
  while (segments.length > 1 && (BREAKPOINTS.includes(segments[0]) || STATES.includes(segments[0]))) {
    segments.shift();
  }
  const core = segments.join(':');

  if (core.startsWith('z:') || core.startsWith('overflow:')) return 'layout';
  if (!core.includes(':')) {
    if (LAYOUT_KEYWORDS.includes(core) || Object.prototype.hasOwnProperty.call(LAYOUT_MAP, core)) return 'layout';
    return 'visual';
  }
  const prop = core.slice(0, core.indexOf(':'));
  if (getSpaceProps().has(prop)) return 'space';
  return 'visual';
}

/**
 * Create an empty parsed-token container.
 */
export function emptyTokenSets() {
  return { layout: new Set(), space: new Set(), visual: new Set(), interact: new Set(), listens: new Set() };
}

/**
 * Expand safelist entries into parser-shaped token sets.
 * @param {Array<string|{attr: string, tokens: string[]}>} safelist
 * @param {{ onInvalid?: (msg: string) => void }} [opts]
 * @returns {{ layout: Set<string>, space: Set<string>, visual: Set<string>, interact: Set<string>, listens: Set<string> }}
 */
export function expandSafelist(safelist, opts = {}) {
  const out = emptyTokenSets();
  if (!Array.isArray(safelist)) return out;
  const warn = typeof opts.onInvalid === 'function' ? opts.onInvalid : () => {};

  const add = (attr, token) => {
    if (typeof token !== 'string') return;
    const t = token.trim();
    if (!t) return;
    if (!ATTR_TYPES.includes(attr)) {
      warn(`safelist: unknown attribute "${attr}" for token "${t}" (expected ${ATTR_TYPES.join('|')})`);
      return;
    }
    out[attr].add(t);
  };

  for (const entry of safelist) {
    if (typeof entry === 'string') {
      const trimmed = entry.trim();
      if (!trimmed) continue;
      const eq = trimmed.indexOf('=');
      if (eq > 0 && ATTR_TYPES.includes(trimmed.slice(0, eq))) {
        const attr = trimmed.slice(0, eq);
        for (const tok of trimmed.slice(eq + 1).split(/\s+/)) add(attr, tok);
      } else {
        for (const tok of trimmed.split(/\s+/)) add(inferAttrType(tok), tok);
      }
    } else if (entry && typeof entry === 'object' && typeof entry.attr === 'string' && Array.isArray(entry.tokens)) {
      for (const tok of entry.tokens) add(entry.attr, tok);
    } else {
      warn(`safelist: ignoring invalid entry ${JSON.stringify(entry)}`);
    }
  }

  return out;
}

export default expandSafelist;
