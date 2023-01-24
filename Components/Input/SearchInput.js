import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const SearchInput = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.outline}>
      <Text>{APP_ICONS.SEARCH}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    backgroundColor: "yellow",
    width: "100%",
    padding: 10
  }
});
