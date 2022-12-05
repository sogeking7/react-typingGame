
import { useState, useContext } from "react";
import { MyContext } from "../Context/Context";

import {
  Box,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { data } from "../data/data";
import { useEffect } from "react";

const text = data.text;
const textArr = text.split(" ");

function Main() {
  const backgroundColor = useColorModeValue("#f6fbff", "#3b3b3b");
  const inputBgColor = useColorModeValue("white", "primary_text");
  const textColor = useColorModeValue("black", "white");
  const placeholderColor = useColorModeValue('blackAlpha.500','white');
  
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [redList, setRedList] = useState([ ...Array(text.length).keys() ].map( i => i));
  
  
  const {start, setStart, restart, pause, cur, setCur, seconds, minutes, setWpm, setCar, setAccuracy} = useContext(MyContext);
  
  const curString = textArr[index] + " "
  const curIndex = length + input.length - 1;
  const k = (input.length > curString.length) ? input.length - curString.length : 0
  
  const e1 = curString.slice(pointer, (input.length>=curString.length ? input.length-k-1 : input.length-k));
  const e2 = curString.slice((input.length>=curString.length ? input.length-k-1 : input.length-k), (input.length>=curString.length ? input.length-k : input.length-k));
  const e3 = text.slice(length + curString.length, length + curString.length + k);

  if (input && text[curIndex] !== input.slice(-1) && pointer + 1 === input.length) {
    console.log(curIndex)
    const tr = redList.indexOf(curIndex);
    if (tr !== -1) {
      redList.splice(tr, 1);
      setRedList(redList);
      setAccuracy(redList.length - 1)
    }
  }
  

  if (input && input.slice(-1) === curString[pointer] && input.length === pointer + 1) {
    setPointer(prev => prev + 1)
    setCur(length + input.length)
    if (index === textArr.length - 2 && pointer === curString.length-2) {
      setInput('')
      setLength(prev => prev + curString.length)
      setCar(prev=>prev + (320 / (textArr.length-1)))
      setIndex(prev=>prev + 1)
      setStart(-1)
      const s = 180 - (60 * minutes + seconds);
      if (s) setWpm(Math.round(cur / 5 / (s / 60)));
      return pause()
    }
    if (input.slice(-1) === ' ') {
      setInput('')
      setPointer(0)
      setCar(prev=>prev + (320 / (textArr.length-1)))
      setLength(prev => prev + curString.length)
      setIndex(prev=>prev + 1)
    }
  } else if (input.length < pointer) { 
    
    setPointer(input.length)
  } 
  

  
  return (
    <Box borderWidth='thin' p='1rem' mb='3' borderRadius='xl' bgColor={backgroundColor} fontFamily='monospace'>
      <Box
        mb="2rem"
        lineHeight="1.7rem"
        fontSize="20px"
      >
        <span className="text-lime-500">{text.slice(0, length)}</span>
        
        <span className="text-lime-500 underline decor" >{curString.slice(0, pointer)}</span>
        <span className="text-black bg-red-400 underline">{e1}</span>
        <span className="text-black bg-red-400">{e2}</span>
        <Text display="inline" textDecoration="underline" color={textColor} >{curString.slice(input.length, curString.length - 1)}</Text>

        <span>{curString.slice(curString.length-1, curString.length)}</span>
        <span className="text-black bg-red-400">{e3}</span>
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
