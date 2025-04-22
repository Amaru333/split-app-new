/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-text": "#F1F1F1",
        muted: "#8A8A8A",
        primary: "#57579D",
        secondary: "#9D577A",
        "primary-text": "#000000",
        "muted-light": "#C6C6C6",
        success: "#009E0D",
        error: "#9E0003",
        "primary-dark": "#1A1A1A",
      },
      fontFamily: {
        p_med: ["Poppins_500Medium"],
        p_reg: ["Poppins_400Regular"],
        p_semi: ["Poppins_600SemiBold"],
      },
    },
  },
  plugins: [],
};
