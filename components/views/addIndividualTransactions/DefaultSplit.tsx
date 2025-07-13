import { Text, View } from "react-native";
import React, { useState } from "react";
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon, CheckboxGroup, CheckIcon } from "@gluestack-ui/themed";
import { useColorScheme } from "nativewind";
import { MUTED_COLOR, MUTED_LIGHT_COLOR, PRIMARY_DARK_COLOR, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "@/constants/palette";
import { User } from "@/components/common/types";
import PaidBy from "./PaidBy";

interface DefaultSplitProps {
  users: User[];
  data: {
    user: User;
  };
  setData: (data: { user: User }) => void;
}

export default function DefaultSplit({ users, data, setData }: DefaultSplitProps) {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [values, setValues] = useState([]);
  return (
    <View className="mt-4">
      <PaidBy data={data} setData={setData} users={users} />
      <View className="flex-row items-center justify-between">
        <Text className="font-p_semi text-primary-text dark:text-secondary-text text-sm">Members</Text>
        <Text className="font-p_semi text-primary-text dark:text-secondary-text text-sm">Split</Text>
      </View>
      <View className="border-b border-muted-light dark:border-muted mb-2 pb-2">
        <CheckboxGroup value={values} onChange={(value) => setValues(value)} className="gap-2 my-2">
          {users.map((user) => (
            <View className="flex-row items-center justify-between" key={user.id}>
              <Checkbox value={user.id} key={user.id}>
                <CheckboxIndicator bgColor={isDarkMode ? PRIMARY_DARK_COLOR : SECONDARY_TEXT_COLOR} borderColor={isDarkMode ? MUTED_COLOR : MUTED_LIGHT_COLOR} borderWidth={1}>
                  <CheckboxIcon as={CheckIcon} color={isDarkMode ? SECONDARY_TEXT_COLOR : PRIMARY_TEXT_COLOR} />
                </CheckboxIndicator>
                <CheckboxLabel className="font-p_semi ml-2" fontSize={14} style={{ color: isDarkMode ? SECONDARY_TEXT_COLOR : PRIMARY_TEXT_COLOR }}>
                  {user.name}
                </CheckboxLabel>
              </Checkbox>
              <Text className="font-p_semi text-primary-text dark:text-secondary-text">$50.00</Text>
            </View>
          ))}
        </CheckboxGroup>
      </View>
      <View className="flex-row items-center justify-between mb-4">
        <Text className="font-p_semi text-primary-text dark:text-secondary-text">Total</Text>
        <Text className="font-p_semi text-primary-text dark:text-secondary-text">$50.00</Text>
      </View>
    </View>
  );
}
