/**
 * Tests for convert-tailwind.js CLI
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const SCRIPT_PATH = path.join(process.cwd(), 'scripts', 'convert-tailwind.js');

describe('convert-tailwind CLI', () => {
  it('should show help message', () => {
    const output = execSync(`node ${SCRIPT_PATH} --help`).toString();
    assert.match(output, /Usage:/);
    assert.match(output, /Options:/);
  });

  it('should convert string input', () => {
    const input = '"<div class=\'p-4\'></div>"';
    const output = execSync(`node ${SCRIPT_PATH} --string ${input}`).toString();
    // Check output contains expected attributes (ignoring order/formatting)
    assert.match(output, /space="p:small"/);
    assert.doesNotMatch(output, /class=/);
  });

  it('should support exact mode', () => {
    const input = '"<div class=\'p-4\'></div>"';
    const output = execSync(`node ${SCRIPT_PATH} --string ${input} --exact`).toString();
    assert.match(output, /space="p:tw-4"/);
  });

  it('should fail without input file', () => {
    try {
      // Provide an argument so it doesn't just show help
      execSync(`node ${SCRIPT_PATH} --exact`);
      assert.fail('Should have failed');
    } catch (error) {
      assert.strictEqual(error.status, 1);
      assert.match(error.stderr.toString(), /Error: Input file required/);
    }
  });

  it('should fail with missing string argument', () => {
    try {
      execSync(`node ${SCRIPT_PATH} --string`);
      assert.fail('Should have failed');
    } catch (error) {
      assert.strictEqual(error.status, 1);
      assert.match(error.stderr.toString(), /Error: --string requires an HTML string argument/);
    }
  });
});
