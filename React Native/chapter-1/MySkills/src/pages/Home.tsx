import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Button } from "../components/button";
import { Skill } from "../components/Skill";
import { SkillCard } from "../components/SkillCard";
import { TextTitle } from "../components/TextTitle";

type SkillData = {
  id: string;
  name: string;
}[];

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((oldState) => [...oldState, data]);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TextTitle title="Welcome, Hugo" />

        <Skill setNewSkill={setNewSkill} />

        <Button onPress={handleAddNewSkill} />

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
          keyExtractor={(item) => item.id}
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
