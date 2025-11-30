#!/usr/bin/env node
/**
 * Syncs README.md content to Storybook Introduction.mdx
 * Run: pnpm run sync-readme
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Read README.md
const readmePath = join(rootDir, "README.md");
let readme = readFileSync(readmePath, "utf-8");

// Convert markdown tables to Storybook Table components
// Pattern: | Header1 | Header2 | ... followed by |---| and then data rows
const tablePattern = /(\|.+\|\n\|[-\s|]+\|\n(?:\|.+\|\n?)+)/g;

readme = readme.replace(tablePattern, (match) => {
	const lines = match
		.trim()
		.split("\n")
		.filter((line) => line.trim());
	if (lines.length < 2) return match;

	const headerLine = lines[0];
	const separatorLine = lines[1];
	const dataLines = lines.slice(2);

	// Parse headers
	const headers = headerLine
		.split("|")
		.map((h) => h.trim())
		.filter((h) => h);

	// Parse data rows
	const rows = dataLines.map((line) =>
		line
			.split("|")
			.map((cell) => cell.trim())
			.filter((_, i, arr) => i > 0 && i < arr.length - 1)
	);

	// Generate HTML table with Storybook styling
	let tableContent = "<table>\n  <thead>\n    <tr>\n";
	headers.forEach((header) => {
		// Convert markdown bold (**text**) to JSX <strong>
		const headerContent = header.replace(
			/\*\*(.+?)\*\*/g,
			"<strong>$1</strong>"
		);
		tableContent += `      <th>${headerContent}</th>\n`;
	});
	tableContent += "    </tr>\n  </thead>\n  <tbody>\n";

	rows.forEach((row) => {
		tableContent += "    <tr>\n";
		row.forEach((cell, i) => {
			// Convert markdown bold (**text**) to JSX <strong>
			let cellContent = cell.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
			tableContent += `      <td>${cellContent}</td>\n`;
		});
		tableContent += "    </tr>\n";
	});

	tableContent += "  </tbody>\n</table>";

	return tableContent;
});

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
const introPath = join(rootDir, ".storybook", "01-Introduction.mdx");
writeFileSync(introPath, mdxContent, "utf-8");

console.log("✅ README synced to Storybook Introduction!");
