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
    basic: "1rem",
    mob1: "600px",
    mob2: "460px",
    mob3: "320px",

    md: "760px",
    fl: "1280px",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  fonts: {
    heading: "Roboto mono",
    body: `Roboto mono`,
  },
});
