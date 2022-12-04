
import { useState, useContext } from "react";
import { MyContext } from "../Context/Context";

import {
  Box,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { data } from "../data/data";

const text = data.text;
const textArr = text.split(" ");

function Main() {
  const backgroundColor = useColorModeValue("#f6fbff", "#3b3b3b");
  const inputBgColor = useColorModeValue("#fff", "#212121");
  const textColor = useColorModeValue("#000", "#fff");
  const placeholderColor = useColorModeValue('blackAlpha.500','white');
  
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [pointer, setPointer] = useState(0);
  
  const {start, setStart, restart, pause, cur, setCur, seconds, minutes, setWpm, setCar} = useContext(MyContext);
  
  const curString = textArr[index] + " "
  
  if (input && input.slice(-1) === curString[pointer] && input.length === pointer + 1) {
    setPointer(prev => prev + 1)
    setCur(length + input.length)
    if (index === textArr.length - 2 && pointer === curString.length-2) {
      setInput('')
      setLength(prev => prev + curString.length)
      setCar(prev=>prev + (310 / (textArr.length-1)))
      setIndex(prev=>prev + 1)
      setStart(-1)
      const s = 180 - (60 * minutes + seconds);
      if (s) setWpm(Math.round(cur / 5 / (s / 60)));
      return pause()
    }
    if (input.slice(-1) === ' ') {
      setInput('')
      setPointer(0)
      setCar(prev=>prev + (310 / (textArr.length-1)))
      setLength(prev => prev + curString.length)
      setIndex(prev=>prev + 1)
    }
  } else if (input.length < pointer) { 
    setPointer(input.length)
  }

  const k = (input.length > curString.length) ? input.length - curString.length : 0;

  return (
   <Box maxW="container.lg" p='1rem' margin="0 auto" borderWidth='thin' borderRadius='md' bgColor={backgroundColor} fontFamily='monospace'>
      <Box
        mb="2rem"
        lineHeight="1.7rem"
        fontSize="20px"
        py='.5rem'
      >
        <span className="text-lime-500">{text.slice(0, length)}</span>
        <span className="text-lime-500 underline decor" >{curString.slice(0, pointer)}</span>
        <span className="text-black bg-red-400 underline">{curString.slice(pointer, (input.length>=curString.length ? input.length-k-1 : input.length-k))}</span>
        <span className="text-black bg-red-400">{curString.slice((input.length>=curString.length ? input.length-k-1 : input.length-k), (input.length>=curString.length ? input.length-k : input.length-k))}</span>
        <Text display="inline" textDecoration="underline" color={textColor} >{curString.slice(input.length, curString.length - 1)}</Text>
        <span>{curString.slice(curString.length-1, curString.length)}</span>
        <span className="text-black bg-red-400">{text.slice(length + curString.length, length + curString.length + k)}</span>
        <Text display="inline" color={textColor}>{text.slice(length + curString.length + k, text.length)}</Text>
      </Box>
      <Input
        variant="outline"
        autoFocus="autoFocus"
        fontSize="20px"
        value={input}
        px='.2rem'
        borderRadius='none'
        bgColor={input.length > pointer ? "red.300" : inputBgColor}
        color={input.length > pointer ? "#000" : placeholderColor}
        _placeholder={{color: placeholderColor}}
        placeholder="Type the above text"
        onChange={(i) => {
          if (!start) {
            setStart(true)
            const time = new Date();
            time.setSeconds(time.getSeconds() + 180);
            restart(time)
          }
          if (start === -1) return
          setInput(i.target.value);
        }}
      />
    </Box>
  );
}

export default Main;
