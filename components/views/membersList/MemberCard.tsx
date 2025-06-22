import { Text, View } from "react-native";
import React from "react";
import { Pressable } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";

interface MemberCardProps {
  name: string;
  email: string;
  onDelete: () => void;
}

const MemberCard = ({ name, email, onDelete }: MemberCardProps) => {
  return (
    <View className="flex-row justify-between items-center p-4 mb-3 bg-white dark:bg-primary-dark rounded-lg">
      <View>
        <Text className="text-primary-text dark:text-secondary-text font-p_med">{name}</Text>
        <Text className="text-muted dark:text-muted font-p_reg text-sm">{email}</Text>
      </View>
      <Pressable onPress={onDelete} className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
        <Ionicons name="trash-outline" size={20} color="#FF3B30" />
      </Pressable>
    </View>
  );
};

export default MemberCard;
