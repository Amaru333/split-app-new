import { View, Text } from "react-native";
import React from "react";
import Music from "@/assets/icons/music.svg";
import { useColorScheme } from "nativewind";
import Feather from "@expo/vector-icons/Feather";

const TransactionDetailsCard = () => {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  return (
    <View
      className="bg-secondary-text dark:bg-primary-dark rounded-lg mt-4 p-6"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-x-4">
          <View>
            <Music width={32} height={32} stroke={isDarkMode ? "white" : "black"} />
          </View>
          <View>
            <Text className="text-primary-text dark:text-secondary-text font-p_semi text-xl">Apple Music Sub</Text>
            <Text className="text-primary-text dark:text-secondary-text font-p_reg text-xs">on August 1, 2025 at 12:00 PM</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-x-4">
          <Feather name="edit" size={20} color={isDarkMode ? "white" : "black"} />
          <Feather name="trash-2" size={20} color="red" />
        </View>
      </View>
      <Text className="text-primary-text dark:text-secondary-text font-p_semi text-4xl mt-12 mb-4 text-center">Total: $155.40</Text>
    </View>
  );
};

export default TransactionDetailsCard;
