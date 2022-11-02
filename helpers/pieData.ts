import { Dispatch, SetStateAction } from 'react'

import { TIsOpen } from '../components/views/home/grafico/PieChart'
import { colorPie } from '../theme'

export const pieData = (
  data: [number, number, number],
  setIsOpen: Dispatch<SetStateAction<TIsOpen>>
) =>
  data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: colorPie[index],
        onPress: () => setIsOpen((index + 1) as TIsOpen)
      },
      key: `pie-${index}`
    }))
