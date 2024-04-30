import { useReadLocalStorage } from '@tieens-org/hooks'

import { allLangs, Language, defaultLang } from './config-lang'

export default function useAppLocales(key?: string): {
  allLangs: Language[]
  currentLang: Language
} {
  const defaultKey = key || 'i18nextLng'
  const storageI18n = useReadLocalStorage<Language['value']>(defaultKey)

  const currentLang = allLangs.find((lang) => lang.value === storageI18n) || defaultLang

  return {
    allLangs,
    currentLang
  }
}
