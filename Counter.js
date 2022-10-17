import React, { useState, useRef, useEffect } from "react";
import { Button, StyleSheet, Text, Touchable, View } from "react-native";

export default function Counter() {
  const [state, setstate] = useState(0);

  // for not to render
  const ref = useRef(null);

  const countInc = () => {
    if (ref.current) {
      clearInterval(ref.current);
    }
    ref.current = setInterval(() => setstate((prev) => prev + 1), 1);
  };

  const countStop = () => {
    clearInterval(ref.current);
  };

  const countReset = () => {
    setstate(0);
  };

  useEffect(() => {
    return () => clearInterval(ref.current);
  }, []);

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <Text
          style={{
            color: "yellow",
            fontSize: 30,
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          SPEEDOMETER
        </Text>
      </View>
      <View style={{ backgroundColor: "black", flex: 4 }}>
        <Text
          style={{
            color: "yellow",
            fontSize: 150,
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {state}
        </Text>
      </View>
      <View style={{ backgroundColor: "black", flex: 5 }}>
        <View style={{ backgroundColor: "black", flex: 1, margin: 10 }}>
          <Button title="START" color="#841584" onPress={() => countInc()} />
          <Button title="STOP" color="#846514" onPress={() => countStop()} />
        </View>

        <View style={{ backgroundColor: "black", flex: 1, margin: 10 }}>
          <Button title="RESET" color="#457862" onPress={() => countReset()} />
        </View>
      </View>
    </View>
  );
}
