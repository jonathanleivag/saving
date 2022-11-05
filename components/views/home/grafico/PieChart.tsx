import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { PieChart as PieChart0 } from 'react-native-svg-charts'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'
import { setGrafico } from '../../../../features'
import { pieData } from '../../../../helpers'
import { ModalComponent } from '../../../modal'
import { LabelPercentage, LabelTitle } from './LabelChart'
import { ModalContentGrafico } from './modal'
import { SectionGraficoComponent } from './section'

export type TIsOpen = 1 | 2 | 3 | false

const PieChart = () => {
  const salary = useSelector((state: RootState) => state.money.salary)
  const { bills, leisure, saving } = useSelector(
    (state: RootState) => state.percentage
  )
  const [dataPieChart, setDataPieChart] = useState()
  const [isOpen, setIsOpen] = useState<TIsOpen>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setDataPieChart(pieData([bills, leisure, saving], setIsOpen) as any)
    return () => {}
  }, [bills, leisure, saving])

  const handleIsTitle = () => {
    switch (isOpen) {
      case 1:
        return 'Gastos'
      case 2:
        return 'Ocio'
      case 3:
        return 'Ahorro'
      default:
        return 'Grafico'
    }
  }

  const handleIsTitleOriginal = () => {
    switch (isOpen) {
      case 1:
        return 'bills'
      case 2:
        return 'leisure'
      case 3:
        return 'saving'
      default:
        return 'saving'
    }
  }

  const handleIsPorcentaje = () => {
    switch (isOpen) {
      case 1:
        return bills
      case 2:
        return leisure
      case 3:
        return saving
      default:
        return 0
    }
  }

  useEffect(() => {
    dispatch(
      setGrafico({
        title: handleIsTitle(),
        percentage: handleIsPorcentaje(),
        isOpen,
        titleOriginal: handleIsTitleOriginal()
      })
    )
    return () => {}
  }, [isOpen])

  return (
    <>
      {salary > 0 && (
        <>
          <ModalComponent
            showModal={typeof isOpen === 'number'}
            setShowModal={setIsOpen as Dispatch<SetStateAction<boolean>>}
            title={handleIsTitle()}
          >
            <ModalContentGrafico />
          </ModalComponent>
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
