import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Pressable } from "react-native";
import { Text, View } from "../Themed";
import styles from "./styles";

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const GoToChat = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };
  return (
    <Pressable style={styles.container} onPress={GoToChat}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      {chatRoom.newMessages && (
        <View style={styles.bagde}>
          <Text style={styles.bagdeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}> {chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
