import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type UIButtonProps = {
  children?: React.ReactNode;
} & TouchableOpacityProps;

const UIButton = ({ children, ...rest }: UIButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <View className="dark:bg-secondary-text bg-primary-text p-4 rounded-lg">
        <Text className="text-secondary-text dark:text-primary-text text-center font-p_med">
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UIButton;
