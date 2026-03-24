# @js-solutions/theme-cli

Wizard CLI to generate theme artifacts for Web, iOS, and Android from a single `theme.config.json`.

## Usage

```bash
pnpm dlx @js-solutions/theme-cli init
pnpm dlx @js-solutions/theme-cli generate --config theme.config.json
```

Or after installing in a consumer app:

```json
{
  "scripts": {
    "theme:init": "jss-theme init",
    "theme:generate": "jss-theme generate --config theme.config.json"
  }
}
```

## Generated artifacts

- Web: `tokens.css`
- iOS: `DesignTokens.swift`
- Android: `tokens.xml`

Paths are configurable in `theme.config.json` under `outputs`.
