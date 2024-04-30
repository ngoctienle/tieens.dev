import { ConfigProvider } from 'antd'
import type { ThemeConfig, ConfigProviderProps } from 'antd/lib'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useAppLocales } from '../locales'

interface IApplicationProviderProps
  extends Omit<ConfigProviderProps, 'token' | 'components' | 'locale'> {
  primary: string
  config?: ThemeConfig['components']
  onInit?: () => void
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      gcTime: 0
    }
  }
})

const ApplicationProvider: React.FC<IApplicationProviderProps> = ({
  children,
  primary,
  onInit,
  config,
  ...others
}) => {
  const { currentLang } = useAppLocales()

  const charAt = `🚀 Hello Application`
  console.info(`%c${charAt}`, `color: ${primary}`)

  return (
    <ConfigProvider
      {...others}
      theme={{
        token: {
          colorPrimary: primary,
          colorLink: primary
        },
        components: config
      }}
      locale={currentLang.systemValue}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export { queryClient, ApplicationProvider, type IApplicationProviderProps }
