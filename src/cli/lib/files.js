/**
 * SenangStart CSS - Source file discovery (tinyglobby)
 *
 * - Supports negation (`!pattern`), literal file paths, brace expansion,
 *   multi-dot extensions (`*.blade.php`) and nested directories.
 * - Never follows symlinks.
 * - Ignores node_modules / .git / common build output dirs by default.
 */

import { glob } from 'tinyglobby';
import { resolve, isAbsolute, relative, sep } from 'path';
import { existsSync, statSync } from 'fs';

export const DEFAULT_IGNORE = Object.freeze([
  '**/node_modules/**',
  '**/.git/**',
  '**/dist/**',
  '**/.cache/**',
  '**/.next/**',
  '**/.nuxt/**',
  '**/.output/**',
  '**/.turbo/**',
  '**/.vercel/**',
  '**/coverage/**',
  '**/.nyc_output/**'
]);

/** Sensible fallback when a config has no `content` array. */
export const DEFAULT_CONTENT = Object.freeze([
  './**/*.html',
  './**/*.{php,blade.php}',
  './**/*.{js,jsx,ts,tsx}',
  './**/*.{vue,svelte,astro}',
  './**/*.{md,mdx}'
]);

const GLOB_CHARS = /[*?[\]{}()!]/;

/**
 * Normalise a pattern so tinyglobby (which is posix-style) understands it.
 * Absolute patterns are made relative to cwd when possible.
 */
function normalisePattern(pattern, cwd) {
  let negated = false;
  let p = pattern.trim();
  if (p.startsWith('!')) {
    negated = true;
    p = p.slice(1);
  }
  if (isAbsolute(p)) {
    const rel = relative(cwd, p);
    if (rel && !rel.startsWith('..') && !isAbsolute(rel)) p = rel;
  }
  if (p.startsWith('./')) p = p.slice(2);
  if (sep === '\\') p = p.split('\\').join('/');
  return { pattern: p, negated };
}

/**
 * Split patterns into { include, exclude, literals }.
 * @param {string[]} patterns
 * @param {string} cwd
 */
export function splitPatterns(patterns, cwd) {
  const include = [];
  const exclude = [];
  const literals = [];

  for (const raw of patterns) {
    if (typeof raw !== 'string' || raw.trim() === '') continue;
    const { pattern, negated } = normalisePattern(raw, cwd);
    if (negated) {
      exclude.push(pattern);
      continue;
    }
    if (!GLOB_CHARS.test(pattern)) {
      // Literal path — include directly if it is an existing file
      const abs = resolve(cwd, pattern);
      if (existsSync(abs)) {
        try {
          const st = statSync(abs);
          if (st.isFile()) {
            literals.push(abs);
            continue;
          }
          if (st.isDirectory()) {
            include.push(`${pattern.replace(/\/+$/, '')}/**/*`);
            continue;
          }
        } catch {
          // fall through
        }
      }
      // Non-existent literal: still pass to glob (may match nothing)
    }
    include.push(pattern);
  }

  return { include, exclude, literals };
}

/**
 * Find source files matching content patterns.
 *
 * @param {string[]|undefined} patterns
 * @param {{ cwd?: string, ignore?: string[], dot?: boolean }} [options]
 * @returns {Promise<string[]>} sorted absolute paths (deduplicated)
 */
export async function findFiles(patterns, options = {}) {
  const cwd = resolve(options.cwd || process.cwd());
  const list = Array.isArray(patterns) && patterns.length > 0 ? patterns : [...DEFAULT_CONTENT];
  const { include, exclude, literals } = splitPatterns(list, cwd);

  const results = new Set(literals);

  if (include.length > 0) {
    const matches = await glob(include, {
      cwd,
      absolute: true,
      onlyFiles: true,
      followSymbolicLinks: false,
      dot: options.dot === true,
      expandDirectories: false,
      ignore: [...DEFAULT_IGNORE, ...(options.ignore || []), ...exclude]
    });
    for (const m of matches) results.add(resolve(m));
  }

  // Apply negations to literals as well (a literal explicitly excluded by a
  // later negation should not sneak through).
  if (exclude.length > 0 && literals.length > 0) {
    const { globSync } = await import('tinyglobby');
    const excludedLiterals = globSync(exclude, { cwd, absolute: true, onlyFiles: true, dot: true, followSymbolicLinks: false });
    for (const ex of excludedLiterals) results.delete(resolve(ex));
  }

  return [...results].sort();
}

export default findFiles;
