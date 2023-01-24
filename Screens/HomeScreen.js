import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import HomeNav from "../Components/Nav/HomeNav";
import Card from "../Components/Card/Card";
import { WALLETS } from "../Context/settings";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <HomeNav username={"Raoul Bock"} />
      <View style={{ marginVertical: 20 }}>
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    marginVertical: 10,
  },
});
