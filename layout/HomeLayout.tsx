import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar, useColorMode } from 'native-base'
import { FC, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { NavbarNavbarComponent } from '../components'
import { bgColor } from '../theme'

interface IHomeLayoutProps {
  children: JSX.Element
  goBack?: boolean
  navigateInfo?: NativeStackNavigationProp<ParamListBase, 'info', undefined>
}

const HomeLayout: FC<IHomeLayoutProps> = ({
  children,
  goBack = false,
  navigateInfo
}) => {
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
        <NavbarNavbarComponent goBack={goBack} navigateInfo={navigateInfo} />
        {children}
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  areaView: {
    flex: 1
  }
})

export default HomeLayout
