import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import StatsCard from "./StatsCard";
import Header from "./Header";
import LatestTransactions from "./LatestTransactions";

const DashboardView = () => {
  return (
    <ScrollView className="px-4 pt-16 bg-secondary-text dark:bg-primary-text">
      <Header />
      <StatsCard />
      <LatestTransactions />
    </ScrollView>
  );
};

export default DashboardView;

const styles = StyleSheet.create({});
