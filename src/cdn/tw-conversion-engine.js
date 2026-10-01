/**
 * SenangStart CSS - Tailwind → SenangStart converter, browser bundle.
 * Thin wrapper over src/converter (the single implementation).
 *
 * <script src="https://unpkg.com/@bookklik/senangstart-css/dist/senangstart-tw.min.js"></script>
 * window.SenangStartTW.convertHTML('<div class="flex p-4">Hi</div>')
 */
import { convertClass, convertClasses, convertHTML, rewriteClassAttributes, spacingScale, radiusScale, shadowScale, fontSizeScale, layoutMappings, visualKeywords } from '../converter/index.js';

const api = {
  convertClass,
  convertClasses,
  convertHTML,
  rewriteClassAttributes,
  scales: { spacing: spacingScale, radius: radiusScale, shadow: shadowScale, fontSize: fontSizeScale },
  mappings: { layout: layoutMappings, visual: visualKeywords }
};

if (typeof window !== 'undefined') window.SenangStartTW = api;

export { convertClass, convertClasses, convertHTML, rewriteClassAttributes };
export default api;
