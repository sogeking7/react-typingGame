import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

import { MyContext } from "../Context/Context";

import { Box, useColorMode, Flex } from "@chakra-ui/react";

import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import RaceLine from "./RaceLine";

export default function App() {
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
      <Flex h="100vh" flexDirection="column" justifyContent="space-between">
        <NavBar />
        <Box>
          <RaceLine />
          <Main />
        </Box>
        <Footer />
      </Flex>
    </MyContext.Provider>
  );
}
