import { PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "@/constants/palette";
import { useColorScheme } from "nativewind";

export const useThemedColor = (color: string) => {
  // Get the current color scheme
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  // Return the color based on the color scheme
  switch (color) {
    case "text":
      return isDarkMode ? SECONDARY_TEXT_COLOR : PRIMARY_TEXT_COLOR;
    case "text-reverse":
      return isDarkMode ? PRIMARY_TEXT_COLOR : SECONDARY_TEXT_COLOR;
    default:
      return color;
  }
};
