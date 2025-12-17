// debug-build.js
import { join } from 'path';
import { existsSync, readdirSync, statSync } from 'fs';

const root = process.cwd();
console.log('🔍 Debugging build issues...\n');

// Check key directories
const dirs = [
  { name: 'src/images', path: join(root, 'src', 'images') },
  { name: 'public', path: join(root, 'public') },
  { name: 'src/pages', path: join(root, 'src', 'pages') },
  { name: 'dist', path: join(root, 'dist') }
];

dirs.forEach(({ name, path }) => {
  console.log(`${name}: ${path}`);
  console.log(`  Exists: ${existsSync(path) ? '✅' : '❌'}`);
  if (existsSync(path)) {
    try {
      const items = readdirSync(path);
      console.log(`  Items: ${items.length}`);
      if (items.length > 0) {
        items.slice(0, 5).forEach(item => {
          const itemPath = join(path, item);
          const stat = statSync(itemPath);
          console.log(`    - ${item} (${stat.isDirectory() ? 'dir' : 'file'})`);
        });
        if (items.length > 5) console.log(`    ... and ${items.length - 5} more`);
      }
    } catch (error) {
      console.log(`  Error reading: ${error.message}`);
    }
  }
  console.log();
});

// Check if bertui.config.js exists
const configPath = join(root, 'bertui.config.js');
console.log(`bertui.config.js: ${configPath}`);
console.log(`  Exists: ${existsSync(configPath) ? '✅' : '❌'}`);