import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import { View } from 'react-native';

const AuthStack = createStackNavigator();

export default function App() {
    return(
      <NavigationContainer>
        <AuthStack.Navigator >
          <AuthStack.Screen name="Home" component={ZipCodeScreen} />
          <AuthStack.Screen name="Weather" component={WeatherScreen} />
        </AuthStack.Navigator>
        {/* <Tabs /> */}
      </NavigationContainer>
    );
}
