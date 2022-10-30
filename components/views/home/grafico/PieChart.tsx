import { useEffect, useState } from 'react'
import { Text } from 'react-native-svg'
import { PieChart as PieChart0 } from 'react-native-svg-charts'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'
import { pieData } from '../../../../helpers'
import { SectionGraficoComponent } from './section'

const Label = ({ slices }: any) => {
  return slices.map((slice: any, index: any) => {
    const { pieCentroid } = slice
    return (
      // @ts-ignore: Unreachable code error
      <Text
        key={`$pie-${index}`}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill='white'
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={20}
      >
        {index === 0 && 'Gastos'}
        {index === 1 && 'Ocio'}
        {index === 2 && 'Ahorro'}
      </Text>
    )
  })
}

const PieChart = () => {
  const salary = useSelector((state: RootState) => state.money.salary)
  const { bills, leisure, saving } = useSelector(
    (state: RootState) => state.percentage
  )
  const [dataPieChart, setDataPieChart] = useState()

  useEffect(() => {
    setDataPieChart(pieData([bills, leisure, saving]) as any)
    return () => {}
  }, [bills, leisure, saving])

  return (
    <>
      {salary > 0 && (
        <>
          {dataPieChart && (
            <PieChart0 style={{ height: 300 }} data={dataPieChart}>
              <Label />
            </PieChart0>
          )}
          <SectionGraficoComponent />
        </>
      )}
    </>
  )
}

export default PieChart
