import { View, Text, StyleSheet, SectionList, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { Spacing } from "@/consts/spacing";
import { Colors } from "@/consts/colors";
import HeaderWithTitle from "@/components/headers/Header";
import DATA, { organizeCarsIntoSections } from "@/services/data";

export default function index() {
  return (
    <View>
      <HeaderWithTitle title="TopCar" actionSheetOptions={['Cancel', 'About', 'Logout']} HideThisPage={false} />

      <SafeAreaView style={styles.container}>
        <SectionList
          sections={organizeCarsIntoSections(DATA)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.model}>{item.model}</Text>
              <Text style={styles.year}>{item.year}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </ View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    padding: 30,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },
  model: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  year: {
    fontSize: 12,
    textAlign: "center",
    color: "gray",
  },
});
