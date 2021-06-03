import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const API_KEY = "46a9246bebba16d42b36aac3fc3ba8af";


export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <View style={styles.container}>
      <Text>Ashab Is going to build a native app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
