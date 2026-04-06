import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Press = () => {
  return (
    <View style={styles.container}>
      <Pressable 
      delayLongPress={1000}
        onPress={() => console.warn("Onpress")}
        onPressIn={() => console.warn("Onpressin")}
        onPressOut={() => console.warn("Onpressout")}
        onLongPress={() => console.warn("Onlongpress")}
      >
        <Text style={styles.pressableButton}>Pressable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    },
    pressableButton: {
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 5
    }
})

export default Press
