import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/components/Home'
import Register from './src/components/Register'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();


const App = () => {
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={[styles.statusBarArea, { height: statusBarHeight }]} />

      {/* stack navigation */}
      {/* <NavigationContainer>
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
            }}
          
            />
          <Stack.Screen name="Login" component={Login} options={{title: "Login Screen"}}/>
        </Stack.Navigator>
      </NavigationContainer> */}

      {/* tab navigation */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='Register'
            component={Register}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  size={size}
                  color={color}
                />
              ),
              tabBarActiveTintColor: 'aqua',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: 'black' }
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>

      {/* top tab navigation */}
      {/* <NavigationContainer>
          <TopTab.Navigator>
            <TopTab.Screen name='Home' component={Home}/>
            <TopTab.Screen name='Register' component={Register}/>
          </TopTab.Navigator>
        </NavigationContainer> */}


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
