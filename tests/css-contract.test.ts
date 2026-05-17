import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { describe, expect, it } from 'vitest';

describe('virtual-world-town.css contract', () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const css = readFileSync(join(dir, '../src/virtual-world-town.css'), 'utf8');

  it('scopes to the virtual world selector', () => {
    expect(css).toContain("html[data-skin='virtual-world-town']");
  });

  it('exports overworld/town variables', () => {
    for (const token of [
      '--town-grass',
      '--town-path',
      '--skin-tile-size',
      '--skin-route-marker',
      '--sidebar-background',
    ]) {
      expect(css).toContain(token);
    }
  });

  it('excludes host-app-specific selectors', () => {
    expect(css).not.toMatch(/\/dashboard/i);
    expect(css).not.toMatch(/AppSidebar/);
    expect(css).not.toMatch(/data-nextjs/i);
  });
});
