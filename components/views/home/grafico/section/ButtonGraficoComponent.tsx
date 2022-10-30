import { Flex, Text, View } from 'native-base'
import { FC, useEffect } from 'react'
import { Platform } from 'react-native'
import { useCountUp } from 'use-count-up'

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

  useEffect(() => {
    reset()
    return () => {}
  }, [money])

  return (
    <View
      rounded='2xl'
      mx='2'
      w='33%'
      borderWidth='1'
      borderColor='amber.100'
      h='full'
    >
      <Flex alignItems='center' justifyContent='center' w='full' h='50%'>
        <Text>{title}</Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' w='full' h='50%'>
        {Platform.OS === 'ios' && <Text>{formatMoney(Number(value))}</Text>}
        {Platform.OS === 'android' && (
          <Text>{`$${formatMoneyAndroid(Number(value))}`}</Text>
        )}
      </Flex>
    </View>
  )
}

export default ButtonGraficoComponent
