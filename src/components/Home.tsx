import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => console.log('Button Pressed')}
        underlayColor="#00ced1"
        style={styles.button}
      >
        <View style={styles.gradient}>
          <Text style={styles.text}>Gradient Button</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#00bcd4',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;