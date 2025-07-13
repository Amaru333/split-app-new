import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useThemedColor } from "@/components/functions/getThemedColor";
import { router } from "expo-router";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <TouchableOpacity className="flex-row items-center gap-2" onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={useThemedColor("text")} className="mb-2" />
        <Text className="text-primary-text dark:text-secondary-text font-p_semi text-4xl">Roommates</Text>
      </TouchableOpacity>
    </View>
  );
}
