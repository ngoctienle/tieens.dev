import path from 'path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import { createHtmlPlugin } from 'vite-plugin-html'
import { ConfigEnv, UserConfig, defineConfig } from 'vite'

// @see: https://vitejs.dev/config/
export default defineConfig(
  (mode: ConfigEnv): UserConfig => ({
    // alias config
    resolve: {
      alias: [
        {
          find: /^~(.+)/,
          replacement: path.join(process.cwd(), 'node_modules/$1')
        },
        {
          find: /^src(.+)/,
          replacement: path.join(process.cwd(), 'src/$1')
        }
      ]
    },
    // server config
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true
    },
    // plugins
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"'
        },
        overlay: {
          initialIsOpen: false
        }
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: process.env.VITE_GLOB_APP_TITLE || 'Admin'
          }
        }
      })
    ],
    esbuild: {
      pure: process.env.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    build: {
      outDir: 'dist',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  })
)
