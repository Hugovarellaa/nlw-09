import React from "react";
import { StyleSheet, Text } from "react-native";

export function TextTitle({ title }) {
  return <Text style={styles.title}> {title}</Text>;
}

export const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
