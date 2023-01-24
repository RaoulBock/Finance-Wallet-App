import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS, PEOPLE, TRANSACTIONS, WALLETS } from "../../Context/settings";
import Card from "../Card/Card";
import PeopleCard from "../Card/PeopleCard";
import TransactionCard from "../Card/TransactionCard";

const HomeView = () => {
  return (
    <View>
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
      <View style={{ marginBottom: 15 }}>
        <View style={styles.grid}>
          <Text style={styles.text}>Send money</Text>
          {/* <Text style={[styles.text, { color: COLORS.VIEW_MORE_COLOR }]}>
            View all
          </Text> */}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PEOPLE.map((e, i) => {
            return <PeopleCard key={i} item={e} />;
          })}
        </ScrollView>
      </View>

      <View style={{}}>
        <View style={styles.grid}>
          <Text style={styles.text}>Transactions</Text>
          <Text style={[styles.text, { color: COLORS.VIEW_MORE_COLOR }]}>
            View all
          </Text>
        </View>
        <ScrollView>
          {TRANSACTIONS.map((e, i) => {
            return <TransactionCard key={i} item={e} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeView;

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
  }
});
