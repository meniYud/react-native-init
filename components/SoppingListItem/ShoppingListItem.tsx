import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";

import { deleteAlertButtons } from "./ShoppingListItem.statics";

type Props = {
  name: string;
  isCompleted?: boolean
};
export const ShoppingListItem: React.FC<Props> = (props) => {
  const { name, isCompleted = false } = props;
  const onDelete = () => {
    Alert.alert(
      `For real ?`,
      `Press OK, and ${name} is gone!`,
      deleteAlertButtons,
    );
  };

  return (
    <View style={[styles.itemContainer, isCompleted ? styles.completedItemContainer : undefined]}>
      <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>{name}</Text>
      <TouchableOpacity
        style={[styles.deleteButton, isCompleted ? styles.completedButton : undefined]}
        onPress={onDelete}
        activeOpacity={0.8}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedItemContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  completedText: {
    color: theme.colorGrey,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
  },
  deleteButton: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  deleteButtonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
