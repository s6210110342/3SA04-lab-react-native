import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ZipCodeScreen from '../screen/ZipCodeScreen'
import WeatherScreen from '../screen/WeatherScreen'


const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ZipCodeScreen} />
            <Tab.Screen name="Weather" component={WeatherScreen} />
        </Tab.Navigator>
    );
}