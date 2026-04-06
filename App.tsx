import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Mounted from './src/components/Mounted'
import ResponsiveLayout from './src/components/ResponsiveLayout'
import Dialog from './src/components/Dialog'
import Press from './src/components/Press'
import StaBar from './src/components/StaBar'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <View>
        <Text style={{color: "red"}}>React Native</Text>
      </View>

      <Mounted/> */}

      {/* <ResponsiveLayout/> */}


      {/* <Dialog /> */}

      {/* <Press /> */}

      <StaBar/>
    </View>
  )
}


export default App
