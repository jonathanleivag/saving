import {
  // eslint-disable-next-line camelcase
  Montserrat_400Regular,
  // eslint-disable-next-line camelcase
  Montserrat_500Medium,
  // eslint-disable-next-line camelcase
  Montserrat_600SemiBold,
  // eslint-disable-next-line camelcase
  Montserrat_700Bold,
  useFonts
} from '@expo-google-fonts/montserrat'
import { SSRProvider } from '@react-aria/ssr'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'

import { store } from './app/store'
import { configNativeBase } from './config'
import { HomeRouter } from './router'
import { customTheme } from './theme'

export default function App () {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Montserrat_400Regular,
    // eslint-disable-next-line camelcase
    Montserrat_500Medium,
    // eslint-disable-next-line camelcase
    Montserrat_700Bold,
    // eslint-disable-next-line camelcase
    Montserrat_600SemiBold
  })

  if (!fontsLoaded) return <></>

  return (
    <Provider store={store}>
      <SSRProvider>
        <NativeBaseProvider config={configNativeBase} theme={customTheme}>
          <HomeRouter />
        </NativeBaseProvider>
      </SSRProvider>
    </Provider>
  )
}
