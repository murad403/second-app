import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home'
import Register from './src/components/Register'
import Icon from 'react-native-vector-icons/Ionicons'
import Login from './src/components/Login';
import Users from './src/components/Users';
import UserDetails from './src/components/UserDetails';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

type TabIconProps = {
  color: string
  size: number
  focused: boolean
}

const homeTabIcon = ({ color, size, focused }: TabIconProps) => (
  <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
)

const usersTabIcon = ({ color, size, focused }: TabIconProps) => (
  <Icon name={focused ? 'users' : 'users-outline'} size={size} color={color} />
)

const registerTabIcon = ({ color, size, focused }: TabIconProps) => (
  <Icon name={focused ? 'person' : 'person-outline'} size={size} color={color} />
)

const loginTabIcon = ({ color, size, focused }: TabIconProps) => (
  <Icon name={focused ? 'log-in' : 'log-in-outline'} size={size} color={color} />
)

const UsersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={Users} options={{headerShown: false}}/>
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  )
}


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
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: homeTabIcon,
              tabBarActiveTintColor: 'aqua',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: 'black' }
            }}
          />
          <Tab.Screen
            name='Users'
            component={UsersStack}
            options={{
              tabBarIcon: usersTabIcon,
              tabBarActiveTintColor: 'aqua',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: 'black' }
            }}
          />
          <Tab.Screen
            name='Register'
            component={Register}
            options={{
              tabBarIcon: registerTabIcon,
              tabBarActiveTintColor: 'aqua',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: 'black' }
            }}
          />

          <Tab.Screen
            name='Login'
            component={Login}
            options={{
              tabBarIcon: loginTabIcon,
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
