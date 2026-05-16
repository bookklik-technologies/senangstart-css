/**
 * SenangStart CSS - TypeScript Type Definitions
 * Type definitions for the main API exports
 */

import type { defaultConfig } from '../config/defaults.js';

// ============================================
// CONFIGURATION TYPES
// ============================================

export interface SenangStartConfig {
  theme?: {
    spacing?: Record<string, string>;
    radius?: Record<string, string>;
    shadow?: Record<string, string>;
    fontSize?: Record<string, string>;
    fontSizeLineHeight?: Record<string, string>;
    fontWeight?: Record<string, string>;
    colors?: Record<string, string>;
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

export type SenangStartConfigPartial = Partial<SenangStartConfig>;

// ============================================
// COMPILER RESULT TYPES
// ============================================

export interface CompileResult {
  tokens: unknown[];
  css: string;
  errors: ErrorInfo[] | null;
  minifiedCSS: string | null;
}

export interface ErrorInfo {
  token: string;
  attrType: 'layout' | 'space' | 'visual' | 'interact' | 'listens';
  error: string;
}

export interface MultipleCompileResult {
  tokens: unknown[];
  css: string;
  errors: ErrorInfo[] | null;
  minifiedCSS: string | null;
}

// ============================================
// MAIN API FUNCTIONS
// ============================================

export function compileSource(content: string, config?: SenangStartConfigPartial): CompileResult;
export function compileMultiple(files: Array<{ path: string; content: string }>, config?: SenangStartConfigPartial): MultipleCompileResult;

// ============================================
// CONFIG UTILITIES
// ============================================

export function getDefaultConfig(): SenangStartConfig;
export { defaultConfig };
