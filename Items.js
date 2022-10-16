import { useEffect, useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  CheckBox,
} from "react-native";
import generatePhoneNumber, { contacts } from "./contactGen";

export default function Items({ navigation, route }) {
  const [data, setdata] = useState(contacts);
  const [clicked, setClicked] = useState(false);
  const [currentID, setCureentId] = useState("");

  const isClicked = (id) => {
    setClicked(true);
    setCureentId(id);
  };

  const deleteContact = (id) => {
    const filtered = data.filter((c) => c.id !== currentID);
    setdata(filtered);
  };

  return (
    <ScrollView>
      {clicked ? (
        <View style={styles.buttons}>
          <Button
            title="DELETE"
            onPress={() => {
              deleteContact();
            }}
          />
          <Button
            title="EDIT"
            onPress={() => {
              deleteContact();
            }}
          />
          <Button
            title="CANCEL"
            onPress={() => {
              setClicked(false);
            }}
          />
        </View>
      ) : null}
      {data.map((c, i) => (
        <Text
          key={c.id}
          style={styles.textDecoder}
          onPress={() => {
            isClicked(c.id);
          }}
        >
          {i + 1}. {c.name} {c.phone}
        </Text>
      ))}
    </ScrollView>
  );
}

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
  },
  buttons: {
    flexDirection: "row",
    alignSelf: "space-around",
  },
});
