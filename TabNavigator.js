import React from "react";
import StackNavigator from "./StackNavigator";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const BottomTabs = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabs.Navigator initialRouteName="Welcome">
      <BottomTabs.Screen name="HomeRoute" component={StackNavigator} />
    </BottomTabs.Navigator>
  );
}
