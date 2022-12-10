import { useState, useEffect } from "react";

import {
  Box,
  Flex,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import RaceLine from "./RaceLine";
import Results from "./Results";

import { data } from '../../data/data'
import Btn from "../Buttons/Button"
const text = data.text,
      textArr = text.split(" ");

function Main() {
  const wrapperBgColor = useColorModeValue("white", "primary_text"),
        backgroundColor = useColorModeValue("text_wrapper_light", "text_wrapper_dark"),
        inputBgColor = useColorModeValue("white", "primary_text"),
        textColor = useColorModeValue("black", "white"),
        placeholderColor = useColorModeValue("blackAlpha.500", "white");

  const [wpm, setWpm] = useState(0),
        [start, setStart] = useState(false), // not started = 0, started = 1, finished = -1
        [index, setIndex] = useState(0),
        [input, setInput] = useState(""),
        [length, setLength] = useState(0),
        [pointer, setPointer] = useState(0),
        [redList, setRedList] = useState([]),
        [greenList, setGreenList] = useState([]),
        [timeElapsed, setTimeElapsed] = useState(180),
        [timerInterval, setTimerInterval] = useState(null);

  const startTimer = () => setTimerInterval(setInterval(() => setTimeElapsed(p => p - 1), 1000)),
        stopTimer  = () => clearInterval(timerInterval);

  useEffect(()=>{
    const t = 180 - timeElapsed
    if (t) setWpm(Math.round((length + input.length) * 12 / t));
  }, [timeElapsed])

  const curString = textArr[index] + " ",
        curIndex = length + input.length - 1,
        k = input.length > curString.length ? input.length - curString.length : 0,
        car = (index) * 630 / (textArr.length - 1),
        accuracy = parseFloat(100 - (redList.length * 100) / (text.length-1)).toFixed(1),
        s1 = (180 - timeElapsed) % 60,
        s2 = timeElapsed % 60,
        timer = <span>{Math.floor(timeElapsed / 60)}:{s2 < 10 ? `0${s2}`:`${s2}`}</span>,
        stopwatch = <span>{Math.floor((180 - timeElapsed) / 60)}:{s1 < 10 ? `0${s1}`:`${s1}`}</span>


  if (pointer + 1 === input.length) {
    const a = text[curIndex],
          b = input.slice(-1);
    if (a === b && greenList.indexOf(curIndex) + redList.indexOf(curIndex) === -2)
      setGreenList([...greenList, curIndex]);
    else if (greenList.indexOf(curIndex) + redList.indexOf(curIndex) === -2)
      setRedList([...redList, curIndex]);
  }

  if (
    input.slice(-1) === curString[pointer] &&
    input.length === pointer + 1
  ) {
    setPointer((prev) => prev + 1);
    if (index === textArr.length - 2 && pointer === curString.length - 2) {
      setInput("");
      setLength((prev) => prev + curString.length);
      console.log(car)
      setIndex((prev) => prev + 1);
      setStart(-1);
      return stopTimer();
    }
    if (input.slice(-1) === " ") {
      setInput("");
      setPointer(0);
      console.log(car)
      setLength((prev) => prev + curString.length);
      setIndex((prev) => prev + 1);
    }
  } 
  else if (input.length < pointer)
    setPointer(input.length);

  return (
    <Box
      borderWidth="thin"
      maxW="900px"
      margin="0 auto"
      px="1rem"
      py="2rem"
      bgColor={wrapperBgColor}
      borderRadius="md"
    >
      <RaceLine timer={timer} wpm={wpm} car={car} start={start}/>
      { start !== -1 &&
        <Box
          borderWidth="thin"
          p="1rem"
          mb='1rem'
          borderRadius="xl"
          bgColor={backgroundColor}
          fontFamily="monospace"
        >
          <Box mb="2rem" lineHeight="1.7rem" fontSize="20px">
            <Text display='inline' color='lime'>{text.slice(0, length)}</Text>
            <Text display='inline' textDecoration='underline' color='lime'>{curString.slice(0, pointer)}</Text>
            <Text display='inline' color='black' bgColor='red.300' textDecoration='underline'>{curString.slice(pointer,input.length >= curString.length ? input.length-k-1 : input.length-k
              )}</Text>
            <Text display='inline' color='black' bgColor='red.300'>{curString.slice(input.length >= curString.length ? input.length-k-1: input.length-k,input.length >= curString.length? input.length-k : input.length-k
              )}</Text>
            <Text display="inline" textDecoration="underline" color={textColor}>{curString.slice(input.length, curString.length - 1)}</Text>
            <Text display='inline'>{curString.slice(curString.length - 1, curString.length)}</Text>
            <Text display='inline' color='black' bgColor='red.300'>{text.slice(length+curString.length, length+curString.length+k)}</Text>
            <Text display="inline" color={textColor}>{text.slice(length + curString.length + k, text.length)}</Text>
          </Box> 
          <Input
            variant="outline"
            autoFocus="autoFocus"
            mb='1rem'
            fontSize="20px"
            value={input}
            px=".2rem"
            borderRadius="none"
            bgColor={input.length > pointer ? "red.300" : inputBgColor}
            color={input.length > pointer ? "black" : placeholderColor}
            _placeholder={{ color: placeholderColor }}
            placeholder="Type the above text"
            onChange={(i) => {
              if (!start) {
                setStart(true);
                startTimer();
              }
              if (start === -1) return;
              setInput(i.target.value);
            }}
          />
        </Box>
      }
      <Flex mb='1rem' justifyContent='flex-end'>
        <Btn children={"New race"} model={"accent"}/>
      </Flex>
      {start === -1 && <Results stopwatch={stopwatch} wpm={wpm} accuracy={accuracy}/>}
    </Box>
  );
}

export default Main;
