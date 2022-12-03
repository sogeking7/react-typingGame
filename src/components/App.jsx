import NavBar from "./NavBar";
import Main from "./Main";
import { Box, useColorModeValue, useColorMode, Flex } from "@chakra-ui/react";
import { MyContext } from "../Context/Context";
import Footer from "./Footer";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode("light");
  const dmColor = useColorModeValue("second_black", "white");

  return (
    <MyContext.Provider value={{ colorMode, toggleColorMode }}>
      <Flex h="100vh" flexDirection="column" justifyContent="space-between">
        <NavBar />
        <Box px="2rem" color={dmColor}>
          <Main />
        </Box>
        <Footer />
      </Flex>
    </MyContext.Provider>
  );
}
