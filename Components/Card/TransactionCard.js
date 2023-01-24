import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const TransactionCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.grid}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  outline: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.BACKGROUND_ICON,
    padding: 20
  },
  title: {
    color: COLORS.MAIN_COLOR,
    fontSize: 20,
    fontWeight: "700"
  },
  grid: {
    paddingHorizontal: 15
  },
  description: {
    color: COLORS.SUB_TEXT_COLOR,
    fontWeight: "500"
  }
});
