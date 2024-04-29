import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es2019',
  dts: true,
  outDir: 'dist',
  clean: true,
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: false,
  cjsInterop: true
})
