import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from "react-native";
import React from "react";
import { APP_ICONS, COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";
import SearchInput from "../Input/SearchInput";

const HomeNav = ({ username }) => {
  const { setTab } = React.useContext(AppContext);

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <View style={styles.outline}>
      <View>
        <Text style={styles.text}>Good Morning,</Text>
        <Text style={styles.title}>{username}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={styles.btn}
        >
          <Text>{APP_ICONS.SEARCH}</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          style={{ height: 200 }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <View style={styles.grid}>
              <Text style={styles.text}>Search for crypto</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setIsModalVisible(false)}
              >
                <Text>{APP_ICONS.EXIT}</Text>
              </TouchableOpacity>
            </View>
            <SearchInput placeholder={"Search here ..."} />
            <Text style={[styles.text, { textAlign: "right" }]}>0 results</Text>
            {/* {CURRENCIES.map((e, i) => {
                return <List key={i} item={e} />;
              })} */}
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontSize: COLORS.SUB_FONT_SIZE,
    fontWeight: "500"
  },
  title: {
    color: COLORS.MAIN_COLOR,
    fontSize: COLORS.MAIN_FONT_SIZE,
    fontWeight: "700"
  },
  img: {
    width: 25,
    height: 25
  },
  btn: {
    backgroundColor: COLORS.BACKGROUND_ICON,
    borderRadius: 10,
    backgroundColor: COLORS.BACKGROUND_ICON,
    padding: 10
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
