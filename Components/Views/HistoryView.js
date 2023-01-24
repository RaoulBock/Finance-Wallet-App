import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "../Modal/Modal";
import { TRANSACTIONS, USER } from "../../Context/settings";
import HistoryUserCard from "../Card/HistoryUserCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HistoryView = () => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#b98cc9", "#f78fb3", "#9c88ff"]}
      start={[1, 0]}
      end={[0, 1]}
      style={styles.outline}
    >
      {USER.map((e, i) => {
        return <HistoryUserCard key={i} item={e} />;
      })}

      <Modal title={"Today"} dataset={TRANSACTIONS} />
    </LinearGradient>
  );
};

export default HistoryView;

const styles = StyleSheet.create({
  outline: {
    height: windowHeight
  }
});
