module.exports = {
  semi: false,
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  endOfLine: 'auto',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '.*rc',
      options: {
        parser: 'json'
      }
    }
  ]
}
