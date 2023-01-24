import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchInput from "../Input/SearchInput";
import HomeNav from "../Nav/HomeNav";
import { COLORS, PEOPLE, RECENT_SENT } from "../../Context/settings";
import PeopleCard from "../Card/PeopleCard";
import ListCard from "../Card/ListCard";

const ContactView = () => {
  return (
    <View style={styles.outline}>
      <HomeNav username={"Raoul Bock"} />
      <SearchInput placeholder={"Search through your contact list"} />
      <View style={{ marginVertical: 15 }}>
        <View style={styles.grid}>
          <Text style={styles.text}>Recent</Text>
          {/* <Text style={[styles.text, { color: COLORS.VIEW_MORE_COLOR }]}>
            View all
          </Text> */}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {RECENT_SENT.map((e, i) => {
            return <PeopleCard key={i} item={e} />;
          })}
        </ScrollView>
      </View>
      <View style={{}}>
        <View style={styles.grid}>
          <Text style={styles.text}>Your Contacts</Text>
          {/* <Text style={[styles.text, { color: COLORS.VIEW_MORE_COLOR }]}>
            View all
          </Text> */}
        </View>
        <ScrollView>
          {RECENT_SENT.map((e, i) => {
            return <ListCard key={i} item={e} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ContactView;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  text: {
    color: COLORS.SUB_TEXT_COLOR,
    fontSize: COLORS.SUB_FONT_SIZE,
    fontWeight: "600"
  }
});
