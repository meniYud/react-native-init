import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import { theme } from "./theme";

export default function App() {
  const onDelete = () => {
    console.log("op")
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete} activeOpacity={0.8}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  deleteButton: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6
  },
  deleteButtonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  }
});
