// import React from "react";
// import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import ZipCodeScreen from "./screen/ZipCodeScreen";
// import WeatherScreen from "./screen/WeatherScreen";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={ZipCodeScreen} />
//           <Stack.Screen name="Weather" component={WeatherScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>


//   );
// }

// const styles = StyleSheet.create({
//   backdrop: {
//     alignItems: "center",
//     width: "100%",
//     height: "100%",
//   },
// });



import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Tabs from './navigation/Tabs';

export default function App() {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}