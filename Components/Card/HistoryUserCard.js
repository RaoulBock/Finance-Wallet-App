import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const HistoryUserCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.main}>
        <Image source={{ uri: item.img }} style={styles.img} />
        <View style={styles.grid}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={[styles.title, styles.account_number]}>
            {item.account_number}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text>{APP_ICONS.CALENDER}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryUserCard;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between"
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "600"
  },
  grid: {
    paddingHorizontal: 10
  },
  account_number: {
    fontSize: 12
  },
  calender: {
    width: 30,
    height: 30
  },
  main: {
    flexDirection: "row"
  }
});
