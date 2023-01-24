import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../Context/settings";

const Card = ({ item }) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#b98cc9", "#f78fb3", "#9c88ff"]}
      start={[1, 0]}
      end={[0, 1]}
      style={styles.outline}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { fontSize: 18 }]}>{item.name}</Text>
      </View>
      <View style={styles.grid}>
        <Text style={styles.text}>$</Text>
        <Text style={styles.title}>{item.amount}</Text>
        <Text style={styles.text}>.65</Text>
      </View>
      <View style={{ marginVertical: 6 }}>
        <Text style={styles.text}>•••• •••• •••• 9896</Text>
      </View>
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  outline: {
    height: 200,
    borderRadius: 15,
    padding: 20,
    width: 300,
    marginHorizontal: 10
  },
  grid: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: COLORS.SUB_FONT_SIZE
  },
  title: {
    color: "white",
    fontSize: COLORS.MAIN_FONT_SIZE,
    fontWeight: "700"
  }
});
