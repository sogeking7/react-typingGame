import { MyContext } from "./components/Context/Context";

import {
  Box,
  useColorMode,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import NavBar from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";
function App() {
  const backgroundColor = useColorModeValue("white", "blackAlpha.800");
  const { colorMode, toggleColorMode } = useColorMode("light");

  return (
    <>
      <MyContext.Provider value={{ colorMode, toggleColorMode }}>
        <Box
          bgColor={backgroundColor}
          position="relative"
          overflow="hidden"
          h="110vh"
        >
          <NavBar />
          <Container maxW="container.xl" pt="2rem">
            <Main />
          </Container>
          <Footer />
        </Box>
      </MyContext.Provider>
    </>
  );
}

export default App;
