import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import { Text, View } from "../components/Themed";
import ChatRooms from "../assets/dummy-data/ChatRooms";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
