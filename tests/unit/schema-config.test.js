/**
 * SenangStart CSS - Config JSON Schema tests
 *
 * Validates schema/senangstart.config.schema.json against defaultConfig and a
 * set of good/bad user configs using a small hand-rolled draft-07 subset
 * validator (no new dependencies). Also checks the committed schema is in sync
 * with scripts/generate-schema.js.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defaultConfig, mergeConfig } from '../../src/config/defaults.js';
import { buildSchema } from '../../scripts/generate-schema.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const schemaPath = join(root, 'schema', 'senangstart.config.schema.json');
const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));

// ---------------------------------------------------------------------------
// Minimal draft-07 subset validator
// ---------------------------------------------------------------------------

function typeOf(v) {
  if (v === null) return 'null';
  if (Array.isArray(v)) return 'array';
  return typeof v;
}

/**
 * @returns {string[]} list of error messages (empty = valid)
 */
export function validate(value, sch, path = '$') {
  const errors = [];
  if (sch === true || sch === undefined) return errors;
  if (sch === false) return [`${path}: not allowed`];

  if (sch.type) {
    const types = Array.isArray(sch.type) ? sch.type : [sch.type];
    const t = typeOf(value);
    const ok = types.some(x => x === t || (x === 'integer' && t === 'number' && Number.isInteger(value)));
    if (!ok) errors.push(`${path}: expected ${types.join('|')}, got ${t}`);
  }
  if (sch.enum && !sch.enum.some(e => JSON.stringify(e) === JSON.stringify(value))) {
    errors.push(`${path}: ${JSON.stringify(value)} not in enum ${JSON.stringify(sch.enum)}`);
  }
  if (typeof value === 'string' && sch.minLength !== undefined && value.length < sch.minLength) {
    errors.push(`${path}: shorter than ${sch.minLength}`);
  }
  if (sch.oneOf) {
    const passing = sch.oneOf.filter(s => validate(value, s, path).length === 0).length;
    if (passing !== 1) errors.push(`${path}: matched ${passing} of oneOf (need exactly 1)`);
  }
  if (Array.isArray(value)) {
    if (sch.minItems !== undefined && value.length < sch.minItems) errors.push(`${path}: fewer than ${sch.minItems} items`);
    if (sch.maxItems !== undefined && value.length > sch.maxItems) errors.push(`${path}: more than ${sch.maxItems} items`);
    if (Array.isArray(sch.items)) {
      value.forEach((v, i) => { if (sch.items[i]) errors.push(...validate(v, sch.items[i], `${path}[${i}]`)); });
    } else if (sch.items) {
      value.forEach((v, i) => errors.push(...validate(v, sch.items, `${path}[${i}]`)));
    }
  }
  if (typeOf(value) === 'object') {
    for (const req of sch.required || []) {
      if (!(req in value)) errors.push(`${path}: missing required "${req}"`);
    }
    for (const [k, v] of Object.entries(value)) {
      const propSchema = sch.properties?.[k];
      if (propSchema !== undefined) {
        errors.push(...validate(v, propSchema, `${path}.${k}`));
      } else if (sch.additionalProperties === false) {
        errors.push(`${path}: unknown property "${k}"`);
      } else if (sch.additionalProperties && typeof sch.additionalProperties === 'object') {
        errors.push(...validate(v, sch.additionalProperties, `${path}.${k}`));
      }
    }
  }
  return errors;
}

