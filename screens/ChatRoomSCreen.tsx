import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Message from "../components/Message";
import { View } from "../components/Themed";
import Chats from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/core";

const ChatRoomSCreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.warn("ChatRoom: ", route.params?.id);
  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Chats.messages}
          renderItem={({ item }) => <Message message={item} />}
          showsVerticalScrollIndicator={false}
          inverted
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
