import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from "@/constants/palette";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ActionButton = ({ icon, label }: ActionButtonProps) => {
  return (
    <TouchableOpacity className="items-center flex-col">
      <View className="rounded-full border border-primary dark:border-primary-text p-3 bg-secondary-text">{icon}</View>
      <Text className="text-primary dark:text-secondary-text font-p_med text-[10px] mt-1">{label}</Text>
    </TouchableOpacity>
  );
};

const ActionButtons = () => {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const buttons = [
    {
      icon: <MaterialIcons name="published-with-changes" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Settle a debt",
    },
    {
      icon: <AntDesign name="plus" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Add transaction",
    },
    {
      icon: <Ionicons name="people-outline" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Members List",
    },
    {
      icon: <Ionicons name="receipt-outline" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Transaction List",
    },
  ];

  return (
    <View className="flex-row justify-between items-center px-8 -mt-7">
      {buttons.map((button, index) => (
        <ActionButton key={index} {...button} />
      ))}
    </View>
  );
};

export default ActionButtons;
