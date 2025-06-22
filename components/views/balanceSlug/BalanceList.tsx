import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Separator = () => {
  return <View style={styles.separator} className="w-full border-b border-muted-light dark:border-muted my-2" />;
};

const BalanceIndividualItem = () => {
  return (
    <View className="flex-row items-center gap-x-3 ml-12 mt-1">
      <Image source={require("@/assets/images/profile.png")} className="w-4 h-4 rounded-full border border-muted" />
      <View className="flex-row items-center gap-x-1">
        <Text className="text-primary-text dark:text-secondary-text font-p_reg text-xs">Alex is owed</Text>
        <Text className="text-primary-text dark:text-secondary-text font-p_semi text-xs">$150.02</Text>
      </View>
    </View>
  );
};

const BalanceItem = () => {
  return (
    <View
      className="bg-secondary-text dark:bg-primary-dark rounded-lg mb-4 p-4"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View className="flex-row items-center gap-x-3">
        <Image source={require("@/assets/images/profile.png")} className="w-10 h-10 rounded-full border border-muted" />
        <View className="flex-row items-center gap-x-1">
          <Text className="text-primary-text dark:text-secondary-text font-p_reg text-lg">Alex is owed</Text>
          <Text className="text-success font-p_semi text-lg">$150.02</Text>
        </View>
      </View>
      <BalanceIndividualItem />
      <BalanceIndividualItem />
    </View>
  );
};

const BalanceList = () => {
  return (
    <View className="-mt-9">
      {Array.from({ length: 10 }).map((_, index) => (
        <React.Fragment key={index}>
          <BalanceItem />
        </React.Fragment>
      ))}
    </View>
  );
};

export default BalanceList;

const styles = StyleSheet.create({
  separator: {
    borderStyle: "dashed",
    borderRadius: 1,
    borderWidth: 1,
  },
});
