import { Flex, Text, View } from 'native-base'
import { FC, useEffect } from 'react'
import { Platform, TouchableNativeFeedback } from 'react-native'
import { useDispatch } from 'react-redux'
import { useCountUp } from 'use-count-up'

import { setSection } from '../../../../../features'
import { formatMoney, formatMoneyAndroid } from '../../../../../helpers'

interface IButtonGraficoComponentProps {
  title: 'Gastos' | 'Ocio' | 'Ahorro'
  money: number
}

const ButtonGraficoComponent: FC<IButtonGraficoComponentProps> = ({
  title,
  money
}) => {
  const { value, reset } = useCountUp({
    isCounting: true,
    end: money,
    duration: 1
  })
  const dispatch = useDispatch()

  useEffect(() => {
    reset()
    return () => {}
  }, [money])

  const handleSelection = () => {
    dispatch(setSection({ title, money }))
  }

  return (
    <TouchableNativeFeedback onPress={handleSelection}>
      <View
        rounded='2xl'
        mx='2'
        w='33%'
        borderWidth='1'
        borderColor='amber.100'
        h='full'
      >
        <Flex alignItems='center' justifyContent='center' w='full' h='50%'>
          <Text fontFamily='header'>{title.toUpperCase()}</Text>
        </Flex>
        <Flex alignItems='center' justifyContent='center' w='full' h='50%'>
          {Platform.OS === 'ios' && (
            <Text fontFamily='body'>{formatMoney(Number(value))}</Text>
          )}
          {Platform.OS === 'android' && (
            <Text fontFamily='body'>{`$${formatMoneyAndroid(
              Number(value)
            )}`}</Text>
          )}
        </Flex>
      </View>
    </TouchableNativeFeedback>
  )
}

export default ButtonGraficoComponent
