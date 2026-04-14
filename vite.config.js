import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';

// Collect all HTML files for multi-page build
function getHtmlInputs(dir, base = '') {
  const inputs = {};
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'dist' || entry.name === 'node_modules' || entry.name === 'ops') continue;
    const fullPath = resolve(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      Object.assign(inputs, getHtmlInputs(fullPath, relPath));
    } else if (entry.name.endsWith('.html')) {
      const key = relPath.replace(/\.html$/, '').replace(/\//g, '-');
      inputs[key] = fullPath;
    }
  }
  return inputs;
}

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 5994,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 5995,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: getHtmlInputs(resolve(__dirname)),
    },
  },
});
