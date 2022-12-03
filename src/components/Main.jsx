import { useState } from "react";

import { Container, Text, Input } from "@chakra-ui/react";

import { data } from "../data/data";

const text = data.text;
let textArr = text.split(" ");
for (let i = 0; i < textArr.length - 1; i++) {
  textArr[i] += " ";
}

function Main() {
  const [input, setInput] = useState("");
  const [pointer, setPointer] = useState(0);

  const curWord = textArr[pointer];
  let k = 0;
  for (; k < input.length; k++) if (input[k] !== curWord[k]) break;

  let prev = "";
  for (let i = 0; i < pointer; i++) {
    prev += textArr[i];
  }

  const p1 = curWord.slice(0, k);
  const p2 = curWord.slice(k, input.length);
  const p3 = curWord.slice(input.length, curWord.length);

  let en = input.length - curWord.length;
  let enext = "";

  let next = "";
  for (let i = pointer + 1; i < textArr.length; i++) {
    if (en > 0) {
      const d = textArr[i].length - en;
      if (d <= 0) {
        en -= textArr[i].length;
        enext += textArr[i];
      } else {
        enext += textArr[i].slice(0, en);
        next += textArr[i].slice(en, textArr[i].length);
        en = 0;
      }
      continue;
    }
    next += textArr[i];
  }

  if (!p2 && !p3) {
    setInput("");
    setPointer((prev) => prev + 1);
  }

  return (
    <Container maxW="800px" px="1rem">
      <Text display="inline-block" mb="2rem">
        <Text
          lineHeight="1.7rem"
          display="inline-block"
          fontSize="20px"
          color="green.400"
        >
          <span className="text-green-500">{prev}</span>

          <span className="text-green-500">{p1}</span>
          <span className="text-black bg-red-500">{p2}</span>
          <span className="text-black">{p3}</span>
          <span className="text-black bg-red-500">{enext}</span>
          <span className="text-black">{next}</span>
        </Text>
      </Text>

      <Input
        variant="outline"
        autoFocus="autoFocus"
        fontSize="20px"
        value={input}
        bgColor={p2 || enext ? "red.500" : ""}
        placeholder="Type the above text"
        onChange={(i) => {
          setInput(i.target.value);
        }}
      />
    </Container>
  );
}

export default Main;
