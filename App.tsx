import React from 'react'
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import ResponsiveLayout from './src/components/ResponsiveLayout'
import WebsiteShow from './src/components/WebsiteShow'


const App = () => {
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={[styles.statusBarArea, { height: statusBarHeight }]} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
      {/* <View>
        <Text style={{color: "red"}}>React Native</Text>
      </View>

      <Mounted/> */}

      {/* <ResponsiveLayout/> */}


      {/* <Dialog /> */}

      {/* <Press /> */}

      {/* <WebsiteShow/> */}
      
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black ',
  },
  statusBarArea: {
    backgroundColor: '#61dafb',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
})


export default App
