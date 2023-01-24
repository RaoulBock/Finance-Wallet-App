import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React from "react";
import HomeNav from "../Components/Nav/HomeNav";
import Card from "../Components/Card/Card";
import { APP_ICONS, COLORS, PEOPLE, WALLETS } from "../Context/settings";
import PeopleCard from "../Components/Card/PeopleCard";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <HomeNav username={"Raoul Bock"} />
      <View style={{ marginVertical: 25 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {WALLETS.map((e, i) => {
            return <Card key={i} item={e} />;
          })}
        </ScrollView>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <View style={styles.grid}>
          <Text style={styles.text}>Send money</Text>
          <Text style={[styles.text, { color: COLORS.VIEW_MORE_COLOR }]}>
            View all
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PEOPLE.map((e, i) => {
            return <PeopleCard key={i} item={e} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginVertical: 10
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontSize: COLORS.SUB_FONT_SIZE,
    fontWeight: "600"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
