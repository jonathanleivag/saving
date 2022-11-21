import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FC, useEffect, useState } from 'react'
import { PieChart as PieChart0 } from 'react-native-svg-charts'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'
import { pieData } from '../../../../helpers'
import { LabelPercentage, LabelTitle } from './LabelChart'
import { SectionGraficoComponent } from './section'

export type TIsOpen = 1 | 2 | 3 | false

interface PieChartProps {
  navigation: NativeStackNavigationProp<ParamListBase, 'Home', undefined>
}

const PieChart: FC<PieChartProps> = ({ navigation }) => {
  const salary = useSelector((state: RootState) => state.money.salary)
  const { bills, leisure, saving } = useSelector(
    (state: RootState) => state.percentage
  )

  const [dataPieChart, setDataPieChart] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    setDataPieChart(
      pieData([bills, leisure, saving], navigation, dispatch) as any
    )
    return () => {}
  }, [bills, leisure, saving])

  return (
    <>
      {salary > 0 && (
        <>
          {dataPieChart && (
            <PieChart0 style={{ height: 300 }} data={dataPieChart}>
              <LabelTitle />
              <LabelPercentage />
            </PieChart0>
          )}
          <SectionGraficoComponent />
        </>
      )}
    </>
  )
}

export default PieChart
