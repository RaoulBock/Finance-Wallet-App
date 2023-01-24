import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const List = ({ item }) => {
  const { setCurrency } = React.useContext(AppContext);
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => setCurrency(item)}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  title: {
    color: COLORS.MAIN_COLOR,
    fontSize: 20,
    fontWeight: "700",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingVertical: 10
  }
});
