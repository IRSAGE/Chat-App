import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Message from "../components/Message";
import { View } from "../components/Themed";
import Chats from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

const ChatRoomSCreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <FlatList
          data={Chats.messages}
          renderItem={({ item }) => <Message message={item} />}
          showsVerticalScrollIndicator={false}
        />
        <MessageInput />
      </View>
    </SafeAreaView>
  );
};

export default ChatRoomSCreen;

const styles = StyleSheet.create({
  page: { flex: 1 },
});
