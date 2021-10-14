import React from "react";
import { StyleSheet } from "react-native";
import Message from "../components/Message";
import { Text, View } from "../components/Themed";

const ChatRoomSCreen = () => {
  return (
    <View style={styles.page}>
      <Message />
    </View>
  );
};

export default ChatRoomSCreen;

const styles = StyleSheet.create({
  page: { flex: 1 },
});
