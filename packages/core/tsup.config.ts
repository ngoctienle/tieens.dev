import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es2019',
  dts: true,
  outDir: 'dist',
  clean: true,
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: false,
  cjsInterop: true,
  minify: env === 'production'
})
