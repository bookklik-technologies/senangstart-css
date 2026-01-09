/**
 * SenangStart CSS - Init Command
 * Creates senangstart.config.js in the project root
 */

import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import logger from '../../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function init() {
  const configPath = join(process.cwd(), 'senangstart.config.js');
  
  // Check if config already exists
  if (existsSync(configPath)) {
    logger.warn('senangstart.config.js already exists');
    return;
  }
  
  // Read template
  const templatePath = join(__dirname, '../../../templates/senangstart.config.js');
  let template;
  
  try {
    template = readFileSync(templatePath, 'utf-8');
  } catch (e) {
    // Fallback template if file not found
    template = `/**
 * SenangStart CSS Configuration
 */

export default {
  content: [
    './**/*.html',
    './src/**/*.{html,jsx,tsx,vue,svelte}',
    './components/**/*.{html,jsx,tsx}'
  ],

  output: {
    css: './public/senangstart.css',
    minify: true,
    aiContext: './.cursorrules',
    typescript: './types/senang.d.ts'
  },

  theme: {
    // Add custom spacing, colors, etc.
  }
}
`;
  }
  
  // Write config file
  writeFileSync(configPath, template);
  
  logger.success('Created senangstart.config.js');
  logger.info('Edit this file to customize your theme');
  logger.info('Run "senangstart dev" to start watching files');
}

export default init;
