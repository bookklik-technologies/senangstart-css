/**
 * SenangStart CSS - Type Definitions
 * Single source of truth for the public programmatic API.
 *
 * Attribute/token types (LayoutAttr, KnownSpaceToken, ValidTokens, …) live in
 * ./attributes.d.ts and are re-exported here. Framework augmentations are
 * opt-in: import '@bookklik/senangstart-css/react' (vue, svelte, solid,
 * preact, astro), or let the CLI write a project-local file via
 * `output.typescript`.
 */

export * from './attributes.js';
import type { AttrName } from './attributes.js';

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

/** Every attribute the extractor understands. */
export type AttributeType = AttrName | 'interact' | 'listens';

/** A parsed variant prefix such as `tab`, `hover` or `dark`. */
export interface TokenVariant {
  /** Variant name as written (`tab`, `hover`, `dark`, …). */
  name: string;
  /** Variant kind. */
  kind: 'breakpoint' | 'state' | 'dark' | (string & {});
}

export interface Token {
  /** Raw token as written in the attribute (`tab:hover:p:big`). */
  raw: string;
  attrType: AttributeType;
  property: string | null;
  value: string | null;
  /** Ordered variant prefixes (empty when none). Newer engines populate this. */
  variants?: TokenVariant[] | string[];
  /** Legacy single-breakpoint field (first breakpoint variant). */
  breakpoint?: string | null;
  /** Legacy single-state field (first state variant). */
  state?: string | null;
  isArbitrary?: boolean;
  /** Present when the token could not be parsed. */
  error?: string;
  /** Machine-readable error code (newer engines). */
  errorCode?: string;
}

// ---------------------------------------------------------------------------
// Diagnostics
// ---------------------------------------------------------------------------

/**
 * Structured diagnostic (primary shape).
 * Emitted for invalid tokens and generator failures.
 */
export interface Diagnostic {
  /** Raw token the diagnostic refers to. */
  raw: string;
  attrType?: AttributeType;
  /** Machine-readable code, e.g. `invalid-token`, `unknown-property`. */
  code: string;
  /** Human-readable explanation. */
  message: string;
  /** Optional "did you mean …" hint. */
  suggestion?: string;
  /** Source file (when known). */
  file?: string;
  /** 1-based line (when known). */
  line?: number;
  /** 1-based column (when known). */
  column?: number;
  level?: 'error' | 'warning';
}

/**
 * Legacy diagnostic: the failed token object itself (`{ raw, attrType, error }`).
 * @deprecated Prefer `Diagnostic`; kept for consumers of older engines.
 */
export interface LegacyErrorInfo {
  raw: string;
  attrType: AttributeType;
  error: string;
  /** Older builds also exposed the raw token under `token`. */
  token?: string;
  errorCode?: string;
}

/** Union of the diagnostic shapes a compile result may contain. */
export type ErrorInfo = Diagnostic | LegacyErrorInfo;

/**
 * Narrowing tip: `'code' in info && 'message' in info` selects the structured
 * `Diagnostic` shape; `'error' in info` selects the legacy token shape.
 */

// ---------------------------------------------------------------------------
// Compiler results
// ---------------------------------------------------------------------------

export interface CompileResult {
  tokens: Token[];
  css: string;
  /** `null` when the build had no errors. */
  errors: ErrorInfo[] | null;
  /** Set when `output.minify` is enabled and there were no errors. */
  minifiedCSS: string | null;
}

export type MultipleCompileResult = CompileResult;

export interface SourceFile {
  path: string;
  content: string;
}

/** Result of `parseSource` / `parseMultipleSources`: raw attribute values per attribute. */
export type ParsedAttributes = Record<AttributeType, Set<string>> & {
  /** Non-enumerable extras attached by newer extractors. */
  locations?: Map<string, Array<{ file: string | null; line: number; column: number }>>;
  skipped?: unknown[];
  skippedTotal?: number;
  file?: string | null;
};

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** A theme scale: `{ small: '8px', medium: '16px' }`. */
export type ThemeScale = Record<string, string>;

export interface ThemeScales {
  spacing?: ThemeScale;
  radius?: ThemeScale;
  shadow?: ThemeScale;
  fontSize?: ThemeScale;
  fontSizeLineHeight?: ThemeScale;
  fontWeight?: ThemeScale;
  colors?: ThemeScale;
  screens?: ThemeScale;
  zIndex?: ThemeScale;
  container?: ThemeScale;
  lineHeight?: ThemeScale;
  blur?: ThemeScale;
  brightness?: ThemeScale;
  contrast?: ThemeScale;
  grayscale?: ThemeScale;
  invert?: ThemeScale;
  saturate?: ThemeScale;
  sepia?: ThemeScale;
  dropShadow?: ThemeScale;
  backdropOpacity?: ThemeScale;
  transitionProperty?: ThemeScale;
  animationDuration?: ThemeScale;
  animationDelay?: ThemeScale;
  perspective?: ThemeScale;
  /** Placeholder text colour for form inputs. */
  placeholder?: string;
}

