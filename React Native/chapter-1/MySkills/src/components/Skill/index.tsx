import React from "react";
import { TextInput, StyleSheet, Platform, TextInputProps } from "react-native";

interface SkillProps extends TextInputProps {
  setNewSkill: (text: string) => void;
}

export function Skill({ setNewSkill }: SkillProps) {
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
