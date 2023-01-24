import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "../Modal/Modal";
import { COLORS, TRANSACTIONS, USER } from "../../Context/settings";
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

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.grid}>
          <Text style={styles.text}>$</Text>
          <Text style={styles.title}>2.534</Text>
          <Text style={styles.text}>.65</Text>
        </View>
        <Text style={styles.balanceText}>Available Balance</Text>
      </View>

      <Modal title={"Today"} dataset={TRANSACTIONS} />
    </LinearGradient>
  );
};

export default HistoryView;

const styles = StyleSheet.create({
  outline: {
    height: windowHeight
  },
  grid: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: COLORS.SUB_FONT_SIZE
  },
  title: {
    color: "white",
    fontSize: 58,
    fontWeight: "700"
  },
  balanceText: {
    fontWeight: "600",
    color: "white",
    fontSize: 14
  }
});
