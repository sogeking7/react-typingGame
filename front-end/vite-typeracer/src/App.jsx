import { MyContext } from "./components/Context/Context";

import {
  Box,
  useColorMode,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import NavBar from "./components/Header";
import Main from "./components/Main/Main";

function App() {
  const backgroundColor = useColorModeValue("white", "blackAlpha.800");
  const { colorMode, toggleColorMode } = useColorMode("light");

  return (
    <MyContext.Provider value={{ colorMode, toggleColorMode }}>
      <Box
        bgColor={backgroundColor}
        position="relative"
        overflow="hidden"
        h="100vh"
      >
        <NavBar />

        <Container maxW="container.xl" pt="2rem">
          <Main />
        </Container>
      </Box>
    </MyContext.Provider>
  );
}

export default App;
