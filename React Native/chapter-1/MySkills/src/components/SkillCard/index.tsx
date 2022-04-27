import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

interface SkillProps extends TouchableOpacityProps {
  skill: {
    id: string;
    name: string;
  };
}

export function SkillCard({ skill, ...rest }: SkillProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.skill}>{skill.name}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: "center",
  },
  skill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
