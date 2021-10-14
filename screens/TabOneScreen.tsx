import * as React from "react";
import { StyleSheet } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatRoomItem />
      <ChatRoomItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
