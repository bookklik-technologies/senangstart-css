/**
 * SenangStart CSS - Console Logger with Colors
 * Detects environment and strips ANSI codes in browsers
 */

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

const colors = {
  reset: isBrowser ? '' : '\x1b[0m',
  bright: isBrowser ? '' : '\x1b[1m',
  dim: isBrowser ? '' : '\x1b[2m',
  red: isBrowser ? '' : '\x1b[31m',
  green: isBrowser ? '' : '\x1b[32m',
  yellow: isBrowser ? '' : '\x1b[33m',
  blue: isBrowser ? '' : '\x1b[34m',
  magenta: isBrowser ? '' : '\x1b[35m',
  cyan: isBrowser ? '' : '\x1b[36m',
  white: isBrowser ? '' : '\x1b[37m'
};

const prefix = isBrowser ? '[senang]' : `${colors.magenta}${colors.bright}[senang]${colors.reset}`;

export const logger = {
  info: (msg) => {
    console.log(`${prefix} ${colors.blue}ℹ${colors.reset} ${msg}`);
  },
  
  success: (msg) => {
    console.log(`${prefix} ${colors.green}✓${colors.reset} ${msg}`);
  },
  
  warn: (msg) => {
    console.log(`${prefix} ${colors.yellow}⚠${colors.reset} ${msg}`);
  },
  
  error: (msg) => {
    console.log(`${prefix} ${colors.red}✗${colors.reset} ${msg}`);
  },
  
  build: (msg) => {
    console.log(`${prefix} ${colors.cyan}⚡${colors.reset} ${msg}`);
  },
  
  watch: (msg) => {
    console.log(`${prefix} ${colors.green}👁${colors.reset} ${msg}`);
  }
};

export default logger;
