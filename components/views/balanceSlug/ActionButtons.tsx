import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from "@/constants/palette";
import { useRouter } from "expo-router";
import SettleDebtModal from "./SettleDebtModal";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}

const ActionButton = ({ icon, label, onPress }: ActionButtonProps) => {
  return (
    <TouchableOpacity className="items-center flex-col" onPress={onPress}>
      <View className="rounded-full border border-primary dark:border-primary-text p-3 bg-secondary-text">{icon}</View>
      <Text className="text-primary dark:text-secondary-text font-p_med text-[10px] mt-1">{label}</Text>
    </TouchableOpacity>
  );
};

const ActionButtons = () => {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const buttons = [
    {
      icon: <MaterialIcons name="published-with-changes" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Settle a debt",
      onPress: () => setShowModal(true),
    },
    {
      icon: <AntDesign name="plus" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Add transaction",
    },
    {
      icon: <Ionicons name="people-outline" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Members List",
      onPress: () => router.push("/balances/[slug]/members"),
    },
    {
      icon: <Ionicons name="receipt-outline" size={24} color={isDarkMode ? PRIMARY_TEXT_COLOR : PRIMARY_COLOR} />,
      label: "Transaction List",
      onPress: () => router.push("/transactions"),
    },
  ];

  return (
    <>
      <View className="flex-row justify-between items-center px-8 -mt-7">
        {buttons.map((button, index) => (
          <ActionButton key={index} {...button} />
        ))}
      </View>

      <SettleDebtModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ActionButtons;
