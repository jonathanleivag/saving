import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AnyAction, Dispatch as Dispatch0 } from '@reduxjs/toolkit'

import { TIsOpen } from '../components/views/home/grafico/PieChart'
import { setIsOpen } from '../features'
import { colorPie } from '../theme'

export const pieData = (
  data: [number, number, number],
  navigation: NativeStackNavigationProp<ParamListBase, 'Home', undefined>,
  dispatch: Dispatch0<AnyAction>
) =>
  data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: colorPie[index],
        onPress: () => {
          dispatch(setIsOpen((index + 1) as TIsOpen))
          navigation.replace('info')
        }
      },
      key: `pie-${index}`
    }))
