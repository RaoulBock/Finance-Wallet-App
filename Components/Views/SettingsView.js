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
import {
  APP_ICONS,
  COLORS,
  CURRENCIES,
  TRANSACTIONS
} from "../../Context/settings";
import TransactionCard from "../Card/TransactionCard";
import List from "../List/List";
import { AppContext } from "../../Context/AppContext";

const SettingsView = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { currency } = React.useContext(AppContext);
  return (
    <View>
      <HomeNav username={"Raoul Bock"} />

      <View style={{ marginVertical: 20 }}>
        <View style={styles.grid}>
          <Text style={styles.text}>Back up & Security</Text>
        </View>
        <ScrollView>
          <TouchableOpacity
            style={[styles.grid, styles.sep]}
            onPress={toggleSwitch}
            activeOpacity={1}
          >
            <Text style={styles.title}>Cloud backup</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.grid, styles.sep, { paddingVertical: 10 }]}
            onPress={() => setIsModalVisible(true)}
            activeOpacity={1}
          >
            <Text style={styles.title}>App Preferences</Text>
            <TouchableOpacity>
              <Text style={styles.text}>{currency}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={false}
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            style={{ height: 200 }}
          >
            <View style={{ margin: 15 }}>
              <View style={styles.main}>
                <Text style={styles.text}>Select your preferred currency</Text>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text>{APP_ICONS.EXIT}</Text>
                </TouchableOpacity>
              </View>
              {CURRENCIES.map((e, i) => {
                return <List key={i} item={e} />;
              })}
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
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btn: {
    backgroundColor: COLORS.BACKGROUND_ICON,
    borderRadius: 10,
    backgroundColor: COLORS.BACKGROUND_ICON,
    padding: 10
  }
});
