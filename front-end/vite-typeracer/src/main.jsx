import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { MyTheme } from "../src/components/chakra-settings/MyTheme";

import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider resetCSS theme={MyTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
