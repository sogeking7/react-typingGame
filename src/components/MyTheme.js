import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-mono";

export const MyTheme = extendTheme({
  colors: {
    white: "#fff",
    black: "#121212",

    divider_color: "#BDBDBD",
    primary_color: "#3F51B5",
    dark_primary_color: "#303F9F",
    accent_color: "#00BCD4",
    text_icons: "#fff",
    light_primary_color: "#C5CAE9",
    primary_text: "#212121",
    secondary_text: "#757575",

    deep_purple: "#7C4DFF",
    amber: "#FFC107",
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  fonts: {
    heading: "Roboto mono",
    body: `Roboto mono`,
  },
});
