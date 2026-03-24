import { resolveConfigPath, writeThemeConfig } from "../config";
import { createDefaultThemeConfig } from "../defaults";
import { createReadlinePrompter, type Prompter } from "../prompt";
import type { ThemeConfig } from "../types";
import { isValidFontWeight, isValidHexColor, isValidSizeToken } from "../validation";

type WriteStreamLike = Pick<NodeJS.WritableStream, "write">;

export interface InitThemeOptions {
  cwd?: string;
  configPath?: string;
  prompter?: Prompter;
  stdout?: WriteStreamLike;
  stdin?: NodeJS.ReadableStream;
}

interface PromptTextSpec {
  message: string;
  defaultValue: string;
  validate: (value: string) => boolean;
  validationMessage: string;
}

async function promptText(spec: PromptTextSpec, prompter: Prompter, stdout: WriteStreamLike): Promise<string> {
  while (true) {
    const value = await prompter.input(spec.message, spec.defaultValue);
    if (spec.validate(value)) {
      return value;
    }
    stdout.write(`${spec.validationMessage}\n`);
  }
}

export async function runInitTheme(options: InitThemeOptions = {}): Promise<{ configPath: string; config: ThemeConfig }> {
  const cwd = options.cwd ?? process.cwd();
  const stdout = options.stdout ?? process.stdout;
  const configPath = resolveConfigPath(cwd, options.configPath);
  const config = createDefaultThemeConfig();
  const promptIo = options.stdin ? { stdin: options.stdin } : {};
  const prompter = options.prompter ?? createReadlinePrompter(promptIo);

  try {
    stdout.write("jss-theme init\n");
    stdout.write("Press Enter to keep the default value for each prompt.\n\n");

    stdout.write("== Colors ==\n");
    config.tokens.colors.primary = await promptText(
      {
        message: "Primary color",
        defaultValue: config.tokens.colors.primary,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color (example: #2563eb)."
      },
      prompter,
      stdout
    );
    config.tokens.colors.primaryHover = await promptText(
      {
        message: "Primary hover color",
        defaultValue: config.tokens.colors.primaryHover,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color (example: #1d4ed8)."
      },
      prompter,
      stdout
    );
    config.tokens.colors.background = await promptText(
      {
        message: "Page background color",
        defaultValue: config.tokens.colors.background,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color."
      },
      prompter,
      stdout
    );
    config.tokens.colors.surface = await promptText(
      {
        message: "Surface color",
        defaultValue: config.tokens.colors.surface,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color."
      },
      prompter,
      stdout
    );
    config.tokens.colors.textPrimary = await promptText(
      {
        message: "Primary text color",
        defaultValue: config.tokens.colors.textPrimary,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color."
      },
      prompter,
      stdout
    );
    config.tokens.colors.textInverted = await promptText(
      {
        message: "Inverted text color",
        defaultValue: config.tokens.colors.textInverted,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color."
      },
      prompter,
      stdout
    );
    config.tokens.colors.borderMuted = await promptText(
      {
        message: "Muted border color",
        defaultValue: config.tokens.colors.borderMuted,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color."
      },
      prompter,
      stdout
    );
    config.tokens.colors.danger = await promptText(
      {
        message: "Danger color",
        defaultValue: config.tokens.colors.danger,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color."
      },
      prompter,
      stdout
    );
    config.tokens.colors.focusRing = await promptText(
      {
        message: "Focus ring color",
        defaultValue: config.tokens.colors.focusRing,
        validate: isValidHexColor,
        validationMessage: "Invalid value: use a valid HEX color."
      },
      prompter,
      stdout
    );

    stdout.write("\n== Typography ==\n");
    config.tokens.typography.fontFamilySans = await prompter.input(
      "Font family",
      config.tokens.typography.fontFamilySans
    );
    config.tokens.typography.fontSizeSm = await promptText(
      {
        message: "Font size small",
        defaultValue: config.tokens.typography.fontSizeSm,
        validate: isValidSizeToken,
        validationMessage: "Invalid value: use a token like 0.875rem or 14px."
      },
      prompter,
      stdout
    );
    config.tokens.typography.fontSizeMd = await promptText(
      {
        message: "Font size medium",
        defaultValue: config.tokens.typography.fontSizeMd,
        validate: isValidSizeToken,
        validationMessage: "Invalid value: use a token like 1rem or 16px."
      },
      prompter,
      stdout
    );
    config.tokens.typography.fontSizeLg = await promptText(
      {
        message: "Font size large",
        defaultValue: config.tokens.typography.fontSizeLg,
        validate: isValidSizeToken,
        validationMessage: "Invalid value: use a token like 1.125rem or 18px."
      },
      prompter,
      stdout
    );
    config.tokens.typography.fontWeightRegular = await promptText(
      {
        message: "Font weight regular",
        defaultValue: config.tokens.typography.fontWeightRegular,
        validate: isValidFontWeight,
        validationMessage: "Invalid value: use 100, 200 ... 900."
      },
      prompter,
      stdout
    );
    config.tokens.typography.fontWeightMedium = await promptText(
      {
        message: "Font weight medium",
        defaultValue: config.tokens.typography.fontWeightMedium,
        validate: isValidFontWeight,
        validationMessage: "Invalid value: use 100, 200 ... 900."
      },
      prompter,
      stdout
    );
    config.tokens.typography.fontWeightSemibold = await promptText(
      {
        message: "Font weight semibold",
        defaultValue: config.tokens.typography.fontWeightSemibold,
        validate: isValidFontWeight,
        validationMessage: "Invalid value: use 100, 200 ... 900."
      },
      prompter,
      stdout
    );

    stdout.write("\n== Radii ==\n");
    config.tokens.radii.sm = await promptText(
      {
        message: "Radius small",
        defaultValue: config.tokens.radii.sm,
        validate: isValidSizeToken,
        validationMessage: "Invalid value: use a token like 0.25rem or 4px."
      },
      prompter,
      stdout
    );
    config.tokens.radii.md = await promptText(
      {
        message: "Radius medium",
        defaultValue: config.tokens.radii.md,
        validate: isValidSizeToken,
        validationMessage: "Invalid value: use a token like 0.5rem or 8px."
      },
      prompter,
      stdout
    );
    config.tokens.radii.lg = await promptText(
      {
        message: "Radius large",
        defaultValue: config.tokens.radii.lg,
        validate: isValidSizeToken,
        validationMessage: "Invalid value: use a token like 0.75rem or 12px."
      },
      prompter,
      stdout
    );

    stdout.write("\n== Spacing ==\n");
    for (const key of ["0", "1", "2", "3", "4", "5", "6"] as const) {
      config.tokens.spacing[key] = await promptText(
        {
          message: `Spacing ${key}`,
          defaultValue: config.tokens.spacing[key],
          validate: isValidSizeToken,
          validationMessage: "Invalid value: use a token like 1rem, 12px or 50%."
        },
        prompter,
        stdout
      );
    }

    stdout.write("\n== States ==\n");
    config.tokens.behavior.enableHover = await prompter.confirm("Enable hover states?", config.tokens.behavior.enableHover);
    config.tokens.behavior.enableFocusRing = await prompter.confirm(
      "Enable focus ring?",
      config.tokens.behavior.enableFocusRing
    );

    stdout.write("\n== Output paths ==\n");
    config.outputs.web.path = await prompter.input("Web CSS path", config.outputs.web.path);
    config.outputs.ios.path = await prompter.input("iOS Swift path", config.outputs.ios.path);
    config.outputs.android.path = await prompter.input("Android XML path", config.outputs.android.path);

    writeThemeConfig(configPath, config);
    stdout.write(`\nGenerated file: ${configPath}\n`);

    return { configPath, config };
  } finally {
    prompter.close();
  }
}
