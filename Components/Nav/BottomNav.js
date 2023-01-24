import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const BottomNav = () => {
  const { tab, setTab } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.grid} onPress={() => setTab(0)}>
        <Ionicons
          name={"ios-home-outline"}
          style={[tab === 0 ? styles.isActive : styles.text, { fontSize: 21 }]}
        />
        <Text style={[tab === 0 ? styles.isActive : styles.text]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grid} onPress={() => setTab(1)}>
        <Ionicons
          name={"ios-reader-outline"}
          style={[tab === 1 ? styles.isActive : styles.text, { fontSize: 21 }]}
        />
        <Text style={[tab === 1 ? styles.isActive : styles.text]}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grid} onPress={() => setTab(2)}>
        <Ionicons
          name={"ios-people-outline"}
          style={[tab === 2 ? styles.isActive : styles.text, { fontSize: 21 }]}
        />
        <Text style={[tab === 2 ? styles.isActive : styles.text]}>
          Contacts
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.grid} onPress={() => setTab(3)}>
        <Ionicons
          name={"ios-qr-code-outline"}
          style={[tab === 3 ? styles.isActive : styles.text, { fontSize: 21 }]}
        />
        <Text style={[tab === 3 ? styles.isActive : styles.text]}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "white",
    elevation: 10,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  grid: {
    alignItems: "center"
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontWeight: "600",
    fontSize: 14
  },
  isActive: {
    color: COLORS.VIEW_MORE_COLOR,
    fontWeight: "600",
    fontSize: 14
  }
});
