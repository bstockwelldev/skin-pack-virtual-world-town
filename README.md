# @bstockwelldev/skin-pack-virtual-world-town

Portable **virtual-world town** skin for hosts that use
`html[data-skin="virtual-world-town"]` with `@bstockwelldev/react-skin-system`.

The pack supplies the skin identity, route-metaphor data, and overworld-style CSS
tokens. It does not implement avatar movement, routing, persistence, quests, or NPC
systems; host apps own those behaviors.

## Install (unpublished)

```bash
pnpm add @bstockwelldev/skin-pack-virtual-world-town@file:../skin-pack-virtual-world-town
pnpm add @bstockwelldev/react-skin-system@file:../react-skin-system
```

## Runtime usage

```ts
import { createSkinRegistry } from '@bstockwelldev/react-skin-system';
import {
  virtualWorldTownSkin,
  VIRTUAL_WORLD_TOWN_ROUTE_MAP,
} from '@bstockwelldev/skin-pack-virtual-world-town';

const registry = createSkinRegistry([virtualWorldTownSkin], {
  storageKey: 'my-app/skin',
  defaultSkin: 'virtual-world-town',
});

console.log(VIRTUAL_WORLD_TOWN_ROUTE_MAP);
```

## CSS import

```css
@import '@bstockwelldev/skin-pack-virtual-world-town/style.css';
```

## Host contract

Use the route map to render a town square / building menu, then link each building to
normal application routes. Optional helper classes include `.skin-building`,
`.skin-town-path`, `.skin-npc-bubble`, `.skin-quest`, and `.skin-card`.

## Development

```bash
pnpm install
pnpm run build
pnpm run typecheck
pnpm run test
```

## License

MIT — see `LICENSE`.
