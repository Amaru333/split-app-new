import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import UIButton from "@/components/widgets/UIButton";

export default function CreateGroupButton() {
  return (
    <View>
      <UIButton>Create a new group</UIButton>
      <Text className="text-muted font-p_reg text-sm text-center mt-4">or select from existing ones below</Text>
    </View>
  );
}
