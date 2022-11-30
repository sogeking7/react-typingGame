import NavBar from "./NavBar";
import Main from "./Main";
import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  useColorMode,
  Container,
  IconButton,
  useColorModeValue,
  color,
} from "@chakra-ui/react";
import RaceLine from "./RaceLine/RaceLine";
import { IconMoonStars, IconSunHigh } from "@tabler/icons";

const data = {
  text: `You are what you are and you are where you are because of what has gone into your mind. You change what you are and you change where you are by changing what goes into your mind.`,
  length: 0,
};
data.length = data.text.length;
var textList = data.text.split(" ");
for (var i = 0; i < textList.length - 1; i++) {
  textList[i] += " ";
}
textList.push(" ");

console.log(textList);
export default function App() {
  const [input, setInput] = useState("");
  const [pointer, setPointer] = useState(0);
  const [index, setIndex] = useState(0);
  const [race, setRace] = useState(0);
  const [red, setRed] = useState(0);
  const [car, setCar] = useState(0);
  const { seconds, minutes, restart, pause } = useTimer(0);
  const { colorMode, toggleColorMode } = useColorMode("");
  useEffect(() => {
    if (input.length <= textList[index].length) {
      if (input[input.length - 1] === textList[index][input.length - 1]) {
        setRed(0);
        setPointer(input.length);
        if (input === textList[index]) {
          setInput("");
          setCar(p=>p+(590.4 / (textList.length-1)))
          setIndex((p) => p + 1);
          if (index + 1 === textList.length - 1) {
            const s = 180 - (60 * minutes + seconds);
            const wpm = data.length / 5 / (s / 60);
            pause();
            return console.log(wpm);
          }
        }
      } else {
        setRed(1);
      }
    }
  }, [input]);

  return (
    <Box bgColor={useColorModeValue("white", "black")} h="100vh">
      <NavBar />
      <IconButton
        variant="outline"
        icon={colorMode === "dark" ? <IconSunHigh /> : <IconMoonStars />}
        onClick={toggleColorMode}
      />
      <RaceLine
        minutes={minutes}
        seconds={seconds}
        colorMode={colorMode}
        index={index}
        car={car}
        setCar={setCar}
      />
      <Container px="1rem" maxW="1440px">
        <Main
          colorMode={colorMode}
          red={red}
          input={input}
          setInput={setInput}
          text={textList}
          pointer={pointer}
          index={index}
          restart={restart}
          race={race}
          setRace={setRace}
        />
      </Container>
    </Box>
  );
}
