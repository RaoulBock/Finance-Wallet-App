import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const PeopleCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={{ uri: item.img }} style={styles.img} />
    </View>
  );
};

export default PeopleCard;

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 15
  }
});
