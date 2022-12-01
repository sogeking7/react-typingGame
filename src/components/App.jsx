import NavBar from "./NavBar";
import Main from "./Main";
import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";
import {
  Box,
  useColorMode,
  Container,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import RaceLine from "./RaceLine";
import { IconMoonStars, IconSunHigh } from "@tabler/icons";

const data = {
  text: `That was what I wanted, but I don't need it to be gone. I can love you and I can love life and bear the pain all at the same time. I think the pain might even make the rest better, the way a good setting can make a diamond look better.`,
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
  const [length, setLength] = useState(0);
  const [cur, setCur] = useState(0);
  const [car, setCar] = useState(0);
  const [wpm, setWpm] = useState(0);
  const { seconds, minutes, restart, pause } = useTimer(0);
  const { colorMode, toggleColorMode } = useColorMode("");
  useEffect(() => {
    if (input.length <= textList[index].length) {
      if (input[input.length - 1] === textList[index][input.length - 1]) {
        setRed(0);
        setPointer(input.length);
        setCur(length + input.length);
        if (input === textList[index]) {
          setLength((p) => p + input.length);
          setInput("");
          setCar((p) => p + 580 / (textList.length - 1));
          if (index + 1 === textList.length - 1) {
            setIndex((p) => p + 1);
            pause();
            return;
          }
          setIndex((p) => p + 1);
        }
      } else {
        setRed(1);
      }
    }
  }, [input, index, length, pause, red]);

  return (
    <Box bgColor={useColorModeValue("white", "black")} h="100vh" p="1rem">
      <NavBar />
      <IconButton
        variant="outline"
        icon={colorMode === "dark" ? <IconSunHigh /> : <IconMoonStars />}
        onClick={toggleColorMode}
      />
      <Container maxW="800px" p="0" mb="5rem" fontSize="1rem">
        <Box>
          <span>{minutes}</span>:<span>{seconds}</span>
        </Box>
      </Container>
      <RaceLine
        length={length}
        wpm={wpm}
        cur={cur}
        setWpm={setWpm}
        minutes={minutes}
        seconds={seconds}
        colorMode={colorMode}
        car={car}
      />
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
    </Box>
  );
}
