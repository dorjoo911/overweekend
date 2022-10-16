import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Image } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const golbalName = "Mike";
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 64,
    height: 64,
  };

  const LoginNavigate = () => {
    navigation.navigate("Profile", { name: golbalName });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TextInput
        style={styles.inputField}
        placeholder="email required"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        style={styles.inputField}
        placeholder="password required"
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      />
      <Button title={`Login`} onPress={() => LoginNavigate()} />
      <br />
      <Button
        title={`Register`}
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
      />
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
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
});
