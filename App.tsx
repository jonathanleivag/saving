import { Box, NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App () {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={style.areaView}>
        <Box>Hello world</Box>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
  areaView: {
    flex: 1
  }
})
