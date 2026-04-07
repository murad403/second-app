import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Login = () => {
  const navigation = useNavigation<any>();
  const {control, handleSubmit, reset} = useForm();

  const onSubmit = (data: any) =>{
    navigation.navigate("Home", {name: data?.name, email: data?.email})
    reset();
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Controller
        control={control}
        name='name'
        render={({field: {onChange, value}}) => (
          <TextInput style={styles.inputBox} placeholder="Enter your name" onChangeText={onChange} value={value} />
        )}
      />
      <Controller
        control={control}
        name='email'
        render={({field: {onChange, value}}) => (
          <TextInput style={styles.inputBox} placeholder="Enter your email" onChangeText={onChange} value={value} />
        )}
      />
      <Button title="Go to Home" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    padding: 20,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    paddingHorizontal: 20
  }
})

export default Login
