import { describe, expect, it } from 'vitest';

import {
  VIRTUAL_WORLD_TOWN_BOOT_LINES,
  VIRTUAL_WORLD_TOWN_CSS_SELECTOR,
  VIRTUAL_WORLD_TOWN_PALETTE_FLAVOR,
  VIRTUAL_WORLD_TOWN_ROUTE_MAP,
  VIRTUAL_WORLD_TOWN_SKIN_ID,
  virtualWorldTownSkin,
} from '../src/index';

describe('virtualWorldTownSkin', () => {
  it('exports a stable portable SkinDefinition', () => {
    expect(virtualWorldTownSkin.id).toBe(VIRTUAL_WORLD_TOWN_SKIN_ID);
    expect(virtualWorldTownSkin.label).toBe('Virtual World Town');
    expect(virtualWorldTownSkin.family).toBe('overworld');
    expect(virtualWorldTownSkin.bootIntroLines).toEqual([
      ...VIRTUAL_WORLD_TOWN_BOOT_LINES,
    ]);
    expect(virtualWorldTownSkin.bootIntroLines?.length).toBeGreaterThanOrEqual(5);
    expect(virtualWorldTownSkin.paletteFlavor).toMatchObject(
      VIRTUAL_WORLD_TOWN_PALETTE_FLAVOR,
    );
  });

  it('exports route metaphors without implementing routing', () => {
    expect(VIRTUAL_WORLD_TOWN_ROUTE_MAP).toContainEqual(
      expect.objectContaining({ href: '/playtesting', location: 'Battle Arena' }),
    );
    expect(VIRTUAL_WORLD_TOWN_ROUTE_MAP).toContainEqual(
      expect.objectContaining({ href: '/ai-validator', location: 'Oracle Lab' }),
    );
  });

  it('exports the CSS selector sentinel', () => {
    expect(VIRTUAL_WORLD_TOWN_CSS_SELECTOR).toBe(
      "html[data-skin='virtual-world-town']",
    );
  });
});
