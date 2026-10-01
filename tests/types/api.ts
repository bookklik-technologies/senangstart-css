/**
 * Fixture: programmatic API types (compileSource / compileMultiple / config / diagnostics).
 */
import {
  compileSource,
  compileMultiple,
  mergeConfig,
  defaultConfig,
  tokenize,
  parseSource,
  generateCSS,
  constants,
  type SenangStartConfig,
  type CompileResult,
  type ErrorInfo,
  type Diagnostic,
  type ResolvedConfig,
  type Token,
  type ValidTokens,
  type WithVariant,
  type KnownSpaceToken,
  type Breakpoint
} from '@bookklik/senangstart-css';

// Config: new fields type-check
const config: SenangStartConfig = {
  content: ['./src/**/*.tsx', '!./src/legacy/**'],
  safelist: ['p:medium', 'visual=bg:primary', { attr: 'space', tokens: ['p:big'] }],
  prefix: 'ss-',
  layers: true,
  output: { css: './out.css', minify: true, aiContext: null, typescript: false },
  darkMode: ['selector', '.theme-dark'],
  preflight: true,
  build: { ignoreInvalid: false },
  theme: {
    spacing: { cozy: '12px' },
    colors: { brand: '#123456' },
    extend: { radius: { pill: '999px' } },
    exposeAll: true
  }
};
const darkModes: SenangStartConfig['darkMode'][] = ['media', 'selector', 'class', ['selector', '.dark'], false];

// mergeConfig returns a resolved config with every section present
const resolved: ResolvedConfig = mergeConfig(config);
const silent: ResolvedConfig = mergeConfig(config, { silent: true });
const spacing: Record<string, string> = resolved.theme.spacing ?? {};

// compileSource REQUIRES a config
const result: CompileResult = compileSource('<div space="p:big"></div>', defaultConfig);
// @ts-expect-error config is required (the engine throws without one)
compileSource('<div></div>');

const multi = compileMultiple([{ path: 'a.html', content: '<div layout="flex"></div>' }], resolved);
const css: string = multi.css + result.css;
const minified: string | null = result.minifiedCSS;

// Diagnostics: both shapes are accepted, the structured one narrows cleanly
function describe(info: ErrorInfo): string {
  if ('code' in info && 'message' in info) {
    const d: Diagnostic = info;
    return `${d.code}: ${d.message}${d.suggestion ? ` (did you mean ${d.suggestion}?)` : ''}`;
  }
  return `${info.raw}: ${info.error}`;
}
const messages: string[] = (result.errors ?? []).map(describe);

// Tokens
const token: Token = tokenize('tab:hover:p:big', 'space', defaultConfig);
const raw: string = token.raw;
const parsed = parseSource('<div space="p:big"></div>', { file: 'x.html' });
const spaceSet: Set<string> = parsed.space;
const generated: string = generateCSS([token], defaultConfig);
const bps: readonly string[] = constants.BREAKPOINTS;

// Type-level helpers
type Ok = ValidTokens<'p:big m-t:small', 'space'>;
const ok: Ok = 'p:big m-t:small';
type Bad = ValidTokens<'p:bogus', 'space'>;
// @ts-expect-error resolves to an InvalidToken brand, not the literal
const bad: Bad = 'p:bogus';
type Responsive = WithVariant<'p:big'>;
const r1: Responsive = 'tab:hover:p:big';
const r2: Responsive = 'dark:p:big';
const r3: Responsive = 'max-tab:p:big';
// @ts-expect-error unknown breakpoint
const r4: Responsive = 'huge:p:big';
const k: KnownSpaceToken = 'm-x:auto';
const bp: Breakpoint = 'print'; // print media query breakpoint (theme.screens.print)
// @ts-expect-error not a screen key
const bp2: Breakpoint = 'huge';

export { darkModes, silent, spacing, css, minified, messages, raw, spaceSet, generated, bps, ok, bad, r1, r2, r3, r4, k, bp, bp2 };
