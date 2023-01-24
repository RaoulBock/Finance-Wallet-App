import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const BottomNav = () => {
  const { setTab } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.grid} onPress={() => setTab(0)}>
        <Ionicons
          name={"ios-home-outline"}
          style={{
            color: COLORS.SUB_TEXT_COLOR,
            fontSize: 20
          }}
        />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grid} onPress={() => setTab(1)}>
        <Ionicons
          name={"ios-reader-outline"}
          style={{
            color: COLORS.SUB_TEXT_COLOR,
            fontSize: 20
          }}
        />
        <Text style={styles.text}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grid} onPress={() => setTab(1)}>
        <Ionicons
          name={"ios-people-outline"}
          style={{
            color: COLORS.SUB_TEXT_COLOR,
            fontSize: 20
          }}
        />
        <Text style={styles.text}>Contacts</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    padding: 10,
    backgroundColor: "white",
    elevation: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  grid: {
    alignItems: "center"
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontWeight: "600"
  }
});
