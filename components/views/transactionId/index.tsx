import React from "react";
import { ScrollView } from "react-native";
import TransactionIdHeader from "./TransactionIdHeader";
import TransactionDetailsCard from "./TransactionDetailsCard";
import Breakdown from "./Breakdown";

const TransactionID = () => {
  return (
    <ScrollView className="flex-1 bg-secondary-text dark:bg-primary-text pt-16 px-4">
      <TransactionIdHeader />
      <TransactionDetailsCard />
      <Breakdown />
    </ScrollView>
  );
};

export default TransactionID;
