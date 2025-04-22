import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Moon from "@/assets/icons/moon.svg";
import Sun from "@/assets/icons/sun.svg";
import BellBlack from "@/assets/icons/bell-black.svg";
import BellWhite from "@/assets/icons/bell-white.svg";
import { useColorScheme } from "nativewind";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const changeTheme = () => {
    // Logic to change the theme
    toggleColorScheme();
  };
  return (
    <View className="flex-row justify-between items-center pb-4">
      <View>
        <Text className="text-primary-text dark:text-secondary-text font-p_bold text-2xl">
          Logo
        </Text>
      </View>
      <View className="flex-row justify-between items-center gap-x-8">
        <TouchableOpacity onPress={changeTheme}>
          {!isDarkMode ? <Moon width={24} height={24} /> : <Sun width={24} height={24} />}
        </TouchableOpacity>
        <TouchableOpacity>
          {!isDarkMode ? (
            <BellBlack width={24} height={24} />
          ) : (
            <BellWhite width={24} height={24} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
