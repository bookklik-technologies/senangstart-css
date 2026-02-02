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
    const output = execSync(`node "${SCRIPT_PATH}" --help`).toString();
    assert.match(output, /Usage:/);
    assert.match(output, /Options:/);
  });

  it('should convert string input', () => {
    const input = '"<div class=\'p-4\'></div>"';
    const output = execSync(`node "${SCRIPT_PATH}" --string ${input}`).toString();
    // Check output contains expected attributes (ignoring order/formatting)
    assert.match(output, /space="p:medium"/);
    assert.doesNotMatch(output, /class=/);
  });

  it('should support exact mode', () => {
    const input = '"<div class=\'p-4\'></div>"';
    const output = execSync(`node "${SCRIPT_PATH}" --string ${input} --exact`).toString();
    assert.match(output, /space="p:tw-4"/);
  });

  it('should fail without input file', () => {
    try {
      // Provide an argument so it doesn't just show help
      execSync(`node "${SCRIPT_PATH}" --exact`);
      assert.fail('Should have failed');
    } catch (error) {
      assert.strictEqual(error.status, 1);
      assert.match(error.stderr.toString(), /Error: Input file required/);
    }
  });

  it('should fail with missing string argument', () => {
    try {
      execSync(`node "${SCRIPT_PATH}" --string`);
      assert.fail('Should have failed');
    } catch (error) {
      assert.strictEqual(error.status, 1);
      assert.match(error.stderr.toString(), /Error: --string requires an HTML string argument/);
    }
  });

  it('should handle file input/output', () => {
    const inputFile = path.join(process.cwd(), 'tests', 'fixtures', 'test-input.html');
    const outputFile = path.join(process.cwd(), 'tests', 'fixtures', 'test-output.html');
    
    // Ensure fixture dir exists
    fs.mkdirSync(path.dirname(inputFile), { recursive: true });
    
    const content = '<div class="p-4 flex"></div>';
    fs.writeFileSync(inputFile, content);
    
    // Run CLI
    execSync(`node "${SCRIPT_PATH}" "${inputFile}" -o "${outputFile}"`);
    
    // Check output file
    const result = fs.readFileSync(outputFile, 'utf-8');
    assert.match(result, /layout="flex"/);
    assert.match(result, /space="p:medium"/);
    
    // Cleanup
    fs.unlinkSync(inputFile);
    fs.unlinkSync(outputFile);
  });

  it('should fail on invalid file paths', () => {
    try {
      // Trying to access something outside allowed dir (if validator is active)
      // or just a non-existent file
      execSync(`node "${SCRIPT_PATH}" non-existent.html`);
      assert.fail('Should have failed');
    } catch (error) {
      assert.strictEqual(error.status, 1);
    }
  });

  it('should handle unrecognized classes', () => {
    const input = '"<div class=\'p-4 custom-class\'></div>"';
    const output = execSync(`node "${SCRIPT_PATH}" --string ${input}`).toString();
    assert.match(output, /space="p:medium"/);
    assert.match(output, /class="custom-class"/);
  });
});
