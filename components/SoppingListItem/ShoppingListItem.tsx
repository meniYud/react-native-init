import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

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
        onPress={onDelete}
        activeOpacity={0.8}
      >
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
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
  }
});
