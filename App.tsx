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
import { NativeBaseProvider } from 'native-base'

import { configNativeBase } from './config'
import { customTheme } from './theme'
import { HomeView } from './views'

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
    <NativeBaseProvider config={configNativeBase} theme={customTheme}>
      <HomeView />
    </NativeBaseProvider>
  )
}
