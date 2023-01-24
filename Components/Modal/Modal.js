import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../Context/settings";
import TransactionCard from "../Card/TransactionCard";

const Modal = ({ title, dataset }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{title}</Text>
      {dataset && (
        <View>
          {dataset.map((e, i) => {
            return <TransactionCard key={i} item={e} />;
          })}
        </View>
      )}
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
    position: "absolute",
    paddingVertical: 20,
    elevation: 10
  },
  title: {
    color: COLORS.SUB_TEXT_COLOR,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 22
  }
});
