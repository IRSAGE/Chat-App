import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

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

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 10 },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  bagde: {
    backgroundColor: "#3872E8",
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 55,
    top: 10,
  },
  bagdeText: { fontSize: 12 },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    color: "grey",
  },
});
