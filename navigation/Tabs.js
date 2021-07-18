import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ZipCodeScreen from "../screen/ZipCodeScreen";
import WeatherScreen from "../screen/WeatherScreen";
import { View, Image, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ZipCodeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", justifyContent: "center", top: 5 }}
            >
              <Image
                source={require("../image/icon/home.png")}
                resizeMode="contain"
                style={{
                  top: -3,
                  width: 24,
                  height: 24,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../image/icon/weather.png")}
                resizeMode="contain"
                style={{
                  top: 1,
                  width: 33,
                  height: 33,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                WEATHER
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

