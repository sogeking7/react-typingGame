import { extendTheme } from "@chakra-ui/react";


export const MyTheme = extendTheme({
  colors: {
    white: "#fff",
    black: "#121212",
    lime: '#84cc16',
    divider_color: "#BDBDBD",
    primary_color: "#3f51b5",
    dark_primary_color: "#3f51b5",
    accent_color: "#00bcd4",
    text_icons: "#fff",
    light_primary_color: "#D1C4E9",
    primary_text: "#212121",
    secondary_text: "#757575",
    text_wrapper_light: "#f6fbff",
    text_wrapper_dark: "#3b3b3b",

    deep_purple: "#7e57c2",
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
    heading: '',
    body: '',
  },
});
