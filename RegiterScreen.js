import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export const RegiterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const golbalName = "Mike";

  const RegisterNavigate = () => {
    navigation.navigate("Profile", { name: golbalName });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="name required"
        onChangeText={(newText) => setName(newText)}
        defaultValue={name}
      />
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
      <TextInput
        style={styles.inputField}
        placeholder="phone number required"
        onChangeText={(newText) => setPhone(newText)}
        defaultValue={phone}
      />
      <Button title={`Submit`} onPress={() => RegisterNavigate()} />
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
});
