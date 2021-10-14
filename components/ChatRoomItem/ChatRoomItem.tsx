import React from "react";
import { Image } from "react-native";
import { Text, View } from "../Themed";
import styles from "./styles";

export default function ChatRoomItem() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
        }}
        style={styles.image}
      />
      <View style={styles.bagde}>
        <Text style={styles.bagdeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.text}>12:30 AM</Text>
        </View>
        <Text numberOfLines={2} style={styles.text}>
          Hello World
        </Text>
      </View>
    </View>
  );
}
