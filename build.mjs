import { copyFile, lstat, mkdir, readFile, realpath, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(fileURLToPath(new URL('.', import.meta.url)));
const output = path.resolve(root, 'dist');
const pages = ['index.html', 'styles.css', 'hiring.js'];
const contents = await Promise.all(pages.map(file => readFile(path.join(root, file), 'utf8')));
const assets = new Set(contents.flatMap(text => [...text.matchAll(/(?<![\/A-Za-z0-9])assets\/[A-Za-z0-9_.-]+/g)].map(match => match[0])));
const files = [...pages, ...assets];

// Validate every source before replacing the previous build.
for (const file of files) {
  const source = await realpath(path.join(root, file));
  if (!source.startsWith(root + path.sep) || !(await lstat(source)).isFile()) {
    throw new Error(`Invalid website source: ${file}`);
  }
}

if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
  throw new Error('Build output must be the website dist directory.');
}
try {
  const stat = await lstat(output);
  if (stat.isSymbolicLink() || !stat.isDirectory() || await realpath(output) !== output) {
    throw new Error('Refusing to replace an unexpected build output.');
  }
  await rm(output, { recursive: true, force: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
await mkdir(path.join(output, 'assets'), { recursive: true });
for (const file of files) await copyFile(path.join(root, file), path.join(output, file));
console.log(`Built ${pages.length} website files and ${assets.size} assets in dist/.`);
