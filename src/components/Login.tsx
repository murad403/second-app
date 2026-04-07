import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default Login
