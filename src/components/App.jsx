import NavBar from "./NavBar";
import Main from "./Main";
import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import RaceLine from "./RaceLine/RaceLine";

const data = {
  text: `Sometimes you never feel meaner than the moment you stop being mean. It's like how turning on a light makes you realize how dark the room had gotten. And the way you usually act, the things you would have normally done, are like these ghosts that everyone can see but pretends not to.`,
};
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
  const { seconds, minutes, restart, pause } = useTimer(0);

  useEffect(() => {
    if (input.length <= textList[index].length) {
      if (input[input.length - 1] === textList[index][input.length - 1]) {
        setRed(0);
        setPointer(input.length);
        if (input === textList[index]) {
          setInput("");
          setIndex((p) => p + 1);
          if (index + 1 === textList.length-1) {
            setRace(180 - (60 * minutes + seconds));
            pause();
            return;
          }
        }
      } else {
        setRed(1);
      }
    }
  }, [input]);

  return (
    <Box>
      <NavBar />
      <RaceLine minutes={minutes} seconds={seconds} />
      <Container px="1rem" maxW="1440px">
        <Main
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
