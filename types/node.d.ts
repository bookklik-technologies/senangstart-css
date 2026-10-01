/**
 * SenangStart CSS - Programmatic Node.js API (ESM only)
 *
 *     import { build, watch, loadConfig, defineConfig } from '@bookklik/senangstart-css/node';
 *
 * Mirrors the JSDoc in src/node.js.
 */

import type { Diagnostic as CoreDiagnostic, SenangStartConfig, ResolvedConfig } from './index.js';

export type { SenangStartConfig, ResolvedConfig } from './index.js';

/** Alias used by `senangstart init` templates: `@type {import('@bookklik/senangstart-css/node').Config}`. */
export type Config = SenangStartConfig;

/** A normalised build diagnostic (always carries a `level`). */
export interface Diagnostic extends CoreDiagnostic {
  level: 'error' | 'warning';
}

export interface BuildOptions {
  /** Config path (relative to cwd or absolute) or a raw config object. Omit to auto-discover senangstart.config.{js,mjs,cjs,json,ts}. */
  config?: string | SenangStartConfig;
  /** Project root (default: `process.cwd()`). */
  cwd?: string;
  /** Override content globs. */
  content?: string[];
  /** CSS output path; `false` = don't write anything. */
  output?: string | false;
  /** Override `output.minify`. */
  minify?: boolean;
  /** Extra safelist entries (appended to `config.safelist`). */
  safelist?: string[];
  /** Override `preflight`. */
  preflight?: boolean;
  /** Downgrade token errors to warnings. */
  ignoreInvalid?: boolean;
  /** Override `output.aiContext` (opt-in side output). */
  aiContext?: string | false;
  /** Override `output.typescript` (opt-in side output). */
  typescript?: string | false;
  /** Cache-bust the config import (watch mode). */
  fresh?: boolean;
}

export interface WatchOptions extends BuildOptions {
  /** Debounce for file events in ms (default 100). */
  debounceMs?: number;
}

export interface BuildOutputs {
  css?: string;
  aiContext?: string;
  typescript?: string;
  skipped: Array<{ path: string; reason: string; kind?: string }>;
}

export interface BuildResult {
  css: string;
  errors: Diagnostic[];
  warnings: Diagnostic[];
  /** Absolute paths of scanned source files. */
  files: string[];
  outputs: BuildOutputs;
  durationMs: number;
  /** `errors.length === 0` */
  ok: boolean;
  tokenCount: number;
  /** The resolved (merged) config. */
  config: ResolvedConfig;
  configPath: string | null;
}

export interface LoadConfigOptions {
  cwd?: string;
  fresh?: boolean;
  strict?: boolean;
}

export interface LoadConfigResult {
  config: ResolvedConfig;
  path: string | null;
  source: string;
  warnings: string[];
  errors: string[];
}

export interface WatchMeta {
  event: 'initial' | 'change' | 'add' | 'unlink' | 'config' | 'manual' | 'watcher-error' | (string & {});
  path?: string;
}

export interface Watcher {
  close(): Promise<void>;
  rebuild(): Promise<void>;
}

export declare class ConfigError extends Error {
  name: 'ConfigError';
  code: string;
  path?: string;
  constructor(message: string, details?: { path?: string; cause?: unknown; code?: string });
}

export declare class BuildError extends Error {
  name: 'BuildError';
  /** e.g. `NO_SOURCES`, `ALL_FILES_FAILED`, `TOKENIZE`, `GENERATE`, `MINIFY`, `WRITE_CSS`. */
  code: string;
  constructor(message: string, details?: { code?: string; cause?: unknown });
}

/** Identity helper for typed configs. */
export declare function defineConfig<T extends SenangStartConfig>(config: T): T;

/** Load, validate and merge a config. */
export declare function loadConfig(
  pathOrObject?: string | SenangStartConfig | null,
  options?: LoadConfigOptions
): Promise<LoadConfigResult>;

/**
 * Build CSS once.
 * @throws {ConfigError} when the config is missing/invalid
 * @throws {BuildError} when no source files are found or generation fails
 */
export declare function build(options?: BuildOptions): Promise<BuildResult>;

/**
 * Watch content globs + the config file and rebuild on change. `onResult` is
 * called after every build; on failure `result` is null and `error` is set.
 */
export declare function watch(
  options?: WatchOptions,
  onResult?: (result: BuildResult | null, error?: Error, meta?: WatchMeta) => void
): Promise<Watcher>;

declare const _default: {
  build: typeof build;
  watch: typeof watch;
  loadConfig: typeof loadConfig;
  defineConfig: typeof defineConfig;
};
export default _default;
