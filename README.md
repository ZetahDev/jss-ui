# JSS UI

Production-grade monorepo for a scalable design system built with `pnpm` workspaces and `Turborepo`.

## Tooling Baseline

- `Node 22`
- `pnpm 10`
- `Turborepo`
- `React` and `TypeScript`
- `Tailwind CSS` with CSS variables
- `tsup`
- `Vitest` and React Testing Library

## Workspace Layout

- `apps/*`: internal apps such as documentation or Storybook hosts
- `packages/*`: publishable libraries under the `@js-solutions/*` scope

## Root Commands

```bash
pnpm install
pnpm build
pnpm lint
pnpm test
pnpm typecheck
pnpm storybook
```
