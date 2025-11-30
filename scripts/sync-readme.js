#!/usr/bin/env node
/**
 * Syncs README.md content to Storybook Introduction.mdx
 * Run: pnpm run sync-readme
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Read README.md
const readmePath = join(rootDir, 'README.md');
const readme = readFileSync(readmePath, 'utf-8');

// Convert README to MDX format
const mdxContent = `import { Meta } from '@storybook/blocks';

<Meta title="Introduction" />

{/* 
  ⚠️ This file is auto-generated from README.md
  Do not edit directly - run 'pnpm run sync-readme' to update
*/}

${readme}
`;

// Write to 01-Introduction.mdx
const introPath = join(rootDir, '.storybook', '01-Introduction.mdx');
writeFileSync(introPath, mdxContent, 'utf-8');

console.log('✅ README synced to Storybook Introduction!');

