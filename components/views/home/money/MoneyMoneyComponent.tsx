import { Flex, Text } from 'native-base'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCountUp } from 'use-count-up'

import { RootState } from '../../../../app/store'
import { formatMoney } from '../../../../helpers'

const MoneyMoneyComponent = () => {
  const salary = useSelector((state: RootState) => state.money.salary)

  const { value, reset } = useCountUp({
    isCounting: true,
    end: salary,
    duration: 1
  })

  useEffect(() => {
    reset()
    return () => {}
  }, [salary])

  return (
    <Flex justifyContent='center' alignItems='center' w='full' my='10'>
      <Text fontFamily='header' fontSize='4xl'>
        {formatMoney(Number(value))}
      </Text>
    </Flex>
  )
}

export default MoneyMoneyComponent
