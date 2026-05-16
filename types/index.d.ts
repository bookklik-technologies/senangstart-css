/**
 * SenangStart CSS - Main Type Definitions Entry Point
 */

// Re-export from SDK types
export * from './sdk.d.js';

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

// Compiler result types
export interface CompileResult {
  tokens: Token[];
  css: string;
  errors: Array<{ token: string; attrType: string; error: string }> | null;
  minifiedCSS: string | null;
}

export interface MultipleCompileResult {
  tokens: Token[];
  css: string;
  errors: Array<{ token: string; attrType: string; error: string }> | null;
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

// API function signatures
export function tokenize(raw: string, attrType: string): Token;
export function tokenizeAll(parsed: Record<string, Set<string>>): Token[];
export function parseSource(content: string): Record<string, Set<string>>;
export function parseMultipleSources(files: Array<{path: string; content: string}>): Record<string, Set<string>>;
export function generateCSS(tokens: Token[], config: SenangStartConfig): string;
export function generateCSSVariables(config: SenangStartConfig): string;
export function generatePreflight(config: SenangStartConfig): string;
export function compileSource(content: string, config?: Partial<SenangStartConfig>): CompileResult;
export function compileMultiple(files: Array<{path: string; content: string}>, config?: Partial<SenangStartConfig>): MultipleCompileResult;
export function mergeConfig(userConfig: Partial<SenangStartConfig>): SenangStartConfig;

export const defaultConfig: SenangStartConfig;