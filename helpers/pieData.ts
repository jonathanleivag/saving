import { colorPie } from '../theme'

export const pieData = (data: [number, number, number]) =>
  data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: colorPie[index],
        onPress: () => console.log('press', index)
      },
      key: `pie-${index}`
    }))
