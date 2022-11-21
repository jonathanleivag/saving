import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box } from 'native-base'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../app/store'
import { ModalContentGrafico } from '../components'
import { setGrafico } from '../features'
import { HomeLayout } from '../layout'

type TInfoGraficoViewProps = NativeStackScreenProps<ParamListBase, 'info'>

const InfoGraficoView: FC<TInfoGraficoViewProps> = ({ navigation }) => {
  const { bills, leisure, saving } = useSelector(
    (state: RootState) => state.percentage
  )

  const isOpen = useSelector(
    (state: RootState) => state.selection.grafico.isOpen
  )
  const dispatch = useDispatch()

  const handleIsTitle = () => {
    switch (isOpen) {
      case 1:
        return 'Gastos'
      case 2:
        return 'Ocio'
      case 3:
        return 'Ahorro'
      default:
        return 'Grafico'
    }
  }

  const handleIsTitleOriginal = () => {
    switch (isOpen) {
      case 1:
        return 'bills'
      case 2:
        return 'leisure'
      // deepcode ignore DuplicateCaseBody: <please specify a reason of ignoring this>
      case 3:
        return 'saving'
      // deepcode ignore DuplicateCaseBody: <please specify a reason of ignoring this>
      default:
        return 'bills'
    }
  }

  const handleIsPorcentaje = () => {
    switch (isOpen) {
      case 1:
        return bills
      case 2:
        return leisure
      case 3:
        return saving
      default:
        return 0
    }
  }

  useEffect(() => {
    dispatch(
      setGrafico({
        title: handleIsTitle(),
        percentage: handleIsPorcentaje(),
        isOpen,
        titleOriginal: handleIsTitleOriginal()
      })
    )

    return () => {}
  }, [isOpen])

  return (
    <HomeLayout goBack navigateInfo={navigation}>
      <Box px='5'>
        <ModalContentGrafico />
      </Box>
    </HomeLayout>
  )
}

export default InfoGraficoView
