/**
 * SenangStart CSS - Type Definitions
 * Single source of truth for all public type definitions
 */

// Tokenizer types
export interface Token {
  property: string;
  value: string | null;
  attrType: 'layout' | 'space' | 'visual' | 'interact' | 'listens';
  raw: string;
  breakpoint?: string;
  state?: string;
  isArbitrary?: boolean;
  error?: string;
}

// Error info type
export interface ErrorInfo {
  token: string;
  attrType: 'layout' | 'space' | 'visual' | 'interact' | 'listens';
  error: string;
}

// Compiler result types
export interface CompileResult {
  tokens: Token[];
  css: string;
  errors: ErrorInfo[] | null;
  minifiedCSS: string | null;
}

export interface MultipleCompileResult {
  tokens: Token[];
  css: string;
  errors: ErrorInfo[] | null;
  minifiedCSS: string | null;
}

// Configuration type
export interface SenangStartConfig {
  content?: string[];
  theme?: {
    spacing?: Record<string, string>;
    radius?: Record<string, string>;
    shadow?: Record<string, string>;
    fontSize?: Record<string, string>;
    fontSizeLineHeight?: Record<string, string>;
    fontWeight?: Record<string, string>;
    colors?: Record<string, string>;
    screens?: Record<string, string>;
    zIndex?: Record<string, string>;
    blur?: Record<string, string>;
    brightness?: Record<string, string>;
    contrast?: Record<string, string>;
    grayscale?: Record<string, string>;
    invert?: Record<string, string>;
    saturate?: Record<string, string>;
    sepia?: Record<string, string>;
    dropShadow?: Record<string, string>;
    backdropOpacity?: Record<string, string>;
    transitionProperty?: Record<string, string>;
    animationDuration?: Record<string, string>;
    animationDelay?: Record<string, string>;
    perspective?: Record<string, string>;
    container?: Record<string, string>;
  };
  output?: {
    css?: string;
    minify?: boolean;
    aiContext?: string;
    typescript?: string;
  };
  preflight?: boolean;
  darkMode?: 'media' | 'selector' | [string, string];
}

export type SenangStartConfigPartial = Partial<SenangStartConfig>;

// API function signatures
export function tokenize(raw: string, attrType: string): Token;
export function tokenizeAll(parsed: Record<string, Set<string>>): Token[];
export function parseSource(content: string): Record<string, Set<string>>;
export function parseMultipleSources(files: Array<{path: string; content: string}>): Record<string, Set<string>>;
export function generateCSS(tokens: Token[], config: SenangStartConfig): string;
export function generateCSSVariables(config: SenangStartConfig): string;
export function generatePreflight(config: SenangStartConfig): string;
export function compileSource(content: string, config?: SenangStartConfigPartial): CompileResult;
export function compileMultiple(files: Array<{path: string; content: string}>, config?: SenangStartConfigPartial): MultipleCompileResult;
export function mergeConfig(userConfig: SenangStartConfigPartial): SenangStartConfig;

export const defaultConfig: SenangStartConfig;