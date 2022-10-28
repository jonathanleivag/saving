import { StatusBar, Text, useColorMode } from 'native-base'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
  ModalComponent,
  NavbarNavbarComponent,
  StaggerStaggerComponent
} from '../components'
import { bgColor } from '../theme'

const HomeView = () => {
  const { colorMode, setColorMode } = useColorMode()
  const [showModal, setShowModal] = useState(false)

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
        <StaggerStaggerComponent setCash={setShowModal} />
        <ModalComponent
          setShowModal={setShowModal}
          showModal={showModal}
          textButtonOk='Guardar'
          colorButtonOk='green'
          buttonCancel
          textButtonCancel='Cancelar'
          colorButtonCancel='red'
        >
          <Text> body 2 </Text>
        </ModalComponent>
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
