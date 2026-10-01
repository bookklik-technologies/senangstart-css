/**
 * Adapter exposing the merged converter (src/converter) in the shape of the
 * old scripts/convert-tailwind.js API ({ category, value }) so the historical
 * mapping tests keep documenting expected conversions.
 */
import { convertClass as cc, convertClasses, convertHTML, rewriteClassAttributes, spacingScale } from '../../src/converter/index.js';

function toOld(r) {
  if (!r) return null;
  const list = r.filter((x) => x.cat !== 'meta').map((x) => ({ category: x.cat, value: x.val }));
  return list.length === 1 ? list[0] : list;
}
export function convertClass(twClass, options) { return toOld(cc(twClass, options)); }
export { convertClasses, convertHTML, rewriteClassAttributes, spacingScale };
