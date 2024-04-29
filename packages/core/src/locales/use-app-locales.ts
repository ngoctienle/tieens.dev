import { useLocalStorage } from '@tieens-org/hooks'

import { allLangs, Language, defaultLang } from './config-lang'

export default function useAppLocales(key?: string): {
  allLangs: Language[]
  currentLang: Language
} {
  const defaultKey = key || 'i18nextLng'
  const [storageValue] = useLocalStorage<Language['value']>(defaultKey, defaultLang.value)

  const currentLang = allLangs.find((lang) => lang.value === storageValue) || defaultLang

  return {
    allLangs,
    currentLang
  }
}
