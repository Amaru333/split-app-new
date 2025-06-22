import { createConfig } from "@gluestack-ui/themed";
import { config as defaultConfig } from "@gluestack-ui/config";

const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      // Primary colors
      primary50: "#57579D",
      primary100: "#57579D",
      primary200: "#57579D",
      primary300: "#57579D",
      primary400: "#57579D",
      primary500: "#57579D",
      primary600: "#57579D",
      primary700: "#57579D",
      primary800: "#57579D",
      primary900: "#57579D",

      // Secondary colors
      secondary50: "#9D577A",
      secondary100: "#9D577A",
      secondary200: "#9D577A",
      secondary300: "#9D577A",
      secondary400: "#9D577A",
      secondary500: "#9D577A",
      secondary600: "#9D577A",
      secondary700: "#9D577A",
      secondary800: "#9D577A",
      secondary900: "#9D577A",

      // Text colors
      textLight50: "#F1F1F1",
      textLight100: "#F1F1F1",
      textDark50: "#000000",
      textDark100: "#000000",

      // Muted colors
      muted50: "#8A8A8A",
      muted100: "#8A8A8A",
      mutedLight50: "#C6C6C6",
      mutedLight100: "#C6C6C6",

      // Status colors
      success50: "#009E0D",
      success100: "#009E0D",
      error50: "#9E0003",
      error100: "#9E0003",

      // Dark mode
      dark50: "#1A1A1A",
      dark100: "#1A1A1A",
    },
    fonts: {
      ...defaultConfig.tokens.fonts,
      heading: "Poppins_600SemiBold",
      body: "Poppins_400Regular",
      medium: "Poppins_500Medium",
    },
  },
  components: {
    ...defaultConfig.components,
    Button: {
      ...defaultConfig.components.Button,
      theme: {
        ...defaultConfig.components.Button?.theme,
        variants: {
          ...defaultConfig.components.Button?.theme?.variants,
          solid: {
            bg: "$primary500",
            color: "$textLight50",
          },
          outline: {
            borderColor: "$primary500",
            color: "$primary500",
          },
        },
      },
    },
    Text: {
      ...defaultConfig.components.Text,
      theme: {
        ...defaultConfig.components.Text?.theme,
        variants: {
          ...defaultConfig.components.Text?.theme?.variants,
          heading: {
            fontFamily: "$heading",
          },
          body: {
            fontFamily: "$body",
          },
          medium: {
            fontFamily: "$medium",
          },
        },
      },
    },
  },
});

export default config;
