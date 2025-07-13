import { Text, View } from "react-native";
import { User } from "@/components/common/types";
import UIInput from "@/components/widgets/UIInput";
import PaidBy from "./PaidBy";

interface CustomSplitProps {
  users: User[];
  data: {
    user: User;
  };
  setData: (data: { user: User }) => void;
}

export default function CustomSplit({ users, data, setData }: CustomSplitProps) {
  return (
    <View className="mt-4">
      <PaidBy data={data} setData={setData} users={users} />
      <View className="flex-row items-center justify-between mb-2">
        <Text className="font-p_semi text-primary-text dark:text-secondary-text text-sm">Members</Text>
        <Text className="font-p_semi text-primary-text dark:text-secondary-text text-sm">Split</Text>
      </View>
      <View className="border-b border-muted-light dark:border-muted mb-2 pb-2 gap-2">
        {users.map((user) => (
          <View className="flex-row items-center justify-between" key={user.id}>
            <Text className="font-p_reg text-primary-text dark:text-secondary-text">{user.name}</Text>
            <View className="flex-row items-center gap-1">
              <Text className="font-p_semi text-primary-text dark:text-secondary-text">$</Text>
              <UIInput placeholder="0.00" value={""} onChangeText={() => {}} className="py-1 min-w-16 text-right" wrapperClassName="mb-0" />
            </View>
          </View>
        ))}
      </View>
      <View className="flex-row items-center justify-between mb-4">
        <Text className="font-p_semi text-primary-text dark:text-secondary-text">Total</Text>
        <View className="flex-row items-center">
          <Text className="font-p_semi text-primary-text dark:text-secondary-text">$50.00</Text>
          <Text className="font-p_reg text-primary-text dark:text-secondary-text text-sm"> out of </Text>
          <Text className="font-p_semi text-primary-text dark:text-secondary-text">$100.00</Text>
        </View>
      </View>
    </View>
  );
}
