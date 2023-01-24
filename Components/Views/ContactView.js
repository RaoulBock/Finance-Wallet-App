import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "../Input/SearchInput";

const ContactView = () => {
  return (
    <View style={styles.outline}>
      <SearchInput />
    </View>
  );
};

export default ContactView;

const styles = StyleSheet.create({});
