import { copyFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(scriptDir, '..');
const destDir = join(pkgRoot, 'dist');

mkdirSync(destDir, { recursive: true });
copyFileSync(join(pkgRoot, 'src', 'virtual-world-town.css'), join(destDir, 'style.css'));
