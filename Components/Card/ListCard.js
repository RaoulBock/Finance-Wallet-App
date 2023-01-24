import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const ListCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={{ uri: item.img }} style={styles.img} />
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.email}</Text>
      </View>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center"
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 15
  },
  title: {
    color: COLORS.MAIN_COLOR,
    fontWeight: "700",
    fontSize: 18
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontWeight: "500"
  }
});
