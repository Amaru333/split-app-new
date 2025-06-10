import { View, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import StatsCard from "./StatsCard";
import ActionButtons from "./ActionButtons";
import BalanceList from "./BalanceList";

const BalanceSlug = () => {
  const { slug } = useLocalSearchParams();
  return (
    <ScrollView className="bg-secondary-text dark:bg-primary-text">
      <StatsCard title={slug} />
      <ActionButtons />
      <View className="px-4 pt-16">
        <BalanceList />
      </View>
    </ScrollView>
  );
};

export default BalanceSlug;
