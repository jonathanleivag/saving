import Slider from '@react-native-community/slider'
import { Box, Stack, Text } from 'native-base'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../../app/store'
import { colorPie } from '../../../../../theme'

const ModalContentGrafico = () => {
  const selection = useSelector((state: RootState) => state.selection.grafico)
  const [percentage, setPercentage] = useState<number>(0)

  useEffect(() => {
    setPercentage(selection.percentage)
    return () => {}
  }, [selection.percentage])
  return (
    <>
      {selection.percentage !== 0 && typeof selection.isOpen === 'number' && (
        <>
          <Text>{Math.round(percentage)}%</Text>
          <Box alignItems='center' w='100%'>
            <Stack space={4} alignItems='center' w='75%' maxW='300'>
              <Slider
                style={{ width: 200, height: 40 }}
                onValueChange={value => setPercentage(Math.round(value))}
                value={percentage}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={colorPie[selection.isOpen - 1]}
                maximumTrackTintColor='#000000'
              />
            </Stack>
          </Box>
        </>
      )}
    </>
  )
}

export default ModalContentGrafico
