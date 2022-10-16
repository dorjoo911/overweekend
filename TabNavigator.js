import React from "react";
import StackNaigator from "./StackNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const BottomTabs = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabs.Navigator initialRouteName="Home">
      <BottomTabs.Screen name="HomeRoute" component={StackNaigator} />
    </BottomTabs.Navigator>
  );
}
