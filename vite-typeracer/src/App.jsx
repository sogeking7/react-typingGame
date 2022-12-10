import { useState } from "react";
import { MyContext } from "./components/Context/Context";
import Test from "./components/Test";
import {
  Box,
  useColorMode,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import NavBar from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

function App() {
  const backgroundColor = useColorModeValue("white", "black");
  const { colorMode, toggleColorMode } = useColorMode("light");
  
  return (
    <MyContext.Provider value={{colorMode, toggleColorMode}}>
      <Box bgColor={backgroundColor} position="relative" overflow="hidden">
        <NavBar />
        <Container maxW="container.xl" h="130vh" pt="2rem">
          <Main />
          <Test>
            This is children props
          </Test>
          <Box>text</Box>
        </Container>
        <Footer />
      </Box>
    </MyContext.Provider>
  );
}

export default App;
