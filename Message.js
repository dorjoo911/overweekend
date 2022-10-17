import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";

function Message() {
  const [count, setCount] = useState(0);
  const [showResults, setShowResults] = useState(true);
  const toggle = () => setShowResults(!showResults);
  return (
    <View style={{ margin: 10 }}>
      <Button title={showResults ? "DELETE" : "NEW MESSAGE"} onPress={toggle} />
      {showResults ? (
        <>
          <TextInput style={css.inputField} placeholder="To:"></TextInput>
          <TextInput
            multiline={true}
            numberOfLines={10}
            maxLength={200}
            style={{
              height: 250,
              textAlignVertical: "top",
              border: "1px solid #39FF14",
              backgroundColor: "pink",
              fontSize: 24,
            }}
            onChange={(text) => setCount(text.length)}
          />
          <Button
            title={`SEND MESSAGE`}
            onPress={() => {
              alert(`Message Sent!`);
              setShowResults(false);
            }}
          />
        </>
      ) : null}
    </View>
  );
}

export default Message;
const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});
