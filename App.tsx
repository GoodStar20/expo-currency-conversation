import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import CurrencyList from "./src/screens/CurrencyList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CurrencyList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
