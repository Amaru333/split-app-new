import { View } from "react-native";
import React, { useState } from "react";
import UIInput from "@/components/widgets/UIInput";
import UIButton from "@/components/widgets/UIButton";
import UISelect from "@/components/widgets/UISelect";
import SplitMode from "./SplitMode";

export default function Form() {
  const [data, setData] = useState({
    description: "",
    amount: "",
    user: "",
  });
  const users = [
    {
      name: "John Doe",
      id: "11",
    },
    {
      name: "Jane Doe",
      id: "12",
    },
  ];
  return (
    <View>
      <UIInput placeholder="Enter your description" value={data.description} onChangeText={(text) => setData({ ...data, description: text })} label="Description" />
      <UIInput placeholder="Amount" value={data.amount} onChangeText={(text) => setData({ ...data, amount: text })} label="Amount" />
      <SplitMode users={users} />
      <UIButton onPress={() => {}}>Add Transaction</UIButton>
    </View>
  );
}
