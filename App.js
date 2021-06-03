import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const API_KEY = "46a9246bebba16d42b36aac3fc3ba8af";


export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = (cityName) => {
    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => setWeatherData(data))

    }, [])
  }


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
