import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { PRIMARY_DARK_COLOR, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "@/constants/palette";
import DefaultSplit from "./DefaultSplit";
import { User } from "@/components/common/types";
import CustomSplit from "./CustomSplit";

interface SplitModeProps {
  users: User[];
}

export default function SplitMode({ users }: SplitModeProps) {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [selectedTab, setSelectedTab] = useState("default");
  const [data, setData] = useState({
    user: users[0],
  });
  return (
    <View className="mt-4">
      <View
        className="flex-row items-center justify-between bg-secondary-text dark:bg-primary-dark p-0.5 rounded-lg"
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
        <TouchableOpacity
          onPress={() => setSelectedTab("default")}
          style={{
            backgroundColor: selectedTab === "default" ? (isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_DARK_COLOR) : isDarkMode ? PRIMARY_DARK_COLOR : SECONDARY_TEXT_COLOR,
            flex: 1,
            padding: 6,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: selectedTab === "default" ? SECONDARY_TEXT_COLOR : isDarkMode ? SECONDARY_TEXT_COLOR : PRIMARY_DARK_COLOR,
              fontFamily: selectedTab === "default" ? "Poppins-SemiBold" : "Poppins-Regular",
              textAlign: "center",
            }}
          >
            Default Split
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab("custom")}
          style={{
            backgroundColor: selectedTab === "custom" ? (isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_DARK_COLOR) : isDarkMode ? PRIMARY_DARK_COLOR : SECONDARY_TEXT_COLOR,
            flex: 1,
            padding: 6,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: selectedTab === "custom" ? SECONDARY_TEXT_COLOR : isDarkMode ? SECONDARY_TEXT_COLOR : PRIMARY_DARK_COLOR,
              fontFamily: selectedTab === "custom" ? "Poppins-SemiBold" : "Poppins-Regular",
              textAlign: "center",
            }}
          >
            Custom Split
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {selectedTab === "default" && <DefaultSplit users={users} data={data} setData={setData} />}
        {selectedTab === "custom" && <CustomSplit users={users} data={data} setData={setData} />}
      </View>
    </View>
  );
}
