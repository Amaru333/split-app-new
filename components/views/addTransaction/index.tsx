import { View, Text, ScrollView } from "react-native";
import React from "react";
import CreateGroupButton from "./CreateGroupButton";
import SelectGroup from "./SelectGroup";

export default function AddTransaction() {
  return (
    <ScrollView className="flex-1 bg-secondary-text dark:bg-primary-text pt-16 px-4">
      <Text className="text-primary-text dark:text-secondary-text font-p_semi text-4xl mb-8">Add Transaction</Text>
      <CreateGroupButton />
      <SelectGroup />
    </ScrollView>
  );
}
