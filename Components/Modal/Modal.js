import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Modal = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text>{title}</Text>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  outline: {
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 450,
    bottom: 0,
    position: "absolute"
  }
});
