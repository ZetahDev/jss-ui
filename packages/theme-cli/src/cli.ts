import { runGenerateTheme } from "./commands/generate";
import { runInitTheme } from "./commands/init";
import { MockPrompter, type Prompter } from "./prompt";

type WriteStreamLike = Pick<NodeJS.WritableStream, "write">;

export interface CliRuntime {
  cwd?: string;
  stdout?: WriteStreamLike;
  stderr?: WriteStreamLike;
  stdin?: NodeJS.ReadableStream;
  prompter?: Prompter;
}

interface ParsedCliArgs {
  command?: string;
  configPath?: string;
  showHelp: boolean;
}

function parseCliArgs(args: string[]): ParsedCliArgs {
  const parsed: ParsedCliArgs = {
    showHelp: false
  };

  if (args.length === 0) {
    parsed.showHelp = true;
    return parsed;
  }

  if (args[0] === "--help" || args[0] === "-h") {
    parsed.showHelp = true;
    return parsed;
  }

  parsed.command = args[0]!;

  for (let index = 1; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--help" || arg === "-h") {
      parsed.showHelp = true;
      continue;
    }
    if (arg === "--config" || arg === "-c") {
      const next = args[index + 1];
      if (!next) {
        throw new Error("Missing value for --config");
      }
      parsed.configPath = next;
      index += 1;
      continue;
    }
    throw new Error(`Unknown argument "${arg}"`);
  }

  return parsed;
}

export function getHelpText(): string {
  return `jss-theme

Usage:
  jss-theme init [--config theme.config.json]
  jss-theme generate [--config theme.config.json]

Options:
  -c, --config   Custom config file path
  -h, --help     Show this help
`;
}

export async function runCli(args: string[], runtime: CliRuntime = {}): Promise<number> {
  const stdout = runtime.stdout ?? process.stdout;
  const stderr = runtime.stderr ?? process.stderr;
  const cwd = runtime.cwd ?? process.cwd();

  try {
    const parsed = parseCliArgs(args);
    if (parsed.showHelp || !parsed.command) {
      stdout.write(getHelpText());
      return 0;
    }

    switch (parsed.command) {
      case "init": {
        const initOptions: Parameters<typeof runInitTheme>[0] = {
          cwd,
          stdout
        };
        if (parsed.configPath) {
          initOptions.configPath = parsed.configPath;
        }
        if (runtime.stdin) {
          initOptions.stdin = runtime.stdin;
        }
        if (runtime.prompter) {
          initOptions.prompter = runtime.prompter;
        }
        await runInitTheme(initOptions);
        return 0;
      }
      case "generate": {
        const generateOptions: Parameters<typeof runGenerateTheme>[0] = {
          cwd,
          stdout
        };
        if (parsed.configPath) {
          generateOptions.configPath = parsed.configPath;
        }
        runGenerateTheme(generateOptions);
        return 0;
      }
      default:
        stderr.write(`Unknown command "${parsed.command}"\n`);
        stderr.write(getHelpText());
        return 1;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    stderr.write(`Error: ${message}\n`);
    return 1;
  }
}

export { MockPrompter };
