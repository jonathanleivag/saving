import { FormControl, Input, StatusBar, useColorMode } from 'native-base'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'

import {
  ModalComponent,
  MoneyMoneyComponent,
  NavbarNavbarComponent,
  StaggerStaggerComponent
} from '../components'
import { setSalary } from '../features'
import { bgColor } from '../theme'

const HomeView = () => {
  const { colorMode, setColorMode } = useColorMode()
  const [showModal, setShowModal] = useState(false)
  const [money, setMoney] = useState<number>(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setColorMode('dark')
    return () => {}
  }, [colorMode])

  const handleOnPressButtonOk = () => {
    dispatch(setSalary(money))
  }

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
          colorButtonOk='cyan'
          buttonCancel
          textButtonCancel='Cancelar'
          colorButtonCancel='red'
          onPresButtonOk={handleOnPressButtonOk}
        >
          <FormControl>
            <FormControl.Label>Sueldo</FormControl.Label>
            <Input
              onChangeText={text => setMoney(Number(text))}
              keyboardAppearance='dark'
              keyboardType='numeric'
            />
          </FormControl>
        </ModalComponent>
        <MoneyMoneyComponent />
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
