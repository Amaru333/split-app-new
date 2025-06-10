import { ScrollView, Text } from "react-native";
import React from "react";
import Searchbar from "./Searchbar";
import BalanceCard from "./BalanceCard";

const BalancesView = () => {
  return (
    <ScrollView className="px-4 pt-16 bg-secondary-text dark:bg-primary-text">
      <Text className="text-primary-text dark:text-secondary-text font-p_semi text-4xl">Balances</Text>
      <Searchbar />
      <BalanceCard />
      <BalanceCard />
      <BalanceCard />
      <BalanceCard />
      <BalanceCard />
    </ScrollView>
  );
};

export default BalancesView;