export interface ThemeConfig extends ThemeScales {
  /** Tailwind-style additive overrides; applied after direct theme keys. */
  extend?: ThemeScales;
  /** Emit every theme scale as CSS custom properties, not only the used ones. */
  exposeAll?: boolean;
}

/** Safelist entry: a raw token (`'p:medium'`, `'visual=bg:primary'`) or a grouped form. */
export type SafelistEntry = string | { attr: AttributeType; tokens: string[] };

/**
 * Dark-mode strategy.
 * - `'media'`   — `@media (prefers-color-scheme: dark)`
 * - `'selector'` / `'class'` — `.dark` ancestor selector
 * - `['selector', '.my-dark']` — custom ancestor selector
 * - `false` — disable `dark:` variants
 */
export type DarkModeConfig = 'media' | 'selector' | 'class' | ['selector', string] | false;

export interface OutputConfig {
  /** Output CSS path. */
  css?: string;
  minify?: boolean;
  /** AI context file path (`'./.cursorrules'`); `null`/`false` disables. */
  aiContext?: string | null | false;
  /** Project-local TypeScript definitions path; `null`/`false` disables. */
  typescript?: string | null | false;
}

export interface BuildConfig {
  /** Warn instead of failing on invalid tokens. */
  ignoreInvalid?: boolean;
}

export interface SenangStartConfig {
  /** Glob patterns to scan. Negation (`'!./legacy/**'`) is supported. */
  content?: string[];
  /** Tokens to always emit even when not found in `content`. */
  safelist?: SafelistEntry[];
  /** Attribute/selector prefix (e.g. `'ss-'`). */
  prefix?: string;
  /** Wrap output in cascade layers (`@layer senang.base, senang.utilities`). */
  layers?: boolean;
  output?: OutputConfig;
  darkMode?: DarkModeConfig;
  /** Include the opinionated base reset. */
  preflight?: boolean;
  build?: BuildConfig;
  /** Top-level alias of `build.ignoreInvalid`. */
  ignoreInvalid?: boolean;
  theme?: ThemeConfig;
  /** @deprecated Use `theme.extend`. */
  extend?: ThemeScales;
}

export type SenangStartConfigPartial = Partial<SenangStartConfig>;

/**
 * Fully merged configuration as returned by `mergeConfig` — every top-level
 * section is present.
 */
export interface ResolvedConfig extends SenangStartConfig {
  content: string[];
  safelist: SafelistEntry[];
  prefix: string;
  layers: boolean;
  output: OutputConfig;
  darkMode: DarkModeConfig;
  preflight: boolean;
  build: BuildConfig;
  theme: ThemeConfig;
}

// ---------------------------------------------------------------------------
// API
// ---------------------------------------------------------------------------

export declare function tokenize(raw: string, attrType: AttributeType | string, config?: SenangStartConfig): Token;
export declare function tokenizeAll(parsed: Record<string, Iterable<string>>, config?: SenangStartConfig): Token[];
export declare function parseSource(content: string, options?: { file?: string | null }): ParsedAttributes;
export declare function parseMultipleSources(files: SourceFile[]): ParsedAttributes;
export declare function generateCSS(tokens: Token[], config: SenangStartConfig): string;
export declare function generateCSSVariables(config: SenangStartConfig): string;
export declare function generatePreflight(config: SenangStartConfig): string;

/**
 * Compile a single source string. A configuration object is REQUIRED — pass
 * `defaultConfig` or the result of `mergeConfig(userConfig)`.
 */
export declare function compileSource(content: string, config: SenangStartConfig): CompileResult;
/** Compile multiple files. A configuration object is REQUIRED (see `compileSource`). */
export declare function compileMultiple(files: SourceFile[], config: SenangStartConfig): MultipleCompileResult;

export declare function mergeConfig(
  userConfig?: SenangStartConfigPartial,
  options?: { silent?: boolean } | boolean
): ResolvedConfig;

export declare const defaultConfig: ResolvedConfig;

/** Engine constants (breakpoints, states, Tailwind compatibility scales, limits). */
export declare const constants: {
  BREAKPOINTS: readonly string[];
  STATES: readonly string[];
  LAYOUT_KEYWORDS: readonly string[];
  LAYOUT_MAP: Record<string, string>;
  TYPOGRAPHY_KEYWORDS: Record<string, string>;
  TW_SPACING: Record<string, string>;
  TW_RADIUS: Record<string, string>;
  TW_SHADOW: Record<string, string>;
  TW_FONT_SIZE: Record<string, string>;
  TW_LEADING: Record<string, string>;
  TW_FONT_WEIGHT: Record<string, string>;
  LIMITS: Record<string, number>;
  CSS_COLOR_KEYWORDS: readonly string[];
  [key: string]: unknown;
};
