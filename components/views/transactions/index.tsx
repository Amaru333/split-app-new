import { View, Text, ScrollView } from "react-native";
import React from "react";
import TransactionCard from "@/components/common/TransactionCard";

const TransactionsView = () => {
  return (
    <ScrollView className="flex-1 bg-secondary-text dark:bg-primary-text pt-16 px-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-primary-text dark:text-secondary-text font-p_semi text-4xl">Transactions</Text>
      </View>
      {Array.from({ length: 15 }).map((_, index) => (
        <TransactionCard key={index} />
      ))}
    </ScrollView>
  );
};

export default TransactionsView;
