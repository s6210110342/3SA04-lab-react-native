import React from "react";
import { Text, View } from "react-native";

export default function Forecast(props) {
  return (
    <View>
      <Text>{props.main}</Text>
      <text>{props.description}</text>
      <text>{props.temp}</text>
      <text>°C</text>
    </View>
  );
}
