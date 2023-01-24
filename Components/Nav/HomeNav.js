import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const HomeNav = ({ username }) => {
  return (
    <View style={styles.outline}>
      <View>
        <Text style={styles.text}>Good Morning,</Text>
        <Text style={styles.title}>{username}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontSize: COLORS.SUB_FONT_SIZE,
  },
  title: {
    color: COLORS.MAIN_COLOR,
    fontSize: COLORS.MAIN_FONT_SIZE,
  },
});