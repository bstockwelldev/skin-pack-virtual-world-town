import type { SkinDefinition } from '@bstockwelldev/react-skin-system';

export const VIRTUAL_WORLD_TOWN_SKIN_ID = 'virtual-world-town' as const;

export type VirtualWorldTownSkinId = typeof VIRTUAL_WORLD_TOWN_SKIN_ID;

export const VIRTUAL_WORLD_TOWN_CSS_SELECTOR =
  "html[data-skin='virtual-world-town']";

export const VIRTUAL_WORLD_TOWN_BOOT_LINES = [
  'WORLD SERVER: ONLINE',
  'LOADING TOWN MAP... READY',
  'SPAWNING PLAYER AVATAR... READY',
  'NPC BULLETIN BOARD: UPDATED',
  'BUILDING DIRECTORY: SYNCED',
  'QUEST LOG: ACTIVE',
  'ENTER TOWN TO CONTINUE',
] as const;

export const VIRTUAL_WORLD_TOWN_PALETTE_FLAVOR = {
  prompt: 'TOWN> ',
  placeholder: 'walk to a building, npc, project, or skin virtual-world-town',
  welcome:
    'Town hub loaded. Buildings map to tools; enter one to keep working.',
} as const;

export const virtualWorldTownSkin = {
  id: VIRTUAL_WORLD_TOWN_SKIN_ID,
  label: 'Virtual World Town',
  family: 'overworld',
  bootIntroLines: VIRTUAL_WORLD_TOWN_BOOT_LINES,
  paletteFlavor: { ...VIRTUAL_WORLD_TOWN_PALETTE_FLAVOR },
  cycle: true,
} satisfies SkinDefinition<VirtualWorldTownSkinId>;

export const VIRTUAL_WORLD_TOWN_ROUTE_MAP = [
  { href: '/dashboard', location: 'Town Square', role: 'entry plaza and bulletin board' },
  { href: '/projects', location: 'Archive Hall', role: 'project selection and records' },
  { href: '/ideation', location: 'Idea Park', role: 'concept capture and brainstorming' },
  { href: '/prototyping', location: 'Prototype Workshop', role: 'prototype construction' },
  { href: '/canvas', location: 'Blueprint Yard', role: 'spatial component layout' },
  { href: '/ruleset', location: 'Rules Library', role: 'rules editing and structure' },
  { href: '/playtesting', location: 'Battle Arena', role: 'playtest sessions and feedback' },
  { href: '/ai-validator', location: 'Oracle Lab', role: 'AI project validation' },
  { href: '/project-board', location: 'Town Hall', role: 'planning and task board' },
  { href: '/analytics', location: 'Observatory', role: 'metrics and insights' },
] as const;
