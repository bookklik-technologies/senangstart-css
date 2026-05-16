/**
 * SenangStart CSS - Node.js I/O Utilities
 * Node-specific helper functions (not for browser use)
 */

/**
 * Read file with timeout protection
 * @param {string} filePath - Path to file
 * @param {number} timeoutMs - Timeout in milliseconds
 * @returns {Promise<string>} - File contents
 * @throws {Error} - On timeout or read failure
 */
export async function readFileWithTimeout(filePath, timeoutMs = 5000) {
  const { promises: fsPromises } = await import('fs');

  // Check file size first (async)
  let fileSize;
  try {
    const stats = await fsPromises.stat(filePath);
    fileSize = stats.size;

    // Reject files larger than 10MB
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (fileSize > MAX_FILE_SIZE) {
      throw new Error(`File too large: ${filePath} (${Math.round(fileSize / 1024)}KB)`);
    }
  } catch (error) {
    throw new Error(`Cannot stat file: ${filePath} - ${error.message}`);
  }

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Read timeout for ${filePath} (exceeded ${timeoutMs}ms)`));
    }, timeoutMs);

    fsPromises.readFile(filePath, 'utf-8')
      .then((content) => {
        clearTimeout(timeout);
        resolve(content);
      })
      .catch((error) => {
        clearTimeout(timeout);
        reject(new Error(`Cannot read file: ${filePath} - ${error.message}`));
      });
  });
}

/**
 * Batch read multiple files with timeout protection
 * Errors are caught per-file and returned in the result's `error` property,
 * allowing callers to handle partial failures gracefully.
 * @param {Array<string>} filePaths - Paths to files
 * @param {number} timeoutMs - Timeout per file
 * @returns {Promise<Array<{path: string, content: string|null, error: Error|null}>>} - File contents with per-file error info
 */
export async function readMultipleFilesWithTimeout(filePaths, timeoutMs = 5000) {
  const results = [];

  // Read files in batches for concurrency without overwhelming the system
  const BATCH_SIZE = 50;

  for (let i = 0; i < filePaths.length; i += BATCH_SIZE) {
    const batch = filePaths.slice(i, i + BATCH_SIZE);

    const batchPromises = batch.map(async (filePath) => {
      try {
        const content = await readFileWithTimeout(filePath, timeoutMs);
        return { path: filePath, content, error: null };
      } catch (error) {
        return { path: filePath, content: null, error };
      }
    });

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
  }

  return results;
}

export default {
  readFileWithTimeout,
  readMultipleFilesWithTimeout
};
