import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

import { MyContext } from "../Context/Context";

import {
  Box,
  useColorMode,
  Container,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import NavBar from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import RaceLine from "./RaceLine";

function App() {
  const backgroundColor = useColorModeValue("white", "black");
  const wrapperBgColor = useColorModeValue("white", "primary_text");

  const { seconds, minutes, pause, restart } = useTimer(0);

  const [wpm, setWpm] = useState(0);
  const [start, setStart] = useState(false); // not started = 0, started = 1, finished = -1
  const [car, setCar] = useState(0);
  const [cur, setCur] = useState(0);

  const { colorMode, toggleColorMode } = useColorMode("light");

  useEffect(() => {
    const s = 180 - (60 * minutes + seconds);
    if (s) setWpm(Math.round(cur / 5 / (s / 60)));
  }, [seconds]);

  return (
    <MyContext.Provider
      value={{
        cur,
        setCur,
        car,
        setCar,
        colorMode,
        toggleColorMode,
        minutes,
        seconds,
        start,
        wpm,
        setWpm,
        pause,
        setStart,
        restart,
      }}
    >
      <Box h="100vh" bgColor={backgroundColor} position="relative">
        <NavBar />
        <Container maxW="container.xl" flexDirection="column" py="4rem">
          <Box
            borderWidth="thin"
            maxW="900px"
            margin="0 auto"
            px="1rem"
            py="2rem"
            bgColor={wrapperBgColor}
            borderRadius="md"
          >
            <RaceLine />
            <Main />
          </Box>
        </Container>
        <Footer />
      </Box>
    </MyContext.Provider>
  );
}

export default App;
