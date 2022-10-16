import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Items from "./Items";
import TabNavigator from "./TabNavigator";

export const ProfileScreen = ({ navigation, route }) => {
  const [show, setshow] = useState(false);

  const toggle = () => {
    setshow(!show);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textDecoder}>
        {route.params.name}'s contact list
        <TouchableOpacity onPress={toggle}>
          <Text style={styles.button}>{!show ? " Show" : " Hide"}</Text>
        </TouchableOpacity>
      </Text>
      {show ? <Items /> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #39FF14",
  },
  textDecoder: {
    fontSize: 20,
    padding: 10,
    color: "blue",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  button: {
    fontWeight: 500,
  },
});
