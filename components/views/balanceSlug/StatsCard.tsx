import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_TEXT_COLOR } from "@/constants/palette";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const PaymentDetails = () => {
  return (
    <View className="flex-row items-center gap-x-2 mt-1">
      <Image source={require("@/assets/images/profile.png")} className="w-4 h-4 rounded-full border border-muted" />
      <View className="flex-row items-center gap-x-1">
        <Text className="text-secondary-text font-p_reg text-xs">John Doe has to pay you</Text>
        <Text className="text-secondary-text font-p_semi text-xs">$13.58</Text>
      </View>
    </View>
  );
};

const StatsCard = ({ title }: { title: string | string[] }) => {
  return (
    <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradientCard}>
      <TouchableOpacity className="flex-row items-center gap-2" onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={SECONDARY_TEXT_COLOR} className="mb-2" />
        <Text className="text-secondary-text font-p_semi text-4xl">{title}</Text>
      </TouchableOpacity>
      <View className="mt-4">
        <View className="flex-row items-center gap-x-2">
          <Text className="text-secondary-text font-p_med text-2xl">You're owed</Text>
          <Text className="text-success font-p_semi text-2xl">$342.39</Text>
        </View>
        <View className="mt-1">
          <PaymentDetails />
          <PaymentDetails />
          <PaymentDetails />
        </View>
      </View>
    </LinearGradient>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  gradientCard: {
    padding: 16,
    paddingTop: 60,
    paddingBottom: 48,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
