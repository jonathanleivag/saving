import { Text } from 'react-native-svg'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'

export const LabelTitle = ({ slices }: any) => {
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
        fontSize={15}
      >
        {index === 0 && 'Gastos'.toUpperCase()}
        {index === 1 && 'Ocio'.toUpperCase()}
        {index === 2 && 'Ahorro'.toUpperCase()}
      </Text>
    )
  })
}

export const LabelPercentage = ({ slices }: any) => {
  const percentage = useSelector((state: RootState) => state.percentage)

  return slices.map((slice: any, index: any) => {
    const { pieCentroid } = slice
    return (
      // @ts-ignore: Unreachable code error
      <Text
        key={`$pie-${index}`}
        x={Number(pieCentroid[0])}
        y={Number(pieCentroid[1]) + 20}
        fill='white'
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={15}
      >
        {index === 0 && `${percentage.bills} %`}
        {index === 1 && `${percentage.leisure} %`}
        {index === 2 && `${percentage.saving} %`}
      </Text>
    )
  })
}
