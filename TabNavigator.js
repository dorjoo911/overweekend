import React from "react";
import { StackNavigator } from "./StackNavigator";
import Counter from "./Counter";
import Message from "./Message";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const BottomTabs = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabs.Navigator initialRouteName="Welcome">
      <BottomTabs.Screen
        name="HomeRoute"
        component={StackNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Counter"
        component={Counter}
        options={{
          title: "Counter",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="timer-cog-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Message"
        component={Message}
        options={{
          title: "Message",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-reply-text-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
