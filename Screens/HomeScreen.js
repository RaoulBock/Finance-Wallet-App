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
import {
  APP_ICONS,
  COLORS,
  PEOPLE,
  TRANSACTIONS,
  WALLETS
} from "../Context/settings";
import PeopleCard from "../Components/Card/PeopleCard";
import TransactionCard from "../Components/Card/TransactionCard";
import BottomNav from "../Components/Nav/BottomNav";
import HomeView from "../Components/Views/HomeView";
import { AppContext } from "../Context/AppContext";
import HistoryView from "../Components/Views/HistoryView";

const HomeScreen = () => {
  const { tab } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <ScrollView>
        {tab === 0 && <HomeView />}
        {tab === 1 && <HistoryView />}
      </ScrollView>
      <BottomNav />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fdfdfd"
  }
});
