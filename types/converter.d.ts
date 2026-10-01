/** Tailwind → SenangStart converter (`@bookklik/senangstart-css/converter`). */
export interface ConvertOptions {
  /** Keep Tailwind's numeric scale (`p:tw-4`) instead of the semantic scale (`p:medium`). */
  exact?: boolean;
  /** Attribute prefix to emit (`'ss'` → `ss-layout`), matching `config.prefix`. */
  prefix?: string;
  /** Keep the original `class` attribute next to the converted attributes. */
  keepClass?: boolean;
}
export interface ConvertedToken { cat: 'layout' | 'space' | 'visual' | 'interact' | 'listens' | 'meta'; val: string }
export interface ConvertedClasses { layout: string[]; space: string[]; visual: string[]; interact: string[]; listens: string[]; unknown: string[] }
export function convertClass(twClass: string, options?: ConvertOptions | boolean): ConvertedToken[] | null;
export function convertClasses(classString: string, options?: ConvertOptions | boolean): ConvertedClasses;
export function convertHTML(html: string, options?: ConvertOptions | boolean): string;
export function rewriteClassAttributes(html: string, options?: ConvertOptions | boolean): { html: string; converted: number; unknown: Map<string, number> };
export const spacingScale: Record<string, string>;
export const radiusScale: Record<string, string>;
export const shadowScale: Record<string, string>;
export const fontSizeScale: Record<string, string>;
export const layoutMappings: Record<string, string>;
export const visualKeywords: Record<string, string>;
