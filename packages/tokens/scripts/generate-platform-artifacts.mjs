import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const tokensPath = resolve("tokens/index.json");
const iosOutputPath = resolve("build/ios/DesignTokens.swift");
const androidOutputPath = resolve("build/android/tokens.xml");

const tokens = JSON.parse(readFileSync(tokensPath, "utf8"));

function flattenObject(input, path = [], acc = []) {
  for (const [key, value] of Object.entries(input)) {
    const nextPath = [...path, key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenObject(value, nextPath, acc);
      continue;
    }
    acc.push({ path: nextPath, value: String(value) });
  }
  return acc;
}

function toCamelCase(parts) {
  return parts
    .map((part, index) => {
      const normalized = part.replace(/[^a-zA-Z0-9]+/g, " ").trim();
      const words = normalized.split(/\s+/).filter(Boolean);
      if (words.length === 0) {
        return "";
      }
      const built = words
        .map((word, wordIndex) => {
          const lower = word.toLowerCase();
          if (index === 0 && wordIndex === 0) {
            return lower;
          }
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join("");
      return built;
    })
    .join("");
}

function toSnakeCase(parts) {
  return parts
    .map((part) =>
      part
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .toLowerCase()
    )
    .join("_");
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeSwift(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const entries = flattenObject(tokens);

const iosLines = [
  "//",
  "// DesignTokens.swift",
  "//",
  "",
  "// Do not edit directly, this file was auto-generated.",
  "",
  "import Foundation",
  "",
  "public enum DesignTokens {"
];

for (const entry of entries) {
  const key = toCamelCase(entry.path);
  const value = escapeSwift(entry.value);
  iosLines.push(`  public static let ${key} = "${value}"`);
}

iosLines.push("}");
iosLines.push("");

mkdirSync(resolve("build/ios"), { recursive: true });
writeFileSync(iosOutputPath, iosLines.join("\n"), "utf8");

const androidLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  "",
  "<!--",
  "  Do not edit directly, this file was auto-generated.",
  "-->",
  "<resources>"
];

for (const entry of entries) {
  const key = toSnakeCase(entry.path);
  const value = escapeXml(entry.value);
  androidLines.push(`  <string name="${key}">${value}</string>`);
}

androidLines.push("</resources>");
androidLines.push("");

mkdirSync(resolve("build/android"), { recursive: true });
writeFileSync(androidOutputPath, androidLines.join("\n"), "utf8");
