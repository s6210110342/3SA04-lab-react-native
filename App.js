import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from "./screen/ZipCodeScreen";
import WeatherScreen from "./screen/WeatherScreen";

export default function App() {
  const Stack = createStackNavigator()
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ZipCodeScreen}/>
          <Stack.Screen name="Weather" component={WeatherScreen}/>
        </Stack.Navigator>
      </NavigationContainer>  


  );
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});





