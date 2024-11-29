import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./components/SoppingListItem/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name={"Coffee"} />
      <ShoppingListItem name={"Tea"} />
      <ShoppingListItem name={"Water"} />
      <ShoppingListItem name={"Soda"} isCompleted={true} />
      <ShoppingListItem name={"Coke"} />
      <ShoppingListItem name={"Sprite"} isCompleted={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
