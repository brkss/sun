import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Intro: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title_1}>Protect Your</Text>
        <Text style={styles.title_2}>Skin.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#FEE7D8",
  },
  titleContainer: {
    flex: 0.7,
    padding: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title_1: {
    fontSize: 50,
    fontWeight: "bold",
  },
  title_2: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "right",
    color: "#00D6C6",
  },
});
