import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [ForecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0,
  });

  return (
    <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
      <Text>zipCode</Text>
      <Text>{props.zipCode}</Text>
      <Forecast {...ForecastInfo} />
    </ImageBackground>

  )
  
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})