/**
 * SenangStart CSS - PostCSS plugin
 *
 *   // postcss.config.js
 *   import senangstart from '@bookklik/senangstart-css/postcss';
 *   export default { plugins: [senangstart()] };
 *
 *   // app.css
 *   @import "senangstart";      (or)      @senangstart;
 *
 * The directive is replaced with the generated CSS. Files without the
 * directive are left untouched. Every scanned file is registered as a
 * `dependency` message and every content glob base as a `dir-dependency`, so
 * postcss-cli --watch, Vite and webpack's postcss-loader rebuild on change.
 *
 * Token errors fail the run (like `senangstart build`) unless
 * `ignoreInvalid: true`, in which case they are reported via result.warn().
 */

import { resolve } from 'path';
import {
  PLUGIN_NAME,
  toBuildOptions,
  runBuild,
  formatDiagnostic,
  contentWatchTargets
} from './shared.js';

const IMPORT_PARAMS_RE = /^(?:url\(\s*)?(['"]?)senangstart\1\s*\)?$/;

/** @param {import('postcss').AtRule} rule */
function isDirective(rule) {
  if (rule.name === 'senangstart') return true;
  return rule.name === 'import' && IMPORT_PARAMS_RE.test(rule.params.trim());
}

/**
 * @param {import('../../types/postcss.js').SenangStartPostcssOptions} [options]
 * @returns {import('postcss').Plugin}
 */
export function senangstart(options = {}) {
  return {
    postcssPlugin: PLUGIN_NAME,
    async Once(root, { result, postcss }) {
      const directives = [];
      root.walkAtRules((rule) => {
        if (isDirective(rule)) directives.push(rule);
      });
      if (directives.length === 0) return;

      const cwd = resolve(options.cwd || process.cwd());
      const from = result.opts.from;
      const r = await runBuild(toBuildOptions(options, { cwd, fresh: options.fresh !== false }));

      // Dependency messages first, so watchers track files even when we fail.
      const messages = result.messages;
      for (const file of r.files) messages.push({ type: 'dependency', plugin: PLUGIN_NAME, file, parent: from });
      if (r.configPath) messages.push({ type: 'dependency', plugin: PLUGIN_NAME, file: r.configPath, parent: from });
      const targets = contentWatchTargets(r.config && r.config.content ? r.config.content : options.content, cwd);
      for (const file of targets.files) {
        if (!r.files.includes(file)) messages.push({ type: 'dependency', plugin: PLUGIN_NAME, file, parent: from });
      }
      for (const { dir, glob } of targets.dirs) {
        messages.push({ type: 'dir-dependency', plugin: PLUGIN_NAME, dir, glob, parent: from });
      }

      const anchor = directives[0];
      for (const w of r.warnings) result.warn(formatDiagnostic(w, cwd), { node: anchor, plugin: PLUGIN_NAME });
      if (r.errors.length > 0) {
        const lines = r.errors.map((d) => formatDiagnostic(d, cwd));
        if (!options.ignoreInvalid) {
          throw anchor.error(
            `${r.errors.length} invalid token(s):\n  ${lines.join('\n  ')}\n(set ignoreInvalid: true to downgrade to warnings)`,
            { plugin: PLUGIN_NAME }
          );
        }
        for (const l of lines) result.warn(l, { node: anchor, plugin: PLUGIN_NAME });
      }

      const generated = r.css ? postcss.parse(r.css, { from: undefined }) : null;
      directives.forEach((rule, i) => {
        if (i === 0 && generated) {
          for (const node of generated.nodes) node.source = rule.source;
          rule.replaceWith(generated.nodes);
        } else {
          rule.remove();
        }
      });
    }
  };
}

senangstart.postcss = true;

export default senangstart;
