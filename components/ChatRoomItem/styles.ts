import { StyleSheet } from "react-native";

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
  bagdeText: { fontSize: 12, color: "white" },
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
export default styles;
