import { Flex } from 'native-base'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../../app/store'
import { setMonyPercentage } from '../../../../../features'
import ButtonGraficoComponent from './ButtonGraficoComponent'

const SectionGraficoComponent = () => {
  const { bills, leisure, saving } = useSelector(
    (state: RootState) => state.percentage
  )
  const money = useSelector((state: RootState) => state.money)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setMonyPercentage({
        percentageBills: bills,
        percentageLeisure: leisure,
        percentageSaving: saving
      })
    )
    return () => {}
  }, [bills, leisure, saving, money.salary])

  return (
    <Flex
      direction='row'
      px='6'
      justifyContent='center'
      w='full'
      h='20'
      my='10'
    >
      <ButtonGraficoComponent title='Gastos' money={money.bills} index={0} />
      <ButtonGraficoComponent title='Ocio' money={money.leisure} index={1} />
      <ButtonGraficoComponent title='Ahorro' money={money.saving} index={2} />
    </Flex>
  )
}

export default SectionGraficoComponent
