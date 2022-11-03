import Slider from '@react-native-community/slider'
import { Box, Stack, Text } from 'native-base'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../../app/store'
import { colorPie } from '../../../../../theme'
import {
  ModalContentBillsComponent,
  ModalContentLeisureComponent,
  ModalContentSavingComponent
} from './ModalContentTextComponent'

const ModalContentGrafico = () => {
  const selection = useSelector((state: RootState) => state.selection.grafico)
  const money = useSelector((state: RootState) => state.money.salary)
  const [percentage, setPercentage] = useState<number>(0)

  useEffect(() => {
    setPercentage(selection.percentage)
    return () => {}
  }, [selection.percentage])
  return (
    <>
      {selection.percentage !== 0 && typeof selection.isOpen === 'number' && (
        <>
          {selection.title === 'Gastos' && (
            <ModalContentBillsComponent money={money} percentage={percentage} />
          )}

          {selection.title === 'Ocio' && (
            <ModalContentLeisureComponent
              money={money}
              percentage={percentage}
            />
          )}

          {selection.title === 'Ahorro' && (
            <ModalContentSavingComponent
              money={money}
              percentage={percentage}
            />
          )}

          <Box alignItems='center' w='100%'>
            {percentage !== 0 && (
              <Stack space={4} alignItems='center' w='75%' maxW='300'>
                <Slider
                  style={{ width: 200, height: 40 }}
                  onValueChange={value => setPercentage(Math.round(value))}
                  value={percentage}
                  minimumValue={5}
                  maximumValue={100}
                  minimumTrackTintColor={colorPie[selection.isOpen - 1]}
                  maximumTrackTintColor='#000000'
                />
              </Stack>
            )}
            <Text fontFamily='header' fontSize='xs'>
              El mínimo es de 5%
            </Text>
          </Box>
        </>
      )}
    </>
  )
}

export default ModalContentGrafico
