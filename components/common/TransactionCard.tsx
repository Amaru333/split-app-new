import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Music from "@/assets/icons/music.svg";
import UIAvatar from "../widgets/UIAvatar";
import { useColorScheme } from "nativewind";

const TransactionCard = () => {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-row justify-between items-center bg-secondary-text dark:bg-primary-dark p-3 rounded-lg mt-4"
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
      <View>
        <Music width={24} height={24} stroke={isDarkMode ? "white" : "black"} />
      </View>
      <View className="flex-1 mx-4">
        <Text className="font-p_semi text-primary-text dark:text-secondary-text">
          Apple Music Sub
        </Text>
        <View className="flex-row items-center gap-x-2 mt-1">
          <UIAvatar source={require("@/assets/images/profile.png")} />
          <Text className="font-p_semi text-xs text-muted dark:text-muted-light">
            John Doe • 2 hrs ago
          </Text>
        </View>
      </View>
      <View>
        <Text className="text-success font-p_semi">$32.54</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
