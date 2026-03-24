import { createInterface } from "node:readline/promises";

export interface Prompter {
  input(message: string, defaultValue: string): Promise<string>;
  confirm(message: string, defaultValue: boolean): Promise<boolean>;
  close(): void;
}

export interface PromptIo {
  stdin?: NodeJS.ReadableStream;
  stdout?: NodeJS.WritableStream;
}

export function createReadlinePrompter(io: PromptIo = {}): Prompter {
  const rl = createInterface({
    input: io.stdin ?? process.stdin,
    output: io.stdout ?? process.stdout
  });

  return {
    async input(message, defaultValue) {
      const answer = await rl.question(`${message} [${defaultValue}]: `);
      const trimmed = answer.trim();
      return trimmed === "" ? defaultValue : trimmed;
    },
    async confirm(message, defaultValue) {
      const defaultHint = defaultValue ? "Y/n" : "y/N";
      while (true) {
        const answer = (await rl.question(`${message} (${defaultHint}): `)).trim().toLowerCase();
        if (answer === "") {
          return defaultValue;
        }
        if (answer === "y" || answer === "yes") {
          return true;
        }
        if (answer === "n" || answer === "no") {
          return false;
        }
      }
    },
    close() {
      rl.close();
    }
  };
}

export class MockPrompter implements Prompter {
  private inputAnswers: string[];
  private confirmAnswers: boolean[];

  constructor(inputAnswers: string[] = [], confirmAnswers: boolean[] = []) {
    this.inputAnswers = [...inputAnswers];
    this.confirmAnswers = [...confirmAnswers];
  }

  async input(_message: string, defaultValue: string): Promise<string> {
    return this.inputAnswers.length > 0 ? this.inputAnswers.shift() ?? defaultValue : defaultValue;
  }

  async confirm(_message: string, defaultValue: boolean): Promise<boolean> {
    return this.confirmAnswers.length > 0 ? this.confirmAnswers.shift() ?? defaultValue : defaultValue;
  }

  close(): void {
    // noop
  }
}
