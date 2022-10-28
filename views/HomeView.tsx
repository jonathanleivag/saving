import { StatusBar, useColorMode } from 'native-base'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { NavbarNavbarComponent, StaggerStaggerComponent } from '../components'
import { bgColor } from '../theme'

const HomeView = () => {
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    setColorMode('dark')
    return () => {}
  }, [colorMode])
  return (
    <>
      <StatusBar
        barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor='transparent'
      />
      <SafeAreaView
        style={[style.areaView, { backgroundColor: bgColor(colorMode) }]}
      >
        <NavbarNavbarComponent />
        <StaggerStaggerComponent />
      </SafeAreaView>
    </>
  )
}
const style = StyleSheet.create({
  areaView: {
    flex: 1
  }
})

export default HomeView
