import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const TransactionCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.main}>
        <Image source={item.icon} style={styles.icon} />
        <View style={styles.grid}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.grid}>
        <Text
          style={
            item.price < 1
              ? [styles.title, { color: "red" }]
              : [styles.title, { color: "#10ac84" }]
          }
        >
          {item.price}
        </Text>
        <Text style={styles.description}>{item.timeStamp}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  outline: {
    marginHorizontal: 10,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "99%"
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
  },
  main: {
    flexDirection: "row",
    alignItems: "center"
  }
});
