import { View, Text } from "react-native";
import React from "react";
import UIAvatar from "@/components/widgets/UIAvatar";

const Breakdown = () => {
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
      <Text className="text-primary-text dark:text-secondary-text font-p_semi text-2xl mb-4">Breakdown</Text>
      <View className="flex-row justify-between items-center">
        <View>
          <View className="flex-row items-center gap-x-2">
            <UIAvatar source={require("@/assets/images/profile.png")} size="lg" />
            <View className="flex-row items-center">
              <Text className="text-primary-text dark:text-secondary-text font-p_semi text-lg">John Doe </Text>
              <Text className="text-primary-text dark:text-secondary-text font-p_reg text-lg">paid </Text>
              <Text className="text-primary-text dark:text-secondary-text font-p_semi text-lg">$155.40</Text>
            </View>
          </View>
          <View className="mt-2 ml-10 flex-col gap-y-1">
            <View className="flex-row items-center gap-x-2">
              <UIAvatar source={require("@/assets/images/profile.png")} size="sm" />
              <View className="flex-row items-center">
                <Text className="text-primary-text dark:text-secondary-text font-p_semi text-sm">John Doe </Text>
                <Text className="text-primary-text dark:text-secondary-text font-p_reg text-sm">owes </Text>
                <Text className="text-primary-text dark:text-secondary-text font-p_semi text-sm">$155.40</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-x-2">
              <UIAvatar source={require("@/assets/images/profile.png")} size="sm" />
              <View className="flex-row items-center">
                <Text className="text-primary-text dark:text-secondary-text font-p_semi text-sm">John Doe </Text>
                <Text className="text-primary-text dark:text-secondary-text font-p_reg text-sm">owes </Text>
                <Text className="text-primary-text dark:text-secondary-text font-p_semi text-sm">$155.40</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-x-2">
              <UIAvatar source={require("@/assets/images/profile.png")} size="sm" />
              <View className="flex-row items-center">
                <Text className="text-primary-text dark:text-secondary-text font-p_semi text-sm">John Doe </Text>
                <Text className="text-primary-text dark:text-secondary-text font-p_reg text-sm">owes </Text>
                <Text className="text-primary-text dark:text-secondary-text font-p_semi text-sm">$155.40</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Breakdown;
