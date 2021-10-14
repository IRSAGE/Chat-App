import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Message = () => {
  const isMe = true;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? "#128C7E" : "#34B7F1",
          marginLeft: isMe ? "auto" : 10,
        },
      ]}
    >
      <Text style={styles.text}>Message</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  text: {
    color: "white",
  },
});
