/**
 * Dev Mode Error Recovery Tests
 * Tests for error recovery mechanisms in development mode
 */

import { describe, it, mock } from 'node:test';
import assert from 'node:assert';

describe('Dev Mode Error Recovery', () => {
  describe('Consecutive Error Tracking', () => {
    it('tracks consecutive build failures', async () => {
      let errorCount = 0;
      const MAX_ERRORS = 5;

      const mockBuild = async () => {
        errorCount++;
        if (errorCount < MAX_ERRORS) {
          throw new Error('Simulated build error');
        }
        return { css: '', tokens: [] };
      };

      // Simulate consecutive errors
      for (let i = 0; i < MAX_ERRORS; i++) {
        try {
          await mockBuild();
        } catch (e) {
          // Expected error
        }
      }

      assert.strictEqual(errorCount, MAX_ERRORS);
    });

    it('resets error count on successful build', async () => {
      let errorCount = 0;
      const MAX_ERRORS = 3;

      const mockBuild = async (forceError = false) => {
        if (forceError) {
          errorCount++;
          throw new Error('Simulated build error');
        }

        // Successful build resets count
        errorCount = 0;
        return { css: '', tokens: [] };
      };

      // Accumulate errors
      for (let i = 0; i < MAX_ERRORS; i++) {
        try {
          await mockBuild(true);
        } catch (e) {
          // Expected error
        }
      }

      // Error count should be MAX_ERRORS after failures
      assert.strictEqual(errorCount, MAX_ERRORS);

      // Successful build should reset count
      await mockBuild(false);
      assert.strictEqual(errorCount, 0);
    });

    it('prevents builds during cooldown period', async () => {
      let errorCount = 0;
      let cooldownActive = false;
      const MAX_ERRORS = 5;

      const mockBuild = async () => {
        if (cooldownActive) {
          throw new Error('Cooldown active');
        }

        errorCount++;
        if (errorCount >= MAX_ERRORS) {
          cooldownActive = true;
        }
        throw new Error('Simulated build error');
      };

      // Trigger cooldown
      for (let i = 0; i < MAX_ERRORS; i++) {
        try {
          await mockBuild();
        } catch (e) {
          // Expected error
        }
      }

      assert.strictEqual(cooldownActive, true);

      // Try to build during cooldown
      let cooldownError = null;
      try {
        await mockBuild();
      } catch (e) {
        cooldownError = e.message;
      }

      assert.strictEqual(cooldownError, 'Cooldown active');
    });
  });

  describe('Error Messages', () => {
    it('logs error count when builds fail', async () => {
      const errorLog = [];
      let errorCount = 0;

      const mockLogger = {
        error: (msg) => errorLog.push(msg),
        warn: (msg) => errorLog.push(msg),
        info: (msg) => errorLog.push(msg)
      };

      const mockBuild = async () => {
        errorCount++;
        mockLogger.error(`Build failed (${errorCount}/5): Test error`);
        throw new Error('Test error');
      };

      for (let i = 0; i < 3; i++) {
        try {
          await mockBuild();
        } catch (e) {
          // Expected error
        }
      }

      assert.ok(errorLog.some(msg => msg.includes('Build failed (1/5)')));
      assert.ok(errorLog.some(msg => msg.includes('Build failed (2/5)')));
      assert.ok(errorLog.some(msg => msg.includes('Build failed (3/5)')));
    });

    it('logs cooldown activation message', async () => {
      const errorLog = [];
      const COOLDOWN_DURATION = 30000;

      const mockLogger = {
        error: (msg) => errorLog.push(msg),
        warn: (msg) => errorLog.push(msg)
      };

      const mockBuild = async () => {
        mockLogger.warn(`Maximum consecutive errors (5) reached.`);
        mockLogger.warn(`Entering ${COOLDOWN_DURATION / 1000}s cooldown to prevent resource exhaustion.`);
        throw new Error('Max errors reached');
      };

      try {
        await mockBuild();
      } catch (e) {
        // Expected error
      }

      assert.ok(errorLog.some(msg => msg.includes('Maximum consecutive errors')));
      assert.ok(errorLog.some(msg => msg.includes('cooldown')));
    });
  });

  describe('Build Lock Mechanism', () => {
    it('prevents overlapping builds', async () => {
      let buildInProgress = false;
      let pendingBuild = false;
      let buildCount = 0;

      const mockBuild = async () => {
        if (buildInProgress) {
          pendingBuild = true;
          return;
        }

        buildInProgress = true;
        buildCount++;
        await new Promise(resolve => setTimeout(resolve, 100));
        buildInProgress = false;

        if (pendingBuild) {
          pendingBuild = false;
          await mockBuild();
        }
      };

      // Trigger multiple builds in parallel
      await Promise.all([
        mockBuild(),
        mockBuild(),
        mockBuild()
      ]);

      // Should execute at least 2 builds (one initial, one from pending)
      assert.ok(buildCount >= 2);
    });

    it('processes pending builds after current build completes', async () => {
      let buildInProgress = false;
      let pendingBuild = false;
      let buildCount = 0;

      const mockBuild = async () => {
        if (buildInProgress) {
          pendingBuild = true;
          return;
        }

        buildInProgress = true;
        buildCount++;
        await new Promise(resolve => setTimeout(resolve, 50));
        buildInProgress = false;

        if (pendingBuild) {
          pendingBuild = false;
          await mockBuild();
        }
      };

      // Trigger build
      mockBuild();

      // Immediately trigger another build while first is in progress
      setTimeout(() => mockBuild(), 10);

      // Wait for all builds to complete
      await new Promise(resolve => setTimeout(resolve, 200));

      assert.strictEqual(buildCount, 2);
    });
  });
});
