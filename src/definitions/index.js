/**
 * SenangStart CSS - Utility Definitions Index
 * Central export for all utility definitions - the Single Source of Truth
 */

import layoutDefinitions, { buildLayoutMap } from './layout.js';
import spaceDefinitions, { buildSpacePropertyMap } from './space.js';
import visualDefinitions, { buildTypographyKeywordsMap } from './visual.js';
import backgroundDefinitions from './visual-backgrounds.js';
import interactivityDefinitions from './visual-interactivity.js';
import typographyDefinitions from './visual-typography.js';
import transform3dDefinitions from './visual-transform3d.js';
import filterDefinitions from './visual-filters.js';
import transitionDefinitions from './visual-transitions.js';
import transformDefinitions from './visual-transforms.js';
import borderDefinitions from './visual-borders.js';
import divideDefinitions from './visual-divide.js';
import svgDefinitions from './visual-svg.js';

// Import split layout definitions
import flexDefinitions from './layout-flex.js';
import alignmentDefinitions from './layout-alignment.js';
import gridDefinitions from './layout-grid.js';
import positioningDefinitions from './layout-positioning.js';
import utilitiesDefinitions from './layout-utilities.js';
import tableDefinitions from './layout-table.js';

// Merge visual definitions
const allVisualDefinitions = {
  ...visualDefinitions,
  ...backgroundDefinitions,
  ...interactivityDefinitions,
  ...typographyDefinitions,
  ...transform3dDefinitions,
  ...filterDefinitions,
  ...transitionDefinitions,
  ...transformDefinitions,
  ...borderDefinitions,
  ...divideDefinitions,
  ...svgDefinitions
};

// Re-export all definitions
export { layoutDefinitions } from './layout.js';
export { spaceDefinitions } from './space.js';
export { visualDefinitions } from './visual.js';
export { backgroundDefinitions } from './visual-backgrounds.js';
export { interactivityDefinitions } from './visual-interactivity.js';
export { typographyDefinitions } from './visual-typography.js';
export { transform3dDefinitions } from './visual-transform3d.js';
export { filterDefinitions } from './visual-filters.js';
export { transitionDefinitions } from './visual-transitions.js';
export { transformDefinitions } from './visual-transforms.js';
export { borderDefinitions } from './visual-borders.js';
export { divideDefinitions } from './visual-divide.js';
export { svgDefinitions } from './visual-svg.js';

// Re-export split layout definitions
export { flexDefinitions } from './layout-flex.js';
export { alignmentDefinitions } from './layout-alignment.js';
export { gridDefinitions } from './layout-grid.js';
export { positioningDefinitions } from './layout-positioning.js';
export { utilitiesDefinitions } from './layout-utilities.js';
export { tableDefinitions } from './layout-table.js';

// Export builder functions
export { buildLayoutMap } from './layout.js';
export { buildSpacePropertyMap } from './space.js';
export { buildTypographyKeywordsMap } from './visual.js';

/**
 * Get all definitions as a flat array for documentation generation
 */
export function getAllDefinitions() {
  return [
    ...Object.values(layoutDefinitions),
    ...Object.values(spaceDefinitions),
    ...Object.values(allVisualDefinitions)
  ];
}

/**
 * Get definitions grouped by category
 */
export function getDefinitionsByCategory() {
  return {
    layout: Object.values(layoutDefinitions),
    space: Object.values(spaceDefinitions),
    visual: Object.values(allVisualDefinitions)
  };
}

/**
 * Get a specific definition by name
 * @param {string} name - Definition name (e.g., 'display', 'padding')
 * @returns {Object|null} - Definition object or null
 */
export function getDefinition(name) {
  const allDefs = {
    ...layoutDefinitions,
    ...spaceDefinitions,
    ...allVisualDefinitions
  };
  
  return allDefs[name] || null;
}

/**
 * Validate that all definitions have required fields
 * Used by tests to ensure definitions are complete
 */
export function validateDefinitions() {
  const requiredFields = ['name', 'property', 'description', 'descriptionMs', 'category'];
  const errors = [];
  
  for (const def of getAllDefinitions()) {
    for (const field of requiredFields) {
      if (!def[field]) {
        errors.push(`Missing '${field}' in definition '${def.name || 'unknown'}'`);
      }
    }
    
    // Check that examples exist for documentation
    if (!def.examples || def.examples.length === 0) {
      errors.push(`Missing examples in definition '${def.name}'`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Build all CSS generator maps from definitions
 * Returns maps that can be used by css.js
 */
export function buildAllMaps() {
  return {
    layoutMap: buildLayoutMap(),
    spacePropertyMap: buildSpacePropertyMap(),
    typographyKeywords: buildTypographyKeywordsMap()
  };
}

export default {
  layout: layoutDefinitions,
  space: spaceDefinitions,
  visual: allVisualDefinitions,
  getAllDefinitions,
  getDefinitionsByCategory,
  getDefinition,
  validateDefinitions,
  buildAllMaps
};
