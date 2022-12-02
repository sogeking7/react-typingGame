import { useContext } from "react";
import {
  Box,
  useColorModeValue,
  Container,
  Text,
  Input,
} from "@chakra-ui/react";
import { MainContext } from "../Context/Context";

export default function Main() {
  const { input, setInput, race, red, setRace, index, restart, textList } =
    useContext(MainContext);
  
  const colorTxt = useColorModeValue("#000", "#fff");
  const dmColor = useColorModeValue("night_white", "night_white");
  const dmInput = useColorModeValue("black", "white");

  const bgCursor = useColorModeValue("second_black", "white");
  const dmBorder = useColorModeValue("blackAlpha.400", "whiteAlpha.400");
  return (
    <Container
      maxW="800px"
      borderColor={dmBorder}
      className="mx-auto"
      bgColor={useColorModeValue("white", "black")} //#f6fbff
      color={dmColor}
      py="1.5rem"
      px="1rem"
      borderRadius="lg"
    >
      <Text lineHeight="1.7rem" fontSize="20px" mb="2rem" position="relative">
        <p className="relative">
          {textList.map((word, id) => {
            if (id < index) {
              return (
                <Text
                  key={id}
                  display="inline"
                  position="relative"
                  bottom="0"
                  right="0"
                  color={colorTxt}
                >
                  {word}
                </Text>
              );
            } else if (id === index) {
              var k = -1;
              for (var i = 0; i < input.length; i++) {
                if (input[i] === word[i]) k = i;
                else break;
              }
              var p1 = word.slice(0, k + 1);
              var p2 = word.slice(k + 1, input.length);
              var p3 = word.slice(input.length, word.length);
              if (index !== textList.length - 2)
                p3 = word.slice(input.length, word.length - 1);
              var temp2 = "",
                flag = 0;
              for (let i = 0; i < p2.length; i++) {
                if (p2[i] !== " ") temp2 += p2[i];
                else flag = 1;
              }
              p2 = temp2;
              console.log(p2 + "$", p3 + "$");
              if (input.length === word.length)
                if (input === word) p1 = word.slice(0, k);
              return (
                <Text
                  key={id}
                  position="relative"
                  display="inline-block"
                  textDecorationThickness="2px"
                >
                  <Text
                    color={colorTxt}
                    display="inline"
                    textDecoration="underline"
                    textDecorationThickness="2px"
                  >
                    {p1}
                  </Text>
                  <Text
                    color="second_black"
                    bgColor="red.300"
                    display="inline-block"
                  >
                    <span className="underline">{p2}</span>
                    {!!flag && <pre className="inline-block"> </pre>}
                  </Text>
                  <Box
                    w=".1px"
                    h="23px"
                    position="absolute"
                    top="2px"
                    display="inline-block"
                    bgColor={bgCursor}
                  ></Box>
                  <pre className="inline-block underline">{p3}</pre>
                  {!flag && <pre className="inline-block"> </pre>}
                </Text>
              );
            } else {
              return <pre className="inline-block">{word}</pre>;
            }
          })}
        </p>
      </Text>

      <Input
        variant="outline"
        autoFocus="autoFocus"
        fontSize="1.2rem"
        bgColor={red ? "red.300" : ""}
        color={red ? "black" : ""}
        type="text"
        value={input}
        spellCheck="true"
        placeholder="Type the above text here when the race begins"
        onChange={(i) => {
          if (!race) {
            const time = new Date();
            setRace(1);
            time.setSeconds(time.getSeconds() + 180);
            restart(time);
          }
          setInput(i.target.value);
        }}
      />
    </Container>
  );
}
