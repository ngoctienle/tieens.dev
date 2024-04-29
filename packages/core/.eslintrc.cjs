module.exports = {
  root: true,
  extends: ['@tieens-org'],
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
