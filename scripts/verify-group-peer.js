
import { compileSource } from '../src/compiler/index.js';
import { DEFAULT_THEME } from '../src/core/constants.js';
import assert from 'assert';

console.log('Verifying Group & Peer Features...');

// Test Config
const config = {
  theme: {
    ...DEFAULT_THEME,
    colors: { ...DEFAULT_THEME.colors, red: 'red', blue: 'blue' }
  },
  darkMode: 'media'
};

// 1. Test Group Hover with Visual (Classic)
console.log('\n--- Test 1: Group Hover (Visual) ---');
const groupSource = `
  <div layout="hoverable">
    <button visual="hover:bg:red">Hover Me</button>
  </div>
`;
const groupResult = compileSource(groupSource, config);
console.log(groupResult.css);

if (groupResult.css.includes('[layout~="hoverable"]:not([layout~="disabled"]):hover [visual~="hover:bg:red"]')) {
  console.log('✅ Group Hover (Visual) Selector Generated');
} else {
  console.error('❌ Group Hover (Visual) Selector Missing');
  process.exit(1);
}

// 2. Test Group Hover with Space
console.log('\n--- Test 2: Group Hover (Space) ---');
const groupSpaceSource = `
  <div layout="hoverable">
    <button space="hover:p:big">Hover Me</button>
  </div>
`;
const groupSpaceResult = compileSource(groupSpaceSource, config);
console.log(groupSpaceResult.css);

if (groupSpaceResult.css.includes('[layout~="hoverable"]:not([layout~="disabled"]):hover [space~="hover:p:big"]')) {
  console.log('✅ Group Hover (Space) Selector Generated');
} else {
  console.error('❌ Group Hover (Space) Selector Missing');
  process.exit(1);
}

// 3. Test Group Hover with Layout
console.log('\n--- Test 3: Group Hover (Layout) ---');
const groupLayoutSource = `
  <div layout="hoverable">
    <button layout="hidden hover:flex">Hover Me</button>
  </div>
`;
const groupLayoutResult = compileSource(groupLayoutSource, config);
console.log(groupLayoutResult.css);

if (groupLayoutResult.css.includes('[layout~="hoverable"]:not([layout~="disabled"]):hover [layout~="hover:flex"]')) {
  console.log('✅ Group Hover (Layout) Selector Generated');
} else {
  console.error('❌ Group Hover (Layout) Selector Missing');
  process.exit(1);
}


// 4. Test Peer Hover (Tooltip)
console.log('\n--- Test 4: Peer Hover (Tooltip) ---');
const peerSource = `
  <button layout="hoverable" interact="tooltip">Hover me</button>
  <div visual="hidden hover:visible" listens="tooltip">Tooltip</div>
`;
const peerResult = compileSource(peerSource, config);
console.log(peerResult.css);

// Check for peer selector
// [interact~="tooltip"]:not([layout~="disabled"]):hover ~ [listens~="tooltip"][visual~="hover:visible"]
const expectedPeerSelector = '[interact~="tooltip"]:not([layout~="disabled"]):hover ~ [listens~="tooltip"][visual~="hover:visible"]';

if (peerResult.css.includes(expectedPeerSelector)) {
  console.log('✅ Peer Hover Selector Generated');
} else {
  console.error('❌ Peer Hover Selector Missing');
}

// 5. Test Focus Group
console.log('\n--- Test 5: Group Focus ---');
const focusSource = `
  <div layout="focusable">
    <input visual="focus:bg:blue" />
  </div>
`;
const focusResult = compileSource(focusSource, config);
console.log(focusResult.css);

if (focusResult.css.includes('[layout~="focusable"]:not([layout~="disabled"]):focus-within [visual~="focus:bg:blue"]')) {
  console.log('✅ Group Focus Selector Generated');
} else {
  console.error('❌ Group Focus Selector Missing');
  process.exit(1);
}

console.log('\nAll verification tests passed!');
