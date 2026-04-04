import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Mounted from './src/components/Mounted'

const App = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={true}>
      <View>
        <Text style={{color: "red"}}>React Native</Text>
      </View>

      <Mounted/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    contentContainer: {
      padding: 20,
    },
})

export default App
