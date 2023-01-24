import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import HomeNav from "../Components/Nav/HomeNav";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <HomeNav username={"Raoul Bock"} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
