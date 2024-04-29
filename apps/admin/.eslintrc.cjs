/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@tieens-org'],
  ignorePatterns: ['*.config.ts'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname
  }
}
