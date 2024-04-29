import type { Config } from 'tailwindcss'
import sharedConfig from '@tieens-org/tailwind-config'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./src/**/*.tsx'],
  prefix: 'org-',
  presets: [sharedConfig]
}

export default config
