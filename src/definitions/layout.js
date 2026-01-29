/**
 * SenangStart CSS - Layout Utility Definitions
 * Main entry point that re-exports from split files
 */

// Import from split files
import flexDefinitions, {
  display,
  flexDirection,
  flexWrap,
  flexItems,
  flexShorthand,
  flexBasis,
  order
} from './layout-flex.js';

import alignmentDefinitions, {
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  shorthandAlignment,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  placeSelf
} from './layout-alignment.js';

import gridDefinitions, {
  gridColumns,
  gridRows,
  gridColSpan,
  gridRowSpan,
  gridAutoFlow,
  gridAutoSizing
} from './layout-grid.js';

import positioningDefinitions, {
  position,
  inset,
  zIndex
} from './layout-positioning.js';

import utilitiesDefinitions, {
  visibility,
  overflow,
  boxSizing,
  floatClear,
  aspectRatio,
  objectFit,
  objectPosition,
  container,
  isolation,
  overscroll,
  columns
} from './layout-utilities.js';

import tableDefinitions, {
  borderCollapse,
  borderSpacing,
  tableLayout,
  captionSide
} from './layout-table.js';

// Re-export all individual definitions for backwards compatibility
export {
  // Flex
  display,
  flexDirection,
  flexWrap,
  flexItems,
  flexShorthand,
  flexBasis,
  order,
  // Alignment
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  shorthandAlignment,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  placeSelf,
  // Grid
  gridColumns,
  gridRows,
  gridColSpan,
  gridRowSpan,
  gridAutoFlow,
  gridAutoSizing,
  // Positioning
  position,
  inset,
  zIndex,
  // Utilities
  visibility,
  overflow,
  boxSizing,
  floatClear,
  aspectRatio,
  objectFit,
  objectPosition,
  container,
  isolation,
  overscroll,
  columns,
  // Table
  borderCollapse,
  borderSpacing,
  tableLayout,
  captionSide
};

// Re-export grouped definitions
export { flexDefinitions } from './layout-flex.js';
export { alignmentDefinitions } from './layout-alignment.js';
export { gridDefinitions } from './layout-grid.js';
export { positioningDefinitions } from './layout-positioning.js';
export { utilitiesDefinitions } from './layout-utilities.js';
export { tableDefinitions } from './layout-table.js';

// Export all layout definitions combined
export const layoutDefinitions = {
  // Flex
  display,
  flexDirection,
  flexWrap,
  flexItems,
  flexShorthand,
  flexBasis,
  order,
  // Alignment
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  shorthandAlignment,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  placeSelf,
  // Grid
  gridColumns,
  gridRows,
  gridColSpan,
  gridRowSpan,
  gridAutoFlow,
  gridAutoSizing,
  // Positioning
  position,
  inset,
  zIndex,
  // Utilities
  visibility,
  overflow,
  boxSizing,
  floatClear,
  aspectRatio,
  objectFit,
  objectPosition,
  container,
  isolation,
  overscroll,
  columns,
  // Table
  borderCollapse,
  borderSpacing,
  tableLayout,
  captionSide
};

// Build flat value map for CSS generator
export function buildLayoutMap() {
  const map = {};
  
  // Add all simple keyword values from definitions
  for (const def of Object.values(layoutDefinitions)) {
    if (def.dynamic) continue; // Skip dynamic properties that need special handling
    
    // Only include definitions that act as global keywords (no prefix in syntax)
    // format: layout="[value]"
    if (!def.syntax || !def.syntax.includes('layout="[')) continue;
    
    for (const v of def.values) {
      // Skip range values like '1-12' that need special handling
      if (v.value.match(/^\d+-\d+$/)) continue;
      
      map[v.value] = v.css;
    }
  }
  
  return map;
}

export default layoutDefinitions;
