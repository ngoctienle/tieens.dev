import { Input } from 'antd'
import { ApplicationProvider } from '@tieens-org/core'

//= Global Css ========================
import 'src/app.css'
//= i18n ==============================
// import 'src/locales/i18n'

//= Application =======================

function App() {
  return (
    <ApplicationProvider primary='#01D253' componentSize='middle' prefixCls='org'>
      <h1 className='org-text-red-500'>Hello world!</h1>
      <Input placeholder='hello input' />
    </ApplicationProvider>
  )
}

export default App