/** Strip non-JSON values (functions/undefined) — configs are plain data anyway. */
const toJson = (v) => JSON.parse(JSON.stringify(v));

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Config JSON Schema', () => {

  it('is draft-07 and describes every top-level key the loader knows', async () => {
    assert.equal(schema.$schema, 'http://json-schema.org/draft-07/schema#');
    const { KNOWN_CONFIG_KEYS } = await import('../../src/config/defaults.js');
    for (const key of KNOWN_CONFIG_KEYS) {
      assert.ok(schema.properties[key], `schema should describe "${key}"`);
    }
    for (const key of ['content', 'output', 'darkMode', 'preflight', 'theme', 'safelist', 'prefix', 'layers', 'ignoreInvalid']) {
      assert.ok(schema.properties[key]?.description, `"${key}" should have a description`);
    }
    for (const key of ['css', 'minify', 'aiContext', 'typescript']) {
      assert.ok(schema.properties.output.properties[key], `output.${key} should be described`);
    }
    for (const key of ['screens', 'spacing', 'colors', 'radius', 'shadow', 'fontSize', 'fontWeight', 'lineHeight', 'zIndex', 'container', 'extend', 'exposeAll']) {
      assert.ok(schema.properties.theme.properties[key], `theme.${key} should be described`);
    }
  });

  it('is in sync with scripts/generate-schema.js and defaults.js', () => {
    const regenerated = JSON.stringify(buildSchema(defaultConfig), null, 2) + '\n';
    assert.equal(readFileSync(schemaPath, 'utf-8'), regenerated, 'run `node scripts/generate-schema.js`');
  });

  it('is deterministic', () => {
    assert.equal(JSON.stringify(buildSchema(defaultConfig)), JSON.stringify(buildSchema(defaultConfig)));
  });

  it('validates defaultConfig', () => {
    const errors = validate(toJson(defaultConfig), schema);
    assert.deepEqual(errors, []);
  });

  it('validates the merged config of a typical user config', () => {
    const merged = mergeConfig({
      content: ['./src/**/*.tsx'],
      darkMode: ['selector', '.theme-dark'],
      theme: { spacing: { cozy: '12px' }, extend: { colors: { brand: '#123456' } }, exposeAll: true },
      safelist: ['p:medium', { attr: 'space', tokens: ['p:big'] }],
      prefix: 'ss-',
      layers: false,
      output: { typescript: './types/senang.d.ts', aiContext: false }
    }, { silent: true });
    assert.deepEqual(validate(toJson(merged), schema), []);
  });

  it('accepts a JSON config carrying "$schema"', () => {
    const cfg = { $schema: './node_modules/@bookklik/senangstart-css/schema/senangstart.config.schema.json', content: ['./**/*.html'] };
    assert.deepEqual(validate(cfg, schema), []);
  });

  it('records defaults from defaults.js', () => {
    assert.deepEqual(schema.properties.content.default, defaultConfig.content);
    assert.equal(schema.properties.darkMode.default, defaultConfig.darkMode);
    assert.equal(schema.properties.preflight.default, defaultConfig.preflight);
    assert.equal(schema.properties.output.properties.css.default, defaultConfig.output.css);
    assert.deepEqual(schema.properties.theme.properties.spacing.default, defaultConfig.theme.spacing);
  });

  it('rejects wrong types and unknown keys', () => {
    assert.ok(validate({ content: 'not-an-array' }, schema).length > 0);
    assert.ok(validate({ preflight: 'yes' }, schema).length > 0);
    assert.ok(validate({ darkMode: 'auto' }, schema).length > 0);
    assert.ok(validate({ darkMode: ['class', '.x'] }, schema).length > 0);
    assert.ok(validate({ layers: 'true' }, schema).length > 0);
    assert.ok(validate({ safelist: [42] }, schema).length > 0);
    assert.ok(validate({ safelist: [{ attr: 'nope', tokens: [] }] }, schema).length > 0);
    assert.ok(validate({ output: { css: '' } }, schema).length > 0);
    assert.ok(validate({ output: { bogus: true } }, schema).length > 0);
    assert.ok(validate({ theme: { spacing: { small: 8 } } }, schema).length > 0);
    assert.ok(validate({ theme: { exposeAll: 'yes' } }, schema).length > 0);
    assert.ok(validate({ unknownKey: 1 }, schema).length > 0);
  });

  it('accepts every documented darkMode form', () => {
    for (const dm of ['media', 'selector', 'class', ['selector', '.dark'], false]) {
      assert.deepEqual(validate({ darkMode: dm }, schema), [], JSON.stringify(dm));
    }
  });
});
