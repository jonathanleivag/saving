import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { configAnimationStack, configStack } from '../config'
import { HomeView, InfoGraficoView } from '../views'

const Stack = createNativeStackNavigator()

const HomeRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={configStack}>
        <Stack.Screen
          name='Home'
          component={HomeView}
          options={configAnimationStack}
        />
        <Stack.Screen
          name='info'
          component={InfoGraficoView}
          options={configAnimationStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
// ScreenComponentType<ParamListBase, "info">
export default HomeRouter
