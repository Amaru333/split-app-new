import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const GroupCard = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/balances/roommates/add")}
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
        <Image source={require("@/assets/images/profile.png")} className="w-12 h-12 rounded-xl mr-3" resizeMode="cover" />
      </View>
      <View className="flex-1">
        <Text className="text-primary-text dark:text-secondary-text font-p_semi text-md mb-1">Roommates</Text>
        <View className="flex-row items-center">
          <Image source={require("@/assets/images/profile.png")} className="w-5 h-5 rounded-full border border-muted-light" resizeMode="cover" />
          <Image source={require("@/assets/images/profile.png")} className="w-5 h-5 rounded-full border border-muted-light -ml-2" resizeMode="cover" />
          <Image source={require("@/assets/images/profile.png")} className="w-5 h-5 rounded-full border border-muted-light -ml-2" resizeMode="cover" />
          <Text className="text-muted dark:text-muted-light text-xs ml-2 font-p_semi">+3 others</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GroupCard;
