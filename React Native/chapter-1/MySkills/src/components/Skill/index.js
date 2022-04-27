import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

export function Skill({ setNewSkill }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="New Skills"
      placeholderTextColor="#666"
      onChangeText={setNewSkill}
    />
  );
}

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
