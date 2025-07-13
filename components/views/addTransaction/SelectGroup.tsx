import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MUTED_COLOR } from "@/constants/palette";
import GroupCard from "./GroupCard";

export default function SelectGroup() {
  return (
    <View>
      <View className="border border-muted rounded-md p-2 mt-4 flex-row items-center justify-between pr-8">
        <TextInput placeholder="Search groups or people" className="text-primary-text dark:text-secondary-text font-p_reg text-sm w-full" placeholderTextColor={MUTED_COLOR} />
        <Ionicons name="search" size={24} color={MUTED_COLOR} />
      </View>
      <View className="mt-4">
        <Text className="text-primary-text dark:text-secondary-text font-p_semi text-lg">Groups</Text>
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <Text className="text-primary-text dark:text-secondary-text font-p_semi text-lg mt-4">People</Text>
        <GroupCard />
        <GroupCard />
      </View>
    </View>
  );
}
