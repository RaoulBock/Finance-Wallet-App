import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TransactionCard = () => {
  return (
    <View style={styles.outline}>
      <Text>TransactionCard</Text>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  outline: {
    marginHorizontal: 10,
    marginVertical: 10
  }
});