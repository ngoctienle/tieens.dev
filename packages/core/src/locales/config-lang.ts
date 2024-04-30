import merge from 'lodash/merge'
// core (antd)
import viVNCore from 'antd/lib/locale/vi_VN'
import enUSCore from 'antd/lib/locale/en_US'
import type { Locale } from 'antd/lib/locale'
import viVNDate from 'antd/lib/date-picker/locale/vi_VN'
import enUSDate from 'antd/lib/date-picker/locale/en_US'
import viVNCalendar from 'antd/lib/calendar/locale/vi_VN'
import enUSCalendar from 'antd/lib/calendar/locale/en_US'
// date fns
import {
  vi as viVNAdapter,
  enUS as enUSAdapter,
  type Locale as LocaleDateFNS
} from 'date-fns/locale'

// Interface for language object
export interface Language {
  label: string
  value: string
  systemValue: Locale
  adapterLocale: LocaleDateFNS
  icon: string
  numberFormat: {
    code: string
    currency: string
  }
}

export const allLangs: Language[] = [
  {
    label: 'Vietnamese',
    value: 'vi',
    systemValue: merge(viVNCalendar, viVNDate, viVNCore), // Merge Vietnamese locale data
    adapterLocale: viVNAdapter,
    icon: 'flagpack:vn',
    numberFormat: {
      code: 'vi-VN',
      currency: 'VND'
    }
  },
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSCalendar, enUSDate, enUSCore), // Merge English locale data
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gb-nir',
    numberFormat: {
      code: 'en-US',
      currency: 'USD'
    }
  }
]

export const defaultLang: Language = allLangs[0] // Vietnamese
