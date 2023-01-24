import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import HomeNav from "../Components/Nav/HomeNav";
import Card from "../Components/Card/Card";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <HomeNav username={"Raoul Bock"} />
      <Card amount={"2534"} change={"52"} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});
