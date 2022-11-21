import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  ModalComponent,
  ModalHomeContentComponent,
  MoneyMoneyComponent,
  PieChart,
  StaggerStaggerComponent
} from '../components'
import { setSalary } from '../features'
import { HomeLayout } from '../layout'

type THomeViewProps = NativeStackScreenProps<ParamListBase, 'Home'>

const HomeView: FC<THomeViewProps> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false)
  const [money, setMoney] = useState<number>(0)
  const dispatch = useDispatch()

  const handleOnPressButtonOk = () => {
    dispatch(setSalary(money))
  }

  return (
    <HomeLayout>
      <>
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
          title='Añadir sueldo'
        >
          <ModalHomeContentComponent setMoney={setMoney} />
        </ModalComponent>
        <MoneyMoneyComponent />
        <PieChart navigation={navigation} />
      </>
    </HomeLayout>
  )
}

export default HomeView
