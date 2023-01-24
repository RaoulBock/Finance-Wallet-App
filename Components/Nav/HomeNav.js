import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";

const HomeNav = ({ username }) => {
  return (
    <View style={styles.outline}>
      <View>
        <Text style={styles.text}>Good Morning,</Text>
        <Text style={styles.title}>{username}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={require("../Icons/setting.png")} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontSize: COLORS.SUB_FONT_SIZE,
    fontWeight: "500"
  },
  title: {
    color: COLORS.MAIN_COLOR,
    fontSize: COLORS.MAIN_FONT_SIZE,
    fontWeight: "700"
  },
  img: {
    width: 25,
    height: 25
  }
});
