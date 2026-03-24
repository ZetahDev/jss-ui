import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { runCli } from "../cli";
import { MockPrompter } from "../prompt";

class MemoryWriter {
  chunks: string[] = [];

  write(chunk: string): boolean {
    this.chunks.push(chunk);
    return true;
  }

  toString(): string {
    return this.chunks.join("");
  }
}

describe("cli integration", () => {
  const tempDirs: string[] = [];

  afterEach(() => {
    while (tempDirs.length > 0) {
      const dir = tempDirs.pop();
      if (dir) {
        rmSync(dir, { force: true, recursive: true });
      }
    }
  });

  it("init creates a valid config file with defaults when user skips prompts", async () => {
    const cwd = mkdtempSync(join(tmpdir(), "jss-theme-init-"));
    tempDirs.push(cwd);
    const stdout = new MemoryWriter();
    const stderr = new MemoryWriter();

    const code = await runCli(["init", "--config", "theme.config.json"], {
      cwd,
      stdout,
      stderr,
      prompter: new MockPrompter()
    });

    const configPath = join(cwd, "theme.config.json");
    expect(code).toBe(0);
    expect(stderr.toString()).toBe("");
    expect(existsSync(configPath)).toBe(true);

    const configContent = readFileSync(configPath, "utf8");
    expect(configContent).toContain("\"schemaVersion\": 1");
    expect(configContent).toContain("\"primary\": \"#2563eb\"");
  });

  it("generate creates output artifacts from config", async () => {
    const cwd = mkdtempSync(join(tmpdir(), "jss-theme-generate-"));
    tempDirs.push(cwd);
    const stdout = new MemoryWriter();
    const stderr = new MemoryWriter();

    await runCli(["init", "--config", "theme.config.json"], {
      cwd,
      stdout,
      stderr,
      prompter: new MockPrompter(["#22c55e"])
    });

    const code = await runCli(["generate", "--config", "theme.config.json"], {
      cwd,
      stdout,
      stderr
    });

    expect(code).toBe(0);
    expect(existsSync(join(cwd, "src/styles/tokens.css"))).toBe(true);
    expect(existsSync(join(cwd, "ios/DesignTokens.swift"))).toBe(true);
    expect(existsSync(join(cwd, "android/app/src/main/res/values/tokens.xml"))).toBe(true);
  });
});
