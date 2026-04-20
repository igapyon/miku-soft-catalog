#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const bundleRoot = path.resolve(repoRoot, "bundle/mikuproject-skills-java");
const bundleSkillsRoot = path.resolve(bundleRoot, "skills");
const sourceSkillRoot = path.resolve(repoRoot, "skills/mikuproject-java");
const sourceRuntimeJar = path.resolve(
  repoRoot,
  "workplace/mikuproject-java/target/mikuproject.jar"
);
const bundledSkillRoot = path.resolve(bundleSkillsRoot, "mikuproject-java");
const bundledRuntimeDir = path.resolve(
  bundledSkillRoot,
  "vendor/mikuproject-java"
);
const bundledRuntimeJar = path.resolve(bundledRuntimeDir, "mikuproject.jar");

main();

function main() {
  ensureSourceExists(sourceSkillRoot, "skills/mikuproject-java");
  ensureSourceExists(
    sourceRuntimeJar,
    "workplace/mikuproject-java/target/mikuproject.jar"
  );

  fs.rmSync(bundleRoot, { recursive: true, force: true });
  fs.mkdirSync(bundleSkillsRoot, { recursive: true });

  fs.cpSync(sourceSkillRoot, bundledSkillRoot, { recursive: true });
  fs.mkdirSync(bundledRuntimeDir, { recursive: true });
  fs.copyFileSync(sourceRuntimeJar, bundledRuntimeJar);

  process.stdout.write(
    [
      "[build:bundle] generated bundle/mikuproject-skills-java",
      "[build:bundle] copy this directory's contents under your skill home root",
      "[build:bundle] included:",
      "  - skills/mikuproject-java",
      "  - skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar"
    ].join("\n")
  );
  process.stdout.write("\n");
}

function ensureSourceExists(targetPath, label) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`missing source path: ${label}`);
  }
}
