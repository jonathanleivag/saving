import { useEffect, useState } from 'react'
import { PieChart as PieChart0 } from 'react-native-svg-charts'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'
import { pieData } from '../../../../helpers'
import { LabelPercentage, LabelTitle } from '.'
import { SectionGraficoComponent } from './section'

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
