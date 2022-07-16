import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
// import { Text } from "../Themed";

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: { flexDirection: "row", padding: 10 },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    justifyContent: "center",
    borderWidth:1,
    borderEndColor:"#dedede"
  },
  buttonContainer: {
    backgroundColor: "#3777f0",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});
