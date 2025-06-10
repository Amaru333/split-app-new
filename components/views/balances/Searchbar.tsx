import { View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MUTED_COLOR } from "@/constants/palette";

const Searchbar = () => {
  return (
    <View className="border border-muted rounded-md p-2 mt-4 flex-row items-center justify-between pr-8">
      <TextInput placeholder="Search" className="text-primary-text dark:text-secondary-text font-p_reg text-sm w-full" placeholderTextColor={MUTED_COLOR} />
      <Ionicons name="search" size={24} color={MUTED_COLOR} />
    </View>
  );
};

export default Searchbar;
