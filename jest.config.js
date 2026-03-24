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

  // 👇 ADD THIS
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};