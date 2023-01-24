import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const HomeNav = ({ username }) => {
  const { setTab } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <View>
        <Text style={styles.text}>Good Morning,</Text>
        <Text style={styles.title}>{username}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => setTab(4)} style={styles.btn}>
          <Text>{APP_ICONS.SEARCH}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    paddingHorizontal: 10,
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
  },
  btn: {
    backgroundColor: COLORS.BACKGROUND_ICON,
    borderRadius: 10,
    backgroundColor: COLORS.BACKGROUND_ICON,
    padding: 10
  }
});
