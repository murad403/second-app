import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => console.log('Button Pressed')}
        underlayColor="#00ced1"
        style={styles.button}
      >
        <LinearGradient
          colors={['#00ffff', '#7fffd4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.text}>Gradient Button</Text>
        </LinearGradient>
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
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;