/**
 * SenangStart CSS - Console Logger with Colors
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  
  // Foreground colors
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

const prefix = `${colors.magenta}${colors.bright}[senang]${colors.reset}`;

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
