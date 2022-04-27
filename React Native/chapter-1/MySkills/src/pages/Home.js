import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Button } from "../components/button";
import { Skill } from "../components/Skill";
import { SkillCard } from "../components/SkillCard";
import { TextTitle } from "../components/TextTitle";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TextTitle title="Welcome, Hugo" />

        <Skill setNewSkill={setNewSkill} />

        <Button handleAddNewSkill={handleAddNewSkill} />

        <TextTitle title="My Skills" />

        {/* 
          Para pouco itens esse metodo ainda vale

          <ScrollView showsVerticalScrollIndicator={false}>
            {mySkills.map((skill) => (
              <SkillCard skill={skill} key={skill} />
            ))}
          </ScrollView> */}

        <FlatList
          data={mySkills}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <SkillCard skill={item} />}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
});
