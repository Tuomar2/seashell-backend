const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",

  transform: {
    ...tsJestTransformCfg,
  },

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],

  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/**/*.d.ts",
    "!src/**/index.ts",
  ],

  // 👇 ignore compiled files
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};