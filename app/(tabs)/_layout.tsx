import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, SECONDARY_COLOR } from "@/constants/palette";
import { useColorScheme, View, Text } from "react-native";

function TabBarLabel({ label, color, focused }: { label: string; color: string; focused: boolean }) {
  return (
    <View className="items-center">
      <Text style={{ color, fontFamily: "Poppins_500Medium", fontSize: 10 }}>{label}</Text>
      {focused && <View className="h-0.5 w-10 mt-1" style={{ backgroundColor: color }} />}
    </View>
  );
}

function AddTransactionIcon() {
  return (
    <View className="w-14 h-14 mt-4 rounded-full items-center justify-center" style={{ backgroundColor: SECONDARY_COLOR }}>
      <AntDesign name="plus" size={24} color={SECONDARY_TEXT_COLOR} />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const contentColor = isDark ? SECONDARY_TEXT_COLOR : PRIMARY_TEXT_COLOR;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: contentColor,
        tabBarInactiveTintColor: contentColor,
        tabBarStyle: {
          backgroundColor: isDark ? PRIMARY_TEXT_COLOR : SECONDARY_TEXT_COLOR,
          height: 80,
          paddingBottom: 20,
          paddingTop: 2,
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
          tabBarLabel: ({ color, focused }) => <TabBarLabel label="Home" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="balances"
        options={{
          title: "Balances",
          tabBarIcon: ({ color, size }) => <Ionicons name="wallet-outline" size={size} color={color} />,
          tabBarLabel: ({ color, focused }) => <TabBarLabel label="Balances" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="add-transaction/index"
        options={{
          title: "",
          tabBarIcon: () => <AddTransactionIcon />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="transactions/index"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color, size }) => <MaterialIcons name="history" size={size} color={color} />,
          tabBarLabel: ({ color, focused }) => <TabBarLabel label="Transactions" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name="user" size={size} color={color} />,
          tabBarLabel: ({ color, focused }) => <TabBarLabel label="Profile" color={color} focused={focused} />,
        }}
      />
    </Tabs>
  );
}
