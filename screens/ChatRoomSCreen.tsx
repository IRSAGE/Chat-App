import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Message from "../components/Message";
import { View } from "../components/Themed";
import Chats from "../assets/dummy-data/Chats";

const ChatRoomSCreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={Chats.messages}
        renderItem={({ item }) => <Message message={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatRoomSCreen;

const styles = StyleSheet.create({
  page: { flex: 1 },
});
