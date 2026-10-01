/**
 * SenangStart CSS - Init Command
 *
 * Writes `senangstart.config.mjs` (ESM) — or `senangstart.config.js` when the
 * nearest package.json declares `"type": "module"` (or `--js` is passed).
 */

import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import logger from '../../utils/logger.js';
import { configCandidates } from '../lib/config-loader.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const TEMPLATE_PATH = join(__dirname, '..', '..', '..', 'templates', 'senangstart.config.mjs');

/**
 * Is the project at `cwd` an ESM package ("type": "module")?
 * @param {string} cwd
 */
export function isEsmPackage(cwd) {
  try {
    const pkg = JSON.parse(readFileSync(join(cwd, 'package.json'), 'utf-8'));
    return pkg.type === 'module';
  } catch {
    return false;
  }
}

/**
 * Decide the config filename to write.
 * @param {string} cwd
 * @param {{ js?: boolean }} [opts]
 */
export function chooseConfigFilename(cwd, opts = {}) {
  if (opts.js || isEsmPackage(cwd)) return 'senangstart.config.js';
  return 'senangstart.config.mjs';
}

/** Fallback template used when templates/ is unavailable. */
export const FALLBACK_TEMPLATE = `/**
 * SenangStart CSS Configuration
 * @see https://bookklik-technologies.github.io/senangstart-css/guide/configuration
 */

/** @type {import('@bookklik/senangstart-css/node').Config} */
export default {
  content: [
    './**/*.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte,astro}'
  ],
  safelist: [],
  output: {
    css: './public/senangstart.css',
    minify: true,
    aiContext: null,
    typescript: null
  },
  layers: true,
  preflight: true,
  darkMode: 'media',
  theme: {
    exposeAll: false,
    extend: {}
  }
};
`;

/**
 * @param {{ force?: boolean, js?: boolean, cwd?: string }} [options]
 */
export async function init(options = {}) {
  const cwd = resolve(options.cwd || process.cwd());
  const filename = chooseConfigFilename(cwd, options);
  const configPath = join(cwd, filename);

  // Refuse to create a second config when one already exists under any name
  const existing = configCandidates().map(n => join(cwd, n)).find(p => existsSync(p));
  if (existing && !options.force) {
    logger.warn(`${existing.slice(cwd.length + 1)} already exists (use --force to overwrite)`);
    return { created: false, path: existing };
  }

  let template;
  try {
    template = readFileSync(TEMPLATE_PATH, 'utf-8');
  } catch {
    template = FALLBACK_TEMPLATE;
  }

  try {
    writeFileSync(configPath, template);
    logger.success(`Created ${filename}`);
    logger.info('Edit this file to customize your theme');
    logger.info('Run "senangstart dev" to start watching files');
    return { created: true, path: configPath };
  } catch (e) {
    if (e.code === 'EACCES') {
      logger.error(`Permission denied: cannot write to ${configPath}`);
      logger.info('Try running with elevated permissions or check directory permissions');
    } else if (e.code === 'ENOSPC') {
      logger.error('Disk full: cannot write config file');
    } else {
      logger.error(`Failed to write config: ${e.message}`);
    }
    process.exitCode = 1;
    return { created: false, path: configPath, error: e };
  }
}

export default init;
