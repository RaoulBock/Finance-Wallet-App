import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  Modal,
  TouchableOpacity
} from "react-native";
import React from "react";
import HomeNav from "../Nav/HomeNav";
import { COLORS, TRANSACTIONS } from "../../Context/settings";
import TransactionCard from "../Card/TransactionCard";

const SettingsView = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  return (
    <View>
      <HomeNav username={"Raoul Bock"} />

      <View style={{ marginVertical: 20 }}>
        <View style={styles.grid}>
          <Text style={styles.text}>Back up & Security</Text>
        </View>
        <ScrollView>
          <View style={[styles.grid, styles.sep]}>
            <Text style={styles.title}>Cloud backup</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[styles.grid, styles.sep, { paddingVertical: 10 }]}>
            <Text style={styles.title}>App Preferences</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.text}>NAM</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            style={{ height: 200 }}
          >
            <View style={{}}>
              <View>
                <Text>Hello World!</Text>
                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                  <Text>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsView;

const styles = StyleSheet.create({
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontSize: COLORS.SUB_FONT_SIZE,
    fontWeight: "600"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  title: {
    color: COLORS.MAIN_COLOR,
    fontSize: 20,
    fontWeight: "700"
  },
  sep: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  }
});
