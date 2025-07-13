import { View, Text, TextInput } from "react-native";
import React from "react";
import { MUTED_COLOR } from "@/constants/palette";

type UIInputProps = {
  placeholder: string;
  value: string | number;
  onChangeText: (text: string) => void;
  label?: string;
  className?: string;
  wrapperClassName?: string;
};

export default function UIInput({ placeholder, value, onChangeText, label, className, wrapperClassName, ...rest }: UIInputProps) {
  return (
    <View className={`mb-2 ${wrapperClassName}`}>
      {label && <Text className="text-muted dark:text-muted-light font-p_reg text-sm mb-0.5">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value.toString()}
        onChangeText={onChangeText}
        className={`text-primary-text dark:text-secondary-text font-p_reg text-base w-full border border-muted rounded-md p-2 ${className}`}
        placeholderTextColor={MUTED_COLOR}
        {...rest}
      />
    </View>
  );
}
