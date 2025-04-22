import { View, Text } from "react-native";
import React from "react";
import TransactionCard from "@/components/common/TransactionCard";

const LatestTransactions = () => {
  return (
    <View className="mt-8">
      <View className="flex-row justify-between items-center">
        <Text className="font-p_semi dark:text-secondary-text text-primary-text">
          Last 5 transactions
        </Text>
        <Text className="font-p_semi text-sm text-muted">See all {`>`}</Text>
      </View>
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
      <Text className="font-p_reg text-xs text-muted-light dark:text-muted text-center mt-8">
        Made with ❤️
      </Text>
    </View>
  );
};

export default LatestTransactions;
