import Slider from '@react-native-community/slider'
import { Box, Stack, Text } from 'native-base'
import { useEffect, useRef, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../../app/store'
import { colorPie } from '../../../../../theme'
import FormPersonalizedComponent from './FormPersonalizedComponent'
import {
  ModalContentBillsComponent,
  ModalContentLeisureComponent,
  ModalContentSavingComponent
} from './ModalContentTextComponent'
import RedioButtonComponent from './RedioButtonComponent'

export type TNumberRadio = 0 | 1 | 2 | 3 | 4 | 5

export interface IInputs {
  bills: number
  leisure: number
  saving: number
}

const ModalContentGrafico = () => {
  const selection = useSelector((state: RootState) => state.selection.grafico)
  const money = useSelector((state: RootState) => state.money.salary)
  const [percentage, setPercentage] = useState<number>(0)
  const [selectorRadio, setSelectorRadio] = useState<TNumberRadio>(0)
  const [, /* inputs */ setInputs] = useState<IInputs>({
    bills: 0,
    leisure: 0,
    saving: 0
  })
  const billsRef = useRef()
  const leisureRef = useRef()
  const savingRef = useRef()

  useEffect(() => {
    setPercentage(selection.percentage)
    setSelectorRadio(0)
    setInputs({
      bills: 0,
      leisure: 0,
      saving: 0
    })
    return () => {}
  }, [selection.percentage])

  useEffect(() => {
    if (selectorRadio === 4) {
      switch (selection.titleOriginal) {
        case 'bills':
          // @ts-ignore
          leisureRef.current.focus()
          break
        case 'leisure':
          // @ts-ignore
          savingRef.current.focus()
          break
        case 'saving':
          // @ts-ignore
          billsRef.current.focus()
          break
        default:
          break
      }
    }
    return () => {}
  }, [selectorRadio])

  return (
    <KeyboardAwareScrollView enableOnAndroid enableAutomaticScroll>
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
              {selectorRadio === 4 && (
                <FormPersonalizedComponent
                  section={selection.titleOriginal}
                  setInputs={setInputs}
                  billsRef={billsRef}
                  leisureRef={leisureRef}
                  savingRef={savingRef}
                />
              )}
            </Box>
          )}
        </>
      )}
    </KeyboardAwareScrollView>
  )
}

export default ModalContentGrafico
