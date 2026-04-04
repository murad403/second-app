import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Mounted = () => {
    const [showChildren, setShowChildren] = useState(false);
  return (
    <View>
      <Text style={styles.text}>Main Components</Text>
      <Button title='Visible' onPress={() => setShowChildren(true)}/>
      <Button title='Invisible' onPress={() => setShowChildren(false)}/>

      {showChildren && <Children/>}
    </View>
  )
}

const Children = () => {
    useEffect(() =>{
        console.warn("Children")
    })
    return (
        <View>
            <Text style={styles.text}>Children</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})

export default Mounted
