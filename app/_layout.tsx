import { Stack } from "expo-router";
import "../global.css";
import { colorScheme } from "nativewind";
import { GluestackProvider } from "../components/providers/GluestackProvider";

import { Poppins_600SemiBold, Poppins_400Regular, Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  colorScheme.set("light");
  const [loaded, error] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GluestackProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </GluestackProvider>
  );
}
