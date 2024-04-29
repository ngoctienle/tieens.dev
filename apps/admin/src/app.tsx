import { Input } from 'antd'
import { useAppLocales, ApplicationProvider } from '@tieens-org/core'

//= Global Css ========================
import 'src/app.css'
//= i18n ==============================
// import 'src/locales/i18n'

//= Application =======================

function App() {
  const { currentLang } = useAppLocales()

  return (
    <ApplicationProvider
      primary='#01D253'
      componentSize='middle'
      prefixCls='org'
      locale={currentLang.systemValue}
    >
      <Input placeholder='hello input' />
    </ApplicationProvider>
  )
}

export default App
