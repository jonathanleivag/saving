import { Text } from 'react-native-svg'
import { PieChart as PieChart0 } from 'react-native-svg-charts'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'

const data = [50, 30, 20]

const randomColor = () =>
  ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

const pieData = data
  .filter(value => value > 0)
  .map((value, index) => ({
    value,
    svg: {
      fill: randomColor(),
      onPress: () => console.log('press', index)
    },
    key: `pie-${index}`
  }))

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
  return (
    <>
      {salary > 0 && (
        <PieChart0 style={{ height: 300 }} data={pieData}>
          <Label />
        </PieChart0>
      )}
    </>
  )
}

export default PieChart
