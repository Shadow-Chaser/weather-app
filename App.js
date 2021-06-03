import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './components/Weather/Weather';
import SearchBar from './components/SearchBar/SearchBar';

const apiKey = '4384136ca82f5059368a170068aff92d';

export default function App() {

    const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function getWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);

    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
      getWeatherData('Dhaka');
    }, [])


  if (!loaded) {
    return (
      <View style={styles.container}>

        <ActivityIndicator color='gray' size={36} />
      </View>

    )
    }

  else if (weatherData === null) {
    return (
      <View style={styles.container}>
        <SearchBar getWeatherData={getWeatherData} />
        <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
      </View>
    )
  }

    return (
        <View style={styles.container}>
        <Weather weatherData={weatherData} getWeatherData={getWeatherData} />
        <Text >Developed by Ashab, Imran and Sohel</Text>
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
  primaryText: {
    margin: 20,
    fontSize: 28
  }
});