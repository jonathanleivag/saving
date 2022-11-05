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
import RedioButtonComponent from './RedioButtonComponent'

export type TNumberRadio = 0 | 1 | 2 | 3 | 4

const ModalContentGrafico = () => {
  const selection = useSelector((state: RootState) => state.selection.grafico)
  const money = useSelector((state: RootState) => state.money.salary)
  const [percentage, setPercentage] = useState<number>(0)
  const [, /* selectorRadio */ setSelectorRadio] = useState<TNumberRadio>(0)

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
          {percentage !== selection.percentage && (
            <Box my='5'>
              {selection.percentage < percentage && (
                <Text>¿De donde quiere sacar el porcentaje? </Text>
              )}

              {selection.percentage > percentage && (
                <Text>¿A que sector se quieres darle el porcentaje? </Text>
              )}

              <RedioButtonComponent
                section={selection.titleOriginal}
                setSelectorRadio={setSelectorRadio}
              />
            </Box>
          )}
        </>
      )}
    </>
  )
}

export default ModalContentGrafico
