import * as React from "react";
import { HomeScreen } from "./HomeScreen";
import { ProfileScreen } from "./ProfileScreen";
import { RegiterScreen } from "./RegiterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { MaterialCommunityIcons } from "react-native-vector-icons";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// const BottomTabs = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    // <BottomTabs.Navigator>
    //   <BottomTabs.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{
    //       title: "Home/Login",
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={26} />
    //       ),
    //     }}
    //   />
    //   <BottomTabs.Screen
    //     name="Profile"
    //     component={ProfileScreen}
    //     options={{
    //       title: "Profile",
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons
    //           name="face-man-profile"
    //           color={color}
    //           size={26}
    //         />
    //       ),
    //     }}
    //   />
    //   <BottomTabs.Screen
    //     name="Register"
    //     component={RegiterScreen}
    //     options={{
    //       title: "Register",
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons
    //           name="cash-register"
    //           color={color}
    //           size={26}
    //         />
    //       ),
    //     }}
    //   />
    // </BottomTabs.Navigator>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home/Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegiterScreen}
        options={{
          title: "Register",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cash-register"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
