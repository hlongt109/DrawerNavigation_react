import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerNavigation from './navigation/DrawerNavigation'
import Splash from './src/Splash'
import Login from './src/Login'
import CreateProduct from './src/CreateProduct'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{ headerShown: false}}/>
        <Stack.Screen name='Create Product' component={CreateProduct}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({})
export default App

