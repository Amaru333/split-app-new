import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import Form from "./Form";

export default function AddIndividualTransactions() {
  return (
    <ScrollView className="flex-1 bg-secondary-text dark:bg-primary-text pt-16 px-4">
      <Header />
      <Form />
    </ScrollView>
  );
}
