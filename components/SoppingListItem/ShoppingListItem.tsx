import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";

import { deleteAlertButtons } from "./ShoppingListItem.statics";

type Props = { name: string };
export const ShoppingListItem: React.FC<Props> = (props) => {
  const { name } = props;
  const onDelete = () => {
    Alert.alert(
      `For real ?`,
      `Press OK, and ${name} is gone!`,
      deleteAlertButtons,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onDelete}
          activeOpacity={0.8}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    borderRadius: 6,
  },
  deleteButtonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
