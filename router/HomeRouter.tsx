import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'
import React from 'react'

import { HomeView } from '../views'

const Stack = createNativeStackNavigator()

const configStack: NativeStackNavigationOptions = {
  headerShown: false
}

const HomeRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={configStack}>
        <Stack.Screen name='Home' component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeRouter
