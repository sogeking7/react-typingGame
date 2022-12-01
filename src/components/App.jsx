import NavBar from "./NavBar";
import Main from "./Main";
import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import RaceLine from "./RaceLine";

const data = {
  text: `If you have to choose among an infinite number of ways to put it together then the relation of the machine to you, and the relation of the machine and you to the rest of the world, has to be considered, because the selection from among many choices, the art of the work is just as dependent upon your own mind and spirit as it is upon the material of the machine.`,
};
var textList = data.text.split(" ");
for (var i = 0; i < textList.length - 1; i++) {
  textList[i] += " ";
}
textList.push(" ");

console.log(textList);
export default function App() {
  const dmColor = useColorModeValue("second_black", "white");

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
    <Box bgColor={useColorModeValue("white", "black")}>
      <NavBar />
      <Box
        h="100vh"
        p="1rem"
        color={dmColor}
      >
        <Container maxW="800px" p="0" mb="5rem" fontSize="1rem">
          <Box>
            <span>{minutes}</span>:<span>{seconds < 10 ? '0' : ''}{seconds}</span>
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
    </Box>
  );
}
