/**
 * SenangStart CSS - TypeScript Definition Generator
 * Generates type definitions for React/Vue/Svelte
 */

/**
 * Generate TypeScript definitions
 * @param {Object} config - Configuration object
 * @returns {string} - TypeScript definition content
 */
export function generateTypeScript(config) {
  const { theme } = config;
  
  // Generate spacing unions
  const spacingKeys = Object.keys(theme.spacing);
  const paddingUnions = spacingKeys.map(k => `'p:${k}'`).join(' | ');
  const marginUnions = spacingKeys.map(k => `'m:${k}'`).join(' | ');
  const gapUnions = spacingKeys.map(k => `'g:${k}'`).join(' | ');
  
  // Generate radius unions
  const radiusKeys = Object.keys(theme.radius);
  const roundedUnions = radiusKeys.map(k => `'rounded:${k}'`).join(' | ');
  
  // Generate shadow unions
  const shadowKeys = Object.keys(theme.shadow);
  const shadowUnions = shadowKeys.map(k => `'shadow:${k}'`).join(' | ');
  
  // Generate color unions
  const colorKeys = Object.keys(theme.colors);
  const bgUnions = colorKeys.map(k => `'bg:${k}'`).join(' | ');
  const textColorUnions = colorKeys.map(k => `'text:${k}'`).join(' | ');
  
  // Generate font size unions
  const fontSizeKeys = Object.keys(theme.fontSize);
  const textSizeUnions = fontSizeKeys.map(k => `'text-size:${k}'`).join(' | ');
  
  // Generate font weight unions
  const fontWeightKeys = Object.keys(theme.fontWeight);
  const fontUnions = fontWeightKeys.map(k => `'font:${k}'`).join(' | ');

  return `/**
 * SenangStart CSS - TypeScript Definitions
 * Auto-generated from configuration
 */

// Layout attribute values
type LayoutDisplay = 'flex' | 'grid' | 'block' | 'inline' | 'hidden';
type LayoutDirection = 'row' | 'col' | 'row-reverse' | 'col-reverse';
type LayoutAlignment = 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
type LayoutWrap = 'wrap' | 'nowrap';
type LayoutPosition = 'absolute' | 'relative' | 'fixed' | 'sticky';
type LayoutZIndex = 'z:base' | 'z:low' | 'z:mid' | 'z:high' | 'z:top';

type LayoutValue = 
  | LayoutDisplay 
  | LayoutDirection 
  | LayoutAlignment 
  | LayoutWrap 
  | LayoutPosition 
  | LayoutZIndex
  | \`\${LayoutDisplay} \${LayoutDirection}\`
  | \`\${LayoutDisplay} \${LayoutAlignment}\`
  | \`\${LayoutDisplay} \${LayoutDirection} \${LayoutAlignment}\`
  | string;

// Space attribute values
type SpacingScale = ${spacingKeys.map(k => `'${k}'`).join(' | ')};
type Breakpoint = 'mob' | 'tab' | 'lap' | 'desk';

type PaddingValue = ${paddingUnions} | \`p-t:\${SpacingScale}\` | \`p-r:\${SpacingScale}\` | \`p-b:\${SpacingScale}\` | \`p-l:\${SpacingScale}\` | \`p-x:\${SpacingScale}\` | \`p-y:\${SpacingScale}\`;
type MarginValue = ${marginUnions} | \`m-t:\${SpacingScale}\` | \`m-r:\${SpacingScale}\` | \`m-b:\${SpacingScale}\` | \`m-l:\${SpacingScale}\` | \`m-x:\${SpacingScale}\` | \`m-y:\${SpacingScale}\` | 'm-x:auto';
type GapValue = ${gapUnions} | \`g-x:\${SpacingScale}\` | \`g-y:\${SpacingScale}\`;
type SizeValue = \`w:[\${string}]\` | \`h:[\${string}]\` | \`min-w:[\${string}]\` | \`max-w:[\${string}]\` | \`min-h:[\${string}]\` | \`max-h:[\${string}]\`;

type SpaceValue = PaddingValue | MarginValue | GapValue | SizeValue | \`\${Breakpoint}:\${PaddingValue}\` | string;

// Visual attribute values
type ColorKey = ${colorKeys.map(k => `'${k}'`).join(' | ')};
type RadiusKey = ${radiusKeys.map(k => `'${k}'`).join(' | ')};
type ShadowKey = ${shadowKeys.map(k => `'${k}'`).join(' | ')};
type FontSizeKey = ${fontSizeKeys.map(k => `'${k}'`).join(' | ')};
type FontWeightKey = ${fontWeightKeys.map(k => `'${k}'`).join(' | ')};

type BgValue = ${bgUnions} | \`bg:[\${string}]\`;
type TextColorValue = ${textColorUnions};
type TextSizeValue = ${textSizeUnions};
type FontValue = ${fontUnions};
type RoundedValue = ${roundedUnions};
type ShadowValue = ${shadowUnions};
type TextAlignValue = 'text:left' | 'text:center' | 'text:right';

type VisualValue = BgValue | TextColorValue | TextSizeValue | FontValue | RoundedValue | ShadowValue | TextAlignValue | string;

// React JSX attribute extensions
declare module 'react' {
  interface HTMLAttributes<T> {
    layout?: LayoutValue;
    space?: SpaceValue;
    visual?: VisualValue;
  }
}

// Vue attribute extensions
declare module 'vue' {
  interface HTMLAttributes {
    layout?: string;
    space?: string;
    visual?: string;
  }
}

// Svelte attribute extensions
declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    'layout'?: string;
    'space'?: string;
    'visual'?: string;
  }
}

export {};
`;
}

export default { generateTypeScript };
