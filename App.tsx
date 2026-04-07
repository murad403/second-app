import React from 'react'
import { Button, Platform, StatusBar, StyleSheet, View } from 'react-native'
import ResponsiveLayout from './src/components/ResponsiveLayout'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/components/Login'

const Stack = createNativeStackNavigator()


const App = () => {
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={[styles.statusBarArea, { height: statusBarHeight }]} />

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerStyle: {
              backgroundColor: "gray"
            },
            headerTitleStyle: {
              color: "aqua",
              fontSize: 23
            },
          }}>
          <Stack.Screen name="Home" component={ResponsiveLayout} options={{
            title: "Home Screen",
            headerTitle: () => <Button title='Left'/>,
            headerRight: () => <Button title='Right'/>
            }}/>
          <Stack.Screen name="Login" component={Login} options={{title: "Login Screen"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  statusBarArea: {
    backgroundColor: '#61dafb',
  },
})


export default App
