#!/usr/bin/env node
const { minify } = require('html-minifier-terser');
const fs = require('fs');
const path = require('path');

async function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile() && full.endsWith('.html')) {
      yield full;
    }
  }
}

async function run() {
  const root = path.resolve(process.cwd(), 'site');
  if (!fs.existsSync(root)) {
    console.error('site directory not found');
    process.exit(1);
  }
  const options = {
    collapseWhitespace: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyCSS: true,
    minifyJS: true
  };
  for await (const file of walk(root)) {
    const src = fs.readFileSync(file, 'utf8');
    const out = await minify(src, options);
    fs.writeFileSync(file, out, 'utf8');
    console.log('minified', path.relative(root, file));
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

