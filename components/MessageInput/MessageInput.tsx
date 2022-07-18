import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const OnPress = () => {
    message ? SendMessage() : OnPlusClicked();
  };
  const SendMessage = () => {
    console.warn("Sending: ", message);
    setMessage("");
  };
  const OnPlusClicked = () => {
    console.warn("Plus Clicked");
  };
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} color="grey" />
        <TextInput
          style={styles.input}
          placeholder="Type  Message"
          value={message}
          onChangeText={setMessage}
        />
        <Feather name="camera" size={24} color="grey" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="grey"
        />
      </View>

      <Pressable style={styles.buttonContainer} onPress={OnPress}>
        {message ? (
          <Ionicons name="send" size={22} color="white" style={styles.icon} />
        ) : (
          <Entypo name="plus" size={24} color="white" style={styles.icon} />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: { flexDirection: "row", padding: 10 },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#dedede",
    flexDirection: "row",
    padding: 5,
  },
  buttonContainer: {
    backgroundColor: "#3777f0",
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});
