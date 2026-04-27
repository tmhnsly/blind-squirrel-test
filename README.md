# blind-squirrel-test

Next.js recreation of the Blind Squirrel Entertainment hero / intro animation.

## Requirements

- Node 20+
- pnpm

## Setup

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

## Stack

- `next` 16 (app router)
- `react` 19
- `gsap` + `@gsap/react` — intro timeline
- `sass` — CSS Modules
- `clsx`, `react-icons`, `typescript`

## Layout

```
src/
  app/                 Next entry (layout, page, globals)
  components/          Button, Loader, MotionScope, Nav
  sections/HeroSection
  lib/                 animationConfig.ts, useIntroTimeline.ts
  styles/              theme tokens (colors, layout vars, breakpoints)
public/images/         logo, hero photo, swoosh SVGs
```

## Notes

- Next version has breaking changes — prefer `node_modules/next/dist/docs/`
  over outside references. See `AGENTS.md`.
- All intro timings live in `src/lib/animationConfig.ts`.
- Shared swoosh placement vars in `src/styles/theme/_layout.scss` keep the
  loader and hero swooshes pixel-aligned.
