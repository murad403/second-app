import { StatusBar, StyleSheet, Text, View } from 'react-native';

const StaBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb" barStyle={'dark-content'} />
      <Text>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
})

export default StaBar;
