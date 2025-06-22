import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/constants/palette";
import UIButton from "@/components/widgets/UIButton";

const StatsCard = () => {
  return (
    <View>
      <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradientCard}>
        <Text className="text-secondary-text font-p_med text-2xl">Welcome Back,</Text>
        <View className="flex-row justify-between mt-6">
          <View className="items-center gap-y-1">
            <Image source={require("@/assets/images/you-owe.png")} />
            <Text className="text-secondary-text font-p_semi">You owe</Text>
            <Text className="text-muted-light font-p_reg text-xs">You have to pay others</Text>
            <Text className="text-secondary-text font-p_semi">$342.52</Text>
          </View>
          <View className="items-center gap-y-1">
            <Image source={require("@/assets/images/youre-owed.png")} />
            <Text className="text-secondary-text font-p_semi">You're owed</Text>
            <Text className="text-muted-light font-p_reg text-xs">Others have to pay you</Text>
            <Text className="text-secondary-text font-p_semi">$342.52</Text>
          </View>
        </View>
      </LinearGradient>
      <UIButton className="mt-4">Add an Expense {`>`}</UIButton>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  gradientCard: {
    padding: 16,
    borderRadius: 16,
  },
});
