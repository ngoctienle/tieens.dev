/* eslint-disable import/no-duplicates */
import 'dayjs/locale/vi'
// dayjs config
import dayjs from 'dayjs'
import merge from 'lodash/merge' // Import Vietnamese locale
import 'dayjs/locale/en' // Import English locale
import enUSDate from 'dayjs/plugin/localeData' // Import English locale data plugin
import viVNDate from 'dayjs/plugin/localeData' // Import Vietnamese locale data plugin
import utc from 'dayjs/plugin/utc' // Import UTC plugin

import viVNCore from 'antd/lib/locale/vi_VN'
import enUSCore from 'antd/lib/locale/en_US'
// core (antd)
import type { Locale } from 'antd/lib/locale'

// Interface for language object
export interface Language {
  label: string
  value: string
  systemValue: Locale
  adapterLocale: string
  icon: string
  numberFormat: {
    code: string
    currency: string
  }
}

// Register dayjs locale data plugins
dayjs.extend(enUSDate)
dayjs.extend(viVNDate)
dayjs.extend(utc)
export const allLangs: Language[] = [
  {
    label: 'Vietnamese',
    value: 'vi',
    systemValue: merge({}, viVNCore, viVNDate), // Merge Vietnamese locale data
    adapterLocale: 'vi', // Dayjs uses string identifiers for locales
    icon: 'flagpack:vn',
    numberFormat: {
      code: 'vi-VN',
      currency: 'VND'
    }
  },
  {
    label: 'English',
    value: 'en',
    systemValue: merge({}, enUSCore, enUSDate), // Merge English locale data
    adapterLocale: 'en', // Dayjs uses string identifiers for locales
    icon: 'flagpack:gb-nir',
    numberFormat: {
      code: 'en-US',
      currency: 'USD'
    }
  }
]

export const defaultLang: Language = allLangs[0] // Vietnamese
